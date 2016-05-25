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
    picture:  {type: 'data', optional: true},
    organizationName: {type: 'string', optional: true},
    imageDataAvailable:'bool',
  }
};





let realm = new Realm({schema: [PhoneSchema, ContactSchema,EmailSchema]});
export default realm;