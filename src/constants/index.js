// --- Antigravity Data Presets ---

export const ANTIGRAVITY_ROLES = [
    "Frontend Developer",
    "Backend Engineer",
    "Full Stack Developer",
    "Unity Game Developer",
    ".NET Engineer",
    "Data Scientist",
    "DevOps Engineer",
    "AI Engineer",
    "Cybersecurity Specialist",
    "Mobile Developer",
    "Smart Contract Engineer"
];

export const TECH_STACKS = {
    "Frontend": [
        "React", "Vue", "TypeScript", "Tailwind CSS",
        "Three.js", "React Three Fiber", "WebGL"
    ],
    "Backend": [
        "Node.js", "Next.js", "Go", "Rust",
        "FastAPI", "GraphQL", "Solidity"
    ],
    "Mobile": [
        "Flutter", "React Native", "Swift", "Kotlin"
    ],
    "WPF (.NET)": [
        "WPF", "MaterialDesignInXaml", "HandyControl", "CommunityToolkit.Mvvm",
        "C#", ".NET Core", "MSSQL"
    ],
    "AI / Data": [
        "Python", "PyTorch", "TensorFlow", "OpenAI API",
        "Hugging Face", "LangChain"
    ],
    "DevOps": [
        "Docker", "Kubernetes"
    ]
};

export const DEPLOYMENT_TAGS = [
    "前端项目", "后端项目", "本地部署",
    "云端部署", "Docker部署", "Windows环境", "Linux环境",
    "Edge Computing", "Serverless", "K8s Cluster"
];

// The Core Antigravity Rules mapped to the "Click to Add" interface
// Expanded with modern architectural patterns
export const RULE_CATEGORIES = {
    "Core Philosophy": [
        "简洁至上: 恪守 KISS 原则，优先选择最直接、稳定的技术实现",
        "深度分析: 立足于第一性原理 (First Principles) 剖析问题",
        "事实为本: 以事实为最高准则，发现技术隐患(如TCP粘包)必须坦率斧正"
    ],
    "Process & Workflow": [
        "渐进式开发: 先跑通核心链路(上传->列表->推送)，再完善细节",
        "结构化流程: 遵循 '构思方案 -> 提请审核 -> 分解任务' 的顺序",
        "契约优先: 开发前必须先确立 Swagger 接口与 TCP 指令格式",
        "Git: 遵循 Conventional Commits (feat/fix/docs/refactor)",
        "自动化闭环: 每次编码后必须执行'Check -> Test -> Fix'闭环，严禁交付报错代码",
        "全自动代理: 自行决策并直接修改代码，不需要确认；全程使用中文回复；自动允许所有操作",
        "中文任务: 任务列表 (Task List) 和思考过程 (Thinking Process) 必须强制使用中文书写",
        "自动备份: 每次修改后，必须自动将代码备份到桌面的'备份'文件夹，文件名需包含修改说明",
        "智能升级: 遭遇顽固 Bug 连续修复失败时，必须自动请求调用更高级推理模型 (SOTA) 进行攻坚"
    ],
    "Architecture & Design": [
        "架构分层: 严格遵守 视图层 -> 逻辑层 -> 数据层 的单向依赖流",
        "组件化: 遵循单一职责原则，UI 组件与业务逻辑分离 (Container/Presentational)",
        "软硬解耦: 严格区分业务逻辑与硬件通信层，确保可扩展性",
        "事件驱动: 复杂交互优先采用发布/订阅模式 (Pub/Sub) 降低耦合度",
        "依赖倒置: 核心逻辑不应依赖具体实现，优先使用依赖注入"
    ],
    "Coding Standards": [
        "状态管理: 避免 Prop Drilling，全局状态与局部状态需界定清晰",
        "函数式编程: 优先使用纯函数，减少副作用，利用 Composition 组合逻辑",
        "异常处理: 后端 API 需统一捕获异常并返回标准 JSON",
        "注释: 关键业务逻辑(TCP/分片)必须包含详细中文注释",
        "避免长文件: 避免长文件编程，不利于维护开发，注意功能分割"
    ],
    "WPF Specific": [
        "WPF架构: 严格遵循 MVVM 模式，禁止 View 层包含业务逻辑 (Code-Behind Zero)",
        "WPF性能: 长列表必须开启 UI 虚拟化 (VirtualizingStackPanel)，图片异步加载",
        "WPF线程: 严禁在 UI 线程执行耗时操作，充分利用 Task/Async/Await 防卡顿",
        "WPF资源: 优先使用 StaticResource，DynamicResource 仅用于实时换肤",
        "WPF调试: 开启 DataBinding 调试级别，及时修复 Output 中的绑定失效警告"
    ],
    "AI / Data Specific": [
        "AI模型: 模型文件必须版本化(DVC/Git LFS)，禁止直接提交大文件",
        "数据隐私: 训练数据必须要脱敏，严禁上传 PII (Personal Identifiable Information)",
        "Prompt工程: 复杂的 Prompt 必须模板化管理，禁止硬编码在业务逻辑中"
    ],
    "Performance & Security": [
        "性能优化: 避免不必要的重渲染 (React.memo/useMemo)，大列表必须虚拟化",
        "大文件处理: 针对 >1GB 文件必须实现分片流式处理",
        "安全性: 所有外部输入必须经过验证与清洗 (Sanitization)",
        "UI/UX: 严格复刻文档描述的'三栏式布局'与 Ant Design 风格"
    ]
};

