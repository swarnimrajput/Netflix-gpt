import {configureStore} from "@reduxjs/toolkit"
import UserReducer from "./Userslice"
import movieReducer from "./Movieslice"
import gptReducer from "./gptslice"
import configReducer from "./configslice"
const appstore=configureStore({
    reducer:{
        user:UserReducer,
        movies:movieReducer,
        gpt:gptReducer,
        config:configReducer,
    },
});
export default appstore;