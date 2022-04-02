import styled from "styled-components";
import image from '../Images/b9.jpg'


export const ServicesStyles = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background:#2b272b;
  .welcome{
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-image:url(${image});
    background-color: rgb(76, 74, 79);
    background-blend-mode: overlay;
    background-size: cover;
    left:0;
    right:0;
    width:100%;
    padding-bottom:40px;
    text-align:center;
    h2{
      color:red;
    }
    span{
      font-weight:bold;
      padding:5px;
      //color:orange;
    }
  }
  .Add{
    display: flex;
    color:black;
    flex-direction:row;
    justify-content: center;
    align-items:center;
    border: 2px solid silver;
    background: white;
    text-align:center;
    padding: 15px;
    width:80vw;
    border-radius:10px;
    margin:20px 40px 20px 40px;
    span{
      font-weight:600;
    }
    img{
      height:300px;
      width: 350px;
      margin-bottom:20px;
      border-radius:15px;
      border: 2px solid purple;
      margin-left:20px;
      margin-right:20px;
      }
    .instructions{
      display:flex;
      flex-direction:column;
      justify-content: center;
      align-items:center;
      
    }
  }
  @media (max-width:720px){
    .Add{
      display: flex;
      justify-content:center;
      flex-direction:column;
      img{
        margin-left:12px;
        margin-right:12px;
      }
    }
  }
  @media (max-width:380px){
    .Add{
      img{
        height:200px;
        width:250px;
        margin-left:10px;
        margin-right:10px;
      }
    }
  }
`