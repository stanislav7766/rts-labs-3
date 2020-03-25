import React from 'react';
import {Container, Title} from './styles';
import RouteGroup from '../../components/route-group/RouteGroup';

const Landing = ({navigator}) => (
  <Container>
    <Title fontSize="45px">ST_TIKHON</Title>
    <Title marginTop="10px">
      Привіт, тут ви знайдете мої лабораторки
      {'\n'} з дисципліни: Вбудовані системи. Системи реального часу.
    </Title>
    <RouteGroup navigator={navigator} />
  </Container>
);

export default Landing;
