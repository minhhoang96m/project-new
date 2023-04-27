import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { Provider } from 'react-redux'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '~/config/firebase.ts'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import '~/styles/globals.css'

import { store } from '../app/store'
import Login from './login'
function App({ Component, pageProps }: AppProps) {
  const [loggedInUser, loading, error] = useAuthState(auth)
  useEffect(() => {
    const setUserInDb = async () => {
      try {
        await setDoc(
          doc(db, 'users', loggedInUser?.uid as string),
          {
            email: loggedInUser?.email,
            lastSeen: serverTimestamp(),
            photoURL: loggedInUser?.photoURL,
          },
          { merge: true }
        )
        console.log(loggedInUser)
      } catch (error) {
        console.log('error', error)
      }
    }
    if (loggedInUser) {
      setUserInDb()
    }
  }, [loggedInUser])

  if (!loggedInUser) {
    return <Login />
  }
  if (loading) return <h1>Loading...</h1>
  if (error) return console.log('Loading', error)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
