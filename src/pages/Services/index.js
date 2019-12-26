import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Modal,
  Image,
  Button,
  FlatList,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';

import api from '~/services/api';

import Background from '~/components/Background';
import Header from '~/components/Header';

import { Container, BotaoMeio, Imagem, TextoBotao, BotaoAgendar, TextoBotaoAgendar } from './styles';

const data = [
  { id: 1, nome: "Barba", duracao: "1 hora", valor: "30", imagem: require('~/assets/barba.png') },
  { id: 2, nome: "Corte", duracao: "1 hora", valor: "50",  imagem: require('~/assets/corte.png') },
  { id: 3, nome: "Máquina", duracao: "1 hora", valor: "30",  imagem: require('~/assets/maquina.png') },
  { id: 4, nome: "Sobrancelha", duracao: "1 hora", valor: "30",  imagem: require('~/assets/sobrancelha.png') },
  { id: 5, nome: "Escova", duracao: "1 hora", valor: "50",  imagem: require('~/assets/escova-progressiva.png') },
  { id: 6, nome: "Acabamento", duracao: "1 hora", valor: "30",  imagem: require('~/assets/acabamentos.png') },
  { id: 7, nome: "Pigmentação", duracao: "1 hora", valor: "30",  imagem: require('~/assets/pigmentacao.png') },
  { id: 8, nome: "Relaxamento", duracao: "1 hora", valor: "50",  imagem: require('~/assets/relaxamento.png') }
]


function Services({ isFocused, navigation }) {
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

  function renderGridItem( item ){
    return (
      <BotaoMeio>
      <Imagem source={item.imagem}/>
      <TextoBotao>{item.nome}</TextoBotao>
	  <TextoBotao>{item.duracao} - R$ {item.valor}</TextoBotao>
	  <BotaoAgendar onPress={() => navigation.navigate('New')} >
		<TextoBotaoAgendar>Agendar</TextoBotaoAgendar>
      </BotaoAgendar> 		 
    </BotaoMeio>
    );
	}


  return (
    <Background>
      <Container>
        <Header title="Serviços" navigation={navigation}/>
		  <FlatList
          data={data}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>renderGridItem(item)}
        />


      </Container>
    </Background>
  );
}

Services.propTypes = {
  isFocused: PropTypes.bool,
  tintColor: PropTypes.string,
};

Services.navigationOptions = {
  tabBarLabel: 'Serviços',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="Home" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Services);
