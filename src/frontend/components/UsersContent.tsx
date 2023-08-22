import { TableRow, TableCell, Text, Button } from '@tremor/react'
import { FC } from "react"
import { User } from '../types'
import { useModalContext } from '../hooks/useContext'

interface Props {
    user: User
    deleteAndUpdate: (userId: string) => void
}

export const UsersContent: FC<Props> = ({ user, deleteAndUpdate }) => {
  const { changeOpen, handleUpdateUser } = useModalContext()

  const handleDeleteUser = () => {
    deleteAndUpdate(user.id)
  }

  const handleEditUser = async () => {
    await handleUpdateUser(user.id)
    changeOpen()
  }

  return(
    <TableRow>
      <TableCell>
        <Text color="indigo">{user.address.city}</Text>
      </TableCell>
      <TableCell>
        <Text color="indigo">{user.address.country}</Text>
      </TableCell>
      <TableCell>
        <Text color='indigo'>{user.email}</Text>
      </TableCell>
      <TableCell>
        <Text color='indigo'>{user.name}</Text>
      </TableCell>
      <TableCell>
        <Text color='indigo'>{user.username}</Text>
      </TableCell>
      <TableCell>
        <Text color='indigo'>{user.id}</Text>
      </TableCell>
      <TableCell>
        <Button onClick={handleDeleteUser} size='xs' color='red'>Delete</Button>
      </TableCell>
      <TableCell>
        <Button onClick={handleEditUser} size='xs' color='emerald'>Edit</Button>
      </TableCell>
    </TableRow>
  )
} 