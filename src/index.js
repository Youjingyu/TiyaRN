import React, { Component } from 'react';
import { Container, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import MyHeader from './components/header';
import MyFooter from './components/footer'

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
                    <MyHeader title="Home"/>
                    <Content>
                        <Text>
                            This is Content Section
                        </Text>
                    </Content>
                    <MyFooter />
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
// 基于node做社区：
// 难度系数：6/10
// 思路：
// 我理解成类似segmentfault的技术社区，不知道是否准确。前后端分离。前端：具体业务逻辑，界面兼容性（pc、mobile），富文本编辑器，聊天工具。后台：接口业务逻辑，数据库设计：关系性少的数据（文章、收藏等），关系性多的数据（用户关系、评论回复等），性能。
// 数据可视化分析：
// 难度系数：7/10
// 思路:
// 这个接触较少，这里按照我的理解叙述。数据来源：前端埋点，保存程序崩溃、错误信息。数据可视化：使用开源工具Echarts、D3.js等。数据分析：使用专业分析工具。实时监控：实时从数据来源获取数据并可视化展示。
// 三端统一：
// 难度系数：8/10
// 现在社区能够较好做到三端复用代码的库：React Native、weex。纯js代码是很多好复用的（除了部分api）。涉及到ui的，我们可以约定使用统一的组件名，但在不同平台映射到的是对应平台的组件。当然还有一些其他的平台特异性。总之，尽量保证相同的代码，在不同的平台却映射到不同的底层组件和方法。至少，三端复用组件相对较好做到。

// 兴趣：三端统一 > 数据可视化 > node社区