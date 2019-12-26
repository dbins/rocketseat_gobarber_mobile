import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';

import api from '~/services/api';

import Background from '~/components/Background';
import Header from '~/components/Header';

import {
  Container,
  Title,
  List,
  Imagem,
  ImagemTopo,
  TextoBotao,
  ContainerBotoes,
  BotaoMeio,
  Conteudo,
} from './styles';

function Social({ isFocused, navigation }) {
  const [appointments, setAppointments] = useState([]);

  async function loadAppointments() {
    const response = await api.get('appointments');

    setAppointments(response.data);
  }

  useEffect(() => {
    if (isFocused) {
      loadAppointments();
    }
  }, [isFocused]);

  return (
    <Background>
      <Container>
        <Header title="Redes Sociais" navigation={navigation} />
        <Conteudo>
          <ContainerBotoes>
            <BotaoMeio onPress={() => {}}>
              <Imagem source={require('~/assets/facebook.png')} />
              <TextoBotao>Facebook </TextoBotao>
            </BotaoMeio>
            <BotaoMeio onPress={() => {}}>
              <Imagem source={require('~/assets/twitter.png')}/>
              <TextoBotao>Twitter</TextoBotao>
            </BotaoMeio>
          </ContainerBotoes>
		  <ContainerBotoes>
            <BotaoMeio onPress={() => {}}>
              <Imagem source={require('~/assets/youtube.png')} />
              <TextoBotao>Youtube</TextoBotao>
            </BotaoMeio>
            <BotaoMeio onPress={() => {}}>
              <Imagem source={require('~/assets/instagram.png')}/>
              <TextoBotao>Instagram</TextoBotao>
            </BotaoMeio>
          </ContainerBotoes>
        </Conteudo>
      </Container>
    </Background>
  );
}

Social.propTypes = {
  isFocused: PropTypes.bool,
  tintColor: PropTypes.string,
};

Social.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="home" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Social);
