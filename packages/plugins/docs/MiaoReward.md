# MiaoReward

## 插件简介
- 还在为服务器收入不足而倒闭烦恼嘛
- 还在为肝帝不氪金而烦恼嘛
- 快来接入 喵式奖励
- 通过QQ小程序广告 增加服务器收入

## 插件展示
- 插件帮助![image.png](https://i.loli.net/2020/09/12/uNbwO2sCVriZzJx.png)
- 扫码绑定![image.png](https://i.loli.net/2020/09/13/hOtyV8bP9kGeuCD.png)
- 查看个人信息![image.png](https://i.loli.net/2020/09/12/bTLGjQC7eqxAUSi.png)
- 兑换排行![image.png](https://i.loli.net/2020/09/12/zNbgKQChtj7IikD.png)
- 玩家兑换公告![image.png](https://i.loli.net/2020/09/12/JWFoUtwXBSP6fcA.png)
- 配置兑换比例![image.png](https://i.loli.net/2020/09/12/HpGVWErwZ7YTBxK.png)
- 服务器信息查询![image.png](https://i.loli.net/2020/09/12/CbvSDfg4BF39PLI.png)
- 玩家请求授权![image.png](https://i.loli.net/2020/09/24/QH6Dfp8RYJC5BtL.png)
- 玩家扫码![image.png](https://i.loli.net/2020/09/24/LSuhamJ4ji12EzM.png)
- 玩家扫码确认![image.png](https://i.loli.net/2020/09/24/sKjAl3tImg7buHe.png)
- 玩家扫码兑换完成![image.png](https://i.loli.net/2020/09/24/JG2SBtgHLzNeaEO.png)
- 腐竹扫码确认![image.png](https://i.loli.net/2020/09/24/c7sS18KJvQ3MRuZ.png)
- 腐竹扫码完成![image.png](https://i.loli.net/2020/09/24/RtsoSdV7j6OmE8Q.png)
## 插件命令
```
>mrd
[17:56:54 INFO]: [MS][MRD] ====== [广告系统] 帮助菜单 ======
[17:56:54 INFO]: [MS][MRD] /mrd bind 绑定圈云盒子
[17:56:54 INFO]: [MS][MRD] /mrd query 查询当前账户
[17:56:54 INFO]: [MS][MRD] /mrd draw <兑换数量> 兑换点券
[17:56:54 INFO]: [MS][MRD] 由于您是管理员 以为您展示额外命令
[17:56:54 INFO]: [MS][MRD] /mrd bind server 绑定服务器
[17:56:54 INFO]: [MS][MRD] /mrd ratio <兑换比例> 设置喵币/点券兑换比例
[17:56:54 INFO]: [MS][MRD] /mrd statistic 近期收入统计
[17:56:54 INFO]: [MS][MRD] /mrd rank <boardcast>(是否公告) 今日兑换排行
[17:56:54 INFO]: [MS][MRD] /mrd server 当前服务器信息
[17:56:54 INFO]: [MS][MRD] 兑换比例设置说明: 默认比例为 0.001 => 1000喵币 兑换 1点券
[17:56:54 INFO]: [MS][MRD] 注意 设置比例后 玩家兑换点券数量不能少于 1点券
[17:56:54 INFO]: [MS][MRD] 比如 设置了0.001 那就是 玩家至少 1000喵币 才能兑换!
```

## 插件安装/配置

### 基础准备工作
- QQ搜索小程序 `圈云盒子` 并登录
- 申请内测服务器账号 个人中心 => 配置面板 => 圈云盒子客服群 加群申请

### 服务器准备工作
- 先安装 `MiaoScript` [站内地址]()
  - 可以通过 Yum 快速安装 `/yum install MiaoScript`
- 等待 MiaoScript 引擎启动完成(首次启动可能需要10-20秒 依赖于您的网络环境)
- 执行 `/mspm install MiaoReward`

### 绑定服务器
- 执行 `/mrd bind server`
- 使用QQ扫码
- 选择需要绑定的服务器
- 完成绑定
- 配置服务器兑换比例
- 执行 `/mrd ratio 0.001` (最低为 1:0.0001)
- 执行兑换比例确认指令
- 执行 `/mrd server` 查看服务器信息
- 如需绑定多台 可以直接复制绑定之后的 `MiaoScript/plugins/MiaoReward/config.yml` 文件到多台服务器上 然后 `/mrd reload` 重载插件

### QQ群配置
- 打开小程序
- 登录
- 个人中心 => 设置面板 => 添加到群应用 => 选择你的QQ群
- 配置群快捷栏 个人中心 => 设置面板 => 查看设置群快捷栏
- 配置结果![image.png](https://i.loli.net/2020/09/24/C5ReMOo29mFbVAl.png)

### 玩家绑定账号
- 执行 `/mrd bind`
- 使用QQ扫码
- 完成绑定

## 使用说明
- 玩家可以通过下列方式获取喵币
  - 签到 5-10 喵币
  - 视频广告 5-15 喵币
  - 盒子广告 5-15 喵币
- 获得的喵币可以在服务器兑换成对应的奖励
- 腐竹可以在平台将喵币兑换成RMB(兑换比例请加群联系客服详谈)
- 登录小程序后 个人中心 => 配置面板 => 圈云盒子客服群

## 配置文件

``` yaml
# 服务器ID
serverId: '16'
# 服务器Token
serverToken: d50d3f6e-2a59-460a-2b29-82b66c4bbf52
# 兑换指令
drawCommand: 'p give %player_name% %amount%'
# 冷却时间
drawCooldown: 300
# 提示前缀
prefix: '§6[§b广告系统§6]§r'
```

## Roadmap
- 绑定服务器(已完成)
- 绑定玩家(已完成)
- 兑换喵币(已完成)
- 自助开通服务器(开发中)
- 自助兑换RMB(开发中)
- 自助提现(开发中)