import styled from "styled-components";

export const ContainerStyles = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:center;
  color:black;
  
  .editor{
    padding:0px 15px 0px 0px;
    display: flex;
    flex-direction:row;
    justify-content: space-between;
  }
  @media (max-width:920px){
    .editor{
      display: flex;
      flex-direction:column-reverse;
      justify-content:center;
      padding: 0px;
    }
  }
  @media (max-width:400px){
    overflow-x: hidden;
  }
`