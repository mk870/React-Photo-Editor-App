import styled from "styled-components";
import image from '../Images/b9.jpg'

export const PhotoStyles = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background-image:url(${image});
  background-size: cover;
  padding:25px 0px 25px 0px;
  .picture{
    display: flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
  }
  Button{
    margin-right:15px;
  }
  .insideBtn{
    display: flex;
    justify-content:center;
    align-items:center;
  }
  .upload{
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin-left:15px;
    color:white;
    input{
      padding:5px;
    }
  }
  @media (max-width:500px){
    .picture{
      display: flex;
      flex-direction:column;
      justify-content:center;
      
    }
    .upload{
      margin-left:150px;
    }
  }
`