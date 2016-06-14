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

export const tube$ = new Rx.Subject();

export const tube = (args) => tube$.next(args);

export const sideMenu$ = new Rx.Subject();

export const sideMenu = (args) => sideMenu$.next(args);

export const calendar$ = new Rx.Subject();

export const calendar = (args) => calendar$.next(args);

export const registerNav$ = new Rx.Subject();

export const registerNav = (args) => registerNav$.next(args);

export const chooseCountry$ = new Rx.Subject();

export const chooseCountry = (args) => chooseCountry$.next(args);

export const next$ = new Rx.Subject();

export const next = (args) => next$.next(args);


