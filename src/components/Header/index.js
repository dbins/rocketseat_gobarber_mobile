import React, { forwardRef } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { Content, Title, Botao, Botoes } from './styles';
import { navigate } from '../../services/navigation';

function Header({ title, navigation }, ref) {
  return (
    <Content>
      <Title>{title}</Title>
      <Botoes>
        <TouchableOpacity onPress={() => navigation.navigate('Help')}>
          <Botao name="help" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Notifications')
          }
        >
          <Botao name="notifications" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Botao name="exit-to-app" />
        </TouchableOpacity>
      </Botoes>
    </Content>
  );
}

export default Header;
