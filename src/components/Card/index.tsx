import React from 'react';

import { Container, Content, Strip, TextCVV, View, TextData } from './styles'
import { PropsCard } from './types';

const Card = ({ data, backCard }: PropsCard) => {

    return (
        <Container>
            <Content>
                {backCard
                    ?
                    <Strip>
                        <TextCVV>{data.cvv}</TextCVV>
                    </Strip>
                    :
                    <View>
                        <TextData bold={600} fontSize={18}>{data.number}</TextData>
                        <TextData fontSize={16}>{data.name}</TextData>
                        <TextData fontSize={12}>{data.validate}</TextData>
                    </View>
                }
            </Content>
        </Container>
    );

};

export { Card };