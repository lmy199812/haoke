export const usernameRules = [
  {
    required: true,
    message: '账号不能为空'
  },
  {
    pattern: /^[a-zA-Z0-9]{5,8}$/,
    message: '账号格式错误'
  }

]
export const passwordRules = [
  {
    required: true,
    message: '密码不能为空'
  },
  {
    pattern: /^\d{6}$/,
    message: '密码格式错误'
  }
]
