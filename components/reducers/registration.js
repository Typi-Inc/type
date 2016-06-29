import { Observable } from 'rxjs'
import realm from '../db'

const SERVER_URL = 'http://localhost:4000/api'

const postData = (resource, data) => Observable.fromPromise(fetch(`${SERVER_URL}${resource}`, {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
}))

const registrationReducerFn = actions => Observable.merge(
  actions.register$
    .flatMap(data => console.log(data) || postData('/register', data))
    .map(response => state => console.log(response) || state),

  actions.verify$
    .flatMap(data => postData('/verify', data))
    .flatMap(response => Observable.fromPromise(response.json()))
    .map(data => state => {
      console.log('--------------------', data)
      realm.write(() => {
        realm.create('Me', {
          id: data.id,
          token: data.jwt
        })
      })
      return state
    })
  // actions.
  // actions.signup$
  //   .flatMap(data =>
  //     Observable.ajax.post(`${SERVER_URL}/users`, data))
)

export default registrationReducerFn
