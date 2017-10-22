import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import { Container, Content, List, ListItem, Text } from 'native-base';
import storage from '../utils/local-storage';

class Item extends Component {
    render() {
        const data = this.props.data;
        return (
            <ListItem style={style.listItem}>
                <Text>{data.content}</Text>
                <Text>{data.date}</Text>
            </ListItem>
        )
    }
}

export default class Note extends Component {
    constructor() {
        super();
        this.state ={
            note: []
        };
        storage.getNote((note) => {
            this.setState({
                note: note
            })
        });
    }
    render() {
        return (
            <Container>
                <Content>
                    <List dataArray={this.state.note}
                          renderRow={(item) => <Item data={item}/>}
                    />
                </Content>
            </Container>
        )
    }
}

const style = StyleSheet.create({
    listItem: {
        marginLeft: 0,
        paddingLeft: 10,
        paddingRight: 10
    }
});