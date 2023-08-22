import { type FC } from "react";
import useUsers from "../hooks/useUsers";
import { TableComponent } from '../components/Table'
import { Form } from '../components/Form'

export const Home: FC = () => {
  const { users, loading, deleteAndUpdate, postAndUpdate } = useUsers()

  return(
    <>
      <Form handlePostAndUpdate={postAndUpdate} />
      <TableComponent 
        loading={loading} 
        users={users} 
        handleDelete={deleteAndUpdate} 
      />
    </>
  )
}