# Common-ui-vue

## 背景
虽然业界已经有很多成熟优秀的ui库可以供我们使用，也为我们解决了很多问题。但是基础的东西总是不能满足所有业务场景，更多时候我们需要扩展功能来满足业务的需求，好比 table 需要自定列这样的～相信这也是很多小伙伴开发时候的场景。

跨项目复用。很多时候为了方便，只是基于当前项目对组件进行二次封装（反正我是这样干的哈哈），然后做其他项目遇到同样场景时，要么copy（经常忘记之前封装在哪个项目里了🌚）、要么重新干一个...总是缺少一个统筹的地方，复用很不方便。

组件使用文档。文档产出对于一线开发来说可能相对比较欠缺，因为大家都忙于撸业务，文档这种奢侈品能省一点是一点。这样导致一个问题就是自己封装的组件别人不会用、不知道在哪里用，甚至不知道有这么个东西。

跨团队共建发展。大多B端系统都是以 element、antd 等ui框架为主，基于各种业务场景，基本都会有自己团队的二次封装。其实类似的功能扩展肯定会有的，如果有组件库把组件都集中起来，就能减少很多重复造轮子的劳动力了！

本人之前就经常有这样的痛点，在某个项目里二次封装了 el-table ，实现 filterable 的时搜索输入框移到下拉列表中，避免多选时多个tag挤压了搜索框的空间。当时是写在一个项目里，然后其他项目也遇到了这样的需求...我在原来的项目里面寻找、回忆，找回当年封装的组件，人都麻了......

## 介绍
> 基于vue3+typescript+Element-plus二次封装组件
这是我在日常工作中基于Element-plus二次封装的基础组件文档，希望对你有用。
