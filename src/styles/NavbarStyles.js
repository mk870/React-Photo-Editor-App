import styled from "styled-components";

export const NavbarStyles = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  background:black;
  color:white;
  left:0;
  top:0;
  margin:0;
  
  .logo{
    display: flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    margin:10px;
    p{
      margin-left:10px;
      font-size:25px;
      font-style:italic;
      color:#d020f7;
      font-weight:bold;
      span{
        color:rgb(0,212,212);
      }
    }
    img{
      height: 80px;
      width: 90px;
      border-radius:20px;
      margin-left:20px;
      border:2px solid silver;
    }
  }
  .pages{
    display: flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    span{
      font-size:18px;
      margin:10px 20px 10px 20px;
      cursor:pointer;
      padding:10px;
      display: flex;
      align-items:center;
      justify-content:center;
      border-radius:10px;
      text-align:center;
      &:hover{
        background-color: #787878;
    }
    }
  }
  @media (max-width:720px){
    display: flex;
    flex-direction:column;
  }
  @media (max-width:350px){
    .pages{
    display: flex;
    flex-direction:row;
    justify-content:center;
    span{
      margin:15px;
      font-size:17px;
      padding:5px;
    }
    }
    
  }
`