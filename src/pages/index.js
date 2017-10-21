import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base';
import MyHeader from '../components/header';

export default class Index extends Component {
    render() {
        return (
            <Container>
                <MyHeader title="Home"/>
                <Content>
                    <Text>
                        This is Content Section
                    </Text>
                </Content>
            </Container>
        );
    }
}