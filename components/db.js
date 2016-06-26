const Realm = require('realm')
const PhoneSchema = {
  name: 'Phone',
  primaryKey: 'id',
  properties: {
    id: 'string',
    number: 'string',
    countryCode: 'string'
  }
}
const EmailSchema = {
  name: 'Email',
  primaryKey: 'id',
  properties: {
    id: 'string',
    value: 'string'
  }
}
const ProfilePicSchema = {
  name: 'ProfilePic',
  properties: {
    primary: { type: 'bool', default: 'false' },
    image: 'string'
  }
}
const ContactSchema = {
  name: 'Contact',
  primaryKey: 'id',
  properties: {
    id: 'string',
    profilePics: { type: 'list', objectType: 'ProfilePic' },
    givenName: 'string',
    fullName: 'string',
    phones: { type: 'list', objectType: 'Phone' },
    emailAddresses: { type: 'list', objectType: 'Email' },
    picture: { type: 'string', optional: true },
    organizationName: { type: 'string', optional: true },
    imageDataAvailable: 'bool'
  }
}
const MessageSchema = {
  name: 'Message',
  primaryKey: 'id',
  properties: {
    id: { type: 'int', optional: true },
    body: 'string',
    chatId: 'int',
    createdAt: { type: 'int', indexed: true },
    publishAt: { type: 'int', optional: true },
    status: { type: 'string', optional: true },
    userId: 'int'
  }
}
const ChatSchema = {
  name: 'Chat',
  primaryKey: 'id',
  properties: {
    id: 'int',
    image: { type: 'string', optional: true },
    contacts: { type: 'list', objectType: 'Contact' },
    isGroupChat: { type: 'bool', default: false },
    groupName: { type: 'string', optional: true },
    messages: { type: 'list', objectType: 'Message' }
  }
}

const MeSchema = {
  name: 'Me',
  primaryKey: 'id',
  properties: {
    id: 'int',
    token: 'string'
  }
}

export default new Realm({
  schema: [
    PhoneSchema,
    ContactSchema,
    EmailSchema,
    ProfilePicSchema,
    MessageSchema,
    ChatSchema,
    MeSchema
  ]
  // schemaVersion: 2,
  // migration: function(oldRealm, newRealm) {
  //   // only apply this change if upgrading to schemaVersion 1
  //   if (oldRealm.schemaVersion < 1) {
  //     var oldObjects = oldRealm.objects('Phone');
  //     var newObjects = newRealm.objects('Phone');
  //
  //     // loop through all objects and set the name property in the new schema
  //     for (var i = 0; i < oldObjects.length; i++) {
  //       newObjects[i].id = oldObjects[i].id
  //     }
  //   }
  // }
})
