import Image from "next/image"
import { useSignInWithGoogle } from "react-firebase-hooks/auth"
import { auth } from "~/config/firebase.ts"
import LogoGG from "~/public/assets/google-logo.png"

const Login = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth)

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithGoogle()
      // Đăng nhập thành công
    } catch (error) {
      // Xử lý lỗi
      console.log("error", error)
    }
  }

  return (
    <div className="flex flex-col justify-center items-center mx-auto w-[50rem] h-[50rem] bg-white my-[20rem]">
      <Image src={LogoGG} width={300} height={300} alt="logo" />
      <button
        className="mt-3 text-[1.5rem] text-center text-[#FFFF] text-[1.5rem] bg-black w-[19.8rem] h-[5.2rem]  cursor-pointer rounded-full select-none hover:bg-[red] transition-all"
        onClick={handleSignInWithGoogle}
      >
        Login
      </button>
    </div>
  )
}
export default Login
