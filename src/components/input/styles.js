import styled from 'styled-components';

export const Error = styled.Text`
  color: red;
`;

export const TextInputStyled = styled.TextInput`
  flex: ${props => props.flex || 'none'};
  height: 60px;
  font-size: 20px;
  min-width: ${props => props.minWidth || '350'}px;
`;
