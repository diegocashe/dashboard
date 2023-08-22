import { FormEvent, type FC } from 'react'
import { createPortal } from 'react-dom'
import { emailRegex, usernameRegex } from '../consts/userRegex'
import { warningMessage } from '../toasters/FormToaster'
import { FormFields } from '../types'
import { useModalContext } from '../hooks/useContext'

interface Props {
  handlePatchAndUpdate: ({ id, body }: { id: string, body: FormFields }) => void
}

const Modal: FC<Props> = ({ handlePatchAndUpdate }) => {
  const { open, changeOpen, editUser } = useModalContext()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const { city, country, email, name, username } = Object.fromEntries(formData);

    if (emailRegex({ email }) || usernameRegex({ username })) {      
      return warningMessage()
    }
    
    handlePatchAndUpdate({ id: editUser.id, body: {city, country, email, name, username} })
    changeOpen()
  }
  
  return (
    open &&
    <div className='grid place-content-center fixed w-screen h-screen backdrop-blur-md z-10 left-0 top-0'>
      <section className='relative w-[450px] bg-[#111827] z-20 rounded-md'>
        <button onClick={changeOpen} className='absolute w-8 h-8 bg-red-500 text-white text-center text-xl font-bold rounded-full -top-2 -right-3'>X</button>
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Change a Field
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4 md:space-y-6" action="#">
            <section className='flex gap-8'>
              <article className='flex flex-col [&>div]:mb-3'>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#f59e0b]">Your email</label>
                  <input required={true} defaultValue={editUser?.email} type="email" name="email" className=" text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                </div>
                <div>
                  <label htmlFor="username" className="block mb-2 text-sm font-medium text-[#f59e0b]">Username</label>
                  <input required={true} defaultValue={editUser?.username} type="text" name="username" placeholder="Cool Username" className="bg-gray-50 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-[#f59e0b]">Name</label>
                  <input required={true} defaultValue={editUser?.name} type="text" name="name" placeholder="Cool Name" className="bg-gray-50 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
              </article>
              <article className='flex flex-col [&>div]:mb-3'>
                <div>
                  <label htmlFor="city" className="block mb-2 text-sm font-medium text-[#f59e0b]">City</label>
                  <input required={true} defaultValue={editUser?.address?.city} type="text" name="city" placeholder="Cool Username" className=" text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div>
                  <label htmlFor="country" className="block mb-2 text-sm font-medium text-[#f59e0b]">Country</label>
                  <input required={true} defaultValue={editUser?.address?.country} type="text" name="country" placeholder="Cool Username" className=" text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
              </article>
            </section>
            <button type="submit" className="bg-[#f59e0b] text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Update User</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export const ModalForm: FC<Props> = ({  handlePatchAndUpdate }) => {
  let modalRoot = document.getElementById('modal')!

  if (!modalRoot) {
    modalRoot = document.createElement('section')
    modalRoot.setAttribute('id', 'modal')
    document.body.appendChild(modalRoot)
  }

  return (
    <section>
      {createPortal( <Modal handlePatchAndUpdate={handlePatchAndUpdate} />, modalRoot)}
    </section>
  )
}