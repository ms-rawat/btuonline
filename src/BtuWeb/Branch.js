import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Button from '@mui/material/Button';


let Branch= ()=>{
    return (
        <>
        
       

        <Link to="/Sem" ><Button variant="outlined" >Cse</Button> </Link>
        <Link to="/Sem" ><Button variant="outlined" >It</Button> </Link>
        <Link to="/Sem" ><Button variant="outlined" >Me</Button> </Link>
        <Link to="/Sem" ><Button variant="outlined" >Civil</Button> </Link>
        <Link to="/Sem" ><Button variant="outlined" >Ee</Button> </Link>
        <Link to="/Sem" ><Button variant="outlined" >Eic</Button> </Link>
        <Link to="/Sem" ><Button variant="outlined" >Ec</Button> </Link>
        <Link to="/Sem" ><Button variant="outlined" >Aronotic Engi.</Button> </Link>
        </>
    )
}
export default Branch;