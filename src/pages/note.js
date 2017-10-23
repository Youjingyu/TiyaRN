import React, { Component } from 'react';
import { StyleSheet, View} from 'react-native';
import { Container, Content, List, ListItem, Text, Icon, Button } from 'native-base';
import {Note as Notes} from '../utils/local-storage';
import color from '../style/color';

class Item extends Component {
    render() {
        const data = this.props.data;
        return (
            <ListItem style={style.listItem}>
                <Text style={style.listItemCon}>{data.content}</Text>
                <Text style={style.listItemDate}>{data.date}</Text>
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
        Notes.getNote((note) => {
            this.setState({
                note: note
            })
        });
    }
    render() {
        return (
            <Container>
                <List dataArray={this.state.note}
                renderRow={(item) => <Item data={item}/>}
                />
                <View style={style.iconCon}>
                    <Button transparent onPress={this.addNote}>
                        <Icon name="md-add-circle" style={style.icon}/>
                    </Button>
                </View>
            </Container>
        )
    }
    addNote = () => {
        this.setState((prevState, props) => {
            prevState.note.unshift({
                content: '12121',
                date: '1212212'
            });
            Notes.saveNote({
                content: '12121',
                date: '1212212'
            });
            return { note: prevState.note };
        });
    }
}

const style = StyleSheet.create({
    iconCon: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 20,
    },
    icon: {
        fontSize: 50,
        color: color.mainColor
    },
    listItem: {
        marginLeft: 0,
        paddingLeft: 10,
        paddingRight: 10
    },
    listItemCon: {
        width: '100%'
    },
    listItemDate: {
        width: '100%'
    }
});