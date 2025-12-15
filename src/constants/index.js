// --- Antigravity Data Presets ---

export const ANTIGRAVITY_ROLES = [
    "Frontend Developer",
    "Backend Engineer", 
    "Full Stack Developer",
    "Unity Game Developer",
    ".NET Engineer",
    "Data Scientist",
    "DevOps Engineer"
];

export const TECH_TAGS = [
    "React", "Vue", "TypeScript", "Tailwind CSS",
    "Three.js", "React Three Fiber", "WebGL", 
    "Unity", "C#", ".NET Core", "MSSQL",
    "Python", "Node.js", "Next.js", "Docker", "Kubernetes",
    // New WPF additions
    "WPF", "MaterialDesignInXaml", "HandyControl", "CommunityToolkit.Mvvm"
];

export const DEPLOYMENT_TAGS = [
    "前端项目", "后端项目", "本地部署", 
    "云端部署", "Docker部署", "Windows环境", "Linux环境"
];

// The Core Antigravity Rules mapped to the "Click to Add" interface
// Expanded with modern architectural patterns
export const ANTIGRAVITY_RULES = [
    // Core Philosophy
    "简洁至上: 恪守 KISS 原则，优先选择最直接、稳定的技术实现",
    "深度分析: 立足于第一性原理 (First Principles) 剖析问题",
    "事实为本: 以事实为最高准则，发现技术隐患(如TCP粘包)必须坦率斧正",
    
    // Process & Workflow
    "渐进式开发: 先跑通核心链路(上传->列表->推送)，再完善细节",
    "结构化流程: 遵循 '构思方案 -> 提请审核 -> 分解任务' 的顺序",
    "契约优先: 开发前必须先确立 Swagger 接口与 TCP 指令格式",
    "Git: 遵循 Conventional Commits (feat/fix/docs/refactor)",

    // Architecture & Design Patterns
    "架构分层: 严格遵守 视图层 -> 逻辑层 -> 数据层 的单向依赖流",
    "组件化: 遵循单一职责原则，UI 组件与业务逻辑分离 (Container/Presentational)",
    "软硬解耦: 严格区分业务逻辑与硬件通信层，确保可扩展性",
    "事件驱动: 复杂交互优先采用发布/订阅模式 (Pub/Sub) 降低耦合度",
    "依赖倒置: 核心逻辑不应依赖具体实现，优先使用依赖注入",

    // Coding Standards
    "状态管理: 避免 Prop Drilling，全局状态与局部状态需界定清晰",
    "函数式编程: 优先使用纯函数，减少副作用，利用 Composition 组合逻辑",
    "异常处理: 后端 API 需统一捕获异常并返回标准 JSON",
    "注释: 关键业务逻辑(TCP/分片)必须包含详细中文注释",
    "避免长文件: 避免长文件编程，不利于维护开发，注意功能分割",

    // WPF Specific Rules (New)
    "WPF架构: 严格遵循 MVVM 模式，禁止 View 层包含业务逻辑 (Code-Behind Zero)",
    "WPF性能: 长列表必须开启 UI 虚拟化 (VirtualizingStackPanel)，图片异步加载",
    "WPF线程: 严禁在 UI 线程执行耗时操作，充分利用 Task/Async/Await 防卡顿",
    "WPF资源: 优先使用 StaticResource，DynamicResource 仅用于实时换肤",
    "WPF调试: 开启 DataBinding 调试级别，及时修复 Output 中的绑定失效警告",

    // Performance & Security
    "性能优化: 避免不必要的重渲染 (React.memo/useMemo)，大列表必须虚拟化",
    "大文件处理: 针对 >1GB 文件必须实现分片流式处理",
    "安全性: 所有外部输入必须经过验证与清洗 (Sanitization)",
    "UI/UX: 严格复刻文档描述的'三栏式布局'与 Ant Design 风格"
];
