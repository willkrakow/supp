import Styled from 'styled-components'


export const SizedImage = Styled.img`
flex: 0 1 ${props => props.width ? props.width : "350px"};
height: auto;
margin: 1rem auto 2rem;
display: block;
background-color: #d9d9d9;
`
