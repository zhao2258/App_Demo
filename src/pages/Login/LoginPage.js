import React, { Component } from 'react';
import {View,Alert} from 'react-native'
import { Container, Header, Content, Form, Item,Left,Text, Body, Input,Button,Icon,Title, Label } from 'native-base';
export default class LoginPage extends Component {
  static navigationOptions = {
    tabBarVisible: false, // 隐藏底部导航栏
    headerTitle: '登陆页',
    headerStyle: {
      backgroundColor: 'lightblue',
    },
    headerTitleStyle:{
      color:'gray',
    },
  };

  constructor(props){
    super(props)
    this.state={
      Username:'',
      Password:'',
    }
  }
  setUsetName=(value)=>{
    this.setState({
      Username:value
    })
  }

  setPassword=(value)=>{
    this.setState({
      Password:value
    })
  }

  login=()=>{
    let {Username,Password} = this.state
    if(Username && Password){
      this.props.navigation.navigate('Home')
    } else {
      if(Username == '' && Password == ''){
        Alert.alert(
          '警告',
          '请输入账号信息！'
        )
      } else if(Username == ''){
        Alert.alert(
          '警告',
          '请输入用户名！'
        )
      } else if(Password == ''){
        Alert.alert(
          '警告',
          '请输入密码！'
        )
      } 
    }
  }
  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>用户名：</Label>
              <Input onChangeText={this.setUsetName}/>
            </Item>
            <Item floatingLabel last>
              <Label>密码：</Label>
              <Input onChangeText={this.setPassword}/>
            </Item>
          </Form>
          <View style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:50}}>
            <Button info onPress={this.login} style={{width:'50%',justifyContent:'center'}}>
              <Text>
                登陆
              </Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}