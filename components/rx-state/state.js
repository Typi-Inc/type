import { Observable } from 'rxjs'
import createState from './createState'
import socketReducerFn from '../reducers/socket'
import registrationReducerFn from '../reducers/registration'
import socketActions from '../actions/socket'
import registrationActions from '../actions/registration'

const socketReducer$ = socketReducerFn(socketActions)
const registrationReducer$ = registrationReducerFn(registrationActions)

const reducer$ = Observable.merge(
  socketReducer$,
  registrationReducer$
)

const initialState$ = Observable.of({})

export default createState(reducer$, initialState$)