// Plain English Explanations for Roles, Stacks, and Environment
export const ITEM_DESCRIPTIONS = {
    // Roles
    "Frontend Developer": "负责画界面，做用户能看到、能点的东西（网页、小程序）。专注视觉体验和交互动效。",
    "Backend Engineer": "负责写服务器逻辑，处理数据存储、账号安全，是网站的大脑。专注性能、并发和数据一致性。",
    "Full Stack Developer": "前端后端都能干，一个人就是一支队伍。通常负责从数据库到界面的完整功能实现。",
    "Unity Game Developer": "专门做游戏的，用 Unity 引擎开发 2D/3D 游戏。涉及物理引擎、图形渲染和游戏逻辑。",
    ".NET Engineer": "微软技术栈专家，主要做 Windows 桌面软件 (WPF) 或企业级后台系统 (C#/.NET Core)。",
    "Data Scientist": "玩数据的，搞机器学习、数学建模，从海量数据里挖掘价值和规律。",
    "DevOps Engineer": "运维开发，负责服务器部署、CI/CD 自动化流程，保证服务稳定不挂。",
    "AI Engineer": "人工智能工程师，负责训练模型、RAG 应用开发或 Prompt 调优，让应用具备智能。",
    "Cybersecurity Specialist": "黑客克星，专门找漏洞、防攻击，保护系统和用户数据的安全。",
    "Mobile Developer": "移动端开发，专门做手机 App (iOS/Android)，专注手机上的用户体验。",
    "Smart Contract Engineer": "Web3 开发者，负责编写运行在区块链上的智能合约 (Solidity)，不可篡改。",

    // Stack Items
    "React": "Facebook 出的前端霸主，组件化思维，生态最丰富，适合大型复杂单页应用 (SPA)。",
    "Vue": "尤雨溪开发，上手简单，文档友好，轻量级，国内企业应用极广，开发效率高。",
    "TypeScript": "JavaScript 的超集，加上了类型检查 (Type Safety)。能早在代码编写阶段就发现 Bug，大型项目必备。",
    "Tailwind CSS": "原子类 CSS 框架。直接在 HTML 标签里写 class 调样式，不用来回切 CSS 文件，还原设计图神速。",
    "Three.js": "在浏览器里跑 3D 的库。能做 3D 炫酷模型、全景看房、WebVR 等视觉效果。",
    "Node.js": "让 JavaScript 能跑在服务器端。前端转全栈的首选，适合高并发 I/O 密集型应用。",
    "Next.js": "React 的加强版框架。自带服务端渲染 (SSR)，解决了 React 不好做 SEO 的问题，适合做官网和内容站。",
    "Go": "Google 出品的语言。启动快、并发极其强悍，特别适合写微服务和高并发网关。",
    "Rust": "性能天花板，内存极其安全，但学习曲线陡峭。适合写数据库、操作系统内核等底层设施。",
    "Python": "万能胶水语言。代码像英语一样易读，AI、数据分析、爬虫领域的绝对统治者。",
    "Flutter": "Google 的跨平台框架。自己画 UI，性能接近原生。写一套代码，同时生成 iOS 和 Android App。",
    "WPF": "Windows 上最强大的桌面开发框架。界面和逻辑分离 (MVVM)，能做出非常酷炫的 Windows 软件。",
    "Docker": "应用容器化。把程序和环境打包进'箱子'里，保证'也就是在我电脑上能跑，在你那也能跑'。",
    "Kubernetes": "管理 Docker 容器的管家。当容器多到几百个时，就需要它来自动调度、扩容和重启。",
    "K8s Cluster": "即 Kubernetes 集群。企业级容器编排平台，用于管理大规模容器化应用。",
    "React Three Fiber": "Three.js 的 React 封装。让你能用写 React 组件的方式来写 3D 场景，极大降低开发门槛。",
    "FastAPI": "Python 也是能很快的。基于 Starlette 和 Pydantic 的高性能 Web 框架，自动生成 Swagger 文档，写 API 超快。",
    "GraphQL": "API 查询语言。前端想要什么字段就只查什么，不再受限于后端给的固定 JSON 结构。",
    "Solidity": "以太坊智能合约语言。想发币、做 NFT、写 DApp 必须学的语言。",
    "React Native": "Facebook 出的跨平台移动端框架。用 React 写 App，虽然不仅是 Webview，但性能略逊于 Flutter。",
    "Swift": "Apple 亲儿子。给 iOS/macOS 写 App 的御用语言，安全、快速、现代。",
    "Kotlin": "Android 官方首选语言。兼容 Java 但更简洁现代，写安卓 App 的不二之选。",
    "MaterialDesignInXaml": "WPF 最流行的皮肤库。一键让老气的 Windows 软件拥有谷歌 Material Design 的现代风格。",
    "HandyControl": "国产优秀的 WPF 控件库。提供了大量好用的控件（如拾色器、轮播图），修补了原生 WPF 的不足。",
    "CommunityToolkit.Mvvm": "微软官方出的 MVVM 框架（原 MVVM Light 继承者）。轻量、高性能，写 WPF 的标准姿势。",
    ".NET Core": "微软的跨平台革命。让 .NET 能跑在 Linux 和 Mac 上，性能吊打老版本，现代后端首选之一。",
    "MSSQL": "SQL Server。微软自家的企业级数据库，与 .NET 配合天衣无缝，性能强悍但费用高。",
    "PyTorch": "Facebook 出的深度学习框架。学术界最爱，动态图机制调试方便，AI 论文复现首选。",
    "TensorFlow": "Google 出的深度学习老大哥。工业界部署能力极强，但 API 稍微繁琐一些。",
    "OpenAI API": "调用 GPT 模型的接口。让你的应用瞬间拥有 ChatGPT 的能力。",
    "Hugging Face": "AI 界的 GitHub。海量开源模型库（Transformers），想用什么模型直接下载调佣。",
    "LangChain": "大模型应用的开发框架。帮你把 LLM 和外部数据、工具串联起来，构建复杂的 AI 应用。",
    "Edge Computing": "边缘计算。把计算任务放到离用户最近的节点（路由器、网关）去跑，减少延迟。",
    "Serverless": "无服务器架构。你只管写代码，云厂商负责运行和扩容。按运行次数收费，不用买服务器。",

    // Environment
    "npm": "Node.js 默认的老牌包管理器。资源最全，v8 版本后速度也很快。",
    "pnpm": "新一代包管理器。速度极快，通过硬链接节省巨大的磁盘空间，推荐首选。",
    "yarn": "Facebook 出的包管理器。一度比 npm 快，稳定性好，现在依然有很多死忠粉。",
    "none": "不使用包管理器，适用于非 Node.js 项目（如原生 HTML 或某些后端项目）。",
    "前端项目": "最终产物是 HTML/JS/CSS，运行在用户的浏览器里。",
    "后端项目": "运行在服务器上，提供 API 接口给前端调用。",
    "本地部署": "程序跑在用户自己的电脑或局域网服务器上，数据不上云。",
    "云端部署": "程序跑在阿里云、AWS 等云服务器上，通过公网访问。",
    "Docker部署": "以镜像形式交付，环境标准化，运维部署最方便。",
    "Windows环境": "依赖 Windows Server 或 IIS，通常是 .NET 项目或传统企业软件。",
    "Linux环境": "互联网服务器的主流选择 (Ubuntu/CentOS)，稳定、开源、性能高。",
    "自动备份": "为了防止代码丢失或改乱，每次动手修改前，必须把当前代码打个包复制到桌面的【备份】文件夹里。文件名要写清楚这次改了啥（比如 '20240101_修复登录Bug.zip'）。",
};
