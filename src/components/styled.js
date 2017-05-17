import styled from 'styled-components';


export const Title = styled.h1`
  font-family: Lato, Arial, sans-serif;
  font-size: 1.7em;
  text-align: center;
  color: #ffffff;
`;

export const Subtitle = styled.h2`
  font-family: Lato, Arial, sans-serif;
  font-size: 1.5em;
  text-align: center;
  color: #ffffff;
  `;

export const Wrapper = styled.section`
  padding: 4em;
  background: #67b8cb;
  text-align: center;
`;

export const Button = styled.button`
  background: #a2d4de;
  color: #ffffff;

  width: 150px;
  height: 150px;

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1px solid  #a2d4de;
  border-radius: 50%;
  
  outline: none;
  
  &:focus{
  background: #9f77aa;
  border: 1px solid #9f77aa;
  }
  
`;

export const Paragraph = styled.p`
  font-size: 1.3em;
  text-align: center;
  color: #ffffff;
`;
