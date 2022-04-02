import { createGlobalStyle } from "styled-components";


export const Globalstyles = createGlobalStyle`
  
  body{
    
    font-family: 'Poppins',Verdana, Geneva, Tahoma, sans-serif;
    color:white;
    margin:0;
    top:0;
    
    bottom:0;
    padding:0;
    
  }
  
  @media (max-width:380px){
    body{
      display:flex;
      width:100vw;
    } 
    
  }
  
  `
