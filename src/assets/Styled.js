import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 2.5rem;
  margin: 10px auto;
  `;

export const Subtitle = styled.h2`
  font-size: 2.0rem;
  margin: 10px auto;
`;

export const Wrapper = styled.section`
  padding: 10px;
  text-align: center;
`;

export const Box = styled.div`  
  height: 300px;  
`;

export const Row = styled.div`
  height: 90px;
  text-align: center;
`;

export const Button = styled.button`
  background: #a2d4de;
  color: #ffffff;

  width: 90px;
  height: 90px;

  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 1px;
  
  margin: 5px;
  border: 1px solid  #a2d4de;
  border-radius: 50%;
  
  outline: none;
  
  &:hover,
  &:focus {
    border: 1px solid #9f77aa;
  }
  
  &:focus {
    background-color: #9f77aa;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.4rem;
  margin-bottom: 0;
`;
