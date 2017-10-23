### TiyaRN ###
一个基于React Native的app。

环境搭建过程：
- genymotion打不开VirtualBox。因为低版本VirtualBox在win10上有问题，升级就行了
- react-native-cli一直在下载gradle，等待时间过长。手动下载gradle-2.4-all.zip（react-native-cli在下载的版本），并放在C:\Users\username\.gradle\wrapper\dists\gradle-2.4-all\6r4uqcc6ovnq6ac6s0txzcpc0
- 不能下载gradle-core。翻墙后解决
- react-native-cli无法找到android sdk。用户和系统环境变量都需要配置ANDROID_HOME，准确说是，系统环境变量添加%ANDROID_HOME%\tools，系统环境变量添加%ANDROID_HOME%\platform-tools。

构建过程：  
- 基于[CRNA](https://github.com/react-community/create-react-native-app)构建。此时，默认入口文件是```App.js```，并且不需要在入口文件中注册```AppRegistry.registerComponent```。

实现过程：
- 可以用flex实现Native Base的header组件的title居中
- react-navigation的TabNavigator导航不支持自定义动画，只能开启或者关闭动画。
- TabNavigator导航存在延时问题，暂未在社区找到解决方案（原因可能是开启了远程调试js、react-native-sentry的错误追踪导致、react重复渲染界面、在调式模式下的延时导致，真机下可能没问题，待验证）
- 在手指滑动切换TabNavigator导航时，tab的状态更新有延时（期望于build后会有所改善，待解决）
- 可以自定义Native Base的样式。但其配置中没有基准色调的变量，需要单独为每个组件配置样式。
- Native Base的Content组件的子元素设置了```position: absolute```后，该子元素会不可见，设置Content组件的height以及子元素的zIndex均无效，用Container作为父元素则生效。待探索。