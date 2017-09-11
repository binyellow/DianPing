## 1. container组件：
    . 处理redux数据
    . 复杂页面(例如Home)可以创建subpage来处理
    . 运用路由可以在component组件的Link重新指向container组件来处理数据
## 2. component组件：
    . 一定要充分组件复用，并且拆分样式文件，以便后期维护更新
## 3. Router：
    . history决定路由的显示格式(hashHistory、browserHistory)
    . Router可以嵌套Route组件，并且Route也可以嵌套
    . 最外层Route可以通过path="/"定义主页面
    . 每个Route有path和component属性