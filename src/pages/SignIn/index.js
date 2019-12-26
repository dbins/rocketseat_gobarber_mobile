import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Image, Alert } from 'react-native';
import logo from '~/assets/gobarber.png';
import Background from '~/components/Background';
import { signInRequest } from '~/store/modules/auth/actions';
import validacao from '../../util';
import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignIn({ navigation }) {
  const dispatch = useDispatch();
  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    let continuar = true;
    let mensagem = '';
    if (email === '' || password === '') {
      continuar = false;
      mensagem = 'Por favor informe o e-mail e a senha!';
    }
    if (!validacao.email_validate(email)) {
      continuar = false;
      mensagem = 'O e-mail digitado é inválido';
    }
    if (continuar) {
      dispatch(signInRequest(email, password));
    } else {
      Alert.alert('LOGIN', mensagem, [{ text: 'FECHAR' }], {
        cancelable: false,
      });
    }
  }

  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite o seu e-mail."
            returnKeyType="next"
            onSubmitEditting={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta."
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditting={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />

          <SubmitButton loading={loading} onPress={handleSubmit}>
            Acessar
          </SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignUp')}>
          <SignLinkText>Criar conta gratuita</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
