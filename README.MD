# MiaoScript implement

## MiaoScript JS 实现

项目 由 TypeScript 进行编写 然后编译至 `es5` 用于兼容 Java8 的 `Nashorn`

### Project Path

```txt
└─packages
    ├─api            全平台兼容的接口
    ├─core           核心代码 用于引导加载
    ├─common         公共类库代码 例如 http reflect 模块
    ├─compile        编译器相关功能
    ├─client         NodeJS 的 Minecraft 客户端 已迁移至 ms-client
    ├─container      IOC容器 用于注入具体实现
    ├─database       数据库相关功能
    ├─protocol       协议处理相关功能
    ├─service        服务相关功能
    ├─i18n           多语言环境相关支持
    ├─polyfill       Nashorn 的一些自定义增强
    ├─nashorn        Nashorn 的类型定义
    ├─nodejs         NodeJS 的部分 Java 实现
    ├─bungee         BungeeCordAPI 内部实现
    ├─bukkit         BukkitAPI 内部实现
    ├─sponge         SpongeAPI 内部实现
    ├─nukkit         NukkitAPI 内部实现
    ├─molang         MoLang 解析库
    ├─qrcode         二维码相关类库
    ├─plugin         插件管理器
    ├─websocket      WebSocket 相关实现
    |   ├─client     基于 Netty 的 WebSocket 客户端
    |   └─server     基于 Netty 的 WebSocket 服务端
    └─type           类型定义 已迁移到 @javatypes
```
