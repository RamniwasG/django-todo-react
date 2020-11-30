import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
// import createSagaMiddleware from 'redux-saga';
import { reducer as reduxFormReducer } from 'redux-form';
import { appReducer } from './reducers';
import { connectRouter, routerMiddleware } from 'connected-react-router';
// import rootSaga from './saga/';

const createBrowserHistory = require('history').createBrowserHistory;
export const history = createBrowserHistory();

const logger = (store: any) => (next: any) => (action: any) => {
	let result = next(action)
	console.log('next state', store.getState().router.location)
	return result
}

const rootReducer = (history: any) => combineReducers({
	router: connectRouter(history),
	form: reduxFormReducer,
	...appReducer
})

// const isDev = process.env.NODE_ENV === 'development'
const composeEnhancers = compose // (isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
// const sagaMiddleware = createSagaMiddleware()

const store = createStore(
	rootReducer(history),
	composeEnhancers(
		applyMiddleware(
			routerMiddleware(history),
			// sagaMiddleware,
			logger
		)
	)
)

// sagaMiddleware.run(rootSaga);

export default store;
