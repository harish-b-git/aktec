import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import reportWebVitals from './reportWebVitals';
// import App from './App';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'popper.js/dist/popper.min.js';

import ClientComponent from './Components/Client';
import FaqComponent from './Components/Acccordion/AccordionComponent';
import ListDisplay from './Components/Projects/ProjectsList';
import { CoursesDisplay }from './Components/Projects/ProjectsDisplay';
import CardSlider from './Components/CardSlider';
import Cards from './Components/Cards';
import { Layout } from './Components/Layout/Layout';
import MyCard from './Card';
import ItSupport from './Components/ITSupport/itSupport';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
