import styled from "styled-components";
import image from '../Images/b9.jpg'

export const HomeStyles = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  .intro{
    display:flex;
    justify-content:center;
    background-image:url(${image});
    background-size: cover;
    padding-bottom:4em;
    padding-top:3em;
    .welcome{
      
      background: rgba(255, 255, 255, 0.4);
      backdrop-filter: blur(5px);
      border: 2px solid silver;
      border-radius:10px;
      padding:30px;
      width:80vw;
      text-align:center;
      h1{
        color:red;
      }
      
      p{
        font-size:20px;
        color:white;
      }
      span{
        font-size:15px;
        padding:10px;
        background-color: rgb(0,212,212);
        border-radius:10px;
        color:white;
        cursor:pointer;
        &:hover{
          background:#42f5ec;
        }
      }
    }
  }
  .about{
    background: black;
    display: flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    padding:20px;
    .info{
      text-align:center;
      margin-right:20px;
      .edited{
        border: 2px solid silver;
        
      }
    }
    .guarentees{
      display: flex;
      flex-direction:row;
      justify-content:space-between;
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(5px);
      border: 2px solid silver;
      border-radius:10px;
      padding:20px;
      margin:10px 0px 10px 0px;
      
      .head{
        margin: 10px 20px ;
      }
      .message{
        margin:10px 20px;
        .heading{
          font-weight:bold;
        }
      }
    }
  }
  @media (max-width:1100px){
    .intro{
      .welcome{
        width: 80vw;
      }
    }
    .about{
      display: flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      .wrapper{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
      }
      .info{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        margin-right:auto;
        .edited{
          height:27em;
          width: 30em;
        }
      }
    }
  }
  @media (max-width:600px){
    .about{
      .info{
        .edited{
          height:20em;
          width: 25em;
        }
      }
    }
  }
  @media (max-width:400px){
    .about{
      .info{
        .edited{
          height:12em;
          width: 15em;
        }
      }
      .guarentees{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        .message{
          text-align:center;
        }
      }
    }
  }
`