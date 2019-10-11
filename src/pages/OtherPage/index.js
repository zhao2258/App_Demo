import React, {
    Component
  } from 'react';
  
  import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    Dimensions,
  } from 'react-native';
  
  import { MapView, MapTypes, Geolocation, Overlay } from 'react-native-baidu-map';
  
  const { Marker, Cluster, Arc, Circle, Polyline, Polygon, InfoWindow } = Overlay;
  const { height, width } = Dimensions.get('window');

  export default class OtherPage extends Component {
  
    state = {
      location: {},
      markers: [
        {
          location: {
            longitude: 113.960453,
            latitude: 22.546045
          }
        },
        {
          location: {
            longitude: 113.961453,
            latitude: 22.547045
          }
        },
        {
          location: {
            longitude: 113.962453, 
            latitude: 22.548045
          }
        },
        {
          location: {
            longitude: 113.963453, 
            latitude: 22.545045
          }
        },
        {
          location: {
            longitude: 113.964453, 
            latitude: 22.544045
          }
        }
      ]
    };

    getCurrentPosition() {
        Geolocation.getCurrentPosition()
          .then((data) => {
            this.setState({ location: data });
          });
      }
    
      componentDidMount() {
        
      }

      render() {
        return (
        <View>
          <StatusBar barStyle="dark-content" />
            <SafeAreaView>
              <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}>
                <View style={styles.body}>
                  <MapView 
                    width={width} 
                    height={400} 
                    zoom={13}
                    trafficEnabled={true}
                    zoomControlsVisible={true}
                    mapType={MapTypes.NORMAL}
                    center={{ longitude: 113.950453, latitude: 22.546045 }}
                  >
                    <Overlay.Marker rotate={45} ic on={{ uri: 'https://mapopen-website-wiki.cdn.bcebos.com/homePage/images/logox1.png' }} location={{ longitude: 113.975453, latitude: 22.510045 }} />
                    <Overlay.Cluster>
                      <Overlay.Marker location={{ longitude: 113.969453, latitude: 22.530045 }} />
                      <Overlay.Marker location={{ longitude: 113.968453, latitude: 22.531045 }} />
                      <Overlay.Marker location={{ longitude: 113.967453, latitude: 22.532045 }} />
                      <Overlay.Marker location={{ longitude: 113.966453, latitude: 22.533045 }} />
                      <Overlay.Marker location={{ longitude: 113.965453, latitude: 22.534045 }} />
                      <Overlay.Marker location={{ longitude: 113.965453, latitude: 22.535045 }} />
                    </Overlay.Cluster>
                    <Overlay.Cluster>
                      {this.state.markers.map((marker, index) => <Overlay.Marker key={`marker-` + index} location={marker.location} />)}
                    </Overlay.Cluster>
                    <Overlay.Polyline
                      longitude={113.960453}
                      latitude={22.546045}
                      points={[{ longitude: 113.960453, latitude: 22.546145 }, { longitude: 113.961453, latitude: 22.547045 }, { longitude: 113.962453, latitude: 22.54045 }]} />
                    <Overlay.Arc
                      longitude={113.960453}
                      latitude={22.546045}
                      points={[{ longitude: 113.960453, latitude: 22.546045 }, { longitude: 113.960453, latitude: 22.546145 }, { longitude: 113.960453, latitude: 22.546245 }]} /> 
                  </MapView>

                  {/* <MapView>
                        <Cluster>
                            <Marker location={{ longitude: 113.969453, latitude: 22.530045 }} />
                            <Marker location={{ longitude: 113.968453, latitude: 22.531045 }} />
                            <Marker location={{ longitude: 113.967453, latitude: 22.532045 }} />
                            <Marker location={{ longitude: 113.966453, latitude: 22.533045 }} />
                            <Marker location={{ longitude: 113.965453, latitude: 22.534045 }} />
                            <Marker location={{ longitude: 113.965453, latitude: 22.535045 }} />
                        </Cluster>
                    </MapView> */}



                  <View style={styles.buttonGroup}>
                <View style={styles.button}>
                  <Button onPress={ () => this.getCurrentPosition() } title="Locate" />
                </View>
              </View>
              {this.state.location.address ? (
                <View style={styles.location}>
                  <Text>当前位置：{ this.state.location.address }</Text>
                </View>
              ) : null}
            </View>
          </ScrollView>
        </SafeAreaView>
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

