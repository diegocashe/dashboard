import { FormEvent, FC } from 'react'
import { Toaster } from 'react-hot-toast'
import { emailRegex, usernameRegex } from '../consts/userRegex'
import { warningMessage } from '../toasters/FormToaster'
import { FormFields } from '../types'

interface Props {
  handlePostAndUpdate: ({ username, email, name, city, country }: FormFields) => void
}

export const Form: FC<Props> = ({ handlePostAndUpdate }) => {

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const { username, email, name, city, country } = Object.fromEntries(formData)

    if (emailRegex({ email }) || usernameRegex({ username })) return warningMessage()
    
    handlePostAndUpdate({ username, email, name, city, country })
  }

  return (
    <div className="bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:bg-[#111827] mx-auto mb-10">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Create a User</h1>
        <form onSubmit={handleSubmit}  className="flex flex-col items-center space-y-4 md:space-y-6" action="#">
          <section className='flex gap-8'>
            <article className='flex flex-col [&>div]:mb-3'>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#f59e0b]">Your email</label>
                <input type="email" name="email" className=" text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required={true} />
              </div>
              <div>
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-[#f59e0b]">Username</label>
                <input type="text" name="username" placeholder="Cool Username" className="bg-gray-50 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} />
              </div>
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-[#f59e0b]">Name</label>
                <input type="text" name="name" placeholder="Cool Name" className="bg-gray-50 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} />
              </div>
            </article>
            <article className='flex flex-col [&>div]:mb-3'>
              <div>
                <label htmlFor="city" className="block mb-2 text-sm font-medium text-[#f59e0b]">City</label>
                <input type="text" name="city" placeholder="Cool Username" className=" text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} />
              </div>
              <div>
                <label htmlFor="country" className="block mb-2 text-sm font-medium text-[#f59e0b]">Country</label>
                <input type="text" name="country" placeholder="Cool Username" className=" text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} />
              </div>
            </article>
          </section>
          <button type="submit" className="bg-[#f59e0b] text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Post a User</button>
        </form>
      </div>
      <Toaster />
    </div>
  )
}