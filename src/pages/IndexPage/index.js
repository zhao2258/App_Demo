import React from 'react'
import {View,AppRegistry, StyleSheet,Dimensions,Image,Alert} from 'react-native'
import Swiper from 'react-native-swiper'
import { Container, Header, Content,Button,Icon,Left,Right,Text, Body,Title,Drawer } from "native-base";
import { white } from 'ansi-colors';

const { width, height } = Dimensions.get('window')

export default class IndexPage extends React.Component{
    state={
        scanResult:'', //扫码结果保存
    }
    componentDidMount(){
        
    }
    closeDrawer = () => {
        this.drawer._root.close()
      }
    openDrawer = () => { 
        this.drawer._root.open() 
      };

    returnData(e) {
        this.setState({scanResult:e});
    }
    goScanPage =()=>{
        this.props.navigation.navigate('scanPage', {returnData: this.returnData.bind(this)});
    }
    render(){
        return(
            <Container>
                <Drawer content={<View style={{backgroundColor:'white',height:height}}><Text>这里是抽屉,空空如也。。。</Text></View>} 
                onClose={() => this.closeDrawer()} ref={(ref) => { this.drawer = ref; }}>
                    <Header>
                    <Left>
                        <Button onPress={this.openDrawer} transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>首页</Title>
                    </Body>
                    <Right>
                        <Button onPress={() => this.goScanPage()} transparent>
                        <Icon name='scan1' type='AntDesign' />
                        </Button>
                    </Right>
                    </Header>
                    <Content>
                        <View>
                        <Swiper
                            //样式
                            style={styles.wrapper}
                            //高度
                            height={width * 40 / 75}
                            // 是否显示控制按钮（即左右两侧的箭头是否可见）
                            showsButtons={false}
                            //这个很主要啊，解决白屏问题
                            removeClippedSubviews={false}
                            // 切换时间，单位秒
                            autoplayTimeout={20} 
                            // 是否自动轮播
                            autoplay={true}
                            // 如果为true，滚动方向是横向的，如果为false，滚动方向是竖向的
                            horizontal={true}
                            // 分页风格
                            paginationStyle={styles.paginationStyle}
                            // 点样式
                            dotStyle={styles.dotStyle}
                            // 活动点样式
                            activeDotStyle={styles.activeDotStyle}
                        >
                            <Image resizeMode="cover" source={require('./images/111.jpg')} style={styles.bannerImg} />
                            <Image resizeMode="cover" source={require('./images/222.jpg')} style={styles.bannerImg} />
                            <Image resizeMode="cover" source={require('./images/333.jpg')} style={styles.bannerImg} />
                        </Swiper>
                        </View>
                        <View style={{width:'100%',minHeight:100,backgroundColor:'lightblue',}}>
                            <Text>{`扫码的结果是：${this.state.scanResult.data || ''}`}</Text>
                            <Text>{`扫码的类型是：${this.state.scanResult.type || ''}`}</Text>
                        </View>
                    </Content>
                </Drawer>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    wrpaper: {
        width: width,
        height: width * 40 / 75,
 
    },
    paginationStyle: {
        bottom: 6,
    },
    dotStyle: {
        backgroundColor: '#fff',
        opacity: 0.4,
    },
    activeDotStyle: {
        backgroundColor: '#f00',
    },
    bannerImg: {
        width: width,
        height: width * 40 / 75,
    }
})
  
  