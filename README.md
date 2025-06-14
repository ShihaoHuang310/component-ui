# Mattverse UI

<div align="center">
  <h1>🚀 Mattverse UI</h1>
  <p>一个基于 Vue 3 和 Tailwind CSS 的现代组件库，专为 Mattverse 项目设计</p>

  [![Vue 3](https://img.shields.io/badge/Vue-3.x-4FC08D?style=flat-square&logo=vue.js)](https://vuejs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.x-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
  [![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
</div>

## ✨ 特性

- 🔥 **Vue 3 + TypeScript** - 基于最新的 Vue 3 Composition API 和 TypeScript
- 🎨 **Tailwind CSS** - 完全可定制的样式系统
- 📦 **按需导入** - 支持 Tree Shaking，只打包使用的组件
- 🌙 **暗黑模式** - 内置暗黑模式支持，自动适配系统主题
- 🧩 **组件可组合性** - 基于 Headless UI 设计理念
- 📱 **响应式设计** - 移动端优先的响应式设计
- 🔧 **开发友好** - 完整的 TypeScript 类型支持
- 📚 **Storybook** - 完整的组件文档和示例
- ⚡ **高性能** - 基于 Vite 的快速构建和热更新

## 📦 安装

### 使用包管理器安装

```bash
# 使用 pnpm (推荐)
pnpm add @mattverse-ui/components @mattverse-ui/core

# 使用 npm
npm install @mattverse-ui/components @mattverse-ui/core

# 使用 yarn
yarn add @mattverse-ui/components @mattverse-ui/core
```

### 安装依赖

确保你的项目中已安装以下依赖：

```bash
# Vue 3 相关
pnpm add vue@^3.4.0

# Tailwind CSS (如果还未安装)
pnpm add -D tailwindcss@^3.4.0 autoprefixer postcss

# 表单验证 (可选)
pnpm add @vee-validate/zod zod
```

## 🚀 快速开始

### 1. 基础使用

```vue
<script setup lang="ts">
import { Button, Input, Form } from '@mattverse-ui/components'
import { ref } from 'vue'

const inputValue = ref('')
</script>

<template>
  <div class="p-6 space-y-4">
    <Button variant="primary" size="lg">
      主要按钮
    </Button>

    <Input
      v-model="inputValue"
      placeholder="请输入内容..."
      class="w-full"
    />
  </div>
</template>
```

### 2. 配置 Tailwind CSS

在你的 `tailwind.config.js` 中添加组件库的样式：

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    // 添加组件库的路径
    "./node_modules/@mattverse-ui/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      // 自定义主题配置
    },
  },
  plugins: [],
}
```

### 3. 导入样式

在你的主 CSS 文件中导入 Tailwind CSS：

```css
/* main.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 📖 组件文档

### 可用组件

| 组件          | 描述                         | 状态   |
| ------------- | ---------------------------- | ------ |
| `Button`      | 按钮组件，支持多种变体和尺寸 | ✅ 可用 |
| `Input`       | 输入框组件，支持各种输入类型 | ✅ 可用 |
| `Form`        | 表单组件，集成表单验证       | ✅ 可用 |
| `FormControl` | 表单控件包装器               | ✅ 可用 |
| `FormItem`    | 表单项容器                   | ✅ 可用 |
| `FormLabel`   | 表单标签                     | ✅ 可用 |
| `FormMessage` | 表单错误信息                 | ✅ 可用 |

### Button 组件示例

```vue
<script setup lang="ts">
import { Button } from '@mattverse-ui/components'
</script>

<template>
  <!-- 不同变体 -->
  <Button variant="default">默认按钮</Button>
  <Button variant="destructive">危险按钮</Button>
  <Button variant="outline">轮廓按钮</Button>
  <Button variant="secondary">次要按钮</Button>
  <Button variant="ghost">幽灵按钮</Button>
  <Button variant="link">链接按钮</Button>

  <!-- 不同尺寸 -->
  <Button size="sm">小按钮</Button>
  <Button size="default">默认按钮</Button>
  <Button size="lg">大按钮</Button>
  <Button size="icon">图标</Button>

  <!-- 禁用状态 -->
  <Button disabled>禁用按钮</Button>
</template>
```

### Form 组件示例

```vue
<script setup lang="ts">
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Button,
  useForm
} from '@mattverse-ui/components'
import { z } from 'zod'

// 定义表单验证规则
const formSchema = z.object({
  username: z.string().min(2, '用户名至少需要2个字符'),
  email: z.string().email('请输入有效的邮箱地址'),
  password: z.string().min(6, '密码至少需要6个字符')
})

// 使用表单
const form = useForm({
  schema: formSchema,
  defaultValues: {
    username: '',
    email: '',
    password: ''
  }
})

const onSubmit = (values: z.infer<typeof formSchema>) => {
  console.log('表单提交:', values)
}
</script>

<template>
  <Form @submit="form.handleSubmit(onSubmit)" class="space-y-6">
    <FormItem>
      <FormLabel>用户名</FormLabel>
      <FormControl>
        <Input
          v-model="form.values.username"
          placeholder="请输入用户名"
        />
      </FormControl>
      <FormMessage />
    </FormItem>

    <FormItem>
      <FormLabel>邮箱</FormLabel>
      <FormControl>
        <Input
          v-model="form.values.email"
          type="email"
          placeholder="请输入邮箱"
        />
      </FormControl>
      <FormMessage />
    </FormItem>

    <FormItem>
      <FormLabel>密码</FormLabel>
      <FormControl>
        <Input
          v-model="form.values.password"
          type="password"
          placeholder="请输入密码"
        />
      </FormControl>
      <FormMessage />
    </FormItem>

    <Button type="submit" class="w-full">
      提交
    </Button>
  </Form>
</template>
```

## 🛠️ 开发指南

本项目使用现代化的前端开发工具链，包括 pnpm、Turborepo、Vite 等。

### 环境要求

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### 开发环境设置

```bash
# 1. 克隆仓库
git clone <repository-url>
cd mattverse-ui

# 2. 安装依赖
pnpm install

# 3. 启动开发环境 (包含所有包的开发模式)
pnpm dev

# 4. 单独启动某个包
pnpm --filter playground dev    # 启动示例应用
pnpm --filter docs dev          # 启动 Storybook
pnpm --filter components dev    # 启动组件库开发模式
```

### 构建命令

```bash
# 构建所有包
pnpm build

# 构建特定包
pnpm --filter components build
pnpm --filter core build

# 清理构建产物
pnpm clean
```

### 代码质量

```bash
# 代码检查
pnpm lint

# 代码格式化
pnpm format

# 类型检查
pnpm type-check

# 运行测试
pnpm test
```

## 📁 项目结构

```
mattverse-ui/
├── 📁 docs/                    # Storybook 文档和示例
│   ├── 📁 .storybook/          # Storybook 配置
│   ├── 📁 stories/             # 组件故事
│   └── 📄 package.json
├── 📁 packages/                # 核心包
│   ├── 📁 components/          # UI 组件库
│   │   ├── 📁 src/
│   │   │   ├── 📁 button/      # Button 组件
│   │   │   ├── 📁 form/        # Form 相关组件
│   │   │   ├── 📁 input/       # Input 组件
│   │   │   └── 📄 index.ts     # 导出文件
│   │   ├── 📄 package.json
│   │   ├── 📄 vite.config.ts   # Vite 构建配置
│   │   └── 📄 tsconfig.json
│   └── 📁 core/                # 核心工具函数
│       ├── 📁 src/
│       │   └── 📄 index.ts
│       ├── 📄 package.json
│       └── 📄 tsup.config.ts   # tsup 构建配置
├── 📁 playground/              # 示例应用
│   ├── 📁 src/
│   │   ├── 📁 pages/           # 示例页面
│   │   └── 📁 styles/          # 样式文件
│   ├── 📄 index.html
│   ├── 📄 main.ts
│   ├── 📄 package.json
│   └── 📄 vite.config.ts
├── 📄 package.json             # 根 package.json
├── 📄 pnpm-workspace.yaml      # pnpm 工作空间配置
├── 📄 turbo.json               # Turborepo 配置
├── 📄 tsconfig.json            # TypeScript 配置
├── 📄 .eslintrc.js             # ESLint 配置
└── 📄 README.md                # 项目文档
```

## 🔧 技术栈

### 核心技术
- **Vue 3** - 渐进式 JavaScript 框架
- **TypeScript** - 类型安全的 JavaScript 超集
- **Tailwind CSS** - 实用优先的 CSS 框架
- **Vite** - 下一代前端构建工具

### 开发工具
- **pnpm** - 快速、节省磁盘空间的包管理器
- **Turborepo** - 高性能构建系统
- **ESLint** - 代码质量检查工具
- **Storybook** - 组件开发和文档工具

### 表单处理
- **VeeValidate** - Vue 3 表单验证库
- **Zod** - TypeScript 优先的模式验证库

## 🚨 故障排除

### 常见问题

#### 1. 安装依赖失败
```bash
# 清理缓存并重新安装
pnpm store prune
rm -rf node_modules
rm pnpm-lock.yaml
pnpm install
```

#### 2. 构建失败
```bash
# 检查 Node.js 版本
node --version  # 应该 >= 18.0.0

# 检查 pnpm 版本
pnpm --version  # 应该 >= 8.0.0

# 清理构建缓存
pnpm clean
pnpm build
```

#### 3. 组件导入失败
确保正确配置了 Tailwind CSS 和组件库的路径：

```js
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/@mattverse-ui/**/*.{vue,js,ts,jsx,tsx}"
  ],
  // ...
}
```

#### 4. 类型错误
确保安装了所有必要的类型定义：

```bash
pnpm add -D @types/node
```

### 开发环境问题

如果遇到开发环境启动问题，请按以下步骤检查：

1. **检查端口占用**：确保端口 5173、5174、6006 没有被占用
2. **检查依赖版本**：确保所有依赖版本兼容
3. **清理缓存**：删除 `node_modules` 和 `dist` 目录后重新安装

## 🤝 贡献指南

我们欢迎所有形式的贡献！请遵循以下步骤：

### 开发流程

1. **Fork 本仓库**
   ```bash
   git clone https://github.com/your-username/mattverse-ui.git
   cd mattverse-ui
   ```

2. **创建特性分支**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **安装依赖并开发**
   ```bash
   pnpm install
   pnpm dev
   ```

4. **提交更改**
   ```bash
   git add .
   git commit -m 'feat: add amazing feature'
   ```

5. **推送分支**
   ```bash
   git push origin feature/amazing-feature
   ```

6. **创建 Pull Request**

### 代码规范

- 使用 TypeScript 编写代码
- 遵循 ESLint 规则
- 为新组件编写 Storybook 故事
- 添加适当的类型定义
- 编写清晰的提交信息

### 提交信息规范

本项目使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范，并通过 husky + commitlint 强制执行。

#### 提交格式

```
<type>(<scope>): <subject>

