import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Conteudo = styled.ScrollView`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})``;

export const ImagemTopo = styled.Image`
  width: 250px;
  margin-left: 20%;
  height: 250px;
  background-color: #000000;
`;

export const ContainerBotoes = styled.SafeAreaView`
  flex: 1;
  flex-direction: row;
`;

export const Imagem = styled.Image`
  width: 128px;
  height: 128px;
  margin: 5px;
`;

export const BotaoMeio = styled.TouchableOpacity`
  margin: 2px;
  width: 50%;
  align-items: center;
`;

export const TextoBotao = styled.Text`
  color: #FFFFFF	
`;
