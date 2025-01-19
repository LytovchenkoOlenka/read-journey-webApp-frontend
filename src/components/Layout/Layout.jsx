import {Outlet} from "react-router-dom";
import css from './Layout.module.css'

export default function Layout(){
    return (
        <div className='layout'>
            {/*<Header/>*/}
            <main className={css.layout}>
                <Outlet/>
            </main>
        </div>
    )
}