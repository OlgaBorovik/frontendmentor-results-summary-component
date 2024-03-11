import styled from "styled-components";

export const Comp = styled.div`
 background-color: var(--white);

 @media screen and (min-width: 768px) {
    width: 100%;
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 32px;
box-shadow: 0px 30px 60px 0px rgba(61, 108, 236, 0.15);
overflow:hidden;   
  }
`