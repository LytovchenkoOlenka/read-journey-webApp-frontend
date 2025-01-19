import css from './Button.module.css'

export default function Button({ label, onClick }) {
    return (
        <button className={css.button} onClick={onClick}>
            {label}
        </button>
    );
}