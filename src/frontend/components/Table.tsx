import { 
  Table, 
  TableHead, 
  TableHeaderCell, 
  TableBody, 
  TableRow, 
  Title,
  Text,
  Card,
} from '@tremor/react'
import { UsersContent } from './UsersContent'
import { FC } from 'react'
import { User } from '../types'

interface Props {
  users: User[]
  loading: boolean
  handleDelete: (id: string) => void
}

export const TableComponent: FC<Props> = ({ users, loading, handleDelete }) => {
  if (loading) return <Title color='blue' className='text-6xl'>Loading...</Title>

  return(
    users?.length === 0
      ? <Title color='blue' className='text-2xl tracking-tight'>Sorry, no users available...</Title>
      : <Card>
        <Title className='text-4xl'>List of users</Title>
        <Table>
          <TableHead>
            <TableRow className='[&>th]:text-center'>
              <TableHeaderCell>
                <Text color="amber">City</Text>
              </TableHeaderCell>
              <TableHeaderCell>
                <Text color="amber">Country</Text>
              </TableHeaderCell>
              <TableHeaderCell>
                <Text color="amber">Email</Text>
              </TableHeaderCell>
              <TableHeaderCell>
                <Text color="amber">Name</Text>
              </TableHeaderCell>
              <TableHeaderCell>
                <Text color="amber">Username</Text>
              </TableHeaderCell>
              <TableHeaderCell>
                <Text color="amber">ID</Text>
              </TableHeaderCell>
              <TableHeaderCell>
                <Text color="amber">Delete</Text>
              </TableHeaderCell>
              <TableHeaderCell>
                <Text color="amber">Edit</Text>
              </TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <UsersContent 
                key={user.id}
                user={user}
                deleteAndUpdate={handleDelete}
              />
            ))}
          </TableBody>
        </Table>
      </Card>
  )
}