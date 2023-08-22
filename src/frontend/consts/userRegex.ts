const USERNAME_REGEX = new RegExp(/(^[a-z]{3,15}\d\d$)/)
const EMAIL_REGEX = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)

export const usernameRegex = ({ username }: { username: FormDataEntryValue }) => {
  return USERNAME_REGEX.test(username.toString()) === false
}

export const emailRegex = ({ email }: { email: FormDataEntryValue }) => {
  return EMAIL_REGEX.test(email.toString()) === false
}