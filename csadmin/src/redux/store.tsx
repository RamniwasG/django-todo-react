import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer as reduxFormReducer } from 'redux-form';
import { appReducer } from './reducers';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import rootSaga from './saga/';

const createBrowserHistory = require('history').createBrowserHistory;
export const history = createBrowserHistory();

const logger = (store: any) => (next: any) => (action: any) => {
	let result = next(action)
	console.log('next state', store.getState().router)
	return result
}

const rootReducer = () => combineReducers({
	...appReducer,
	form: reduxFormReducer,
	router: connectRouter(history)
})

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = composeWithDevTools(
	applyMiddleware(
		routerMiddleware(history),
		sagaMiddleware,
		logger
	)
)
const store = createStore(
	rootReducer,
	composeEnhancers
)

sagaMiddleware.run(rootSaga);

export default store;
