# MiaoScript implement

## MiaoScript JS 实现

项目 由 TypeScript 进行编写 然后编译至 `es5` 用于兼容 Java8 的 `Nashorn`

### Project Path

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
