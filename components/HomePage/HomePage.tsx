import { signOut } from "firebase/auth"
import Image from "next/image"
import { useAuthState, useIdToken } from "react-firebase-hooks/auth"
import { auth } from "~/config/firebase.ts"

import LogoBlack from "~/public/assets/LogoBlack.png"

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "~/app/store"
import { SET_ACTIVE_USER, token } from "~/features/auth/authSlice.tsx"

interface nameLinks {
  id: number
  name: string
}
const nameLinks: nameLinks[] = [
  {
    id: 1,
    name: "About us",
  },
  {
    id: 2,
    name: "How it works",
  },
  {
    id: 3,
    name: "Pricing",
  },
  {
    id: 4,
    name: "FAQs",
  },
]

export default function HomePage() {
  const handleLogout = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.log("error Logout", error)
    }
  }
  const [loggedInUser] = useAuthState(auth)
  const dispatch: AppDispatch = useDispatch()
  const state = useSelector((state: RootState) => state.auth)


  useEffect(() => {
    const setUser = async () => {
      try {
        if (loggedInUser) {
          await dispatch(token())

          dispatch(
            SET_ACTIVE_USER({
              user: loggedInUser?.displayName,
              isLoading: false,
              error: "nonexistent",
              email: loggedInUser?.email,
              photoURL: loggedInUser?.photoURL,
            })
          )

        }
      } catch (error) {
        console.log("error", error)
      }
    }
    if (loggedInUser) {
      setUser()
    }
  }, [loggedInUser, dispatch])

  return (
    <div className="grid grid-flow-row w-[100%] mx-[8rem]  mt-[3.6rem] mb-[8rem]">
      <div className="flex flex-row justify-normal items-center max-w-[128rem] h-[5.2rem] text-[1.5rem] ">
        <Image src={LogoBlack} alt="LogoBlack.png" width={52} height={52} className="flex-none" />
        <Image
          src={loggedInUser?.photoURL || ""}
          alt={`Hello ${state.user as string}`}
          width={52}
          height={52}
          className="flex-none rounded-full mx-5"
        />
        <div className="flex flex-row grow justify-normal items-center  mx-[2rem] my-[3.6rem] text-[1.5rem]">
          {`Hello ${state.email as string}`}
          {nameLinks.map((nameLink) => (
            <div className="mx-6 my-3" key={nameLink.id}>
              {nameLink.name}
            </div>
          ))}
        </div>

        <button className="flex-none text-[1.5rem] text-center text-[#FFFF] bg-black w-[12.8rem] h-[5.2rem] mx-3 shadow-[0px 4px 4px 0px rgba(0,0,0,0.25)] rounded-[0.4rem] cursor-pointer select-none  hover:bg-[white] hover:text-black transition-all">
          Sign up
        </button>

        <button
          className="flex-none text-[1.5rem] text-center  bg-[#F0F0F0] w-[12.8rem] h-[5.2rem] shadow-[0 4px 4px 0 rgba(0,0,0,0.25)] rounded-[0.4rem] cursor-pointer select-none  hover:bg-[black] hover:text-white transition-all"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  )
}
