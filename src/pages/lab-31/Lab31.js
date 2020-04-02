import React, {useState} from 'react';
import {View} from 'react-native';
import RouteGroup from '../../components/route-group/RouteGroup';
import {Container, Title, XYCenter} from './styles';
import Btn from '../../components/btn/Btn';
import Input from '../../components/input/Input';
import ResultModal from '../../components/modal/ResultModal';
import fermatsFactorizator from '../../utils/factorization';

import {factorizeValid} from '../../utils/validation';

const Lab31 = ({navigator}) => {
  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [factorized, setFactorized] = useState('');
  const [errors, setErrors] = useState({});

  const onPress = () => {
    const {isValid, errors} = factorizeValid(inputValue);

    if (isValid) {
      setErrors({});
      const [res, errStr] = fermatsFactorizator(Number(inputValue));
      errStr === '' ? setFactorized(`${inputValue} = ${res.x} * ${res.y}`) : setFactorized(errStr);
      setShowModal(true);
    } else setErrors(errors);
  };

  const onChangeText = text => setInputValue(text);
  return (
    <Container>
      <RouteGroup marginTop={50} navigator={navigator} />
      <XYCenter>
        <Title fontSize={45}>Лабораторна робота 3.1</Title>
        <Title marginTop={10}>
          РЕАЛІЗАЦІЯ ЗАДАЧІ РОЗКЛАДАННЯ ЧИСЛА НА ПРОСТІ
          {'\n'} МНОЖНИКИ (ФАКТОРИЗАЦІЯ ЧИСЛА)
        </Title>
        <Input
          error={errors.factorization}
          value={inputValue}
          onChangeText={onChangeText}
          placeholder="Введіть число"
        />
        <Btn backgroundColor="#55b2d4" onPress={onPress} textColor="white" title="Обчислити" />
      </XYCenter>
      <View style={{opacity: 0}}>
        {showModal && (
          <ResultModal showModal={showModal} setShowModal={setShowModal} text={`Результат:  ${factorized}`} />
        )}
      </View>
    </Container>
  );
};

export default Lab31;
