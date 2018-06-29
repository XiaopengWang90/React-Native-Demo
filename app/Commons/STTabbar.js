/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TabBarIOS
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import HomePage from '../Page/HomePage';
import MinePage from '../Page/MinePage'

export default class STTabbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedBarItem : 'home'
        };
    }
    render() {
        return (
            <TabBarIOS>
                <TabBarIOS.Item
                    title="主页"
                    selectedTitleStyle={styles.selectedTextStyle}
                    titleStyle={styles.textStyle}
                    selected = {this.state.selectedBarItem === 'home'}
                    onPress = {()=>{this.setState({selectedBarItem:'home'})}}
                    >
                    <HomePage {...this.props}/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="我的"
                    selectedTitleStyle={styles.selectedTextStyle}
                    titleStyle={styles.textStyle}
                    selected = {this.state.selectedBarItem === 'mine'}
                    onPress = {()=>{this.setState({selectedBarItem:'mine'})}}
                    >
                    <MinePage {...this.props}/>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}
const styles=StyleSheet.create({
    iconStyle:{
        width:26,
        height:26,
    },
    textStyle:{
        color:'#999',
    },
    selectedTextStyle:{
        color:'black',
    }
});