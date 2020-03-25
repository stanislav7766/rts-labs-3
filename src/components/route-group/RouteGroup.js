import React from 'react';
import {ButtonGroup} from './styles';
import Btn from '../btn/Btn';

const PINK = '#f194ff';

const RouteGroup = ({marginTop, navigator}) => {
  const onPressNavigator = route => navigator.push(route);

  return (
    <ButtonGroup marginTop={marginTop}>
      <Btn flex={1} backgroundColor={PINK} onPress={() => onPressNavigator('Landing')} textColor="white" title="Home" />
      <Btn flex={1} backgroundColor={PINK} onPress={() => onPressNavigator('Lab31')} textColor="white" title="Lab31" />
      <Btn flex={1} backgroundColor={PINK} onPress={() => onPressNavigator('Lab32')} textColor="white" title="Lab32" />
      <Btn flex={1} backgroundColor={PINK} onPress={() => onPressNavigator('Lab31')} textColor="white" title="Lab33" />
    </ButtonGroup>
  );
};

export default RouteGroup;
