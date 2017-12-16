import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';
import {autoRehydrate} from 'redux-persist'

export default function configureStore(initialState){
	 let store = createStore(
		 rootReducer,
		 initialState,
		 compose(
		   applyMiddleware(thunk),
		   window.devToolsExtension ? window.devToolsExtension() : f => f
		 )
		);

	return store;
}