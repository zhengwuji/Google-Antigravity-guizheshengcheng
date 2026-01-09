import React, { useState, useEffect } from 'react';
import {
    Sparkles,
    FileCode,
    User,
    Cpu,
    Box,
    Layers,
    Check,
    Download,
    RotateCcw,
    Bot,
    Copy,
    Save
} from './Icons';
import CodeBlock from './CodeBlock';
import {
    ANTIGRAVITY_ROLES,
    TECH_STACKS,
    DEPLOYMENT_TAGS,
    RULE_CATEGORIES,
    ITEM_DESCRIPTIONS
} from '../constants';

const Generator = () => {
    // State
    const [role, setRole] = useState("Frontend Developer");
    const [stack, setStack] = useState("React, Tailwind CSS, TypeScript");
    const [pkgManager, setPkgManager] = useState("npm");
    const [deployment, setDeployment] = useState([]);
    const [fileType, setFileType] = useState("repo"); // 'repo' or 'path'
    const [targetPath, setTargetPath] = useState("src/components");

    // Default active rules for Antigravity - expanded default set
    const [activeRules, setActiveRules] = useState([
        "简洁至上: 恪守 KISS 原则，优先选择最直接、稳定的技术实现",
        "结构化流程: 遵循 '构思方案 -> 提请审核 -> 分解任务' 的顺序",
        "组件化: 遵循单一职责原则，UI 组件与业务逻辑分离 (Container/Presentational)",
        "架构分层: 严格遵守 视图层 -> 逻辑层 -> 数据层 的单向依赖流",
        "自动化闭环: 每次编码后必须执行'Check -> Test -> Fix'闭环，严禁交付报错代码",
        "全自动代理: 自行决策并直接修改代码，不需要确认；全程使用中文回复；自动允许所有操作",
        "中文任务: 任务列表 (Task List) 和思考过程 (Thinking Process) 必须强制使用中文书写",
        "自动备份: 每次修改后，必须自动将代码备份到桌面的'备份'文件夹，文件名需包含修改说明",
        "智能升级: 遭遇顽固 Bug 连续修复失败超过 3 次时，必须向用户建议切换到更高级推理模型并列出可选模型（Claude Sonnet 4.5 Thinking / GPT-o1 / Gemini Pro Deep），暂停操作等待用户决策"
    ]);

    const [newRule, setNewRule] = useState("");
    const [aiPrompt, setAiPrompt] = useState(""); // AI Input State


    // Handlers
    const toggleStack = (tag) => {
        const current = stack ? stack.split(',').map(s => s.trim()).filter(Boolean) : [];
        if (current.includes(tag)) setStack(current.filter(s => s !== tag).join(', '));
        else setStack([...current, tag].join(', '));
    };

    const toggleDeployment = (tag) => {
        if (deployment.includes(tag)) setDeployment(deployment.filter(t => t !== tag));
        else setDeployment([...deployment, tag]);
    };

    const addPresetRule = (rule) => {
        if (!activeRules.includes(rule)) setActiveRules([...activeRules, rule]);
    };

    const removeRule = (index) => {
        setActiveRules(activeRules.filter((_, i) => i !== index));
    };

    const addCustomRule = () => {
        if (newRule.trim()) {
            setActiveRules([...activeRules, newRule.trim()]);
            setNewRule("");
        }
    };

    const handleReset = () => {
        if (window.confirm("Are you sure you want to reset all selections to default?")) {
            setRole("Frontend Developer");
            setStack("React, Tailwind CSS, TypeScript");
            setPkgManager("npm");
            setDeployment([]);
            setFileType("repo");
            setTargetPath("src/components");
            setActiveRules([
                "简洁至上: 恪守 KISS 原则，优先选择最直接、稳定的技术实现",
                "结构化流程: 遵循 '构思方案 -> 提请审核 -> 分解任务' 的顺序",
                "组件化: 遵循单一职责原则，UI 组件与业务逻辑分离 (Container/Presentational)",
                "架构分层: 严格遵守 视图层 -> 逻辑层 -> 数据层 的单向依赖流"
            ]);
            setNewRule("");
            setAiPrompt("");
        }
    };

    // --- Mock AI Logic ---
    const handleAIRecommend = () => {
        if (!aiPrompt.trim()) {
            alert("⚠️ 请先输入一些描述，例如 '电商后台' 或 'Unity游戏'");
            return;
        }

        const lowerPrompt = aiPrompt.toLowerCase();
        let newRole = role;
        let newStack = stack;
        let newRules = [...activeRules];
        let newDeployment = [...deployment];
        let matched = false;

        // 1. Keyword Analysis (Pre-defined presets)
        if (lowerPrompt.includes("电商") || lowerPrompt.includes("shop") || lowerPrompt.includes("store")) {
            newStack = "React, Next.js, TypeScript, Tailwind CSS, Node.js";
            newRole = "Full Stack Developer";
            if (!newRules.some(r => r.includes("高并发"))) newRules.push("性能优化: 大列表必须虚拟化, 图片懒加载");
            if (!newRules.some(r => r.includes("安全性"))) newRules.push("安全性: 所有外部输入必须经过验证与清洗 (Sanitization)");
            matched = true;
        }

        if (lowerPrompt.includes("游戏") || lowerPrompt.includes("game") || lowerPrompt.includes("unity")) {
            newRole = "Unity Game Developer";
            newStack = "C#, Unity, Shader Graph";
            if (!newRules.some(r => r.includes("软硬解耦"))) newRules.push("软硬解耦: 严格区分业务逻辑与硬件通信层");
            if (!newRules.some(r => r.includes("性能"))) newRules.push("WPF性能: 严禁在 UI 线程执行耗时操作");
            matched = true;
        }

        if (lowerPrompt.includes("后台") || lowerPrompt.includes("admin") || lowerPrompt.includes("管理")) {
            newStack = "React, Ant Design, TypeScript";
            if (!newRules.some(r => r.includes("权限"))) newRules.push("权限控制: 严格的 RBAC 角色权限管理");
            matched = true;
        }

        if (lowerPrompt.includes("app") || lowerPrompt.includes("mobile") || lowerPrompt.includes("手机")) {
            newRole = "Mobile Developer";
            newStack = "Flutter, Dart, Firebase";
            newDeployment = ["Android", "iOS"];
            matched = true;
        }

        if (lowerPrompt.includes("ai") || lowerPrompt.includes("model") || lowerPrompt.includes("模型")) {
            newRole = "AI Engineer";
            newStack = "Python, PyTorch, Fast API, LangChain";
            if (!newRules.some(r => r.includes("隐私"))) newRules.push("数据隐私: 训练数据必须要脱敏");
            if (!newRules.some(r => r.includes("Prompt"))) newRules.push("Prompt工程: 复杂的 Prompt 必须模板化管理");
            matched = true;
        }

        // 2. Intelligent Rule Extraction (NLP Simulation)
        // 如果输入包含具体的命令式语句（如 "自动修复"），直接将其转化为规则
        if (aiPrompt.length > 5 && (aiPrompt.includes("自动") || aiPrompt.includes("必须") || aiPrompt.includes("禁止"))) {
            const customRuleName = "AI智选规则";
            const customRuleContent = aiPrompt.trim();
            const fullRule = `${customRuleName}: ${customRuleContent}`;

            if (!newRules.includes(fullRule)) {
                newRules.push(fullRule);
                matched = true;
            }
        }

        // Apply
        setRole(newRole);
        setStack(newStack);
        setActiveRules(newRules);
        setDeployment(newDeployment);

        if (matched) {
            alert(`🤖 AI 配置完成！\n\n已根据 "${aiPrompt}" 调整了技术栈和规则。`);
        } else {
            // Fallback: 如果什么都没匹配到，也可以作为一条普通规则添加进去
            const fallbackRule = `自定义: ${aiPrompt}`;
            setActiveRules([...newRules, fallbackRule]);
            alert(`🤖 已将您的输入 "${aiPrompt}" 添加为一条新规则！`);
        }
    };

    // --- Generation Logic for Google Antigravity ---
    const generateMarkdown = () => {
        const date = new Date().toISOString().split('T')[0];
        const depStr = deployment.length > 0 ? deployment.join(', ') : "Standard";

        // Rule Explanations Mapping
        const explanations = {
            // Core & Workflow
            "自动化闭环": "每一次代码修改后，必须自动运行代码检查 (Lint) 和测试 (Test)。如果发现报错，必须自动进行修复 (Fix)，直到代码完全正确，严禁交付任何带有错误的代码。",
            "全自动代理": "Agent 拥有最高权限，可以自行决策并直接修改文件，无需每次询问用户。所有回复和思考过程强制使用简体中文。对于所有工具调用请求，自动默认为'允许'。",
            "智能升级": "当遇到死循环、反复报错或常规逻辑无法解决的复杂问题时（重试超过 3 次），Agent 应自动判断当前能力不足，并主动请求切换到推理能力更强的模型（如 o1, Claude 3.5 Sonnet）来解决问题，而不是持续试错浪费 Token。",
            "简洁至上": "遵循 KISS (Keep It Simple, Stupid) 原则。在有多种实现方式时，永远选择最简单、最直观、依赖最少的那一种。",
            "深度分析": "不只看表面报错。必须追根溯源，从计算机底层原理（如内存管理、网络协议）思考问题的根本成因。",
            "事实为本": "技术面前人人平等。如果发现现有代码有隐患（哪怕是原来的架构），必须直接指出并修正，不要掩盖问题。",
            "渐进式开发": "不要试图一次性写完完美代码。先让核心功能（Happy Path）跑通，再慢慢打磨边缘情况和UI细节。",
            "结构化流程": "工作要有条理。先想清楚怎么做（Plan），再告诉用户（Review），最后拆成小任务（Task）一个个做，别一上来就瞎写。",
            "契约优先": "前后端联调前，必须先定好 API 格式（URL、参数、返回结构）。就像签合同一样，定好了就不能随便改。",
            "Git": "提交代码时的备注要规范。feat=新功能, fix=修bug, docs=写文档, refactor=重构。别写 'update' 这种没意义的话。",
            "中文任务": "为了方便中国开发者阅读和理解，所有的计划列表 (Task List)、步骤拆解和思考过程都必须用简体中文书写，严禁使用英文。",

            // Architecture
            "架构分层": "强制单向依赖：UI 层只能调用 Logic 层，Logic 层只能调用 Data 层。严禁反向依赖或跨层调用，确保代码结构清晰。",
            "组件化": "Strict Separation of Concerns. UI 组件只负责显示 (Presentational)，业务逻辑必须抽离到 Hooks 或 Logic 层 (Container)。",
            "软硬解耦": "业务代码不要和硬件代码混在一起。把硬件控制（如串口、蓝牙）封装成独立的接口，这样换硬件时不用改业务代码。",
            "事件驱动": "模块之间不要直接调用。通过'发消息'（Publish）和'收消息'（Subscribe）来交互，这样谁也不依赖谁，解耦更彻底。",
            "依赖倒置": "高层逻辑不要依赖底层实现。比如'支付功能'不要直接依赖'支付宝SDK'，而是依赖一个抽象的'IPayment'接口。",

            // Coding Standards
            "状态管理": "别把什么数据都往全局 Store 里塞。只有真正需要跨组件共享的数据才放全局，组件私有的就在组件内部解决。",
            "函数式编程": "多写纯函数（输入确定则输出确定，不改外部变量）。像搭积木一样通过 compose/pipe 组合简单的函数，逻辑更清晰。",
            "异常处理": "后端 API 别直接崩溃报错。用 try-catch 兜底，不管发生什么错，都要返回一个格式统一的 JSON（如 code: 500, msg: '错误信息'）。",
            "注释": "代码是给人看的。对于复杂的算法、协议解析、核心逻辑，必须写清楚中文注释，解释'为什么这么写'。",
            "避免长文件": "一个文件别写太长（超过400行就警报）。太长了没人看得懂，必须拆分成多个小文件。",

            // WPF Specific
            "WPF架构": "MVVM 是铁律。XAML (View) 里别写 C# 代码 (Code-Behind)，所有逻辑都要写在 ViewModel 里。",
            "WPF性能": "列表卡顿通常是因为渲染了太多项。必须开启 VirtualizingStackPanel，只渲染屏幕内能看见的几十条，看不见的不渲染。",
            "WPF线程": "千万别在主线程（UI线程）里算太久，会卡死界面。耗时的操作（读文件、网络请求）必须用 Task.Run 放到后台线程去跑。",
            "WPF资源": "通用的样式、颜色要提取到 ResourceDictionary 里 (StaticResource)。DynamicResource 虽然灵活但性能差，只在换肤时用。",
            "WPF调试": "DataBinding 经常失效且不报错。开发时要把 Output 窗口的 Binding 报错等级调高，盯着输出窗口看有没有 Binding Expression Error。",

            // AI / Data
            "AI模型": "几百兆的模型文件别往 Git 里传，仓库会炸。用 Git LFS 或者 DVC 来管理大文件。",
            "数据隐私": "用户的手机号、身份证等敏感信息，在训练前必须处理掉（脱敏）。绝对不能把真数据传到公网上。",
            "Prompt工程": "Prompt 也是代码。别把 Prompt 字符串硬编码分散在代码里，要统一放在配置文件或数据库里管理，方便调优。",

            // Performance & Security
            "性能优化": "React 组件别没事老重绘。用 memo/useCallback 缓存起来。渲染长列表一定要用虚拟滚动（Virtual List）。",
            "大文件处理": "上传 1GB 的文件不能一次读进内存，内存会爆。要切成一片一片（Chunk）流式处理。",
            "安全性": "永远别相信用户的输入。用户填的内容可能是恶意的脚本（XSS/SQL注入），必须清洗过滤后才能用。",
            "UI/UX": "严格复刻文档描述的'三栏式布局'与 Ant Design 风格"
        };

        let header = "";
        if (fileType === 'path') {
            header = `---
applyTo: "${targetPath}/**/*"
---

# Google Antigravity Rules (Path: ${targetPath})
> Context: Specific architectural rules for ${targetPath}
`;
        } else {
            header = `# Google Antigravity Project Rules
> Generated on ${date} for Repository Wide
`;
        }

        return `${header}
## 1. Project Context
- **Role**: ${role}
- **Tech Stack**: ${stack}
- **Package Manager**: ${pkgManager}
- **Environment**: ${depStr}

## 2. Antigravity Engineering Standards
### Core Principles & Architecture
> **Language Requirement**: All responses, thinking processes, and task lists must be in **Simplified Chinese (zh-CN)**.

${activeRules.map(rule => {
            const [title, content] = rule.includes(':') ? rule.split(/:(.+)/) : [rule.substring(0, 10), rule];
            const cleanTitle = title.replace(/\*\*/g, '').trim();
            const explanation = explanations[cleanTitle];

            let output = `> **${title.trim()}**: ${content ? content.trim() : ''}`;
            if (explanation) {
                output += `\n> *解释: ${explanation}*`;
            }
            return output;
        }).join('\n\n')}

## 3. Workflow & Interaction
- **Tone**: Professional, technical, concise (No fluff).
- **Thinking Process**: Use **First Principles**. Explain *why* before *how*.
- **Fixed Command**: Always include \`Implementation Plan\` and \`Task List\` in thinking process.

## 4. Code Quality & Design
- **Architecture**: Enforce Logic Splitting & Composition. Avoid files > 400 lines.
- **Components**: Prefer Functional Components + Hooks over Class Components.
- **Comments**: Detailed Chinese comments for critical logic (TCP, File IO, Algorithms).
`;
    };

    const handleDownload = () => {
        const markdown = generateMarkdown();
        const blob = new Blob([markdown], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileType === 'repo' ? 'google-antigravity-rules.md' : 'instructions.md';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    const handleCopy = async () => {
        const markdown = generateMarkdown();
        try {
            await navigator.clipboard.writeText(markdown);
            alert("📋 已复制到剪贴板！");
        } catch (err) {
            console.error('Failed to copy code: ', err);
            alert("❌ 复制失败，请手动复制");
        }
    };

    const handleSavePreset = () => {
        const preset = { role, stack, pkgManager, deployment, fileType, targetPath, activeRules };
        localStorage.setItem('antigravity_preset', JSON.stringify(preset));
        alert("💾 预设已保存！下次刷新可直接加载。");
    };

    const handleLoadPreset = () => {
        const saved = localStorage.getItem('antigravity_preset');
        if (saved) {
            const p = JSON.parse(saved);
            setRole(p.role || role);
            setStack(p.stack || stack);
            setPkgManager(p.pkgManager || pkgManager);
            setDeployment(p.deployment || deployment);
            setFileType(p.fileType || fileType);
            setTargetPath(p.targetPath || targetPath);
            setActiveRules(p.activeRules || activeRules);
            alert("✨ 预设加载成功！");
            alert("⚠️ 未找到已保存的预设");
        }
    };

    // --- Auto-Save Logic (Real-time Persistence) ---  
    // 1. Load on Mount
    useEffect(() => {
        const autoSaved = localStorage.getItem('antigravity_autosave_v1');
        if (autoSaved) {
            try {
                const p = JSON.parse(autoSaved);
                if (p.role) setRole(p.role);
                if (p.stack) setStack(p.stack);
                if (p.pkgManager) setPkgManager(p.pkgManager);
                if (p.deployment) setDeployment(p.deployment);
                if (p.fileType) setFileType(p.fileType);
                if (p.targetPath) setTargetPath(p.targetPath);
                if (p.activeRules) setActiveRules(p.activeRules);
                if (p.aiPrompt) setAiPrompt(p.aiPrompt);

                console.log("🔄 配置已自动恢复");
            } catch (e) {
                console.error("Auto-save restore failed", e);
            }
        }
    }, []);

    // 2. Save on Change
    useEffect(() => {
        const stateToSave = {
            role, stack, pkgManager, deployment, fileType, targetPath, activeRules, aiPrompt
        };
        localStorage.setItem('antigravity_autosave_v1', JSON.stringify(stateToSave));
    }, [role, stack, pkgManager, deployment, fileType, targetPath, activeRules, aiPrompt]);

    return (
        <div className="bg-[#252526] border border-[#3c3c3c] rounded-lg p-6 shadow-2xl backdrop-blur-sm bg-opacity-95">
            <div className="flex items-center justify-between mb-6 border-b border-[#3c3c3c] pb-4">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-yellow-400/10 rounded-lg">
                        <Sparkles className="text-yellow-400" size={24} />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold bg-gradient-to-r from-yellow-100 to-yellow-500 bg-clip-text text-transparent">
                            规则生成器 (Generator)
                            <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 font-mono tracking-wide">
                                ● AUTO-SAVED
                            </span>
                        </h1>
                        <p className="text-xs text-gray-500">Google Antigravity Standard (Extended)</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={handleSavePreset}
                        className="flex items-center gap-1 px-3 py-1.5 text-xs text-gray-400 hover:text-white bg-[#1e1e1e] border border-[#3c3c3c] rounded-md hover:border-[#007acc] transition-all"
                        title="Save Current Config"
                    >
                        <Save size={14} /> Save
                    </button>
                    <button
                        onClick={handleLoadPreset}
                        className="flex items-center gap-1 px-3 py-1.5 text-xs text-gray-400 hover:text-white bg-[#1e1e1e] border border-[#3c3c3c] rounded-md hover:border-[#007acc] transition-all"
                        title="Load Saved Config"
                    >
                        <Download size={14} className="rotate-180" /> Load
                    </button>
                    <button
                        onClick={handleReset}
                        className="flex items-center gap-2 px-3 py-1.5 text-xs text-gray-400 hover:text-white bg-[#1e1e1e] border border-[#3c3c3c] rounded-md hover:border-red-500 hover:bg-red-500/10 transition-all"
                        title="Reset to Defaults"
                    >
                        <RotateCcw size={14} />
                        Reset
                    </button>
                </div>
            </div>

            {/* AI Recommendation Section */}
            <div className="mb-6 bg-gradient-to-r from-[#1e1e1e] to-[#252526] p-4 rounded-lg border border-[#3c3c3c] relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Bot size={64} />
                </div>
                <label className="text-sm font-bold text-gray-200 mb-2 flex items-center gap-2">
                    <Bot size={16} className="text-purple-400" />
                    AI 智能配置 (Smart Config)
                </label>
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={aiPrompt}
                        onChange={(e) => setAiPrompt(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleAIRecommend()}
                        placeholder="描述您的项目, e.g. '我要开发一个类似淘宝的高并发电商APP'..."
                        className="flex-1 bg-[#0f0f0f] border border-[#3c3c3c] rounded px-4 py-2 text-sm text-gray-200 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 outline-none transition-all placeholder:text-gray-600"
                    />
                    <button
                        onClick={handleAIRecommend}
                        className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors flex items-center gap-2 shadow-lg shadow-purple-900/20"
                    >
                        <Sparkles size={14} /> 自动生成
                    </button>
                </div>
            </div>

            {/* Role Selection */}
            <div className="mb-6 bg-[#1e1e1e] p-4 rounded border border-[#3c3c3c]">
                <label
                    className="text-sm font-bold text-gray-300 mb-2 flex items-center gap-2 cursor-help"
                    title='角色 (Role) —— "你是谁？"&#013;告诉 AI 它现在的身份是什么，让它的思维聚焦，回答更专业。&#013;例如：选了 "前端"，它就不会去想数据库怎么设计。'
                >
                    <User size={16} className="text-blue-400" />
                    角色 (Role) <span className="text-xs font-normal text-gray-500">(Hover me?)</span>
                </label>
                <div className="flex flex-wrap gap-2">
                    {ANTIGRAVITY_ROLES.map((r) => (
                        <button
                            key={r}
                            onClick={() => setRole(r)}
                            className={`px-3 py-1.5 rounded text-xs transition-all border ${role === r
                                ? 'bg-[#007acc] text-white border-[#007acc] shadow-[0_0_10px_rgba(0,122,204,0.3)]'
                                : 'bg-[#252526] text-gray-400 border-[#3c3c3c] hover:border-gray-500 hover:text-gray-200'
                                }`}
                        >
                            {r}
                        </button>
                    ))}
                </div>
                <div className="mt-2 p-2 bg-[#252526] rounded text-xs text-gray-400 font-mono border border-[#3c3c3c]">
                    {role}
                </div>
                {ITEM_DESCRIPTIONS[role] && (
                    <div className="mt-2 p-2 bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs rounded">
                        💡 {ITEM_DESCRIPTIONS[role]}
                    </div>
                )}
            </div>

            {/* Stack Selection */}
            <div className="mb-6 bg-[#1e1e1e] p-4 rounded border border-[#3c3c3c]">
                <label
                    className="text-sm font-bold text-gray-300 mb-2 flex items-center gap-2 cursor-help"
                    title='技术栈 (Stack) —— "你用什么工具干活？"&#013;告诉 AI 必须用什么具体的技术来实现。&#013;例如：选了 "React"，它就不会给你写 Vue 的代码。省得你每次都要纠正它。'
                >
                    <Layers size={16} className="text-green-400" />
                    技术栈 (Stack) <span className="text-xs font-normal text-gray-500">(Hover me?)</span>
                </label>
                <div className="space-y-3 mb-2 max-h-60 overflow-y-auto custom-scrollbar pr-2">
                    {Object.entries(TECH_STACKS).map(([category, tags]) => (
                        <div key={category}>
                            <h5 className="text-[10px] text-gray-500 uppercase font-bold mb-1.5">{category}</h5>
                            <div className="flex flex-wrap gap-2">
                                {tags.map(tag => (
                                    <button
                                        key={tag}
                                        onClick={() => toggleStack(tag)}
                                        className={`text-xs px-2.5 py-1 rounded-full border transition-all ${stack.includes(tag) ? 'bg-[#2da042] text-white border-[#2da042]' : 'bg-[#1e1e1e] text-gray-400 border-[#3c3c3c] hover:border-gray-500'
                                            }`}
                                    >
                                        {stack.includes(tag) ? '✓ ' : '+ '}{tag}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-2 p-2 bg-[#252526] rounded text-xs text-gray-400 font-mono border border-[#3c3c3c]">
                    {stack}
                </div>
                <div className="mt-2 space-y-1">
                    {stack.split(',').map(s => s.trim()).filter(s => ITEM_DESCRIPTIONS[s]).map(s => (
                        <div key={s} className="text-xs text-gray-400 flex gap-2">
                            <span className="font-bold text-gray-300 shrink-0">{s}:</span>
                            <span>{ITEM_DESCRIPTIONS[s]}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Environment Selection */}
            <div className="mb-6 bg-[#1e1e1e] p-4 rounded border border-[#3c3c3c]">
                <label
                    className="text-sm font-bold text-gray-300 mb-3 flex items-center gap-2 cursor-help"
                    title='环境配置 (Environment) —— "你的代码跑在哪里？"&#013;告诉 AI 你的代码运行的环境，它会给出更符合实际的建议。&#013;例如：选了 "Docker"，它就会考虑容器化部署的规范。'
                >
                    <Box size={16} className="text-orange-400" />
                    环境配置 (Environment) <span className="text-xs font-normal text-gray-500">(Hover me?)</span>
                </label>
                <div className="flex gap-2 mb-3">
                    {['npm', 'pnpm', 'yarn', 'none'].map(pm => (
                        <button
                            key={pm}
                            onClick={() => setPkgManager(pm)}
                            className={`text-xs px-3 py-1 rounded border ${pkgManager === pm ? 'bg-[#ce9178] text-[#1e1e1e] border-[#ce9178] font-bold' : 'bg-[#252526] text-gray-400 border-[#3c3c3c]'}`}
                        >
                            {pm}
                        </button>
                    ))}
                </div>
                <div className="flex flex-wrap gap-2">
                    {DEPLOYMENT_TAGS.map(tag => (
                        <button
                            key={tag}
                            onClick={() => toggleDeployment(tag)}
                            className={`text-xs px-2 py-1 rounded border ${deployment.includes(tag) ? 'bg-[#ce9178] text-[#1e1e1e] border-[#ce9178]' : 'bg-[#252526] text-gray-400 border-[#3c3c3c]'}`}
                        >
                            {deployment.includes(tag) ? '✓ ' : ''}{tag}
                        </button>
                    ))}
                </div>
                <div className="mt-2 p-2 bg-[#252526] rounded text-xs text-gray-400 font-mono border border-[#3c3c3c]">
                    {pkgManager} {deployment.join(', ')}
                </div>
                <div className="mt-2 space-y-1">
                    {ITEM_DESCRIPTIONS[pkgManager] && (
                        <div className="text-xs text-gray-400 flex gap-2">
                            <span className="font-bold text-gray-300 shrink-0">{pkgManager}:</span>
                            <span>{ITEM_DESCRIPTIONS[pkgManager]}</span>
                        </div>
                    )}
                    {deployment.map(d => ITEM_DESCRIPTIONS[d] && (
                        <div key={d} className="text-xs text-gray-400 flex gap-2">
                            <span className="font-bold text-gray-300 shrink-0">{d}:</span>
                            <span>{ITEM_DESCRIPTIONS[d]}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* File Type */}
            <div className="mb-6 p-4 bg-[#1e1e1e] rounded border border-[#3c3c3c]">
                <label className="text-sm font-bold text-gray-300 mb-3 flex items-center gap-2">
                    <FileCode size={14} className="text-[#ce9178]" /> 文件范围 (Scope)
                </label>
                <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer group">
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${fileType === 'repo' ? 'border-[#007acc]' : 'border-gray-500'}`}>
                            {fileType === 'repo' && <div className="w-2 h-2 rounded-full bg-[#007acc]"></div>}
                        </div>
                        <input type="radio" className="hidden" checked={fileType === 'repo'} onChange={() => setFileType('repo')} />
                        <span className={`text-sm ${fileType === 'repo' ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'}`}>Repository Wide (全局)</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer group">
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${fileType === 'path' ? 'border-[#007acc]' : 'border-gray-500'}`}>
                            {fileType === 'path' && <div className="w-2 h-2 rounded-full bg-[#007acc]"></div>}
                        </div>
                        <input type="radio" className="hidden" checked={fileType === 'path'} onChange={() => setFileType('path')} />
                        <span className={`text-sm ${fileType === 'path' ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'}`}>Path Specific (特定目录)</span>
                    </label>
                </div>
                {fileType === 'path' && (
                    <div className="mt-3">
                        <input
                            type="text"
                            value={targetPath}
                            onChange={(e) => setTargetPath(e.target.value)}
                            className="w-full bg-[#2d2d2d] border border-[#444] rounded px-3 py-1.5 text-sm text-gray-200 focus:outline-none focus:border-[#007acc]"
                            placeholder="e.g., src/components/auth"
                        />
                    </div>
                )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
                {/* Left Column: Context */}
                <div className="space-y-6">
                    {/* Role */}
                    <div>
                        <label className="text-sm font-medium text-gray-400 mb-2 flex items-center gap-2"><User size={14} /> 角色 (Role)</label>
                        <div className="flex flex-wrap gap-2 mb-2">
                            {ANTIGRAVITY_ROLES.map(r => (
                                <button
                                    key={r}
                                    onClick={() => setRole(r)}
                                    className={`text-xs px-2.5 py-1 rounded-full border transition-all ${role === r ? 'bg-[#007acc] text-white border-[#007acc]' : 'bg-[#1e1e1e] text-gray-400 border-[#3c3c3c] hover:border-gray-500'
                                        }`}
                                >
                                    {r}
                                </button>
                            ))}
                        </div>
                        <input
                            type="text"
                            value={role}
                            onChange={e => setRole(e.target.value)}
                            className="w-full bg-[#3c3c3c] border border-[#2d2d2d] rounded px-3 py-2 text-gray-200 focus:border-[#007acc] outline-none text-sm"
                        />
                    </div>

                    {/* Stack - Categroized */}
                    <div>
                        <label className="text-sm font-medium text-gray-400 mb-2 flex items-center gap-2"><Cpu size={14} /> 技术栈 (Stack)</label>
                        <div className="space-y-3 mb-2 max-h-60 overflow-y-auto custom-scrollbar pr-2">
                            {Object.entries(TECH_STACKS).map(([category, tags]) => (
                                <div key={category}>
                                    <h5 className="text-[10px] text-gray-500 uppercase font-bold mb-1.5">{category}</h5>
                                    <div className="flex flex-wrap gap-2">
                                        {tags.map(tag => (
                                            <button
                                                key={tag}
                                                onClick={() => toggleStack(tag)}
                                                className={`text-xs px-2.5 py-1 rounded-full border transition-all ${stack.includes(tag) ? 'bg-[#2da042] text-white border-[#2da042]' : 'bg-[#1e1e1e] text-gray-400 border-[#3c3c3c] hover:border-gray-500'
                                                    }`}
                                            >
                                                {stack.includes(tag) ? '✓ ' : '+ '}{tag}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <input
                            type="text"
                            value={stack}
                            onChange={e => setStack(e.target.value)}
                            className="w-full bg-[#3c3c3c] border border-[#2d2d2d] rounded px-3 py-2 text-gray-200 focus:border-[#007acc] outline-none text-sm mt-2"
                        />
                    </div>

                    {/* Environment */}
                    <div className="bg-[#1e1e1e] p-3 rounded border border-[#3c3c3c]">
                        <label className="text-sm font-medium text-gray-400 mb-3 flex items-center gap-2"><Box size={14} /> 环境配置</label>
                        <div className="flex gap-2 mb-3">
                            {['npm', 'pnpm', 'yarn', 'none'].map(pm => (
                                <button
                                    key={pm}
                                    onClick={() => setPkgManager(pm)}
                                    className={`text-xs px-3 py-1 rounded border ${pkgManager === pm ? 'bg-[#ce9178] text-[#1e1e1e] border-[#ce9178] font-bold' : 'bg-[#252526] text-gray-400 border-[#3c3c3c]'}`}
                                >
                                    {pm}
                                </button>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {DEPLOYMENT_TAGS.map(tag => (
                                <button
                                    key={tag}
                                    onClick={() => toggleDeployment(tag)}
                                    className={`text-xs px-2 py-1 rounded border ${deployment.includes(tag) ? 'bg-[#ce9178] text-[#1e1e1e] border-[#ce9178]' : 'bg-[#252526] text-gray-400 border-[#3c3c3c]'}`}
                                >
                                    {deployment.includes(tag) ? '✓ ' : ''}{tag}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: Rules */}
                <div className="space-y-4">
                    <div>
                        <label className="text-sm font-medium text-gray-400 mb-2 flex items-center gap-2"><Layers size={14} /> 规则库 (Click to Add)</label>
                        <div className="h-80 overflow-y-auto content-start custom-scrollbar pr-2 bg-[#1e1e1e] p-2 rounded border border-[#3c3c3c]">
                            {Object.entries(RULE_CATEGORIES).map(([category, rules]) => (
                                <div key={category} className="mb-4 last:mb-0">
                                    <h5 className="text-[10px] text-gray-500 uppercase font-bold mb-2 sticky top-0 bg-[#1e1e1e] py-1 border-b border-[#3c3c3c] z-10">{category}</h5>
                                    <div className="flex flex-wrap gap-2">
                                        {rules.map(rule => {
                                            const isAdded = activeRules.includes(rule);
                                            const label = rule.split(':')[0];
                                            return (
                                                <button
                                                    key={rule}
                                                    onClick={() => addPresetRule(rule)}
                                                    disabled={isAdded}
                                                    className={`text-xs px-2.5 py-1.5 rounded border flex items-center gap-1 transition-all ${isAdded
                                                        ? 'bg-[#2d2d2d] text-gray-600 border-[#3c3c3c] cursor-not-allowed'
                                                        : 'bg-[#252526] text-[#4ec9b0] border-[#3c3c3c] hover:border-[#4ec9b0] hover:bg-[#2d2d2d]'
                                                        }`}
                                                >
                                                    {isAdded ? <Check size={10} /> : '+'} {label}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <label className="text-sm font-medium text-gray-400 mb-2 block mt-4">已选规则 (Selected)</label>
                        <div className="flex gap-2 mb-2">
                            <input
                                type="text"
                                value={newRule}
                                onChange={e => setNewRule(e.target.value)}
                                onKeyDown={e => e.key === 'Enter' && addCustomRule()}
                                placeholder="输入自定义规则..."
                                className="flex-1 bg-[#3c3c3c] border border-[#2d2d2d] rounded px-3 py-1.5 text-sm text-gray-200 focus:border-[#007acc] outline-none"
                            />
                            <button onClick={addCustomRule} className="bg-[#0e639c] text-white px-3 py-1.5 rounded text-sm hover:bg-[#1177bb]">Add</button>
                        </div>
                        <ul className="space-y-2 pr-2">
                            {activeRules.map((rule, idx) => (
                                <li key={idx} className="flex justify-between items-start bg-[#1e1e1e] px-3 py-2 rounded text-xs border border-[#3c3c3c] group hover:border-gray-500">
                                    <span className="text-gray-300 leading-relaxed">{rule}</span>
                                    <button onClick={() => removeRule(idx)} className="text-gray-500 hover:text-red-400 opacity-0 group-hover:opacity-100 ml-2">×</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-t border-[#3c3c3c] pt-6">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">预览结果 (Result)</span>
                    <div className="flex gap-3">
                        <button
                            onClick={handleCopy}
                            className="flex items-center gap-2 bg-[#2d2d2d] hover:bg-[#3c3c3c] text-white px-4 py-1.5 rounded text-sm transition-colors border border-[#3c3c3c]"
                        >
                            <Copy size={14} /> 复制 (Copy)
                        </button>
                        <button
                            onClick={handleDownload}
                            className="flex items-center gap-2 bg-[#007acc] hover:bg-[#0063a5] text-white px-4 py-1.5 rounded text-sm transition-colors"
                        >
                            <Download size={14} /> 导出 Markdown
                        </button>
                    </div>
                </div>
                <CodeBlock code={generateMarkdown()} />
            </div>
        </div>
    );
};

export default Generator;
