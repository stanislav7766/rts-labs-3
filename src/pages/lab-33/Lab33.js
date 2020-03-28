import React, {useState} from 'react';
import {View} from 'react-native';
import RouteGroup from '../../components/route-group/RouteGroup';
import {Container, Title, Row} from './styles';
import Btn from '../../components/btn/Btn';
import Input from '../../components/input/Input';
import ResultModal from '../../components/modal/ResultModal';
import {geneticValid} from '../../utils/validation';
import {calcGenetic} from '../../utils/genetic/genetic';
import {numberize} from '../../utils/mathFunctions';

const Lab33 = ({navigator}) => {
  const [showModal, setShowModal] = useState(false);
  const [coeffs, setCoeffs] = useState({
    a: '',
    b: '',
    c: '',
    d: '',
    y: '',
  });

  const inputCall = (value, type) =>
    ({
      a: () => setCoeffs({...coeffs, a: value}),
      b: () => setCoeffs({...coeffs, b: value}),
      c: () => setCoeffs({...coeffs, c: value}),
      d: () => setCoeffs({...coeffs, d: value}),
      y: () => setCoeffs({...coeffs, y: value}),
    }[type]());

  const [result, setResult] = useState('');
  const [errors, setErrors] = useState({});

  const onPress = () => {
    const {isValid, errors} = geneticValid(coeffs);
    if (isValid) {
      setErrors({});
      const [res, errStr] = calcGenetic(numberize(coeffs));

      setResult(errStr === '' ? res : errStr);
      setShowModal(true);
    } else setErrors(errors);
  };

  const onChange = (value, type) => inputCall(value, type);

  return (
    <Container>
      <RouteGroup marginTop={50} navigator={navigator} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Title fontSize={45}>Лабораторна робота 3.3</Title>
        <Title marginTop={10}>ДОСЛІДЖЕННЯ ГЕНЕТИЧНОГО АЛГОРИТМУ</Title>
        <Title fontSize={15}>a*x1+b*x2+c*x3+d*x4=y</Title>
        <Row>
          <Input
            minWidth={120}
            error={errors.a}
            value={coeffs.a}
            onChangeText={text => onChange(text, 'a')}
            placeholder="Введіть a"
          />
          <Input
            minWidth={120}
            error={errors.b}
            value={coeffs.b}
            onChangeText={text => onChange(text, 'b')}
            placeholder="Введіть b"
          />
        </Row>
        <Row>
          <Input
            minWidth={120}
            error={errors.c}
            value={coeffs.c}
            onChangeText={text => onChange(text, 'c')}
            placeholder="Введіть c"
          />
          <Input
            minWidth={120}
            error={errors.d}
            value={coeffs.d}
            onChangeText={text => onChange(text, 'd')}
            placeholder="Введіть d"
          />
          <Input
            minWidth={120}
            error={errors.y}
            value={coeffs.y}
            onChangeText={text => onChange(text, 'y')}
            placeholder="Введіть y"
          />
        </Row>
        <Btn backgroundColor="#55b2d4" onPress={onPress} textColor="white" title="Обчислити" />
      </View>

      <View style={{opacity: 0}}>
        {showModal && <ResultModal showModal={showModal} setShowModal={setShowModal} text={`Результат:\n ${result}`} />}
      </View>
    </Container>
  );
};

export default Lab33;
