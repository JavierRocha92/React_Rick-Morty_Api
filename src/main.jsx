
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from './components/Home.jsx'
import {Episodes} from './components/Episodes.jsx'
import {Actors} from './components/Actors.jsx'
import {Layout} from './components/Layout.jsx'
ReactDOM.createRoot(document.getElementById("root")).render(

    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}></Route>
            <Route path='actors' element={<Actors/>}></Route>
            <Route path='episodes' element={<Episodes/>}></Route>
        </Route>
    </Routes>
    </BrowserRouter>

    );
