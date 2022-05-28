import { combineReducers, createStore } from "redux";
import categoriesReducer from "./categoriesReducer";
import itemsReducer from "./itemsReducer";

const rootReducer = combineReducers({items: itemsReducer, category: categoriesReducer})

export const store = createStore(rootReducer)