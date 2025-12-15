import React, { useState } from 'react';
import { 
    Sparkles, 
    FileCode, 
    User, 
    Cpu, 
    Box, 
    Layers, 
    Check, 
    Download 
} from './Icons';
import CodeBlock from './CodeBlock';
import { 
    ANTIGRAVITY_ROLES, 
    TECH_TAGS, 
    DEPLOYMENT_TAGS, 
    ANTIGRAVITY_RULES 
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
        "架构分层: 严格遵守 视图层 -> 逻辑层 -> 数据层 的单向依赖流"
    ]);
    const [newRule, setNewRule] = useState("");

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

    // --- Generation Logic for Google Antigravity ---
    const generateMarkdown = () => {
        const date = new Date().toISOString().split('T')[0];
        const depStr = deployment.length > 0 ? deployment.join(', ') : "Standard";
        
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
    return `> **${title.trim()}**: ${content ? content.trim() : ''}`;
}).join('\n')}

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

    return (
        <div className="bg-[#252526] border border-[#3c3c3c] rounded-lg p-6 shadow-2xl backdrop-blur-sm bg-opacity-95">
            <div className="flex items-center gap-3 mb-6 border-b border-[#3c3c3c] pb-4">
                <div className="p-2 bg-[#3c3c3c] rounded-lg">
                    <Sparkles className="text-yellow-400" size={20} />
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-gray-100">规则生成器 (Generator)</h3>
                    <p className="text-xs text-gray-500">Google Antigravity Standard (Extended)</p>
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
                        <label className="text-sm font-medium text-gray-400 mb-2 flex items-center gap-2"><User size={14}/> 角色 (Role)</label>
                        <div className="flex flex-wrap gap-2 mb-2">
                            {ANTIGRAVITY_ROLES.map(r => (
                                <button
                                    key={r}
                                    onClick={() => setRole(r)}
                                    className={`text-xs px-2.5 py-1 rounded-full border transition-all ${
                                        role === r ? 'bg-[#007acc] text-white border-[#007acc]' : 'bg-[#1e1e1e] text-gray-400 border-[#3c3c3c] hover:border-gray-500'
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

                    {/* Stack */}
                    <div>
                        <label className="text-sm font-medium text-gray-400 mb-2 flex items-center gap-2"><Cpu size={14}/> 技术栈 (Stack)</label>
                        <div className="flex flex-wrap gap-2 mb-2">
                            {TECH_TAGS.map(tag => (
                                <button
                                    key={tag}
                                    onClick={() => toggleStack(tag)}
                                    className={`text-xs px-2.5 py-1 rounded-full border transition-all ${
                                        stack.includes(tag) ? 'bg-[#2da042] text-white border-[#2da042]' : 'bg-[#1e1e1e] text-gray-400 border-[#3c3c3c] hover:border-gray-500'
                                    }`}
                                >
                                    {stack.includes(tag) ? '✓ ' : '+ '}{tag}
                                </button>
                            ))}
                        </div>
                        <input 
                            type="text" 
                            value={stack} 
                            onChange={e => setStack(e.target.value)}
                            className="w-full bg-[#3c3c3c] border border-[#2d2d2d] rounded px-3 py-2 text-gray-200 focus:border-[#007acc] outline-none text-sm"
                        />
                    </div>

                    {/* Environment */}
                    <div className="bg-[#1e1e1e] p-3 rounded border border-[#3c3c3c]">
                         <label className="text-sm font-medium text-gray-400 mb-3 flex items-center gap-2"><Box size={14}/> 环境配置</label>
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
                        <label className="text-sm font-medium text-gray-400 mb-2 flex items-center gap-2"><Layers size={14}/> 规则库 (Click to Add)</label>
                        <div className="flex flex-wrap gap-2 mb-4 h-80 overflow-y-auto content-start custom-scrollbar pr-2 bg-[#1e1e1e] p-2 rounded border border-[#3c3c3c]">
                            {ANTIGRAVITY_RULES.map(rule => {
                                const isAdded = activeRules.includes(rule);
                                const label = rule.split(':')[0];
                                return (
                                    <button
                                        key={rule}
                                        onClick={() => addPresetRule(rule)}
                                        disabled={isAdded}
                                        className={`text-xs px-2.5 py-1.5 rounded border flex items-center gap-1 transition-all ${
                                            isAdded 
                                            ? 'bg-[#2d2d2d] text-gray-600 border-[#3c3c3c] cursor-not-allowed' 
                                            : 'bg-[#252526] text-[#4ec9b0] border-[#3c3c3c] hover:border-[#4ec9b0] hover:bg-[#2d2d2d]'
                                        }`}
                                    >
                                        {isAdded ? <Check size={10} /> : '+'} {label}
                                    </button>
                                );
                            })}
                        </div>

                        <label className="text-sm font-medium text-gray-400 mb-2 block">已选规则 (Selected)</label>
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
                        {/* Changed: Removed max-h-[200px] and overflow-y-auto to let it grow with content */}
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
                    <button 
                        onClick={handleDownload}
                        className="flex items-center gap-2 bg-[#007acc] hover:bg-[#0063a5] text-white px-4 py-1.5 rounded text-sm transition-colors"
                    >
                        <Download size={14} /> 导出 {fileType === 'repo' ? 'google-antigravity-rules.md' : 'instructions.md'}
                    </button>
                </div>
                <CodeBlock code={generateMarkdown()} />
            </div>
        </div>
    );
};

export default Generator;
