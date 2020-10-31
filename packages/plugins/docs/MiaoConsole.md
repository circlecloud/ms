# MiaoConsole

## 前言

> 各位开发 在调试Minecraft插件的时候 是不是经常面临下列情况
- 编译等半天 重启等半天 测试找不到问题
- 后台 IDE SCP/FTP 来回切换

> 各位腐竹 在开服的时候 是不是经常遇到下列情况
- 修改一个配置文件 经常格式错误
- 各种报错看不懂 插件依赖找不到

### 什么是 MiaoConsole

#### 对于开发者
- MiaoConsole 是 基于 `MiaoScript` 开发的 在线调试工具
- 通过复用 Minecraft 的 Netty 通道 实现服务器端口 `MiaoScript` 在线调试

#### 对于腐竹
- 可以在网页上实时看到服务器日志
- 共享 Token 给插件开发者 让其帮助调试服务器

### 工具动图

![](https://i.loli.net/2020/05/15/YxjRVZ7yGS5aHKT.gif)
![](https://i.loli.net/2020/05/15/vTWSZlYD4nmpwKr.gif)

### MiaoConsole 有哪些功能
- 无需编译 上传等步骤 实时在线debug
- 实时转发服务端日志 无需来回切换
- 基于 Nashorn 的动态脚本语言
- 基于 TypeScript 的自动补全逻辑(以实现BungeeCord Sponge Bukkit的API全自动补全)

### MiaoConsole 的兼容性
- 跨端兼容 Sponge Bukkit BungeeCord
  - Bukkit 支持 1.12.2 +(由于1.12.2以下版本Netty版本过老需要适配 后续兼容到1.7.10)
  - Sponge 理论上全兼容
  - CatServer 暂未测试 理论上兼容 1.12.2
  - BungeeCord ~~终端转发暂未兼容~~ 已经能兼容了

### 安装教程
- 安装 `MiaoScript` [站内地址](https://www.mcbbs.net/thread-774401-1-1.html)
  - 如果你已经安装了 Yum 可以通过 Yum 快速安装 `/yum install MiaoScript`
- 等待 MiaoScript 引擎启动完成(首次启动可能需要10-20秒 依赖于您的网络环境)
- 执行 `mspm i MiaoConsole`

### 使用教程
- 查看启动日志 获取临时 `Token`
  - 或者 执行 `mconsole token` 获得临时Token
- 打开 `http://ms.yumc.pw/console.html`
- 在地址栏输入服务器地址 需要带上端口
- 在 Token 栏输入获取到的 Token
- 点击链接即可

### 终端使用
- 支持实时传输服务器日志到终端
- 直接在终端输入命令 会转发到服务器
- 支持命令自动补全
- 支持命令历史

### 代码编辑器使用
- 支持 Java 的类自动补全
- 支持服务端所有代码补全
- 注意 暂时不支持自动导入包 所以需要手动输入全类名
- 快捷键说明(选中代码后 只会执行选中部分)
  - Ctrl + R 执行代码
  - Ctrl + E 执行命令
  - Ctrl + Q 切换代码页

## 插件源码

- [MiaoScript包管理中心](https://git.yumc.pw/circlecloud/ms/src/branch/master/packages/plugins/src/MiaoConsole.ts)

### RoadMap
- 支持 Java 类的自动补全
- 支持命令自动补全(已完成)
- 支持常用的开发脚本(开发中)
- 支持快捷操作服务器数据(开发中)
- 支持在线编辑服务器文件(开发了一半)
- 配置文件格式效验(开发中)

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
