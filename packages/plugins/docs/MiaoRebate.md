# MiaoRebate

## 插件简介

-   还在为服务器收入不足而倒闭烦恼嘛
-   还在为肝帝不氪金而烦恼嘛
-   快来接入 喵式返利
-   饿了么美团战略合作 玩家点外卖 腐竹拿返利 增加服务器收入

### 先来一张 1 块钱吃一餐的图

![image.png](https://i.loli.net/2021/06/08/PpZVWLwTBNuravY.png)

### 再来一张红包兑换的图

![image.png](https://i.loli.net/2021/06/07/GmCNXl2pyVnxYt5.png)

### 限时活动

> 即日起 至 7 月 15 日 额外奖励活动
> 每满 50 人关注公众号 额外奖励 50 元 上不封顶 (当月取消关注不算)
> 请绑定后加 QQ 群 1055983539 参加活动

## 插件展示

> 多图预警 折叠了

`[spoiler]`

-   命令帮助![image.png](https://i.loli.net/2021/06/07/PGse8CSFxnIR3D5.png)
-   扫码绑定![image.png](https://i.loli.net/2021/06/07/dwNXloU62zcTVkQ.png)
-   个人信息![image.jpg](https://i.loli.net/2021/06/07/8r9xQTnFqjV7ahZ.jpg)
-   兑换列表![image.jpg](https://i.loli.net/2021/06/07/FcjC1qdWMrB3vsR.jpg)

`[/spoiler]`

## 插件命令

```
>mre help
[外卖系统]====== [外卖系统] 帮助菜单 ======
[外卖系统]/mre bind 绑定账号
[外卖系统]/mre draw <兑换数量> 兑换点券
[外卖系统]由于您是管理员 以为您展示额外命令
[外卖系统]/mrd bind server 绑定服务器
```

## 接下来就是赚钱的操作

### 服务器准备工作

-   本插件依赖于 `MiaoReward` 请前往 [站内帖子](https://www.mcbbs.net/thread-1121423-1-1.html) 完成安装
-   执行 `/mspm install MiaoRebate` 安装 MiaoRebate 脚本插件
-   完成安装

### 绑定服务器

-   执行 `/mre bind server`
-   使用绿色儿的那个 APP 扫码 完成绑定

### 玩家绑定账号

-   执行 `/mre bind`
-   使用绿色儿的那个 APP 扫码 完成绑定

## 使用说明

-   玩家可以通过下列方式获取圈币
    -   进入公众号 领取红包
    -   小程序直接点餐或到饿了么/美团 APP 点餐
    -   点餐后 发送订单号 兑换奖励
    -   返利额度约为实付金额的 `1%-3%` 左右
-   获得的圈币 在服务器使用 `/mre draw 兑换金额`
-   腐竹获得圈币后 在公众号兑换成红包即可

## PAPI 兼容

-   目前暂不支持 PAPI 变量 后续会支持

## 配置文件

```yml
# 提示前缀
prefix: §6[§b外卖系统§6]§r
# 用于检查货币的变量
check: "%playerpoints_points%"
# 用于充值货币的命令
command: points give %player_name% %amount%
# 兑换比例 圈币 对应多少 货币
ratio: 1
# 货币名称
coinName: 点券
# 进服提示
joinTip: true
# 绑定数据(请勿手动修改 绑定后会自动填写数据)
owner:
    userid:
    ccid:
    openid:
```

## 插件源码

-   [MiaoScript 包管理中心](https://git.yumc.pw/circlecloud/ms/src/branch/master/packages/plugins/src/MiaoRebate.ts)

## 更新日志

-   暂无

## Roadmap

-   绑定服务器(已完成)
-   绑定玩家(已完成)
-   兑换圈币(已完成)
