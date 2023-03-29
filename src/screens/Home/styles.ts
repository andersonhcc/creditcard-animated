import styled from "styled-components/native";
import { Dimensions } from "react-native";

const {height} = Dimensions.get('window');

export const SafeView = styled.SafeAreaView`
  flex: 1;
  background-color: #4e455e10 ; //opacity 10%
`;

export const ScrollView = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

export const Container = styled.View`
  width: 100%;
  height: ${height}px;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

export const Header = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #00000090;
`;

export const SubTitle = styled.Text`
  font-weight: 300;
  color: #00000090;
`;

export const Content = styled.View`
  width: 100%;
  padding: 20px;
  border-radius: 20px;
  background-color: #fff;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 55px;
  background-color: #FFD900;
  align-items: center;
  justify-content: center;
  border-radius: 55px;
  margin-bottom: 100px;
`;

export const TextButton = styled.Text`
  color: #fff;
`;

export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;