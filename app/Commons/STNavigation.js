import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NavigatorIOS
} from 'react-native';
import STTabbar from './STTabbar';
export default class MyNav extends Component {
     constructor(props) {
         super(props);
         this.renderScene = this.renderScene.bind(this);
     }

     goBack() {
         return NaviGoBack(_navigator);
     }

     renderScene(route, navigator) {
         let Component = route.component;
         _navigator = navigator;
         return (
             <Component navigator={navigator} route={route} />
         );
     }

     configureScene(route, routeStack) {
         return Navigator.SceneConfigs.PushFromRight;
     }
    render() {
        return (
            <View style={{flex: 1}}>

                <NavigatorIOS
                    ref='navigator'
                    style={styles.navigator}
                   
                    initialRoute={{
            component:STTabbar,
            title: "",
          }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    navigator: {
        flex: 1
    }
});

