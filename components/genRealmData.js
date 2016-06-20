import realm from './db'

const contacts = realm.objects('Contact')

realm.write(() => {
  realm.create('Me', {
    id: 6,
    token: 'eyJhbGciOiJFUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJVc2VyOjYiLCJleHAiOjQ2MjI2MDE4NDks' +
      'ImlhdCI6MTQ2NjQwOTg0OSwiaXNzIjoiVHlwaSIsImp0aSI6IjM0NjRlMWI2LTBhN2EtNGYxZC05NzY5LTE2YW' +
      'QxM2IwMDlkNSIsInBlbSI6e30sInN1YiI6IlVzZXI6NiIsInR5cCI6InRva2VuIn0.AEXmvnYzqs43qoK4Eus1' +
      'NoqzkmV8xw1yxtd7YASMJU6C3omIpQWKb6iid2i4Z2n7gDSa6hY0J4zFzya_hUkXFTFmARc2RvYbK-oBV8ihXm' +
      'DhxFuZCM14gooCV5LBkwo9JyaNZGMiWxX599VbTH0k1hzdD9VHzuyskSlZ_jKQ_OMcAJeF'
  })

  contacts[0].profilePics = [
    {
      primary: true,
      image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQc364GqLLnhfFllhF91hAGVCyJ-MO3JZuA6DN3uZtbQi4KWCgv'
    },
    {
      primary: false,
      image: 'http://a57.foxnews.com/media2.foxnews.com/BrightCove/694940094001/2016/05/09/876/493/694940094001_4885965796001_9cc88214-5962-41e4-a293-56e1f55dcc00.jpg?ve=1&tl=1'
    }
  ]
  contacts[1].profilePics = [
    {
      primary: true,
      image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTia5fkqWS9LJZGhdV43-iPg0Rok-CJyJCNvCm0LfGF6Guan5Eg'
    },
    {
      primary: false,
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ9XT4F1-aQurMC6zL7bzHjYeJDoiPU3a75J_FcddgbHxU33CVI8A'
    }
  ]
  realm.create('Chat', {
    id: 2,
    contacts: [contacts[0]],
    notificationCount: 1,
    messages: [
      {
        id: 1,
        body: 'common dont be sill you will get cold there',
        chatId: 2,
        createdAt: Date.now() - 5000,
        status: 'read',
        userId: 7
      },
      {
        id: 2,
        body: 'hi',
        chatId: 2,
        createdAt: Date.now() - 4000,
        status: 'read',
        userId: 6
      },
      {
        id: 3,
        body: `God sprinkles tiny but wonderful seeds of blessings on earth each day...
          and I just caught one that's so nice and true...it's YOU ! Love you and good night`,
        chatId: 2,
        createdAt: Date.now() - 3000,
        status: 'read',
        userId: 7
      },
      {
        id: 4,
        body: `I love all the stars in the sky, but they are nothing compared to the ones
          in your eyes! So I’ll think about you as I turn in for the night. Good Night!`,
        chatId: 2,
        createdAt: Date.now() - 2000,
        status: 'read',
        userId: 6
      }
    ]
  })
  realm.create('Chat', {
    id: 3,
    contacts: [contacts[1]],
    notificationCount: 2,
    messages: [
      {
        id: 5,
        body: 'What is going on in your life, havent checked you up for so long',
        chatId: 2,
        createdAt: Date.now() - 10000,
        status: 'read',
        userId: 6
      },
      {
        id: 6,
        body: 'nuh',
        chatId: 2,
        createdAt: Date.now() - 9000,
        status: 'read',
        userId: 8
      },
      {
        id: 7,
        body: 'of course',
        chatId: 2,
        createdAt: Date.now() - 8000,
        status: 'read',
        userId: 6
      },
      {
        id: 8,
        body: 'let s go to the mall my mom is cooking food',
        chatId: 2,
        createdAt: Date.now() - 7000,
        status: 'read',
        userId: 8
      }
    ]
  })
  realm.create('Chat', {
    id: 5,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqtoCVUpVbxMyTwuExep1uQP83F9IhpAMF9Opez7WXICXZMi12Ag',
    contacts: [contacts[0], contacts[1], contacts[2]],
    groupName: 'Typi Inc',
    isGroupChat: true,
    notificationCount: 4,
    messages: [
      {
        id: 9,
        body: `One day I wish my dream would come true
          And I’d wake up next to you. Till then Good Night!`,
        chatId: 2,
        createdAt: Date.now() - 20000,
        status: 'read',
        userId: 6
      },
      {
        id: 10,
        body: `Hey there
          just dropped by to say hello.
          Hope that you had a wonderful day! Good Night.`,
        chatId: 2,
        createdAt: Date.now() - 19000,
        status: 'read',
        userId: 7
      },
      {
        id: 11,
        body: 'of course',
        chatId: 2,
        createdAt: Date.now() - 18000,
        status: 'read',
        userId: 8
      },
      {
        id: 12,
        body: 'let s go to the mall my mom is cooking food',
        chatId: 2,
        createdAt: Date.now() - 17000,
        status: 'read',
        userId: 9
      }
    ]
  })
})
