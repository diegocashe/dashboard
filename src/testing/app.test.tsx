import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import { cleanup, render, screen, waitFor } from '@testing-library/react'
import App from '../frontend/App'

vi.mock('../services/userServices.ts', () => ({
  
}))

describe('dashboard', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
  })

  afterEach(() => cleanup())

  it('should render app', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    expect(true).toBeTruthy()
  })

  it('should get text post a user', () => {
    const postUser = screen.getAllByText(/Post a User/)
    expect(postUser).toBeTruthy()
  })

  it('should get list of users', async () => {
    await waitFor(() => {
      const getListOfUsers = screen.getByText(/List of users/)
      expect(getListOfUsers).toBeTruthy()
    })
  })
})