## 前言

> 各位开发 在调试Minecraft插件的时候 是不是经常面临下列情况
- 编译等半天 重启等半天 测试找不到问题
- 后台 IDE SCP/FTP 来回切换

### 什么是MiaoConsole
- MiaoConsole 是 基于 MiaoScript 开发的 在线调试工具
- 通过复用 Minecraft的Netty 通道 实现服务器端口 在线调试(并不是Java的调试哦)

### 工具动图

![](https://i.loli.net/2020/05/15/YxjRVZ7yGS5aHKT.gif)
![](https://i.loli.net/2020/05/15/vTWSZlYD4nmpwKr.gif)

### MiaoConsole 有哪些功能
- 无需编译 上传等步骤 实时在线debug
- 实时转发服务端日志 无需来回切换
- 基于Nashorn的动态脚本语言
- 基于TypeScript的自动补全逻辑(以实现BungeeCord Sponge Bukkit的API全自动补全)

### MiaoConsole 的兼容性
- 跨端兼容 Sponge Bukkit BungeeCord
  - Bukkit 支持 1.12.2 +(由于1.12.2以下版本Netty版本过老需要适配 后续兼容到1.7.10)
  - Sponge 理论上全兼容
  - CatServer 暂未测试 理论上兼容 1.12.2
  - BungeeCord ~~终端转发暂未兼容~~ 已经能兼容了

### 安装教程
- 安装MiaoScript [下载地址](http://w.yumc.pw/free.html#MiaoScript-download)
- 首次启动 等待加载基础环境类库
- 执行 `mpm i MiaoConsole`

### 使用教程
- 执行 `mconsole token` 获得临时Token
- 打开 `http://ms.yumc.pw/console.html`
- 在地址栏输入服务器地址 需要带上端口
- 在Token栏输入获取到的Token
- 点击链接即可

### 终端使用
- 支持实时传输服务器日志到终端
- 直接在终端输入命令 会转发到服务器
- 目前暂不支持命令自动补全
- 支持命令历史

### 代码编辑器使用
- 支持 Java 的 lang包和util包自动补全
- 支持服务端所有代码补全
- 注意 暂时不支持自动导入包 所以需要手动输入全类名
- 快捷键说明(选中代码后 只会执行选中部分)
  - Ctrl + R 执行代码
  - Ctrl + E 执行命令
  - Ctrl + Q 切换代码页

### RoadMap
- 支持命令自动补全
- 支持常用的开发脚本
- 支持快捷操作服务器数据
- 支持在线编辑服务器文件(开发了一半)
