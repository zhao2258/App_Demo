import React from 'react'
import {View,AppRegistry, StyleSheet,Dimensions,Image} from 'react-native'
import Swiper from 'react-native-swiper'
import { Container, Header, Content,Button,Icon,Left,Text, Body,Title,Drawer } from "native-base";
import { white } from 'ansi-colors';

const { width, height } = Dimensions.get('window')

export default class IndexPage extends React.Component{
    closeDrawer = () => {
        this.drawer._root.close()
      }
    openDrawer = () => { 
        this.drawer._root.open() 
      };
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
                            {/* <Button style={{width:'50%',justifyContent:'center'}} 
                            onPress={() => this.props.navigation.navigate('Details')}
                            info><Text> 点击跳转到详情页 </Text></Button> */}
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
  
  