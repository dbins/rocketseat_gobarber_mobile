import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';
import Background from '~/components/Background';
import Header from '~/components/Header';
import { Container, ProvidersList, Provider, Avatar, Name, Description } from './styles';

export default function Team({ navigation }) {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    async function loadProviders() {
      const response = await api.get('providers');

      setProviders(response.data);
    }

    loadProviders();
  }, []);

  return (
    <Background>
      <Container>
		<Header title="Nossa Equipe" navigation={navigation} />
        <ProvidersList
          data={providers}
          keyExtractor={provider => String(provider.id)}
          renderItem={({ item: provider }) => (
            <Provider>
              <Avatar
                source={{
                  uri: provider.avatar
                    ? provider.avatar.url
                    : `https://api.adorable.io/avatar/50${provider.name}.png`,
                }}
              />
              <Name> {provider.name} </Name>
			  <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar ornare nunc quis molestie. Nullam ultricies pellentesque leo, vel vehicula orci consequat quis. Suspendisse accumsan, dolor quis consectetur venenatis, urna metus congue elit, in volutpat sapien metus nec tellus. Duis id neque tristique nisi tincidunt ultrices. Donec laoreet, est nec sodales tincidunt, lectus nibh convallis orci, eget mattis lectus augue eget dolor. Nullam odio lectus, ornare non ultricies quis, fringilla bibendum neque. Quisque non sem a arcu aliquam elementum.</Description>
            </Provider>
          )}
        />
      </Container>
    </Background>
  );
}

Team.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    getParam: PropTypes.func,
  }).isRequired,
};

Team.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="home" size={20} color={tintColor} />
  ),
};

