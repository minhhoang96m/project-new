import type { AppProps } from 'next/app'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Provider } from 'react-redux'
import { auth } from '~/config/firebase.ts'
import '~/styles/globals.css'

import { store } from '../app/store'
import Login from './login'

function App({ Component, pageProps }: AppProps) {
  const [loggedInUser, loading, error] = useAuthState(auth)

  if (!loggedInUser) return <Login />
  if (loading) return <h1>Loading...</h1>
  if (error) return console.log('Loading', error)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
