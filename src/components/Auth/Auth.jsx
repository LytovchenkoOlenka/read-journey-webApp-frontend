import css from './Auth.module.css'
import iphone from '../../img/iPhone.png'
import Frame from '../Frame/Frame.jsx'
import Logo from "../Logo/Logo.jsx";
// import Button from '../Button/Button.jsx'


export default function Auth({children}) {

return(
    <>
      <Frame>
          <Logo/>
          <h2 className={css.title}>Expand your mind, reading <span className={css.highlightedText}>a book</span></h2>
          {children}

      </Frame>
        <Frame>
            <img src={iphone} alt="Phone" className={css.phoneImg}/>
        </Frame>
    </>
)
}