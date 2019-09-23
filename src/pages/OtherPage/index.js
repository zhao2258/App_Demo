import React, {
    Component,
    PropTypes
} from 'react'
import {Text,View,AppRegistry,StyleSheet,TouchableHighlight} from 'react-native'
// import { MapView, MapTypes, Geolocation } from 'react-native-baidu-map';
import { Container, Header, Content,Button,Icon,Left, Body,Title } from "native-base";
import styles from './styles';

export default class OtherPage extends React.Component{
    // constructor() {
    //     super();

    //     this.state = {
    //         mayType: MapTypes.NORMAL,
    //         zoom: 15, 
    //         trafficEnabled: false,
    //         baiduHeatMapEnabled: false,
    //     };
    // }
    // componentDidMount() { // 获取位置
    //     Geolocation.getCurrentPosition().then(
    //         (data) => {
    //             this.setState({
    //                 zoom:18,
    //                 markers:[{
    //                     latitude:data.latitude,
    //                     longitude:data.longitude,
    //                     title:'我的位置'
    //                 }],
    //                 center:{
    //                     latitude:data.latitude,
    //                     longitude:data.longitude,
    //                 }
    //             })
    //         }
    //     ).catch(error => {
    //         console.warn(error,'error')
    //     })
    // }

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
                    <Title>其他</Title>
                </Body>
                </Header>
                <Content>
                    <View style={styles.container}>
                        <Text>这里是其他页!</Text>
                        {/* <MapView
                            trafficEnabled={this.state.trafficEnabled}
                            baiduHeatMapEnabled={this.state.baiduHeatMapEnabled}
                            zoom={this.state.zoom}
                            mapType={this.state.mapType}
                            center={this.state.center}
                            marker={this.state.marker}
                            markers={this.state.markers}
                            style={styles.map}
                            onMapClick={(e) => {
                            }}
                        >
                        </MapView> */}
                    </View>
                </Content>
            </Container>
        )
    }
}