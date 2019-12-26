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

function Home({ isFocused, navigation }) {
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
        <Header title="GoBarber" navigation={navigation} />
        <Conteudo>
          <ImagemTopo  source={require('~/assets/cover.png')}/>
          <ContainerBotoes>
            <BotaoMeio onPress={() => navigation.navigate('Barber')}>
              <Imagem source={require('~/assets/barber.png')} />
              <TextoBotao>A Barbearia </TextoBotao>
            </BotaoMeio>
            <BotaoMeio onPress={() => navigation.navigate('Services')}>
              <Imagem source={require('~/assets/scissors.png')}/>
              <TextoBotao>Serviços</TextoBotao>
            </BotaoMeio>
          </ContainerBotoes>
		  <ContainerBotoes>
            <BotaoMeio onPress={() => navigation.navigate('Pictures')}>
              <Imagem source={require('~/assets/picture.png')} />
              <TextoBotao>Fotos</TextoBotao>
            </BotaoMeio>
            <BotaoMeio onPress={() => navigation.navigate('Map')}>
              <Imagem source={require('~/assets/maps-and-flags.png')}/>
              <TextoBotao>Localização</TextoBotao>
            </BotaoMeio>
          </ContainerBotoes>
		  <ContainerBotoes>
            <BotaoMeio onPress={() => navigation.navigate('Team')}>
              <Imagem source={require('~/assets/team.png')} />
              <TextoBotao>Equipe</TextoBotao>
            </BotaoMeio>
            <BotaoMeio onPress={() => navigation.navigate('Social')}>
              <Imagem source={require('~/assets/social.png')}/>
              <TextoBotao>Redes Sociais</TextoBotao>
            </BotaoMeio>
          </ContainerBotoes>
          <ContainerBotoes>
            <BotaoMeio onPress={() => navigation.navigate('Notifications')}>
              <Imagem source={require('~/assets/email.png')}/>
              <TextoBotao>Avisos</TextoBotao>
            </BotaoMeio>
            <BotaoMeio onPress={() => navigation.navigate('New')}>
              <Imagem source={require('~/assets/add.png')}/>
              <TextoBotao>Agendar</TextoBotao>
            </BotaoMeio>
          </ContainerBotoes>
          <ContainerBotoes>
            <BotaoMeio onPress={() => navigation.navigate('Dashboard')}>
              <Imagem source={require('~/assets/calendar.png')}/>
              <TextoBotao>Meus Agendamentos</TextoBotao>
            </BotaoMeio>
            <BotaoMeio onPress={() => navigation.navigate('Help')}>
              <Imagem source={require('~/assets/info.png')}/>
              <TextoBotao>Ajuda</TextoBotao>
            </BotaoMeio>
          </ContainerBotoes>
        </Conteudo>
      </Container>
    </Background>
  );
}

Home.propTypes = {
  isFocused: PropTypes.bool,
  tintColor: PropTypes.string,
};

Home.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="home" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Home);
