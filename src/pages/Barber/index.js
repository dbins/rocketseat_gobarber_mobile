import React, { useEffect, useState, Component } from 'react';
import { Modal, Button, View, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';

import api from '~/services/api';

import Background from '~/components/Background';
import Header from '~/components/Header';
import VideoPlayer from 'react-native-video-player';
import { Container, Title, List, Conteudo, Description } from './styles';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
const VIMEO_ID = '250196466';

class Barber extends Component {
  componentDidMount() {
    global
      .fetch(`https://player.vimeo.com/video/${VIMEO_ID}/config`)
      .then(res => res.json())
      .then(res =>
        this.setState({
          thumbnailUrl: res.video.thumbs['640'],
          videoUrl:
            res.request.files.hls.cdns[res.request.files.hls.default_cdn].url,
          video: res.video,
        })
      );
  }

  state = {
    video: { width: undefined, height: undefined, duration: undefined },
    thumbnailUrl: undefined,
    videoUrl: undefined,
    verImagem: false,
    verMapa: false,
    imagem:
      'https://drscdn.500px.org/photo/216465193/m%3D2048_k%3D1_a%3D1/dda61fd7cea5013f8ebe7661b7abea3a',
  };


  render() {
    return (
      <Background>
        <Container>
          <Header title="Barbearia" navigation={this.props.navigation} />
		  <ScrollableTabView
			style={{ marginTop: 20 }}
			initialPage={0}
			tabBarActiveTextColor={'#ffff00'}
			tabBarInactiveTextColor={'#ffffff'}
			renderTabBar={() => <DefaultTabBar />}
		  >
		  <Conteudo tabLabel='GoBarber'>
			<Description>Escolhida por mais de 8 vezes a melhor barbearia do Brasil, a GoBarber acumula quase 5 décadas de experiência na arte de cuidar da aparência e do bem estar de nossos clientes. Venha nos conhecer e descubra porque somos um lugar para GRANDES HOMENS.</Description>
			<Description>Somos mais do que barba, bigode e cabelo. Venha fazer novos amigos!</Description>
            <View>
              <Title style={{ fontSize: 18, marginTop: 22 }}>
                Veja nosso vídeo!
              </Title>
              <VideoPlayer
                endWithThumbnail
                thumbnail={{ uri: this.state.thumbnailUrl }}
                video={{ uri: this.state.videoUrl }}
                videoWidth={this.state.video.width}
                videoHeight={this.state.video.height}
                duration={
                  this.state.video
                    .duration /* I'm using a hls stream here, react-native-video
            can't figure out the length, so I pass it here from the vimeo config */
                }
                ref={r => (this.player = r)}
              />
            </View>
          </Conteudo>
			<Conteudo tabLabel='Endereço'>
			<Description>Rua Castro Alves</Description>
			<Description>São Paulo - SP</Description>
			<Description>Atendimento</Description>
			<Description>Segunda a Sexta</Description>
			<Description>Das 08:00 as 21:00</Description>
			<Description>Sábado</Description>
			<Description>Das 08:00 as 13:00</Description>
			</Conteudo>
		  </ScrollableTabView>
		  
		  
          
        </Container>
      </Background>
    );
  }
}

Barber.propTypes = {
  isFocused: PropTypes.bool,
  tintColor: PropTypes.string,
};

Barber.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="Home" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Barber);
