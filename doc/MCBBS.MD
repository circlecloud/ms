- 构建状态 [![Build Status](https://ci.yumc.pw/job/Minecraft/job/MiaoScript/badge/icon?style=flat-square)](https://ci.yumc.pw/job/Minecraft/job/MiaoScript/)
- 当前版本 ![Build Status](https://ci.yumc.pw/job/Minecraft/job/MiaoScript/badge/icon?style=flat-square&subject=version&status=0.1.0beta&color=darkturquoise)
- 下载地址 [![Build Status](https://ci.yumc.pw/job/Minecraft/job/MiaoScript/badge/icon?style=flat-square&subject=download&status=MiaoScript&color=darkgreen)](http://w.yumc.pw/free.html#MiaoScript-download)
- 为了方便阅读 我对帖子进行了分页 请点击目录阅读!

### 更新日志

- 2020-03-03
  - 发布 `v0.3.1` 版本
- 2020-03-02
  - 杂项 更新文档以及示例插件
- 2020-03-01
  - 修复 多个包之间的循环依赖问题
  - 优化 `@ms/types` 的引用逻辑
- 2020-02-29
  - 更新 `TypeScript` 版本为 `3.8.3`
  - 新增 `@ms/common` 的 `http` 下载功能
- 2020-02-27
  - 发布 `v0.3.0` 版本
  - 新增 `@ms/i18n` 国际化包的支持
  - 修复 `@ms/plugin` 对 `servers` 相关处理异常
  - 优化 `@ms/api` 的 `Channel` 处理增加 扩展原始数据
- 2020-02-26
  - 优化 `@ms/container` 使用 `autoProvide` 自动注入依赖
- 2020-02-25
  - 修复 `@ms/api` 对 `evnet` 的类型处理异常
- 2020-02-24
  - 发布 `v0.2.1` 版本
  - 完善 对 `Nukkit` 端的支持
  - 新增 `@ms/api` 通道相关的支持
- 2020-02-23
  - 新增 `@ms/nukkit` 包 对 `Nukkit` 端的支持
  - 新增 `@ms/type` 的 `nukkit` 类型自动补全
- 2020-02-22
  - 发布 `v0.2.0` 版本
  - 新增 `@ms/plugin` 的 `@config` 注解 目前支持 `json` `yml` 格式的配置
- 2020-02-15
  - 新增 `SourceMap` 的支持 用于跟踪源代码行数
- 2020-02-09
  - 新增 `core-js` 用于支持大部分新ES语法
- 2020-01-31
  - 优化 `@ms/ployfill` 全局处理
- 2020-01-15
  - 新增 `@ms/bungee` 包 对 `BungeeCord` 端的支持
- 2020-01-14
  - 新增 `@ms/type` 的 `bungee` 类型自动补全
- 2019-11-10
  - 新增 `WebSocket` 的注入支持
- 2019-11-07
  - 新增 `@ms/type` 的 `jdk` 类型自动补全
- 2019-09-27
  - 新增 `CatServer` MOD端的支持
- 2019-09-25
  - 新增 `@ms/type` 的 `sponge` 类型自动补全
- 2019-09-24
  - 新增 `@ms/type` 的 `bukkit` 类型自动补全

## 插件简介

- 此插件可以实现跨端使用 `TypeScript` 开发 脚本插件
- 目前已经兼容 `Spigot` `Sponge` `Paper` `CatServer` `BungeeCord` `Nukkit`
- 后续计划兼容 暂无

## 起源 (可以略过)

### 简介

> 这个坑是我自己刨的 但是发现坑太大 需要更多的人一起填

### 起源

- 诞生于 `2016年08月25日` 这是 Git 上的第一个提交 具体啥时候我也忘了
- 起初 `MiaoScript` 只是用于服务器其他插件的变量执行 并且依赖于PAPI(不知道是啥的自己百度)
  - 比如 [`MiaoMenu`](http://w.yumc.pw/zc/MiaoMenu.html) 的部分复杂脚本 
  - 比如 [`MiaoChat`](http://mcbbs.net/thread-631240-1-1.html) 的聊天变量
- 突然有一天 圈内的大佬 `QSB` @qiu1995 过来找我 说能不能用脚本监听玩家的事件
  - PS: 这货自从用过 `DeluxeMenu` 之后就喜欢上了用JS写菜单
- 当初感觉没啥问题 就出了第一个简易的 `MiaoScript` 版本 还是用 yml 做的配置文件
- 但是由于设计 BukkitAPI 等内容 对Java要求太高 后来 邱也弃坑了 我也弃坑了

### 刨坑

- 时隔多年(也就一年) 看到了Sponge的兴起 (估摸着是MCPC系列的MOD端都弃坑了)
- 同时 这期间 收到很多腐竹的单子 但是又是非常基础的东西
  - 比如 开服给玩家发一条消息啦
  - 比如 修改玩家某些数据啦
- 这些东西实际上也就几行代码的事情
- 同时 很多想入坑 插件开发 但是又有一些被卡死在环境搭建上
  - 比如 `Bukkit` 需要 `BukkitAPI`
  - `Sponge` 需要 `SpongeAPI` 如果涉及 `MOD` 还要 `Forge` 环境
  - 再或者 BungeeCord 的插件开发 我也是经常懒得搞
- 当然 最主要的是 某个 咕咕咕的群 天天有人问我 喵系插件能不能支持 Sponge
  - 内心当然是拒绝的 现在要上班养老婆孩子(咳咳 不要以为我是大叔 我也才刚毕业而已) 那里还有时间免费给你们写插件
- 于是乎 我又想起了当初的 `MiaoScript`
- 突发奇想 一个插件的雏形出现在我的脑海中
  - 可以兼容多种服务器
  - 不需要开发环境 有记事本就可以开发
  - 语法要简单 比如 JavaScript
  - 能够自动搜索安装依赖(毕竟很多人天天问我为何喵系插件跑不起来 都是缺少PAPI)
  - 能够不重启更新插件(当然得保证代码安全的前提下)
- 在 2017年9月14号(距离 第一个版本正式版发布(2016-09-21) 相差一年整)
- 一个全新的 `MiaoScript` 诞生了
  - Java部分代码 只有一个启动类
  - 核心全部由 JS 编写
  - 兼容 `CommonJS` 规范
  - 实时重载
- 2019年9月14号 emm 咸鱼2年之后
  - TypeScript 重构版本横空出世
  - 只保留 基础Java启动类 三个环境初始化js
  - 完整的服务端Java类自动补全
  - 全新的 IOC容器 注入功能
  - 注解式 注册命令 注册事件
- 2020年3月2日 发布0.3.0版本
  - 支持 Bukkit Nukkit BungeeCord Sponge

### 进展

- [项目发布](https://git.yumc.pw/502647092/MiaoScript/releases)
- [项目代码](https://git.yumc.pw/502647092/MiaoScript)
- [项目脑图](http://naotu.baidu.com/file/293b9a0fc7cef23c69de81c55e3617d5?token=1eee8fd759198eb7)

### 规划

- 初期只会支持JS类型的插件开发
- 二期会出一个建议版本的MS脚本 可以用简单的语法实现简单的功能
- 各个层级会有依赖控制 比如 `MS脚本 => JS脚本 => 调用Java原生API`

## 框架设计 

### MiaoScript TS 实现

项目具体实现 由 TypeScript 进行编写 然后编译至 `es5` 用于兼容 Java8 的 `Nashorn`

### Project Structure

```txt
└─packages
    ├─api         全平台兼容的接口
    ├─core        核心代码 用于引导加载
    ├─common      公共类库代码 例如 http reflect 模块
    ├─client      NodeJS的Minecraft客户端 用于调试插件
    ├─container   IOC容器 用于注入具体实现
    ├─ployfill    Nashorn 的一些自定义增强
    ├─nashorn     Nashorn 的类型定义
    ├─bungee      BungeeCordAPI内部实现
    ├─bukkit      BukkitAPI内部实现
    ├─sponge      SpongeAPI内部实现
    ├─nukkit      NukkitAPI内部实现
    ├─ployfill    JS环境的相关环境补全
    ├─plugin      插件管理器
    ├─websocket   Netty的WebSocket注入
    ├─type        Java的类型定义
    |   ├─bungee  BungeeCord类型定义
    |   ├─bukkit  Bukkit类型定义
    |   ├─sponge  Sponge类型定义
    |   └─nukkit  Nukkit类型定义
    └─plugins     这里当然是插件啦
        ├─bungee  只兼容BungeeCord的插件
        ├─bukkit  只兼容Bukkit的插件
        ├─sponge  只兼容Sponge的插件
        └─nukkit  只兼容Nukkit的插件
```

详细的内容就不逼逼了 自己看代码吧

Github: https://github.com/circlecloud/ms
YUMC: https://git.yumc.pw/circlecloud/ms

## 插件开发基础

### 开发IDE (推荐VSCode或者MiaoScrit在线IDE)

如果只是简单的开发 你可用记事本 (但是没有任何补全和错误提示)

### 开发环境准备(针对高级用户)

- 安装 `NodeJS` 和 `Yarn`
- 拉取代码
  - `git clone https://github.com/circlecloud/ms.git`
- 进入目录 `ms`
- 安装 npm 包
  - `yarn`
- 建立内部依赖链接
  - `yarn bs`
- 编译一次生成对应的类库
  - `yarn build`
- 编译插件
  - `yarn build:plugins`

### 直接在 MiaoScript Online WebIDE 开发

填坑中...

## 基本插件框架

### HelloWorld 示例插件

先来一个 `HelloWorld.ts` 插件示范!

```ts
/// <reference types="@ms/types" />

import { server } from '@ms/api';
import { inject } from '@ms/container';
import { plugin, interfaces, cmd, listener, tab } from '@ms/plugin'

@plugin({ name: 'HelloWorld', version: '1.0.0', author: 'MiaoWoo', source: __filename })
export class HelloWorld extends interfaces.Plugin {
    @inject(server.Server)
    private Server: server.Server
    @config()
    private config = {
        version: 1.0.0
    }

    load() {
        this.logger.log('Plugin load from MiaoScript Plugin System...');
    }
    enable() {
        this.logger.log('Plugin enable from MiaoScript Plugin System...');
    }
    disable() {
        this.logger.log('Plugin disable from MiaoScript Plugin System...');
    }

    bukkitload() {
        this.logger.log('Load When ServerType is Bukkit!')
    }
    bukkitenable() {
        this.logger.log('Enable When ServerType is Bukkit!')
    }
    bukkitdisable() {
        this.logger.log('Disable When ServerType is Bukkit!')
    }

    spongeload() {
        this.logger.log('Load When ServerType is Sponge!')
    }
    spongeenable() {
        this.logger.log('Enable When ServerType is Sponge!')
    }
    spongedisable() {
        this.logger.log('Disable When ServerType is Sponge!')
    }

    bungeeload() {
        this.logger.log('Load When ServerType is BungeeCord!')
    }
    bungeeenable() {
        this.logger.log('Enable When ServerType is BungeeCord!')
    }
    bungeedisable() {
        this.logger.log('Disable When ServerType is BungeeCord!')
    }

    nukkitload() {
        this.logger.log('Load When ServerType is Nukkit!')
    }
    nukkitenable() {
        this.logger.log('Enable When ServerType is Nukkit!')
    }
    nukkitdisable() {
        this.logger.log('Disable When ServerType is Nukkit!')
    }

    @cmd()
    hello(sender: any, command: string, args: string[]) {
        this.logger.log(sender, command, args);
        sender.sendMessage(JSON.stringify({ command, ...args }))
    }

    @tab()
    tabhello(_sender: any, _command: string, _args: string[]) {
        return ['world']
    }

    // bukkit nukkit 大部分API神似 可以直接用
    @listener({ servers: ['bukkit', 'nukkit'] })
    PlayerJoin(event: org.bukkit.event.player.PlayerJoinEvent) {
        let plyaer = event.getPlayer();
        this.logger.console(`§cBukkit §aPlayerJoinEvent: §b${plyaer.getName()}`)
        setTimeout(() => this.sendWelcome(plyaer), 10);
    }

    @listener({ servers: ['sponge'] })
    ClientConnectionEvent$Join(event: org.spongepowered.api.event.network.ClientConnectionEvent.Join) {
        this.logger.console(`§cSponge §aClientConnectionEvent.Join: §b${event.getTargetEntity().getName()}`)
        setTimeout(() => this.sendWelcome(event.getTargetEntity()), 10);
    }

    private sendWelcome(player: any) {
        this.logger.sender(player, `§a欢迎来到 §bMiaoScript §a的世界!`)
        this.logger.sender(player, `§6当前版本: §c${this.Server.getVersion()}`)
    }

    @listener({ servers: ['bungee'] })
    ServerConnected(e: any) {
        let event = e as net.md_5.bungee.api.event.ServerConnectedEvent
        this.logger.console(`§cBungeeCord §aServerConnectedEvent: §b${event.getPlayer().getDisplayName()}`)
        setTimeout(() => this.logger.sender(event.getPlayer(), `§a欢迎来到 §bMiaoScript §a的世界 §6来自 §cBungeeCord §6的问候!`), 10);
    }
}
```

- 进入 `ms`目录
- 执行编译 `yarn build:plugins`
- 从 `packages/plugins/dist` 中复制 `HelloWorld.js` 和 `HelloWorld.js.map`(可选 用于显示插件原有行数) 文件 到对应的插件目录
  - Bungee: plugins/MiaoScript/plugins/
  - Bukkit: plugins/MiaoScript/plugins/
  - Sponge: config/miaoscript/plugins/
  - Nukkit: plugins/MiaoScript/plugins/
- 重载 `MiaoScript`
- 打开客户端进入游戏 预览一下效果
- 从 Spigot 服务端进入
![image.png](https://i.loli.net/2019/09/22/2BZuwF65WV1xGnv.png)
![image.png](https://i.loli.net/2019/09/22/m2CftwbalnXsxvg.png)
- 从 Sponge 服务端进入
![image.png](https://i.loli.net/2019/09/22/QD1jrShtJpPXyVl.png)
![image.png](https://i.loli.net/2019/09/22/GzLFVC3sjAJ4obm.png)

## 注册插件

- 从上面的示例可以看到 一个插件 通过注解 `@plugin` 即可启动
- 此注解接受一个 `PluginMetadata` 对象 定义如下
```ts
export interface PluginMetadata {
    /**
        * 插件名称
        */
    name: string;
    /**
     * 支持的服务器列表 为空则代表所有
     */
    servers?: string[];
    /**
        * 前缀
        */
    prefix?: string;
    /**
        * 插件版本
        */
    version: string;
    /**
        * 插件版本
        */
    author: string | string[];
    /**
        * 插件源文件 必须指定为 __filename
        */
    source: string;
    /**
        * 插件本体
        */
    target?: any;
}
```

### 插件生命周期

MiaoScript 的生命周期遵循了 Bukkit 的生命周期

MiaoScript 针对不同的服务端 提供了扩展的周期
以服务端类型开头阶段名结束 例如 `bukkitload` `spongeenbale` `bungeedisable`
扩展的生命周期只会在特定的服务器执行

### load 加载阶段

此阶段通常用于初始化基础配置 数据库链接等
某些对外提供功能的插件 需要在此阶段初始化完成

### enable 启动阶段

此阶段通常用于注册命令 注册事件等
由于命令和事件 MiaoScript 已经托管了 所以开发者可以直接用注解实现

### disable 关闭阶段

此阶段通常用于注销命令 注销事件等
由于命令和事件 MiaoScript 已经托管了 所以开发者可以直接用注解实现

## 注册命令/补全

### cmd 命令

命令 就是玩家在Minecraft中执行命令 下面是一个示例的命令

- 命令是一个 `function` 通过 `@cmd` 注解注册
- 由于不同的服务端有不同的逻辑 所以支持通过 `servers` 指定注册的类型 加上 `!` 代表不注册 不指定 `servers` 则注册所有的类型
- 命令注册时默认使用方法名称为命令名称 当前你可以传入 name 参数指定命令名称 例如 `{name: 'test'}` 
- 接受三个参数 `sender: any, command: string, args: string[]`
- 分别代表 命令发送者 命令名称 命令参数

```ts
@cmd({ servers: ["bukkit", "sponge", "!bungee"] })
hello(sender: any, command: string, args: string[]) {
    this.logger.log(sender, command, args);
    this.logger.sender(sender, JSON.stringify({ command, args }));
}
```

### tab 补全

补全就是 玩家在Minecraft执行命令时 使用 Tab键 补全

- 补全是一个 `function` 一般以 `tab` 开头 需要补全的命令结尾 通过 `@tab` 注解注册
- 补全注册时默认使用方法名称为补全名称 当前你可以传入 name 参数指定命令名称 例如 `{name: 'test'}` 
- 接受三个参数 `sender: any, command: string, args: string[]`
- 分别代表 命令发送者 命令名称 命令参数

_注意: 当补全命令未注册时 补全无效! 且补全和命令必须在同一个Class内!_

```ts
@tab()
tabhello(_sender: any, _command: string, _args: string[]) {
    return ['world']
}
```

## 监听事件

事件是指 Minecraft 中发生的各种事情

- 监听事件是一个 `function` 通过 `@listener` 注册
- 由于不同的服务端有不同的逻辑 所以支持通过 `servers` 指定注册的类型 加上 `!` 代表不注册 不指定 `servers` 则注册所有的类型
- 事件名称默认为方法名称
  - 所有类型服务端的事件 MiaoScript 都会进行一次映射 方便使用
  - 例如 `PlayerJoinEvent` 会映射为 `PlayerJoinEvent, playerjoinevent, playerjoin` 等
  - 一般规则就是 类名直接小写 如果遇到子类 则保留 `$`
  - 例如 `ClientConnectionEvent.Join` 会映射为 `clientconnectionevent$join`
- 事件的注可以传入 `servertype` 来指定这个事件类型的服务端加载 默认是所有服务端都加载
- 事件监听方法的第一个参数就是本次事件的具体内容 (这里就需要自己去查询对应的JavaDoc了)

```ts
// bukkit nukkit 大部分API神似 可以直接用
@listener({ servers: ['bukkit', 'nukkit'] })
PlayerJoin(event: org.bukkit.event.player.PlayerJoinEvent) {
    let plyaer = event.getPlayer();
    this.logger.console(`§cBukkit §aPlayerJoinEvent: §b${plyaer.getName()}`)
    setTimeout(() => this.sendWelcome(plyaer), 10);
}

@listener({ servers: ['sponge'] })
ClientConnectionEvent$Join(event: org.spongepowered.api.event.network.ClientConnectionEvent.Join) {
    this.logger.console(`§cSponge §aClientConnectionEvent.Join: §b${event.getTargetEntity().getName()}`)
    setTimeout(() => this.sendWelcome(event.getTargetEntity()), 10);
}

private sendWelcome(player: any) {
    this.logger.sender(player, `§a欢迎来到 §bMiaoScript §a的世界!`)
    this.logger.sender(player, `§6当前版本: §c${this.Server.getVersion()}`)
}

@listener({ servers: ['bungee'] })
ServerConnected(e: any) {
    let event = e as net.md_5.bungee.api.event.ServerConnectedEvent
    this.logger.console(`§cBungeeCord §aServerConnectedEvent: §b${event.getPlayer().getDisplayName()}`)
    setTimeout(() => this.logger.sender(event.getPlayer(), `§a欢迎来到 §bMiaoScript §a的世界 §6来自 §cBungeeCord §6的问候!`), 10);
}
```

## 配置文件

配置文件 默认读取的是 `MiaoScript根目录/plugins/插件名称/配置名称.配置格式`

例如下面文件 默认处理的是 `plugins/MiaoScript/plugins/HelloWorld/config.yml`

```ts
@config()
private config = {
    version: 1.0.0
}
```

## 插件列表

暂无

> 注意: 一楼的列表是老版本的 新版本无法加载!
