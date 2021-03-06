import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppQuiz from './AppQuiz';
import AppButton4_1 from './AppButton4_1';
import AppCard4_2 from './AppCard4_2';
import reportWebVitals from './reportWebVitals';
import AppColor8_1 from './AppColor8_1';
import AppButton6_1_4_1_refractored from "./components/Ex-6.1/Refractored_4_1";
import AppEx_7_1 from "./components/AppEx_7_1"
import BoxButton from "./components/AppEx_7_2"
import Range7_3 from "./components/Range7_3"
import AppEx18_1 from "./components/29.5.22/Ex18.1/AppEx18_1";
import AppEx19_1 from "./components/30.5.22/Ex19.1/AppEx19_1";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <AppQuiz/> */}
    {/* <AppButton4_1/> */}
    {/* <AppCard4_2/> */}
    {/* <AppButton6_1_4_1_refractored/> */}
    {/* <AppColor8_1/> */}
    {/* <AppEx_7_1/> */}
    {/* <BoxButton/> */}
    {/* <BoxButton/> */}
    {/* <Range7_3/> */}
    {/* <AppEx18_1/> */}
  <AppEx19_1/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
