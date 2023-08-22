import { useContext, useCallback } from "react";
import { getOneUser } from "../services/userServices";
import { Context } from '../context/Context'

export const useModalContext = () => {
  const { open, setOpen, editUser, setEditUser } = useContext(Context)

  const handleUpdateUser = useCallback(async (id: string) => {    
    await getOneUser(id)
      .then(response => {
        if (!response) throw new Error('Something went wrong')

        setEditUser(response)
      })
      .catch(err => console.error(err))
  }, [setEditUser])
  

  const changeOpen = () => setOpen((prevValue: boolean) => !prevValue)

  return { open, setOpen, editUser, setEditUser, handleUpdateUser, changeOpen }
}