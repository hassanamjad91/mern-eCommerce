import thunk from 'react-thunk';
import { configureStore, combineReducers, applyMiddleware } from 'redux';

const reducer = combineReducers({});

const middleware = [thunk];

const initialState = {};

const store = configureStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;