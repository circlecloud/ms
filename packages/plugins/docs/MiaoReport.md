# MiaoReport(喵式报告)

## 插件简介

- 本插件只有一个功能 就是上报当前服务器信息和运行日志到 Ubuntu Paste
- 适用于哪些 有问题 但是不知道怎么提供报错的用户

## 插件命令

- 只有一个 `/mbrp`
- 并且只有 OP 权限用户才可以执行

## 功能预览

- 报告地址 https://paste.ubuntu.com/p/mVjJtb6Xcg/
- 报告详情(已删除无用信息 并不是完整报告)

```
当前报告由 MiaoBugReport(0.0.1) 生成 作者 MiaoWoo 官网 https://w.yumc.pw
生成时间: 2021-02-13 21:52:54
============================== 以下为本次报告内容 ==============================
服务器版本: git-Spigot-dcd1643-e60fc34 (MC: 1.12.2)
Bukkit版本: 1.12.2-R0.1-SNAPSHOT
============================== 运行数据 ==============================
运行时间: 1 小时 25 分 48 秒
CPU 核心: 16
最大内存: 7282 MB
分配内存: 626 MB
空闲内存: 307 MB
============================== 数据统计 ==============================
世界列表: 
 - world(NORMAL)
    - 已加载区块: 272
    - 实体数量: 146
    - Tile数量: 10
    - 玩家数量: 0
 - world_nether(NETHER)
    - 已加载区块: 0
    - 实体数量: 0
    - Tile数量: 0
    - 玩家数量: 0
 - world_the_end(THE_END)
    - 已加载区块: 0
    - 实体数量: 0
    - Tile数量: 0
    - 玩家数量: 0
在线玩家: Mr_jtb
插件列表: MiaoBugReport(0.0.1)
============================== 服务器线程堆栈 ==============================
"Spigot Metrics Thread" daemon prio=5 id=32
	java.lang.Thread.State: TIMED_WAITING
	 at java.lang.Object.wait(Native Method)
	 at java.util.TimerThread.mainLoop(Unknown Source)
	 at java.util.TimerThread.run(Unknown Source)

"Spigot Watchdog Thread" prio=5 id=31
	java.lang.Thread.State: TIMED_WAITING
	 at java.lang.Thread.sleep(Native Method)
	 at org.spigotmc.WatchdogThread.run(WatchdogThread.java:92)

"Server thread" prio=5 id=26
	java.lang.Thread.State: TIMED_WAITING
	 at java.lang.Thread.sleep(Native Method)
	 at net.minecraft.server.v1_12_R1.MinecraftServer.run(MinecraftServer.java:560)
	 at java.lang.Thread.run(Unknown Source)

"Server console handler" daemon prio=5 id=29
	java.lang.Thread.State: RUNNABLE
	 at org.fusesource.jansi.internal.Kernel32.ReadConsoleInputW(Native Method)
	 at org.fusesource.jansi.internal.Kernel32.readConsoleInputHelper(Kernel32.java:761)
	 at org.fusesource.jansi.internal.Kernel32.readConsoleKeyInput(Kernel32.java:794)
	 at org.fusesource.jansi.internal.WindowsSupport.readConsoleInput(WindowsSupport.java:97)
	 at org.bukkit.craftbukkit.libs.jline.WindowsTerminal.readConsoleInput(WindowsTerminal.java:215)
	 at org.bukkit.craftbukkit.libs.jline.WindowsTerminal.access$000(WindowsTerminal.java:55)
	 at org.bukkit.craftbukkit.libs.jline.WindowsTerminal$1.read(WindowsTerminal.java:157)
	 at org.bukkit.craftbukkit.libs.jline.internal.NonBlockingInputStream.read(NonBlockingInputStream.java:169)
	 at org.bukkit.craftbukkit.libs.jline.internal.NonBlockingInputStream.read(NonBlockingInputStream.java:137)
	 at org.bukkit.craftbukkit.libs.jline.internal.NonBlockingInputStream.read(NonBlockingInputStream.java:246)
	 at org.bukkit.craftbukkit.libs.jline.internal.InputStreamReader.read(InputStreamReader.java:261)
	 at org.bukkit.craftbukkit.libs.jline.internal.InputStreamReader.read(InputStreamReader.java:198)
	 at org.bukkit.craftbukkit.libs.jline.console.ConsoleReader.readCharacter(ConsoleReader.java:2145)
	 at org.bukkit.craftbukkit.libs.jline.console.ConsoleReader.readLine(ConsoleReader.java:2349)
	 at net.minecraft.server.v1_12_R1.DedicatedServer$2.run(DedicatedServer.java:85)

"Netty Server IO #0" daemon prio=5 id=34
	java.lang.Thread.State: RUNNABLE
	 at sun.nio.ch.WindowsSelectorImpl$SubSelector.poll0(Native Method)
	 at sun.nio.ch.WindowsSelectorImpl$SubSelector.poll(Unknown Source)
	 at sun.nio.ch.WindowsSelectorImpl$SubSelector.access$400(Unknown Source)
	 at sun.nio.ch.WindowsSelectorImpl.doSelect(Unknown Source)
	 at sun.nio.ch.SelectorImpl.lockAndDoSelect(Unknown Source)
	 at sun.nio.ch.SelectorImpl.select(Unknown Source)
	 at io.netty.channel.nio.SelectedSelectionKeySetSelector.select(SelectedSelectionKeySetSelector.java:62)
	 at io.netty.channel.nio.NioEventLoop.select(NioEventLoop.java:753)
	 at io.netty.channel.nio.NioEventLoop.run(NioEventLoop.java:409)
	 at io.netty.util.concurrent.SingleThreadEventExecutor$5.run(SingleThreadEventExecutor.java:884)
	 at java.lang.Thread.run(Unknown Source)
...忽略其他线程信息
============================== 本次运行日志 ==============================
[20:27:18] [Server thread/INFO]: Starting minecraft server version 1.12.2
...忽略启动日志
[20:27:27] [Server thread/INFO]: [MiaoBugReport] Enabling MiaoBugReport v0.0.1
[20:27:28] [Server thread/INFO]: Server permissions file permissions.yml is empty, ignoring it
[20:27:28] [Server thread/INFO]: Done (8.205s)! For help, type "help" or "?"
[20:27:53] [Craft Scheduler Thread - 0/INFO]: [0;33;22m[[0;36;1mMiaoBugReport[0;33;22m][m [0;32;1m正在生成日志数据...[m
[20:27:55] [Craft Scheduler Thread - 0/INFO]: [0;33;22m[[0;36;1mMiaoBugReport[0;33;22m][m [0;32;1m正在上报数据至UbuntuPaste...[m
[20:27:55] [Craft Scheduler Thread - 0/INFO]: [0;33;22m[[0;36;1mMiaoBugReport[0;33;22m][m [0;32;1m数据上报完成 您可以分享地址给他人[m
============================== 报告结束 ==============================
```

## 下载地址

