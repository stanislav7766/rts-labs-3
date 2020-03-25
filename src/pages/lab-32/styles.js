import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
`;

export const Title = styled.Text`
  font-size: ${props => props.fontSize || '20px'};
  font-weight: 500;
  text-align: center;
  color: ${props => props.color || 'palevioletred'};
  margin-top: ${props => props.marginTop || '0px'};
`;

export const Error = styled.Text`
  text-align: center;
  color: red;
`;
export const Row = styled.View`
  flex-direction: row;
`;
