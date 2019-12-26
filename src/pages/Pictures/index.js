import React, { useEffect, useState, Component } from 'react';
import { Modal, Button, View, Text, Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';

import api from '~/services/api';

import Background from '~/components/Background';
import Header from '~/components/Header';
//import { PhotoGrid } from '~/components/PhotoGrid';
import { PhotoGridLocal } from '~/components/PhotoGridLocal';
import { Container, Title, List, Conteudo } from './styles';


//const photos = [
//  { id: 1, url: 'http://lorempixel.com/400/400/fashion' },
//  { id: 2, url: 'http://lorempixel.com/400/400/city' },
//  { id: 3, url: 'http://lorempixel.com/400/400/people' },
//  { id: 4, url: 'http://lorempixel.com/400/400/nature' },
//  { id: 5, url: 'http://lorempixel.com/400/400/business' },
//  { id: 6, url: 'http://lorempixel.com/400/400/cats' },
//  { id: 7, url: 'http://lorempixel.com/400/400/food' },
//  { id: 8, url: 'http://lorempixel.com/400/400/nightlife' },
//  { id: 9, url: 'http://lorempixel.com/400/400/people' },
//  { id: 10, url: 'http://lorempixel.com/400/400/technics' },
//  { id: 11, url: 'http://lorempixel.com/400/400/transport' },
//  { id: 12, url: 'http://lorempixel.com/400/400/sports' },
//  { id: 13, url: 'http://lorempixel.com/400/400/fashion' },
//  { id: 14, url: 'http://lorempixel.com/400/400/city' },
//  { id: 15, url: 'http://lorempixel.com/400/400/people' },
//  { id: 16, url: 'http://lorempixel.com/400/400/nature' },
//  { id: 17, url: 'http://lorempixel.com/400/400/business' },
//  { id: 18, url: 'http://lorempixel.com/400/400/cats' },
//  { id: 19, url: 'http://lorempixel.com/400/400/food' },
//  { id: 20, url: 'http://lorempixel.com/400/400/nightlife' },
//  { id: 21, url: 'http://lorempixel.com/400/400/people' },
//  { id: 22, url: 'http://lorempixel.com/400/400/technics' },
//  { id: 23, url: 'http://lorempixel.com/400/400/transport' },
//  { id: 24, url: 'http://lorempixel.com/400/400/sports' },
//];

const photos = [
  { id: 1, url: require('~/assets/barber1.jpg') },
  { id: 2, url: require('~/assets/barber2.jpg')},
  { id: 3, url: require('~/assets/barber3.jpg')},
  { id: 4, url: require('~/assets/barber4.jpg')},
  { id: 5, url: require('~/assets/barber5.jpg')},
  { id: 6, url: require('~/assets/barber6.jpg')},
  { id: 7, url: require('~/assets/barber7.jpg')},
  { id: 8, url: require('~/assets/barber8.jpg')},
  { id: 9, url: require('~/assets/barber9.jpg')},
  { id: 10, url: require('~/assets/barber10.jpg')},
  { id: 11, url: require('~/assets/barber11.jpg')},
  { id: 12, url: require('~/assets/barber12.jpg')}
];


class Pictures extends Component {

  state = {
    verImagem: false,
  };


  render() {
    return (
      <Background>
        <Container>
          <Header title="Fotos" navigation={this.props.navigation} />
          <Conteudo>
            <PhotoGridLocal PhotosList={photos} borderRadius={10} />
		  </Conteudo>
        </Container>
      </Background>
    );
  }
}

Pictures.propTypes = {
  isFocused: PropTypes.bool,
  tintColor: PropTypes.string,
};

Pictures.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="Home" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Pictures);
