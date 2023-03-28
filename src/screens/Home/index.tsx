import React from 'react';
import { SafeView, Container, Header, Title, SubTitle, Content, Button, TextButton, Row } from './styles'
import { Card, Input } from '../../components';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
const Home: React.FC = () => {

  return (
    <SafeView>

      <Container>
        <Header>
          <Title>Meu cartao</Title>
          <SubTitle>Insira os dados do cartao</SubTitle>
        </Header>

        <Content>
          <Card />

          <Input placeholder= "Nome do titular" icon={<AntDesign name='user' size={16} color="#FFD900"/>} />
          <Input placeholder= "Número do cartão" icon={<Octicons name="number" size={16} color="#FFD900"/>} />

          <Row>
            <Input placeholder= "Validade" width='45%' icon={<MaterialIcons name="date-range" size={16} color="#FFD900"/>} />
            <Input placeholder= "CVV" width='45%' icon={<AntDesign name="lock1" size={16} color="#FFD900" />} />
          </Row>

        </Content>

        <Button>
          <TextButton>Cadastrar</TextButton>  
        </Button>

      </Container>
    </SafeView>

  );

};

export default Home;