import Rx from 'rxjs';

export const homeSearch$ = new Rx.Subject();

export const homeSearch = (args) => homeSearch$.next(args);

export const appNav$ = new Rx.Subject();

export const appNav = (args) => appNav$.next(args);

export const plusButtonPress$ = new Rx.Subject();

export const plusButtonPress = (args) => plusButtonPress$.next(args);

export const cancelCreate$ = new Rx.Subject();

export const cancelCreate = (args) => cancelCreate$.next(args);

export const input$ = new Rx.Subject();

export const input = (args) => input$.next(args);

export const chatTitle$ = new Rx.Subject();

export const chatTitle = (args) => chatTitle$.next(args);




