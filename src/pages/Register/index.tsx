import { signBg } from "../../assets"
import { HeadTitle, Img, SignUp } from "../../components"

function Register() {
  return (
    <>
      <div className="flex h-screen">
        <HeadTitle title='Register'/>
        <Img src={signBg} alt="sign-img" className="object-cover sm:w-3/4 w-0"/>
        <SignUp/>
      </div>
    </>
  )
}

export default Register