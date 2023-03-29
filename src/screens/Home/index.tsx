import React, { useState } from 'react';
import { SafeView, ScrollView, Container, Header, Title, SubTitle, Content, Button, TextButton, Row } from './styles'
import { Card, Input } from '../../components';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
const Home: React.FC = () => {

  const [data, setData] = useState({
    name: '',
    number: '',
    validate: '',
    cvv: '',
  })

  return (
    <SafeView>
      <ScrollView>
        <Container>
          <Header>
            <Title>Meu cartao</Title>
            <SubTitle>Insira os dados do cartao</SubTitle>
          </Header>

          <Content>
            <Card data={data}/>

            <Input
              placeholder="Nome do titular"
              value={data.name}
              onChangeText={(e) => setData({
                ...data,
                name: e
              })}
              icon={<AntDesign name='user' size={16} color="#FFD900" />}
            />

            <Input
              placeholder="Número do cartão"
              value={data.number}
              onChangeText={(e) => setData({
                ...data,
                number: e
              })}
              mask
              type='credit-card'
              icon={<Octicons name="number" size={16} color="#FFD900" />}
            />

            <Row>
              <Input
                placeholder="Validade"
                value={data.validate}
                width='45%'
                type='custom'
                mask
                options={{
                  mask: '99/99'
                }}
                onChangeText={(e) => setData({
                  ...data,
                  validate: e
                })}
                icon={<MaterialIcons name="date-range" size={16} color="#FFD900" />}
              />
              <Input
                value={data.cvv}
                placeholder="CVV"
                width='45%'
                type='custom'
                mask
                options={{
                  mask: '9999'
                }}
                onChangeText={(e) => setData({
                  ...data,
                  cvv : e
                })}
                icon={<AntDesign name="lock1" size={16} color="#FFD900" />}
              />
            </Row>

          </Content>

          <Button>
            <TextButton>Cadastrar</TextButton>
          </Button>

        </Container>
      </ScrollView>

    </SafeView>

  );

};

export default Home;