import React, { Component } from 'react';
import { Container, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import MyHeader from './components/header'
export default class Index extends Component {
    constructor() {
        super();
        this.state = {
            isFontReady: false
        };
    }
    render() {
        if(this.state.isFontReady){
            return (
                <Container>
                    <MyHeader title="HOME"/>
                    <Content>
                        <Text>
                            This is Content Section
                        </Text>
                    </Content>
                    <Footer>
                        <FooterTab>
                            <Button full>
                                <Text>Footer</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
                </Container>
            );
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