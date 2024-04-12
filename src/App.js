import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
// import "primeflex/primeflex.css";
import "./index.css";
import ReactDOM from "react-dom";

import { BrowserRouter as Router } from 'react-router-dom';
import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { InputNumber } from "primereact/inputnumber";
import ProgressBarDemo from "./Component/progressbardemo";
import Dashboard from "./Component/dashboard";

import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { SplitButton } from 'primereact/splitbutton';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Ripple } from 'primereact/ripple';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Routers } from "./Component/Router";
import { Provider } from 'react-redux';
import store from "./store/store";

const App = () => {


  return (<div>
    <Router>
      <Provider store={store}>
        <Routers />
      </Provider>
    </Router>
  </div >)
}

export default App

