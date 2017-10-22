import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import { Footer, FooterTab, Button, Text, Icon } from 'native-base';
import color from '../style/color';

export default class MyFooter extends Component {
    constructor() {
        super();
        this.state = {
            activeIndex: 0
        }
        this.pageList = [
            {name: 'Home', icon: 'heart'},
            {name: 'Media', icon: 'camera'},
            {name: 'Note', icon: 'book'}
        ]
    }
    render() {
        return (
            <Footer style={style.footer}>
                <FooterTab>
                    {this.pageList.map((ele, index) =>{
                        const active = this.props.nav.navigationState.index === index;
                        return (
                            <Button vertical
                                    active={active}
                                    key={index} style={style.button}
                                    onPress={this.footerPress.bind(this, index)}>
                                <Icon name={ele.icon} style={active ? style.textActive : style.text}/>
                                <Text style={active ? style.textActive : style.text}>{ele.name}</Text>
                            </Button>
                        )
                    })}
                </FooterTab>
            </Footer>
        );
    }
    footerPress = (index)=> {
        this.props.nav.navigation.navigate(this.pageList[index].name);
    }
}
const style = StyleSheet.create({
    button: {
        height: 70
    },
    text: {
        color: '#fff'
    },
    textActive: {
        color: color.darkRed
    }
});
