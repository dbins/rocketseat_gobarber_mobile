import React, { useRef, useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';
import { updateProfileRequest } from '~/store/modules/user/actions';
import { signOut } from '~/store/modules/auth/actions';
import validacao from '../../util';
import {
  Container,
  Title,
  Form,
  FormInput,
  Separator,
  SubmitButton,
  LogoutButton,
} from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  const emailRef = useRef();
  const oldPasswordRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    setOldPassword('');
    setPassword('');
    setConfirmPassword('');
  }, [profile]);

  function handleSubmit() {
    let continuar = true;
    let mensagem = '';
    if (
      name === '' ||
      email === '' ||
      oldPassword === '' ||
      password === '' ||
      confirmPassword === ''
    ) {
      continuar = false;
      mensagem = 'Por favor informe seus dados!';
    }
    if (!validacao.email_validate(email)) {
      continuar = false;
      mensagem = 'O e-mail digitado é inválido';
    }
    if (password !== confirmPassword) {
      continuar = false;
      mensagem = 'A senha e a confirmação de senha devem ser iguais!';
    }
    if (continuar) {
      dispatch(
        updateProfileRequest({
          name,
          email,
          oldPassword,
          password,
          confirmPassword,
        })
      );
    } else {
      Alert.alert('PERFIL', mensagem, [{ text: 'FECHAR' }], {
        cancelable: false,
      });
    }
  }

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Background>
      <Container>
        <Title>Meu Perfil</Title>
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
            onSubmitEditting={() => oldPasswordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />

          <Separator />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha atual."
            ref={oldPasswordRef}
            returnKeyType="next"
            onSubmitEditting={() => passwordRef.current.focus()}
            value={oldPassword}
            onChangeText={setOldPassword}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua nova senha secreta."
            ref={passwordRef}
            returnKeyType="next"
            onSubmitEditting={() => confirmPasswordRef.current.focus()}
            value={password}
            onChangeText={setPassword}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Confirmaçāo da nova senha secreta."
            ref={confirmPasswordRef}
            returnKeyType="send"
            onSubmitEditting={handleSubmit}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <SubmitButton onPress={handleSubmit}> Atualizar Perfil </SubmitButton>
          <LogoutButton onPress={handleLogout}>Sair do Go Barber</LogoutButton>
        </Form>
      </Container>
    </Background>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu Perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};
