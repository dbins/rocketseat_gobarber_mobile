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
  contentContainerStyle: { padding: 10 },
})``;

export const Imagem = styled.Image`
  width: 80px;
  height: 80px;
  margin: 10px;
`;

export const Texto = styled.Text`
  width: 250px;
  padding: 10px;
`;

export const Box = styled.View`
  flex: 1;
  border-color: #000000;
  border-style: solid;
  padding: 20px;
  border-width: 1px;
  margin: 10px;
  background-color: #ffffff;
  flex-direction: row;
`;
