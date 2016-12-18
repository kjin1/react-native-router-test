/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import PageTwo from './PageTwo';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import TabView from './TabView';
import TabIcon from './TabIcon';
export default class flux extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar={true}>
          <Scene key="tabbar" tabs={true}>
              <Scene key="tab1"  title="Tab #1" icon={TabIcon} navigationBarStyle={{backgroundColor:'red'}} titleStyle={{color:'white'}}>
                  <Scene key="tab1_1" component={TabView} title="Tab #1_1" onRight={()=>alert("Right button")} rightTitle="Right" />
                  <Scene key="tab1_2" component={TabView} title="Tab #1_2" titleStyle={{color:'black'}}/>
              </Scene>
              <Scene key="tab2" initial={true} title="Tab #2" icon={TabIcon}>
                  <Scene key="tab2_1" component={TabView} title="Tab #2_1" onLeft={()=>alert("Left button!")} leftTitle="Left"/>
                  <Scene key="tab2_2" component={TabView} title="Tab #2_2"/>
              </Scene>
              <Scene key="tab3" component={TabView} title="Tab #3" hideTabBar={true} icon={TabIcon}/>
              <Scene key="tab4" component={TabView} title="Tab #4" hideNavBar={true} icon={TabIcon}/>
              <Scene key="tab5" component={TabView} title="Tab #5" icon={TabIcon} />
          </Scene>
        </Scene>
      </Router>
    );
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

AppRegistry.registerComponent('flux', () => flux);
