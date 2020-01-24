import { combineReducers } from "redux";
import itemReducer from "./itemReducer";

export default combineReducers({
	item: itemReducer
	// could add more reducers here ex auth: authReducer
});
