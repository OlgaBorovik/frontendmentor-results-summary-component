import styled from 'styled-components'

export const Results = styled.div`
border-radius: 0 0 32px 32px;
background: linear-gradient(180.00deg, rgb(119, 85, 255),rgb(105, 67, 255) 0.01%,rgb(47, 44, 233) 100%);
padding: 24px 57px 40px 58px;
@media screen and (min-width: 768px) {
    width: 50%;
    padding: 38px 54px 54px 54px;
    border-radius: 32px;
}


`

export const ResultsCongratulations = styled.p`
color: var(--white);
font-size: 24px;
font-weight: 700;
line-height: 1.29;
letter-spacing: 0px;
text-align: center;
margin-bottom: 8px;
@media screen and (min-width: 768px) {
   font-size: 32px;
    margin-bottom: 14px;
}
`

export const ResultsText = styled.p`
color: var(--lightLavender);
font-size: 16px;
font-weight: 500;
line-height: 1.31;
letter-spacing: 0px;
text-align: center;
@media screen and (min-width: 768px) {
   font-size: 18px;
    
}
`