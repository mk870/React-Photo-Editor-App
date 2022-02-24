import styled from "styled-components";
export const ControllerStyles = styled.div`
  display:flex;
  flex-direction:column;
  text-align:center;
  background:#343635;
  padding: 15px;
  width:25%;
  color:white;
  border-top:2px solid silver;
  
  Button{
    margin-bottom:15px;
  }
  .btncontents{
    display: flex;
    justify-content:center;
    align-items:center;
  }
  .design-colors{
    display:flex;
    flex-direction: row;
    justify-content:space-around;
    
  }
  @media (max-width:920px){
    width: auto;
  }
`