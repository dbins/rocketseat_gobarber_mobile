import React, { useEffect, useState, Component } from 'react';
import { Modal, Button, View, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';

import api from '~/services/api';

import Background from '~/components/Background';
import Header from '~/components/Header';
import { Container, Title, List, Conteudo } from './styles';

class Map extends Component {
 
  render() {
    return (
      <Background>
        <Container>
          <Header title="Mapa" navigation={this.props.navigation} />
          <WebView
              source={{
                html:
                  '<iframe width="600" height="800" id="gmap_canvas" src="https://maps.google.com/maps?q=rua%20castro%20alves%20s%C3%A3o%20paulo%20sp&t=&z=19&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>',
              }}
              style={{
                marginTop: 20,
                marginBottom: 20,
                maxHeight: 700,
                width: 600,
				height: 800,
                flex: 1,
				backgroundColor: "#000000"
              }}
            />
        </Container>
      </Background>
    );
  }
}

Map.propTypes = {
  isFocused: PropTypes.bool,
  tintColor: PropTypes.string,
};

Map.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="Home" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Map);
