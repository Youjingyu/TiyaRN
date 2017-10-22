/* global global */
import React, { Component } from "react";
import { TabNavigator } from 'react-navigation'
import {StyleProvider} from 'native-base';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import Index from './pages/index';
import Media from './pages/media';
import Note from './pages/note';
import MyFooter from './components/footer';
import {resetConsole} from './utils/reset';
import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';

// define a unique storage in global
global.storage = new Storage({
    // size: 1000,
    storageBackend: AsyncStorage,
    defaultExpires: null,
    enableCache: true,
});

resetConsole();

const MainRouter = TabNavigator(
    {
        Home: { screen: Index },
        Media: { screen: Media },        
        Note: { screen: Note }
    },
    {
        tabBarPosition: "bottom",
        animationEnabled: false,
        tabBarComponent: props => {
            return <MyFooter nav={props} />
        }
    }
);

export default class AppMain extends Component{
    render() {
        return(
            <StyleProvider style={getTheme(material)}>
                <MainRouter />
            </StyleProvider>
        )
    }
};
  