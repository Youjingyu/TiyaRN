import React, { Component } from 'react';
import { Image, StyleSheet, Platform, StatusBar } from 'react-native';
import { Header, Left, Body, Right, Title, Button, Icon } from 'native-base';
export default class MyHeader extends Component {
    render() {
        return (
            <Header style={style.header}>
                <Left style={style.left}>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body style={style.body}>
                    <Title style={style.title}>{this.props.title}</Title>
                </Body>
                <Right style={style.right}>
                    <Image source={require('../img/girl-dark-red.png')} style={style.userIcon} />
                </Right>
            </Header>
        );
    }
}

const style = StyleSheet.create({
    header: {
        width: '100%',
        ...Platform.select({
            android: {
                marginTop: StatusBar.currentHeigh,
            }
        })
    },
    left: {
      flex: 1
    },
    body: {
        flex: 2
    },
    right: {
        flex: 1
    },
    title: {
        width: '100%',
        textAlign: 'center'
    },
    userIcon: {
        width: 30,
        height: 30
    }
});
