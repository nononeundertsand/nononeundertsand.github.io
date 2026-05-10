# Xiaowei Liu Personal Homepage

这是一个面向 GitHub Pages 的静态个人主页项目。
## 项目结构

```text
.
├── index.html              # 个人主页入口，只保留页面结构
├── assets/
│   ├── css/
│   │   └── styles.css      # 全站样式
│   ├── js/
│   │   └── main.js         # 打字机、背景粒子等交互脚本
│   ├── images/             # 图片、头像、论文配图等静态资源
│   └── data/               # 后续可放 JSON 数据，如论文、项目、博客索引
├── blog/
│   ├── index.html          # 博客首页
│   └── posts/              # 后续博客文章目录
└── papers/                 # 论文 PDF 或相关材料
```

## 后续维护建议

- 修改视觉样式：编辑 `assets/css/styles.css`
- 修改动画或交互：编辑 `assets/js/main.js`
- 添加图片资源：放入 `assets/images/`
- 添加论文文件：放入 `papers/`
- 搭建博客：先在 `blog/posts/` 维护文章，再逐步把文章列表抽到 `assets/data/posts.json`

## 本地预览

这是纯静态页面，直接在浏览器打开 `index.html` 即可预览。部署到 GitHub Pages 时，仓库根目录保持 `index.html` 即可。
