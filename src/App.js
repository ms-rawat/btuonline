import logo from './logo.svg';
import './App.css';
import {Button,Grid} from '@mui/material'
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Sem from  './BtuWeb/Sem'
import Home from './BtuWeb/Home';
import PLink from './BtuWeb/PLink';
import Branch from './BtuWeb/Branch'
let App;
export default App=()=>{
  return(
    <>
    
    <BrowserRouter>
    <Routes>

   
    <Route path='/map'  element={<h1>h1 tag</h1>}/>
    <Route path='/'  element={<Home/>}/>
    <Route path='/Sem' element={<Sem/>}/>
    <Route path='/PLink'  element={<PLink/>}/>
    <Route path='/Branch' element={<Branch/>}/>

    </Routes>
    </BrowserRouter>

  
    
    </>
  )
}
