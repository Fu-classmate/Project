# day01
## 1. 项目开发准备
    项目描述（app）
    技术选型(vue全家桶+axios+vant+mock+better-scroll+vue-lazyload +stylus+ mongodb+express)
    API接口(模块化进行封装 （getData,postData）)
    你能从此项目中学到什么?(vue的开发流程,vue路由 vuex 组件 指令 计算属性的基本使用,js的高阶数组方法,js的设计模式--单例模式  购物车功能实现)

## 2. 开启项目开发
    使用脚手架创建项目（vue init webpack app）
    安装所有依赖/指定依赖 (cnpm i   包名 --save)
    开发环境运行  (npm run dev/  npm run start)
    生产环境打包与发布(npm run build----dist(index.html 放到根目录下) )

## 3. 搭建项目整体界面结构
    stylus的理解和使用   嵌套 是通过 缩进实现  $green:'green'
        结构化, 变量, 函数/minxin(混合)
    vue-router的理解和使用
        router-view/router-link/keep-alive
        $router: 路由器对象, 包含一些操作路由的功能函数, 来实现编程式导航(跳转路由)
        $route: 当前路由对象, 一些当前路由信息数据的容器, path/meta/query/params
    项目路由拆分
    底部导航组件: FooterGuide  (components)
    导航路由组件: Msite/Search/Order/Profile  (pages)

## 4. 抽取组件
    头部组件: HeaderTop, 通过slot来实现组件通信标签结构(命名插槽)
    商家列表组件: ShopList  （v-for 遍历 实现数据的渲染  :key ）

## 5. 登陆路由组件
     静态组件
     FooterGuide的显示/隐藏: 通过路由的 meta    true/fasle    来控制（v-show）

## 6. 后台项目
    启动后台项目： npm run start (cnpm i )
    启动后台项目: 理解前后台分离
    测试后台接口: 使用postman
    修正接口文档

## 7. 前后台交互
    ajax请求库: axios
    ajax请求函数封装: axios + promise
    接口请求函数封装: 每个后台接口


# day02
## 1. 异步数据
    封装ajax: 
        promise+axios封装ajax请求的函数
        封装每个接口对应的请求函数(能根据接口定义ajax请求函数)
        解决ajax的跨越域问题: 配置代理, 对代理的理解
    vuex编码
        创建所有相关的模块: store/index|state|mutations|actions|getters|mutation-types
        设计state: 从后台获取的数据
        实现actions: 
            定义异步action: async/await
            流程:　发ajax获取数据, commit给mutation
        实现mutations: 给状态赋值
        实现index: 创建store对象
        main.js: 配置store  (挂载store)
    组件异步显示数据
        在mounted()通过$store.dispatch('actionName')来异步获取后台数据到state中
        mapState(['xxx'])读取state中数据到组件中   (映射获取数据)
        在模板中显示xxx的数据
    模板中显示数据的来源
        data: 自身的数据(内部改变)
        props: 外部传入的数据(外部改变)
        computed: 根据data/props/别的compute/state/getters
    异步显示轮播图
        通过vuex获取foodCategorys数组(发请求, 读取)
        对数据进行整合计算(一维变为特定的二维数组)  （16/18=> [[8],[8],[2]]）
        使用Swiper显示轮播, 如何在界面更新之后创建Swiper对象?
            1). 使用回调+$nextTick()
            2). 使用watch+$nextTick()	

## 2. 登陆/注册: 界面相关效果
    a. 切换登陆方式
    b. 手机号合法检查
    c. 倒计时效果
    d. 切换显示或隐藏密码
    g. 前台验证提示

## 3. 前后台交互相关问题
    1). 如何查看你的应用是否发送某个ajax请求?  (network) 
        浏览器的network
    2). 发ajax请求404
        请求的路径的对
        代理是否生效(配置和重启)    解决跨域的方法  1  jsonp  2  代理  3 后端node cors
        服务器应用是否运行
    3). 后台返回了数据, 但页面没有显示?
        vuex中是否有  (vue的调试工具)
        组件中是否读取

