import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {
  // createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './route/router';
import { Provider } from 'react-redux'
import store from './redux/store';


createRoot(document.getElementById('root')).render(
  <StrictMode>
 
  <Provider store={store}>
  <RouterProvider router={router} />
  </Provider>
  </StrictMode>,
)
