# 我的第一个Codex项目

使用 HTML、CSS 和 JavaScript 实现的中文网页，无需安装依赖或构建。

## 文件

- `my-first-codex-project/index.html`：中文网页、成功提示和时间按钮。
- `my-first-codex-project/styles.css`：响应式布局、iPhone 安全区域和触摸按钮样式。
- `my-first-codex-project/script.js`：点击后获取当前日期和时间，以中文格式及访问设备的时区显示。重复点击会更新。

## 运行

在仓库根目录执行：

```sh
python3 -m http.server 8000 --bind 0.0.0.0 --directory my-first-codex-project
```

浏览器打开 `http://localhost:8000`。也可以直接用桌面浏览器打开 `my-first-codex-project/index.html`。

## iPhone 查看

云端的 `localhost` 无法在手机上直接访问。需要使用云端平台提供的 HTTPS 端口转发地址，或将 `my-first-codex-project` 内的三个文件上传至静态网页托管服务，再在 iPhone Safari 中打开相应网址。HTTPS 托管地址可以通过 Safari 的“分享 → 添加到主屏幕”保存。

页面支持 320px 起的窄屏、横屏和桌面，未禁止用户缩放；按钮高度至少 52px。时间取自访问设备的时钟和时区，不是服务器时间。

## 检查

JavaScript 语法：`node --check my-first-codex-project/script.js`。
浏览器检查结果见 `CHECKS.md`。响应式模拟不等同于真机 Safari 测试。
