import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Imagem = styled.Image`
    width: 150px;
    height: 76;
    margin: 5px;
    background-color: #000000
`;

export const BotaoMeio = styled.View`
    margin: 2px;
    width: 50%;
    align-items: center
`;

export const TextoBotao = styled.Text`
  color: #FFFFFF	
`;

export const BotaoAgendar = styled.TouchableOpacity`
  width: 150px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

export const TextoBotaoAgendar = styled.Text`
  color: #FFFF00;
  font-weight: bold;
  font-size: 16;
`;