import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import App from './components/app/App';
import AboutMe from './components/AboutMe/AboutMe';
import Induction from './components/Induction/Induction';
import TDP from './components/TDP/TDP';
import Week1_3 from './components/TDP/Week1_3';
import Week4_6 from './components/TDP/Week4_6';
import reportWebVitals from './reportWebVitals';
import NA from './components/NA/NA';
import NAWeek1_3 from './components/NA/Week1_3';
import NAWeek4_6 from './components/NA/Week4_6';
import BigData from './components/BigData/BigData';
import BDHome from './components/BigData/BDHome';
import BDWeek1 from './components/BigData/BDWeek1';
import BDWeek3 from './components/BigData/BDWeek3';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="aboutme" element={<AboutMe />} />
                <Route path="induction" element={<Induction />} />
                <Route path="tdp" element={<TDP />} />
                <Route path="week1_3" element={<Week1_3 />} />
                <Route path="week4_6" element={<Week4_6 />} />
                <Route path="na" element={<NA />} />
                <Route path="naweek1_3" element={<NAWeek1_3 />} />
                <Route path="naweek4_6" element={<NAWeek4_6 />} />
                <Route path="bigdata" element={<BigData />} />
                <Route path="bdhome" element={<BDHome />} />
                <Route path="bdweek1" element={<BDWeek1 />} />
                <Route path="bdweek3" element={<BDWeek3 />} />
            </Routes>
        </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
