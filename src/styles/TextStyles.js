import styled from "styled-components";

export const TextStyles = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items: center;
  border:2px solid silver;
  margin-bottom:10px;
  animation: fadeInAnimation ease 1s;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;

    @keyframes fadeInAnimation {
      0%{
        transform:translateY(15%);
        }
      100%{
        transform:translateY(0%);
        }
    }
  .text{
    width: 90%;
    height:20px;
    border-radius:10px;
    outline: none;
    text-align:center;
    font-size:1.2em;
    
  }
  input{
    margin-bottom:10px;
  }
  select{
    width: 90%;
    height:25px;
    border-radius:10px;
    outline: none;
    text-align:center;
    font-size:1.1em;
    margin-bottom:10px;
  }
  .textcolors{
    margin-bottom:10px;
  }
`