# day03
## 1. 完成登陆/注册功能
    1). 2种方式
       手机号/短信验证码登陆
       用户名/密码/图片验证码登陆
    2). 登陆的基本流程
       表单前台验证, 如果不通过, 提示  （合法加不为空 同时满足才能通过）
       发送ajax请求, 得到返回的结果
       根据结果的标识(code)来判断登陆请求是否成功
           1: 不成功, 显示提示
           0. 成功, 保存用户信息, 返回到上次路由
    3). vue自定义事件
       绑定监听: @eventName="fn"  function fn (data) {// 处理}
       分发事件: this.$emit('eventName', data)
    4). 注意:
       使用network查看请求(路径/参数/请求方式/响应数据)
       使用vue的chrome插件查看vuex中的state和组件中的数据
       使用debugger语句调试代码
       实参类型与形参类型的匹配问题

## 2. 搭建商家整体界面
    1). 拆分界面路由
    2). 路由的定义/配置|使用
    3）. 评分插件的开发   评分插件 一种方法  if+for+while

# day04

## 3. 模拟(mock)数据/接口

    1). 前后台分离的理解
    2). mockjs的理解和使用  (自己创造假数据 提高开发效率 不用等后端的接口)
    3). jons数据设计的理解

## 4. ShopHeader组件
    1). 异步显示数据效果的编码流程
        ajax
          ajax请求函数
          接口请求函数
        vuex
          state
          mutation-types
          actions
          mutations
        组件
          dispatch(): 异步获取后台数据到vuex的state
          mapState(): 从vuex的state中读取对应的数据
          模板中显示
    2). 初始显示异常
        情况1: Cannot read property 'xxx' of undefined"
        原因: 初始值是空对象, 内部没有数据, 而模块中直接显示3层表达式
        解决: 使用v-if指令  （v-if 第2层数据）
        
        情况2: Cannot read property 'xxx' of null"
     
    3). vue transition动画
    

  

# day05

## 1. ShopGoods组件
    1). 动态展现列表数据
    2). 基本滑动:
        使用better-scroll
        理解其基本原理
        创建BScroll对象的时机
          watch + $nextTick()
          callback + $nextTick     
    3). 滑动右侧列表, 左侧同步更新
        better-scroll禁用了原生的dom事件, 使用的是自定义事件
        绑定监听: scroll/scrollEnd
        滚动监听的类型: probeType
        列表滑动的3种类型
            手指触摸
            惯性    2
            编码
        分析:
            类名: current 标识当前分类
            设计一个计算属性: currentIndex
            根据哪些数据计算?
              scrollY: 右侧滑动的Y轴坐标 (滑动过程时实时变化)  onscroll（实时动态监听）  scrollEnd(结束)
              tops: 所有右侧分类li的top组成的数组  (列表第一次显示后就不再变化)
        编码:
            1). 在滑动过程中, 实时收集scrollY
            2). 列表第一次显示后, 收集tops
            3). 实现currentIndex的计算逻辑
    4). 点击左侧列表项, 右侧滑动到对应位置

## 2. CartControl组件
    1). 问题: 更新状态数据, 对应的界面不变化
        原因: 一般方法给一个已有绑定的对象中添加一个新的属性, 这个属性没有数据绑定
        解决: 
            Vue.set(obj, 'xxx', value)才有数据绑定
            this.$set(obj, 'xxx', value)才有数据绑定

## 3. ShopCart组件
    1). 使用vuex管理购物项数据: cartFoods      getters{  totalCount-->return totalPrice--> return }
    2). 解决几个功能性bug

# day06

## 4. Food组件

    1). 父子组件:
        子组件调用父组件的方法: 通过props将方法传递给子组件 (this.$refs.food.togllerShow)
        父组件调用子组件的方法: 通过ref找到子组件标签对象



## 1. ShopRatings组件
    1). 列表的过滤显示    monent  插件  过滤时间
    2). 自定义过滤器   (主要给时间过滤)

## 2. ShopInfo组件
    1). 使用better-scroll实现两个方向的滑动
    1). 通过JS动态操作样式
    2). 解决当前路由刷新异常的bug

## 3. Search组件
    1). 根据关键字来异步搜索显示匹配的商家列表
    2). 如实实现没有搜索结果的提示显示

## 4. 项目优化
    1). 缓存路由组件对象    keep-alive 
    2). 路由组件懒加载     ()=>import('组件的路径')
    3). 图片懒加载:        vue-lazyload
    4). 分析打包文件并优化    打包 需要更改 confing 里面的build 静态资源路径（assetsPublicPath: './'）
    5). 上线  （dist/ index.html, static）
    6). 打包 app   jdk下载