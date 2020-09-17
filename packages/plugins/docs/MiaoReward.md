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
- 申请内测服务器账号
- QQ搜索小程序 `圈云盒子` 并登录
### 服务器准备工作
- 先安装 `MiaoScript` [站内地址]()
- 执行 `mpm install MiaoReward`
### 绑定服务器
- 执行 `/mrd bind server`
- 使用QQ扫码
- 选择需要绑定的服务器
- 完成绑定
- 执行 `/mrd server` 查看服务器信息
- 如需绑定多台 可以直接复制绑定之后的 `MiaoScript/plugins/MiaoReward/config.yml` 文件到多台服务器上 然后 `/mrd reload` 重载插件
