import React, {useState} from 'react';
import {View} from 'react-native';
import RouteGroup from '../../components/route-group/RouteGroup';
import {Container, Title, Row, Error} from './styles';
import Btn from '../../components/btn/Btn';
import Input from '../../components/input/Input';
import ResultModal from '../../components/modal/ResultModal';
import PickerSelect from '../../components/picker/PickerSelect';
import {perceptronValid} from '../../utils/validation';
import calcPerceptron from '../../utils/perceptron';
import {options} from './papyrus';

const Lab32 = ({navigator}) => {
  const [showModal, setShowModal] = useState(false);
  const [p1, setP1] = useState({
    x1: '',
    y1: '',
  });
  const [p2, setP2] = useState({
    x2: '',
    y2: '',
  });
  const [pickers, setPickers] = useState({
    sigma: '',
    time: '',
    iters: '',
  });
  const [threshold, setThreshold] = useState('');

  const inputCall = (value, type) =>
    ({
      x1: () => setP1({...p1, x1: value}),
      y1: () => setP1({...p1, y1: value}),
      x2: () => setP2({...p2, x2: value}),
      y2: () => setP2({...p2, y2: value}),
      sigma: () => setPickers({...pickers, sigma: value}),
      time: () => setPickers({...pickers, time: value}),
      iters: () => setPickers({...pickers, iters: value}),
      threshold: () => setThreshold(value),
    }[type]());

  const [result, setResult] = useState('');
  const [errors, setErrors] = useState({});

  const onPress = () => {
    const data = {...pickers, ...p1, ...p2, threshold};
    const {isValid, errors} = perceptronValid(data);
    if (isValid) {
      setErrors({});
      const [w, errStr] = calcPerceptron(data);

      setResult(errStr === '' ? `${w.w1},${w.w2}` : errStr);
      setShowModal(true);
    } else setErrors(errors);
  };

  const onChange = (value, type) => inputCall(value, type);

  return (
    <Container>
      <RouteGroup marginTop={50} navigator={navigator} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Title fontSize={45}>Лабораторна робота 3.2</Title>
        <Title marginTop={10}>ДОСЛІДЖЕННЯ НЕЙРОННИХ МЕРЕЖ. МОДЕЛЬ PERCEPTRON</Title>
        <Title marginTop={20} color="black">{`Перша координата < P `}</Title>
        <Row>
          <Input
            minWidth={120}
            error={errors.x1}
            value={p1.x1}
            onChangeText={text => onChange(text, 'x1')}
            placeholder="Введіть x1"
          />
          <Input
            minWidth={120}
            error={errors.y1}
            value={p1.y1}
            onChangeText={text => onChange(text, 'y1')}
            placeholder="Введіть y1"
          />
        </Row>
        <Title marginTop={10} color="black">{`Друга координата > P `}</Title>

        <Row>
          <Input
            minWidth={120}
            error={errors.x2}
            value={p2.x2}
            onChangeText={text => onChange(text, 'x2')}
            placeholder="Введіть x2"
          />
          <Input
            minWidth={120}
            error={errors.y2}
            value={p2.y2}
            onChangeText={text => onChange(text, 'y2')}
            placeholder="Введіть y2"
          />
          <Input
            minWidth={120}
            error={errors.threshold}
            value={threshold}
            onChangeText={text => onChange(text, 'threshold')}
            placeholder="Введіть P"
          />
        </Row>
        <View
          style={{
            marginBottom: 20,
          }}
        >
          <Row>
            <PickerSelect
              onValueChange={text => onChange(text, 'sigma')}
              selectedValue={pickers.sigma}
              options={options.sigma}
            />
            <PickerSelect
              onValueChange={text => onChange(text, 'time')}
              selectedValue={pickers.time}
              options={options.time}
            />
            <PickerSelect
              onValueChange={text => onChange(text, 'iters')}
              selectedValue={pickers.iters}
              options={options.iters}
            />
          </Row>
          {errors.pickers && <Error> {errors.pickers}</Error>}
        </View>
        <Btn backgroundColor="#55b2d4" onPress={onPress} textColor="white" title="Обчислити" />
      </View>

      <View style={{opacity: 0}}>
        {showModal && (
          <ResultModal showModal={showModal} setShowModal={setShowModal} text={`Результат(w1,w2):\n ${result}`} />
        )}
      </View>
    </Container>
  );
};

export default Lab32;
