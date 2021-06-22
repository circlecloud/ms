# MiaoLobby

## 插件简介

- 用户进入服务器/用户登录后 自动选择大厅进行传送 防止堆积在登录服
- 支持配置 是否登录后自动分配 或 玩家手动执行随机分配
- 支持通过 ActionBar 展示传送状态

### 插件截图

- ![1.png](https://i.loli.net/2021/04/01/3JrtjupKHzAegwm.png)
- ![2.png](https://i.loli.net/2021/04/01/CgTRIHaUbX7uKJ1.png)

### 插件配置

```yaml
#配置文件版本 请勿修改
Version: 1.5

#服务器列表
Servers:
- lobby1
- lobby2
#传送超时时间(单位: Tick)
WaitTime: 35
#自带传送(如果开启 则Login自动传送失效)
AutoTP: false
#登录自动传送(暂时支持AuthMe)
LoginAutoTP: true
#传送延时(单位: 秒)
AutoTPDelay: 10
#尝试完毕后是否继续重试
ReTry: true
#传送提示
Message: '&a请稍候 正在传送至服务器 %s ...'
TimeOut: '&c传送超时 正在切换到服务器 %s ...'
TPDelay: '&a登陆成功 正在为您匹配服务器 剩余 %s 秒...'
Unavailable: '&4已尝试所有可用服务器 传送失败!'
```

### 插件命令

```
插件注册命令:
 - MiaoLobby
   别名: ml
   描述: MiaoLobby - Minecraft 服务器插件父项目
   权限: MiaoLobby.reload
   用法: 使用/MiaoLobby help 查看帮助!
```

### 插件权限

```
插件注册权限:
 - MiaoLobby.default - MiaoLobby 默认权限!
 - MiaoLobby.admin - MiaoLobby 管理员权限!
 - MiaoLobby.reload - 重新载入插件!
```

### 插件下载

[attach]1802025[/attach]

### Miao系列插件

- [[经济]MiaoReward —— 喵式奖励 让玩家看广告为服务器提供收入吧[1.7.10+全版本]](https://www.mcbbs.net/thread-1121423-1-1.html)
- [[编程]MiaoBlockly —— 喵式积木 用简单的积木来写插件吧[1.12.2+全版本]](https://www.mcbbs.net/thread-1129411-1-1.html)
- [[编程]MiaoConsole —— 喵式终端 通过MC端口直接控制服务器 调试插件[1.12.2+全版本]](https://www.mcbbs.net/thread-1129227-1-1.html)
- [[管理]MiaoBind —— 喵式绑定 兼容SoulBound的绑定插件 支持自定义关键词[1.7+全版本]](https://www.mcbbs.net/thread-922072-1-1.html)
- [[信息]MiaoBoard —— 喵式记分板 自定义动态记分板[1.7+全版本]](https://www.mcbbs.net/thread-631482-1-1.html)
- [[聊天]MiaoChat —— 喵式聊天 多功能自定义聊天格式 新增支持跨服[1.7.10+全版本]](https://www.mcbbs.net/thread-631240-1-1.html)
- [[菜单]MiaoMenu —— 喵式菜单 强大的自定义菜单 支持多种自定义操作[1.7+全版本]](https://www.mcbbs.net/thread-860047-1-1.html)
- [[管理]YUM —— 全能的服务器插件管理工具 全自动安装插件 更新插件[1.7.2+全版本]](https://www.mcbbs.net/thread-701333-1-1.html)

#### 本插件所用所有代码均为原创,不存在借用/抄袭等行为
