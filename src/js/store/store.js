import {
    createStore,
    applyMiddleware
} from "redux";
import thunkMiddleware from "redux-thunk";
import {
    createLogger
} from "redux-logger";// affiche le log de notre store sur le navigateur 
import rootReducer from "./root";

const loggerMiddleware = createLogger();

export default preloadedState => {
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(
            thunkMiddleware, // middleware allows you to write action creators that return a function instead of an action
            loggerMiddleware,
        )
    );
};