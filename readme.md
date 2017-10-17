### TiyaRN ###
一个基于React Native的app。

环境搭建过程遇到的问题：
- genymotion打不开VirtualBox。因为低版本VirtualBox在win10上有问题，升级就行了
- react-native-cli一直在下载gradle，等待时间过长。手动下载gradle-2.4-all.zip（react-native-cli在下载的版本），并放在C:\Users\username\.gradle\wrapper\dists\gradle-2.4-all\6r4uqcc6ovnq6ac6s0txzcpc0
- 不能下载gradle-core。翻墙后解决
- react-native-cli无法找到android sdk。用户和系统环境变量都需要配置ANDROID_HOME，准确说是，系统环境变量添加%ANDROID_HOME%\tools，系统环境变量添加%ANDROID_HOME%\platform-tools。