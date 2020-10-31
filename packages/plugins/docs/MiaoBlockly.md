# MiaoBlockly

## 前言

- 嗯 我又来了
- 之前承诺的 MiaoScript 腐竹可以用的版本
- 第一个 Demo 版本 MiaoBlockly 写完了

### 什么是 MiaoBlockly

#### ~~对于开发者~~(开发一般不会用这玩意儿)

#### 对于腐竹
- 可以在网页上开发一些简单的插件
- 拖动方块就能实现了

### 图片展示

![image.png](https://i.loli.net/2020/10/22/R8nlf9WtVYDXoa3.png)

### MiaoBlockly 的兼容性
- 跨端兼容 Sponge Bukkit BungeeCord
  - Bukkit 支持 1.12.2 +(由于1.12.2以下版本Netty版本过老需要适配 后续兼容到1.7.10)
  - Sponge
  - CatServer 1.12.2+
  - BungeeCord

### 安装教程
- 安装 `MiaoConsole` [站内地址](https://www.mcbbs.net/thread-1129227-1-1.html) 没错 就是装 MiaoConsole
- 因为 `MiaoBlockly` 底层还是运行的 js 只是用 `Blockly` 生成了代码而已
- 需要 `MiaoConsole` 是因为需要和服务器通信

### 使用教程
- 查看启动日志 获取临时 `Token`
  - 或者 执行 `mconsole token` 获得临时Token
- 打开 `http://ms.yumc.pw/blockly.html`
- 在地址栏输入服务器地址 需要带上端口
- 在 Token 栏输入获取到的 Token
- 点击链接即可

### 编辑器使用
- 默认界面有一个插件主体
- 拖动积木 右侧会自动生成代码
- 在代码界面 按下 `Ctrl + S` 代码会自动传送到服务器 并且重载插件
- 更多功能还在开发

### RoadMap
- 开发聊天相关功能
- 完善事件相关功能
- 开发命令相关功能
- 开发跨服相关功能
- 统一各个端之间的事件(工作量较大 可能会咕咕咕)
- 脚本商城 方便开发和腐竹之前的 PY 交易
- 脚本打包成 Jar 方便部署

### Miao系列插件

- [[经济]MiaoReward —— 喵式奖励 让玩家看广告为服务器提供收入吧[1.7.10+全版本]](https://www.mcbbs.net/thread-1121423-1-1.html)
- [[编程]MiaoBlockly —— 喵式积木 用简单的积木来写插件吧[1.12.2+全版本]](https://www.mcbbs.net/thread-1129411-1-1.html)
- [[编程]MiaoConsole —— 喵式终端 通过MC端口直接控制服务器 调试插件[1.12.2+全版本]](https://www.mcbbs.net/thread-1129227-1-1.html)
- [[管理]MiaoBind —— 喵式绑定 兼容SoulBound的绑定插件 支持自定义关键词[1.7+全版本]](https://www.mcbbs.net/thread-922072-1-1.html)
- [[信息]MiaoBoard —— 喵式记分板 自定义动态记分板[1.7+全版本]](https://www.mcbbs.net/thread-631482-1-1.html)
- [[聊天]MiaoChat —— 喵式聊天 多功能自定义聊天格式 新增支持跨服[1.7.10+全版本]](https://www.mcbbs.net/thread-631240-1-1.html)
- [[菜单]MiaoMenu —— 喵式菜单 强大的自定义菜单 支持多种自定义操作[1.7+全版本]](https://www.mcbbs.net/thread-860047-1-1.html)
- [[管理]YUM —— 全能的服务器插件管理工具 全自动安装插件 更新插件[1.7.2+全版本]](https://www.mcbbs.net/thread-701333-1-1.html)

本插件所用所有代码均为原创,不存在借用/抄袭等行为
