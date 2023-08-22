import { FormFields } from "../types"

export const getUsers = async () => {
  return await fetch('http://localhost:1234/users')
    .then(response => {
      if (!response.ok) throw new Error('Could not retrieve the users')
      return response.json()
    })
    .then(response => response)
    .catch(err => console.error(err)
    )
}

export const getOneUser = async (id: string) => {
  return await fetch(`http://localhost:1234/users/${id}`)
    .then(response => response.json())
    .then(response => response)
    .catch(err => console.error(err))
}

export const deleteUser = async (id: string) => {
  await fetch(`http://localhost:1234/users/${id}`, {
    method: 'DELETE',
  })
    .then(response => {
      if (!response.ok) throw new Error('User could not be deleted')
    })
    .catch(err => {
      console.error(err)
    })
}

export const postUser = async ({ username, name, city, country, email }: FormFields) => {
  return await fetch('http://localhost:1234/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      name,
      address: {
        city,
        country,
      },
      email
    })
  })
    .then(response => {
      if (!response.ok) throw new Error('Something went wrong')
      return response.json()
    })
    .then(response => response)
    .catch(err => console.error(err))
}

export const patchUser = async ({ id, body }: { id: string, body: FormFields }) => {
  const { username, name, city, country, email } = body
  return await fetch(`http://localhost:1234/users/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      name,
      address: {
        city,
        country,
      },
      email
    })
  })
}