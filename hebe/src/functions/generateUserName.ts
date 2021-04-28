export default function generateUserName () {
  const len = 10
  let text = ''

  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

  for (let i = 0; i < len; i++) { text += charset.charAt(Math.floor(Math.random() * charset.length)) }

  return text
}
