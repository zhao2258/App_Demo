import React from 'react'
import { View,Text } from 'native-base';
import { Container, Header, Content,Button,Icon,Left, Body,Title } from "native-base";

export default class Details extends React.Component{
    static navigationOptions = {
        tabBarVisible: false, // 隐藏底部导航栏
        header: null,  //隐藏顶部导航栏
    };
    render(){
        return(
            <Container>
                <Header>
                <Left>
                    <Button onPress={()=>this.props.navigation.goBack()} transparent>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title>详情页</Title>
                </Body>
                </Header>
                <Content>
                    <View>
                        <Text>
                            我是详情页
                        </Text>
                    </View>
                </Content>
            </Container>
        )
    }
}