import styled from "styled-components";

export const ColorStyles = styled.div`
  display: flex;
  flex-direction:column;
  animation: fadeInAnimation ease 1s;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;

    @keyframes fadeInAnimation {
      0%{
        transform:translateY(20%);
        }
      100%{
        transform:translateY(0%);
        }
    }
  
  .color-list{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap:10px;
    margin-bottom:10px;
    border: 2px solid silver;
    padding:10px;
    .red{
      border-radius:100%;
      background-color: red;
      cursor:pointer;
      padding:7px;
      span{
        visibility:hidden;
      }
    }
    .blue{
      border-radius:100%;
      background-color: blue;
      cursor:pointer;
      padding:7px;
      span{
        visibility:hidden;
      }
    }
    .green{
      border-radius:100%;
      cursor:pointer;
      background-color: green;
      padding:7px;
      span{
        visibility:hidden;
      }
    }
    .yellow{
      border-radius:100%;
      cursor:pointer;
      background-color: yellow;
      padding:7px;
      span{
        visibility:hidden;
      }
      
    }
    .purple{
      border-radius:100%;
      cursor:pointer;
      background-color: purple;
      padding:7px;
      span{
        visibility:hidden;
      }
    }
    .grey{
      border-radius:100%;
      cursor:pointer;
      background-color: grey;
      padding:7px;
      span{
        visibility:hidden;
      }
    }
    .orange{
      border-radius:100%;
      cursor:pointer;
      background-color: orange;
      padding:7px;
      span{
        visibility:hidden;
      }
    }
    .lime{
      border-radius:100%;
      cursor:pointer;
      background-color: lime;
      padding:7px;
      span{
        visibility:hidden;
      }
    }
    .crimson{
      border-radius:100%;
      cursor:pointer;
      background-color: crimson;
      padding:7px;
      span{
        visibility:hidden;
      }
    }
  }
`