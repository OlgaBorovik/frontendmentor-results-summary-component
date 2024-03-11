import styled from "styled-components";

export const ResultWrapper = styled.div`
background: linear-gradient(180.00deg, rgb(77, 33, 201),rgba(37, 33, 201, 0) 100%,rgba(37, 33, 201, 0) 100%);
width: 140px;
height: 140px;
border-radius: 50%;
margin-left: auto;
margin-right: auto;
margin-bottom: 24px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: centes;
@media screen and (min-width: 768px) {
    width: 200px;
    height: 200px;
    margin-bottom: 28px;
}

`

export const ResultUpperText = styled.p`
color:var(--white);
font-size: 56px;
font-weight: 800;
line-height: 1.29;
letter-spacing: 0px;
text-align: center;
@media screen and (min-width: 768px) {
    font-size: 72px;
}
`

export const ResultDownText = styled.p`
color: var(--lightLavender);
font-size: 16px;
font-weight: 700;
line-height: 1.31;
letter-spacing: 0px;
text-align: center;
@media screen and (min-width: 768px) {
    font-size: 18px;
}
`