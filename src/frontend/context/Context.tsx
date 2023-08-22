import { createContext, useState, ReactNode, FC, Dispatch, SetStateAction} from 'react'
import { User } from '../types'

interface ContextValue {
  open: boolean
  editUser: User
  setOpen: Dispatch<SetStateAction<boolean>>
  setEditUser: Dispatch<SetStateAction<User>> 
}

export const Context = createContext<Partial<ContextValue>>({})

interface Props {
  children: ReactNode
}

export const ModalContext: FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false)
  const [editUser, setEditUser] = useState()

  return(
    <Context.Provider value={{ open, setOpen, editUser, setEditUser }}>
      {children}
    </Context.Provider>
  )
}