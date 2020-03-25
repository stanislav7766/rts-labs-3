import React from 'react';
import {Dimensions, Modal, Text, View} from 'react-native';
import {Container, ModalStyle, ModalTextStyled} from './styles';
import Btn from '../btn/Btn';

const ResultModal = ({text, showModal, setShowModal}) => {
  const {width, height} = Dimensions.get('window');

  return (
    <Container>
      <Modal transparent={true} animationType="fade" visible={showModal}>
        <Container backgroundColor="rgba(15, 15, 15, 0.425)">
          <ModalStyle width={width * 0.8} height={height * 0.15}>
            <ModalTextStyled>
              <Text>{text}</Text>
            </ModalTextStyled>

            <View style={{marginTop: 'auto'}}>
              <Btn
                backgroundColor="#55b2d4"
                onPress={() => setShowModal(false)}
                textColor="white"
                title="Повернутися"
              />
            </View>
          </ModalStyle>
        </Container>
      </Modal>
    </Container>
  );
};

export default ResultModal;
