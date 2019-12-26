import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';

import api from '~/services/api';

import Background from '~/components/Background';
import Header from '~/components/Header';
import Accordion from '~/components/Accordion'

import { Container, Title, List, ViewAccordion } from './styles';
const menu  = [
  {
	id: '0',
	title: 'Posso agendar no mesmo dia?',
    data: 'Você pode marcar com até 2 horas de antecedência',
  },
  {
	id: '1',
    title: 'Existe custo para cancelar algum agendamento?',
    data: 'Não existe custo para cancelar o agendamento'
  },
  {
   id: '2',
   title: 'Posso fazer mais de 1 agendamento por dia?',
   data: 'Sim, é possível fazer isso'
  },
  {
	id: '3',
    title: 'Como eu posso entrar em contato para tirar alguma dúvida?',
    data: 'Ligue para nosso atendimento no número 234-5678 de segunda a sexta das 08:00 as 18:00'
  },
]

function Help({ isFocused, navigation }) {
  console.disableYellowBox = true;
  renderAccordions=()=> {
    const items = [];
    for (item of menu) {
        items.push(
            <Accordion key = {item.id}
                title = {item.title}
                data = {item.data}
            />
        );
    }
    return items;
  }



  return (
    <Background>
      <Container>
        <Header title="Ajuda" navigation={navigation}/>
		<ViewAccordion>
			{ this.renderAccordions() }
		</ViewAccordion>

      </Container>
    </Background>
  );
}

Help.propTypes = {
  isFocused: PropTypes.bool,
  tintColor: PropTypes.string,
};

Help.navigationOptions = {
  tabBarLabel: 'Ajuda',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="Home" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Help);
