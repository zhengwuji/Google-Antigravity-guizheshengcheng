# Antigravity Rules Generator

Google Antigravity 规则生成器 - 基于 React 的配置文件生成工具

## 项目结构

```
ANTIGRAVITY_RULES/
├── public/
│   └── index.html          # HTML 模板
├── src/
│   ├── components/
│   │   ├── CodeBlock.jsx   # 代码块展示组件
│   │   ├── Generator.jsx   # 主生成器组件
│   │   └── Icons.jsx       # SVG 图标组件库
│   ├── constants/
│   │   └── index.js        # 常量数据 (角色、技术栈、规则)
│   ├── App.jsx             # 应用根组件
│   └── index.js            # 应用入口
├── package.json
└── README.md
```

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm start
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用

### 配置端口

在项目根目录的 `.env` 文件中修改 `PORT` 变量：

```env
PORT=3000  # 修改为你想要的端口号
```

### 构建生产版本

```bash
pnpm run build
```

## 功能特性

- ✨ **模块化架构**: 清晰的组件分离，易于维护和扩展
- 🎨 **Tailwind CSS**: 使用 CDN 引入，开箱即用
- 📦 **零第三方图标库**: 所有图标均为内联 SVG，无外部依赖
- 🔧 **可定制规则**: 支持预设规则选择和自定义规则添加
- 📄 **Markdown 导出**: 一键生成项目规则文档

## 组件说明

### Generator.jsx
主生成器组件，包含:
- 项目上下文配置 (角色、技术栈、包管理器)
- 规则库管理 (选择、添加、删除)
- Markdown 生成和下载功能

### CodeBlock.jsx
代码预览组件，支持:
- 语法高亮显示
- 一键复制功能
- 兼容性 fallback 处理

### Icons.jsx
内联 SVG 图标库，包含常用图标:
- Terminal, Copy, Check, Settings
- FileCode, Sparkles, Download
- User, Cpu, Box, Layers 等

### constants/index.js
存储所有静态数据:
- `ANTIGRAVITY_ROLES`: 角色选项
- `TECH_TAGS`: 技术栈标签
- `DEPLOYMENT_TAGS`: 部署环境标签
- `ANTIGRAVITY_RULES`: 核心工程规范

## 技术栈

- React 18.2+
- Tailwind CSS (CDN)
- React Scripts (Create React App)
- pnpm (包管理器)

## License

MIT