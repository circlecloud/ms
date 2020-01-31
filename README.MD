# MiaoScript implement

## MiaoScript JS 实现

项目 由 TypeScript 进行编写 然后编译至 `es5` 用于兼容 Java8 的 `Nashorn`

### Project Path

```txt
└─packages
    ├─api         全平台兼容的接口
    ├─core        核心代码 用于引导加载
    ├─common      公共类库代码 例如 http reflect 模块
    ├─compile     实时编译模块 自动编译TS文件为js
    ├─container   IOC容器 用于注入具体实现
    ├─nashorn     Nashorn 的类型定义
    ├─ployfill    Java Nashorn的补丁
    ├─bungee      BungeeCordAPI内部实现
    ├─bukkit      BukkitAPI内部实现
    ├─sponge      SpongeAPI内部实现
    ├─plugin      插件管理器
    ├─manager     插件管理中心后端服务
    ├─types       Java在TypeScript的类型定义文件
    ├─websocket   Netty的WebSocket的MiaoScript实现(兼容socket.io)
    └─plugins     这里当然是插件啦
        ├─bungee  只兼容BungeeCord的插件
        ├─bukkit  只兼容Bukkit的插件
        └─sponge  只兼容Sponge的插件
```
