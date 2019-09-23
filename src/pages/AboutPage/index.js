import React from 'react'
import {Text,View,StyleSheet} from 'react-native'
import {MapView} from 'react-native-amap3d';
import screen from '../../untils/screen'

export default class AboutPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            longitude:'',//经度
            latitude:'',//纬度
            position:'',//位置名称
        }
    }
 
    componentDidMount = () => {
        this.getPositions();
    };
    getPositions=()=>{
        return new Promise(() => {
            /** 获取当前位置信息 */
            navigator.geolocation.getCurrentPosition(
                location => {
                    this.setState({
                        longitude: location.coords.longitude,//经度
                        latitude: location.coords.latitude,//纬度
                    });
                },
                error => {
                    console.error(error);
                }
            );
 
        })
    }
    render(){
        return(
                <View style={{width:'100%',height:500}}>
                          <View style={styles.container}>
                                <Text style={styles.instructions}>经度：{this.state.longitude}</Text>
                                <Text style={styles.instructions}>纬度：{this.state.latitude}</Text>
                            </View>
                    {/* <MapView
                    style={StyleSheet.absoluteFill}
                    locationEnabled
                    locationInterval={10000}
                    distanceFilter={10}
                    onLocation={({nativeEvent}) =>
                        console.log(`${nativeEvent.latitude}, ${nativeEvent.longitude}`)}
                    /> */}
                </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });