// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/baseApi";
import { authApi } from "./api/auth/authApi";



// Create the Redux store and add api slices
const store = configureStore({

  reducer:
  {
    [baseApi]
  }
})
 
export default store;
