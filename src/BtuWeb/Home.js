import * as React from 'react';
import { styled,} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import './Extra.css'
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";

let Home=()=>{
    return(
        <>
       <div className="Main">

       <Link to="/Branch"><Button variant="outlined" >Btch</Button></Link>
       <Link to="/Branch"><Button variant="outlined" >Mtech</Button></Link>
   
   
   
        <Link to="/Sem"><Button variant="outlined" >bca</Button></Link>
        <Link to="/Sem"><Button variant="outlined" >Mca</Button></Link>
        <Link to="/Sem"><Button variant="outlined" >Bba</Button></Link>
        <Link to="/Sem"><Button variant="outlined" >Ba</Button></Link>
        <Link to="/Sem"><Button variant="outlined" >Ma</Button></Link>
       </div>

            </>
    )
}

export default Home;
