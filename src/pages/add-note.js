import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import { Container, Item, Input } from 'native-base';
import {Note as Notes} from '../utils/local-storage';
import color from '../style/color';

export default class Note extends Component {
    render() {
        return (
            <Container>
                <Item regular>
                    <Input placeholder='Enter notes...' />
                </Item>
            </Container>
        )
    }
}

const style = StyleSheet.create({

});