import React, { Component } from 'react';
import { Container} from 'native-base';
import AppMain from './src/index';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            isFontReady: false
        };
    }
    render() {
        if(this.state.isFontReady){
            return <AppMain />
        } else {
            return (
                <Container />
            );
        }
    }
    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });

        this.setState({
            isFontReady: true
        })
    }
}