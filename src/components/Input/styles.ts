import styled from 'styled-components';

interface StyledProps {
    inputColor:string;
}

export const StyledInput = styled.input<StyledProps>`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
  @media (min-width: 375px) {
    width: 200px;
    height: 50px;
  }
`;