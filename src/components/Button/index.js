import styled from 'styled-components';
import { darken } from 'polished';

const Button = styled.button`
  background: var(--red);
  transition: background 0.2s;
  color: var(--white);
  border: 0;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: 700;

  &:hover {
    background: ${darken(0.03, '#eb423f')};
  }
`;

export default Button;
