import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';

import api from '~/services/api';

import Background from '~/components/Background';
import Header from '~/components/Header';

import { Container, Title, List, Imagem, Texto, Box,  Conteudo } from './styles';

const data = [
  {id: '1', texto: 'No próximo mês vamos ter novos horários de atendimento,  em breve mais informações', imagem: require('~/assets/aviso1.png') },
  {id: '2', texto: 'Não basta ter barba, tem que cuidar! Siga nossas dicas no Instagram', imagem: require('~/assets/aviso2.png')},
  {id: '3', texto: 'Siga nossas redes sociais e fique por dentro de como cultivar o seu bigode!', imagem: require('~/assets/aviso3.png')},
  {id: '4', texto: 'Corre para o nosso Facebook e veja 10 dicas de cortes de cabelo que estão na moda', imagem: require('~/assets/aviso4.png') },
  {id: '5', texto: 'Agora a GoBarber tem churrasco as sextas e sábado, não deixe de comparecer para confraternizar com os amigos', imagem: require('~/assets/aviso5.png')}
];

function Notifications({ isFocused, navigation }) {
  
  function renderGridItem( item ){
    return (
      <Box key={item.id}>
          <Imagem source={item.imagem}/>
          <Texto>{item.texto}</Texto>
        </Box>
    );
  }

  return (
    <Background>
      <Container>
		<Conteudo>
        <Header title="Notificações" navigation={navigation} />
         <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>renderGridItem(item)}
        />
		</Conteudo>
      </Container>
    </Background>
  );
}

Notifications.propTypes = {
  isFocused: PropTypes.bool,
  tintColor: PropTypes.string,
};

Notifications.navigationOptions = {
  tabBarLabel: 'Notificações',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="Home" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Notifications);