<body>

<footer>
```

#### 类型 (type)

- `feat:` 新功能
- `fix:` 修复 bug
- `docs:` 文档更新
- `style:` 代码格式化，不影响代码逻辑
- `refactor:` 重构，既不是新增功能，也不是修复 bug
- `perf:` 性能优化
- `test:` 增加测试
- `chore:` 构建过程或辅助工具的变动
- `revert:` 回滚
- `build:` 构建系统或外部依赖项的更改
- `ci:` CI 配置文件和脚本的更改

#### 范围 (scope) - 可选

表示影响的范围，例如：`components`、`core`、`docs`、`playground`

#### 示例

```bash
# 添加新功能
feat(components): add Button component with multiple variants

# 修复 bug
fix(core): resolve utility function type error

# 文档更新
docs: update installation guide

# 重构代码
refactor(components): simplify Form component logic

# 破坏性变更
feat(components)!: change Button API

BREAKING CHANGE: Button component now requires variant prop
```

#### Git Hooks

项目配置了以下 Git hooks：

- **pre-commit**: 运行代码检查和类型检查
- **commit-msg**: 验证提交信息格式

如果提交信息不符合规范，提交将被拒绝。

## 📄 许可证

本项目基于 [MIT 许可证](LICENSE) 开源。

## 🙏 致谢

感谢以下开源项目的启发和支持：

- [Vue.js](https://vuejs.org/) - 渐进式 JavaScript 框架
- [Tailwind CSS](https://tailwindcss.com/) - 实用优先的 CSS 框架
- [Headless UI](https://headlessui.com/) - 无样式、完全可访问的 UI 组件
- [Radix UI](https://www.radix-ui.com/) - 低级 UI 原语
- [shadcn/ui](https://ui.shadcn.com/) - 设计灵感来源

---

<div align="center">
  <p>如果这个项目对你有帮助，请给我们一个 ⭐️</p>
  <p>Made with ❤️ by Mattverse Team</p>
</div>
