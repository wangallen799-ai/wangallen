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

已通过 Sites 发布私有网页：

https://my-first-codex-wangallen.stillnote19.chatgpt.site

在 iPhone Safari 中打开上述网址，按页面提示使用创建此项目的同一账号登录，即可点击按钮查看当前日期和时间，无需操作电脑。可以通过 Safari 的“分享 → 添加到主屏幕”保存。

此部署对应当前项目源码，不会随 GitHub PR 后续修改自动更新。云端的 `localhost` 无法在手机上直接访问。

页面支持 320px 起的窄屏、横屏和桌面，未禁止用户缩放；按钮高度至少 52px。时间取自访问设备的时钟和时区，不是服务器时间。

## 检查

JavaScript 语法：`node --check my-first-codex-project/script.js`。
浏览器检查结果见 `CHECKS.md`。响应式模拟不等同于真机 Safari 测试。
