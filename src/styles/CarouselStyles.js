import styled from "styled-components";

export const CarouselStyles = styled.div`
  background:black;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  padding-bottom:20px;
  width:100%;
  img{
    height:400px;
    width:400px;
    border:2px solid silver;
    border-radius:5px;
  }
  .slider{
    display:flex;
    align-items:center;
    justify-content:center;
  }
  @media (max-width:1700px){
    img{
     height:300px;
     width:300px;
    }
  }
  @media (max-width:1320px){
    img{
     height:200px;
     width:200px;
    }
  }
  @media (max-width:860px){
    img{
     height:180px;
     width:180px;
    }
  }
  @media (max-width:800px){
    img{
     height:200px;
     width:200px;
    }
  }
  @media (max-width:680px){
    img{
     height:160px;
     width:160px;
    }
  }
  @media (max-width:510px){
    img{
     height:200px;
     width:200px;
    }
  }
  @media (max-width:420px){
    img{
     height:150px;
     width:150px;
    }
  }
  @media (max-width:380px){
    width:112vw;
  }
`