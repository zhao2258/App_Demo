import React from 'react'
import {Text,View} from 'react-native'
import { Container, Header, Content,Button,Icon,Left, Body,Title } from "native-base";

export default class MePage extends React.Component{
    render(){
        return(
            <Container>
                <Header>
                <Left>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>我的</Title>
                </Body>
                </Header>
                <Content>
                    <View>
                        <Text>
                            这是我练手的App
                        </Text>
                    </View>
                </Content>
            </Container>
        )
    }
}