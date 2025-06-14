module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 类型枚举
    'type-enum': [
      2,
      'always',
      [
        'feat',     // 新功能
        'fix',      // 修复 bug
        'docs',     // 文档更新
        'style',    // 代码格式化，不影响代码逻辑
        'refactor', // 重构，既不是新增功能，也不是修复 bug
        'perf',     // 性能优化
        'test',     // 增加测试
        'chore',    // 构建过程或辅助工具的变动
        'revert',   // 回滚
        'build',    // 构建系统或外部依赖项的更改
        'ci'        // CI 配置文件和脚本的更改
      ]
    ],
    // 主题不能为空
    'subject-empty': [2, 'never'],
    // 主题以小写字母开头
    'subject-case': [2, 'always', 'lower-case'],
    // 主题最大长度
    'subject-max-length': [2, 'always', 50],
    // 类型不能为空
    'type-empty': [2, 'never'],
    // 类型必须小写
    'type-case': [2, 'always', 'lower-case'],
    // header 最大长度
    'header-max-length': [2, 'always', 72],
    // body 每行最大长度
    'body-max-line-length': [2, 'always', 100],
    // footer 每行最大长度
    'footer-max-line-length': [2, 'always', 100]
  }
}
