# MiaoPay

## 安装方式

先按照帖子

### 网关

- https://pay.yumc.pw/api

### 请求规范

- 除业务参数外 每个请求必须包含下列系统参数
- 系统级参数
  - 应用 ID `appid`
  - 时间戳 `timestamp` 单位: 秒
  - 随机字符串 `nonce` 32 位以内的随机字符串

#### 签名生成

- 对参数按照字典升序排列
- 拼接成查询字符串后追加 key=secret
- 获得字符串的 MD5 值 并且转换成大写

```php
ksort($data);
$signStr = urldecode(http_build_query($data)).'&key='.\getAppSecret();
return strtoupper(md5($signStr));
```

### 相关接口

#### 创建订单

- METHOD: /create
- PARAM:
  - 订单标题 `subject` 必填
  - 订单金额 `amount` 必填 单位: 元
  - 用户名 `username` 选填
  - 用户唯一 ID `unionId` 选填
  - 外部订单 ID `outOrderId` 选填 用于三方系统
  - 通知地址 `notifyUrl` 选填 用于三方系统回调
- RETURN:
  - 订单ID `order_id`
  - 订单金额 `amount`
  - 订单支付地址 `url`

#### 查询订单

- METHOD: /query
- PARAM:
  - 订单ID `subject` 必填
  - 订单金额 `amount` 必填 单位: 元
  - 用户名 `username` 选填
  - 用户唯一 ID `uuid` 选填
- RETURN:
  - 订单数据
