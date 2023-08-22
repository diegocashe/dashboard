import { useState, useEffect } from 'react'
import { notAllowed, userPosted } from '../toasters/FormToaster'
import { getUsers, deleteUser, postUser, patchUser } from '../services/userServices'
import { User, FormFields } from '../types'

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getUsers()
      .then(response => {
        setUsers(response)
        setLoading(false)
      })
  }, [])

  const deleteAndUpdate = async (id: string) => {
    await deleteUser(id)
    getUsers()
      .then(response => {
        setUsers(response)
      })
  }

  const postAndUpdate = async ({ username, email, name, city, country }: FormFields) => {
    await postUser({ username, name, city, country, email })
      .then((response) => {
        if (!response) throw new Error('Something went wrong')
      }).catch((err) => {
        notAllowed()
        console.error(err)
      })

    getUsers()
      .then(response => {
        setUsers(response)
        userPosted()
      })
  }

  const patchUserAndUpdate = async ({ id, body }: { id: string, body: FormFields }) => {
    await patchUser({ id, body })

    getUsers()
      .then(response => {
        setUsers(response)
      })
  }

  return { 
    users, 
    loading,
    deleteAndUpdate, 
    postAndUpdate,
    patchUserAndUpdate 
  }
}

export default useUsers