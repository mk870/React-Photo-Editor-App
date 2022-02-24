import styled from "styled-components";

export const ProductStyles = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width: 75%;
  
  
  .image-box{
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
    
    canvas{
      margin-top:15px;
      
    }
    .canvascontrols{
      margin:10px;
    }
    .background{
    //position:absolute;
    //width: 600px;
    //height:600px;
    background: ${props=>props.color};
    mix-blend-mode:hue;
  }
  }
  .btncontents{
    display:flex;
    justify-content:center;
    align-items:center;
  }
  @media (max-width:920px){
    width:auto;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    
    .image-box{
      display: flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      
    }
  }
  
`