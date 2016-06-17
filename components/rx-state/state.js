import { Observable } from 'rxjs'
import createState from './createState'
import socketReducerFn from '../reducers/socket'
import socketActions from '../actions/socket'

const socketReducer$ = socketReducerFn(socketActions)

const reducer$ = Observable.merge(
  socketReducer$
)

const initialState$ = Observable.of({})

export default createState(reducer$, initialState$)
