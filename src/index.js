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
  