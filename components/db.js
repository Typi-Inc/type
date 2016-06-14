const Realm = require('realm');
const PhoneSchema = {
  name: 'Phone',
  properties: {
    id:  'string',
    number: 'string',
    countryCode: 'string',
  }
};
const EmailSchema = {
  name: 'Email',
  properties: {
    id:  'string',
    value: 'string',
  }
};
const ContactSchema = {
  name: 'Contact',
  properties: {
    givenName: 'string',
    fullName: 'string',
    id: 'string',
    phones: {type: 'list', objectType: 'Phone'},
    emailAddresses: {type: 'list', objectType: 'Email'},
    picture:  {type: 'string', optional: true},
    organizationName: {type: 'string', optional: true},
    imageDataAvailable:'bool',
  }
};
const MessageSchema={
  name: 'Message',
  properties: {
    id:'string',
    authorId:'string',
    chatId:'string',
    text:'string',
    createdAt:'date',
    deadlineDate:{type: 'date', optional: true},
    showTrueDate:'bool',
    deliveryStatus:'string',
    
  }
}

let realm = new Realm({schema: [PhoneSchema, ContactSchema,EmailSchema]});
export default realm;

