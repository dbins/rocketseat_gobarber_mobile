import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Image, Alert } from 'react-native';

import logo from '~/assets/gobarber.png';
import Background from '~/components/Background';
import { signUpRequest } from '~/store/modules/auth/actions';
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

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const passwordRef = useRef();
  const emailRef = useRef();

  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    let continuar = true;
    let mensagem = '';
    if (name === '' || email === '' || password === '') {
      continuar = false;
      mensagem = 'Por favor informe os seus dados!';
    }
    if (!validacao.email_validate(email)) {
      continuar = false;
      mensagem = 'O e-mail digitado é inválido';
    }
    if (continuar) {
      dispatch(signUpRequest(name, email, password));
    } else {
      Alert.alert('CADASTRO', mensagem, [{ text: 'FECHAR' }], {
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
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome Completo."
            returnKeyType="next"
            onSubmitEditting={() => emailRef.current.focus()}
            value={name}
            onChangeText={setName}
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite o seu e-mail."
            ref={emailRef}
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
            Cadastrar
          </SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignLinkText>Ja tenho uma conta</SignLinkText>
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
