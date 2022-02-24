import styled from "styled-components";

export const EmojiStyles = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  border:2px solid silver;
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
  .emojis{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap:10px;
    margin-bottom:10px;
  }
  .emoji{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    img{
      height: 40px;
      width: 40px;
      
    }
  }
`