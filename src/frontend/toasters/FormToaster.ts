import { toast } from "react-hot-toast"

export const userPosted = () => toast('A new user was added successfully!', {
  style: { letterSpacing: '-1px' },
  icon: '✅'
})
  
export const notAllowed = () => toast('Could not register the user', {
  style: { letterSpacing: '-1px' },
  icon: '❌'
})

export const wrongEmail = () => toast('Email format not valid', {
  style: { letterSpacing: '-1px' },
  icon: '❌'
})
  
export const usernameNotCorrect = () => toast('Username must have at least 3ch long, special character and a number', {
  style: { letterSpacing: '-1px' },
  icon: '❌',
  duration: 5000
})

export const warningMessage = () => toast('Make sure to properly fill the fields', {
  style: { letterSpacing: '-1px' },
  icon: '❌',
  duration: 3000
})