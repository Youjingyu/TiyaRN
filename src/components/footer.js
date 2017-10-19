import React, { Component } from 'react';
import { Image, StyleSheet} from 'react-native';
import { Footer, FooterTab, Button, Text } from 'native-base';
export default class MyFooter extends Component {
    constructor() {
        super();
        this.state = {
            activeIndex: 0
        }
    }
    render() {
        const btnList = [
            {text: 'Home', img: require('../img/girl-dark-red.png')},
            {text: 'Media', img: require('../img/girl-dark-red.png')},
            {text: 'Note', img: require('../img/girl-dark-red.png')}
        ]
        return (
            <Footer style={style.footer}>
                <FooterTab>
                    {btnList.map((ele, index) =>{
                        return (
                            <Button vertical
                                    active={this.state.activeIndex === index} key={index} style={style.button}
                                    onPress={this.notePress.bind(this, index)}>
                                <Image source={ele.img} style={style.icon} />
                                <Text>{ele.text}</Text>
                            </Button>
                        )
                    })}
                </FooterTab>
            </Footer>
        );
    }
    notePress = (index)=> {
        this.setState({
            activeIndex: index
        })
    }
}
// 具体技能点：项目经历以及技能点在简历上都有说明
// 软性技能：对自己以及自己的作品要求比较高（有一定强迫症），追求好的用户体验；学习能力以及主动性较强，对代码的理解不是浮于表面；不想被前端工程师的头衔舒束缚。‘懒惰’，追求效率，不喜欢做无意义的重复。
// 这里简单地总结了下
const style = StyleSheet.create({
    button: {
        height: 70
    },
    icon: {
        width: 30,
        height: 30
    }
});
