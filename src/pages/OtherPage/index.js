import React, {
    Component
  } from 'react';
  
  import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Text,
    StatusBar,
    Dimensions,
  } from 'react-native';
  import { Container, Header,View, Button, Icon, Fab,Body,Title } from 'native-base'
  import { MapView, MapTypes, Geolocation, Overlay } from 'react-native-baidu-map';
  
  const { Marker, Cluster, Arc, Circle, Polyline, Polygon, InfoWindow } = Overlay;
  const { height, width } = Dimensions.get('window');

  export default class OtherPage extends Component {
  
    constructor(props) {
        super(props)
        this.state = {
          active: false,
          location: {},
          longitude: 121.4428015580,
          latitude: 31.1942088680,
        };
    }
    
    getCurrentPosition() {
        console.log('方法被点击！')
        Geolocation.getCurrentPosition()
          .then((data) => {
              console.log('地图数据',data)
            this.setState({ location: data });
          });
      }

      render() {
          const { longitude,latitude } = this.state
        return (
        <View >
            <Header>
                <Body>
                    <Title>地图{this.state.location.address ? `-当前位置：${ this.state.location.address }` : null}</Title>
                </Body>
            </Header>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <View style={styles.body}>
                        <MapView 
                            width={width} 
                            height={height - 58} 
                            zoom={20}
                            trafficEnabled={true}
                            zoomControlsVisible={true}
                            mapType={MapTypes.NORMAL}
                            center={{ longitude, latitude }}
                        >
                            <Overlay.Marker  ic on={{ uri: 'https://mapopen-website-wiki.cdn.bcebos.com/homePage/images/logox1.png' }} 
                            location={{ longitude, latitude }} />
                        </MapView>
                    </View>
                </ScrollView>
            </SafeAreaView>
            <Fab
                active={this.state.active}
                direction="up"
                containerStyle={{ }}
                style={{ backgroundColor: '#5067FF' }}
                position="bottomLeft"
                onPress={() => this.setState({ active: !this.state.active })}>
                <Icon name="plus" type="AntDesign" />
                <Button onPress={ () => this.getCurrentPosition() } style={{ backgroundColor: '#34A34F' }}>
                <Icon name="enviromento" type="AntDesign"/>
                </Button>
                {/* <Button style={{ backgroundColor: '#3B5998' }}>
                <Icon name="logo-facebook" />
                </Button>
                <Button disabled style={{ backgroundColor: '#DD5144' }}>
                <Icon name="mail" />
                </Button> */}
            </Fab>
        </View>
    );
  }
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  scrollView: {

  },
  body:{

  },
  location: {
    padding: 16
  },
  buttonGroup: {
    padding: 16
  },
  button: {
    width: 80
  }
});

// import React, {
//     Component,
//     PropTypes
// } from 'react'
// import {Text,View,AppRegistry,StyleSheet,TouchableHighlight} from 'react-native'
// import { Container, Header, Content,Button,Icon,Left, Body,Title } from "native-base";
// import styles from './styles';

// export default class OtherPage extends React.Component{

//     render(){
//         return(
//             <Container>
//                 <Header>
//                 <Left>
//                     <Button transparent>
//                         <Icon name='menu' />
//                     </Button>
//                 </Left>
//                 <Body>
//                     <Title>其他</Title>
//                 </Body>
//                 </Header>
//                 <Content>
//                     <View style={styles.container}>
//                         <Text>这里是其他页!</Text>
//                     </View>
//                 </Content>
//             </Container>
//         )
//     }
// }

