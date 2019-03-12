
module.exports = {
  // 环境，这里可以设置环来做区别判断
  "env": {
      "browser": true,
      "commonjs": true,
      "es6": true
  },
  // 使用的扩展库
  "extends": ["react-app"],
  // 解析器用于解析代码
  "parser": "babel-eslint",
  // 解析器配置
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": 2018,
      "sourceType": "module"
  },
  //可以全局使用变量
  "globals": {
      "Babel": true,
      
      "React": true
  },
  // 第三方插件`
  // 规则配置
  "rules": {
      "jsx-a11y/accessible-emoji": [
        "on"
      ],
      "no-param-reassign": [0, { "props": false }],
      'react/jsx-filename-extension': [0, { extensions: ['.jsx'] }],
      'react/prefer-stateless-function': [0, { ignorePureComponents: true }],
  }
}