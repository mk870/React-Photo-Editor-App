import styled from "styled-components";

export const FooterStyles = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-around;
  flex-direction:row;
  background:black;
  bottom: 0;
  left:0;
  right:0;
  height:7em;
  h4{
    margin:10px;
  }
  span{
    margin:10px;
  }
  .socialmedia{
    display:flex;
    align-items:center;
    justify-content:space-around;
    flex-direction:row;
    > * {
      margin-right:20px;
    }
  }
  @media (max-width:480px){
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }
`