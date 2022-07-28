import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import Home from './pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
)
