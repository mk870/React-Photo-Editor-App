import styled from "styled-components";

export const FilterStyles = styled.div`
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
.filters{
  border:2px solid silver;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap:10px;
  margin-bottom:10px;
}
 
  
`