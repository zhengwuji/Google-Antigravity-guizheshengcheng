"# ANTIGRAVITY_RULES" 
Google Antigravity Rules Generator
Example
# Google Antigravity Project Rules
> Generated on 2025-12-11 for Repository Wide

## 1. Project Context
- **Role**: Frontend Developer
- **Tech Stack**: React, Tailwind CSS, TypeScript
- **Package Manager**: npm
- **Environment**: Standard

## 2. Antigravity Engineering Standards
### Core Principles & Architecture
> **Language Requirement**: All responses, thinking processes, and task lists must be in **Simplified Chinese (zh-CN)**.

> **简洁至上**: 恪守 KISS 原则，优先选择最直接、稳定的技术实现
> **结构化流程**: 遵循 '构思方案 -> 提请审核 -> 分解任务' 的顺序
> **组件化**: 遵循单一职责原则，UI 组件与业务逻辑分离 (Container/Presentational)
> **架构分层**: 严格遵守 视图层 -> 逻辑层 -> 数据层 的单向依赖流
> **大文件处理**: 针对 >1GB 文件必须实现分片流式处理
> **安全性**: 所有外部输入必须经过验证与清洗 (Sanitization)
> **UI/UX**: 严格复刻文档描述的'三栏式布局'与 Ant Design 风格
> **性能优化**: 避免不必要的重渲染 (React.memo/useMemo)，大列表必须虚拟化
> **函数式编程**: 优先使用纯函数，减少副作用，利用 Composition 组合逻辑
> **异常处理**: 后端 API 需统一捕获异常并返回标准 JSON
> **注释**: 关键业务逻辑(TCP/分片)必须包含详细中文注释
> **避免长文件**: 避免长文件编程，不利于维护开发，注意功能分割
> **状态管理**: 避免 Prop Drilling，全局状态与局部状态需界定清晰
> **依赖倒置**: 核心逻辑不应依赖具体实现，优先使用依赖注入
> **事件驱动**: 复杂交互优先采用发布/订阅模式 (Pub/Sub) 降低耦合度
> **软硬解耦**: 严格区分业务逻辑与硬件通信层，确保可扩展性
> **契约优先**: 开发前必须先确立 Swagger 接口与 TCP 指令格式
> **深度分析**: 立足于第一性原理 (First Principles) 剖析问题

## 3. Workflow & Interaction
- **Tone**: Professional, technical, concise (No fluff).
- **Thinking Process**: Use **First Principles**. Explain *why* before *how*.
- **Fixed Command**: Always include `Implementation Plan` and `Task List` in thinking process.

## 4. Code Quality & Design
- **Architecture**: Enforce Logic Splitting & Composition. Avoid files > 400 lines.
- **Components**: Prefer Functional Components + Hooks over Class Components.
- **Comments**: Detailed Chinese comments for critical logic (TCP, File IO, Algorithms).