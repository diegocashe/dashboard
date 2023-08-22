import { Home } from './routes/Home'
//import { Login } from './routes/Login'
import { Routes, Route } from 'react-router-dom'
import { ModalForm } from './components/Modal'
import useUsers from './hooks/useUsers'

function App() {
  const { patchUserAndUpdate } = useUsers()

  return (
    <div className='grid place-content-center p-5 min-h-screen bg-[#111]'>
      <ModalForm handlePatchAndUpdate={patchUserAndUpdate} />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
