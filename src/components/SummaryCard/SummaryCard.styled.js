import styled from "styled-components";

export const Card = styled.div`
display:flex;
height: 56px;
border-radius: 12px;
align-items: center;
padding-left: 16px;
padding-right: 16px;

`

export const CardIcon = styled.img`
margin-right: 12px;
`

export const CardText = styled.p`
font-weight: 500;
line-height: 1.31;
`

export const CardTotalScore = styled.p`
color: hsla(223,30%,27%, 0.5);
font-weight: 700;
line-height: 1.31;
margin-left: auto;
`

export const CardScore = styled.span`
color: var(--darkGreyBlue);
font-weight: 700;
line-height: 1.31;


`