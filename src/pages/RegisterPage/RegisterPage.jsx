import Auth from "../../components/Auth/Auth.jsx";
import Frame from '../../components/Frame/Frame.jsx'
import RegisterForm from "../../components/RegisterForm/RegisterForm.jsx";


export default function RegisterPage() {
return(
  <>
      <Auth>
        <RegisterForm></RegisterForm>
      </Auth>
  </>
)
}