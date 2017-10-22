import React, { Component } from "react"; 
import { TabNavigator } from 'react-navigation';
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

export default MainRouter;
  