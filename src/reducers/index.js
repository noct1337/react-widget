import {combineReducers} from "redux";

import tabsReducer from "./tabsReducer";
import contentReducer from "./contentReducer";
import activeFontReducer from "./activeFont";

const rootReducer = combineReducers({
    tabs: tabsReducer,
    content: contentReducer,
    activeFont: activeFontReducer
})

export default rootReducer