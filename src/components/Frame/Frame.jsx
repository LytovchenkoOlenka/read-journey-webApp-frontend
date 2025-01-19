import css from './Frame.module.css';

export default function Frame ({ children}){
    return <div className={css.frame}>{children}</div>;
};