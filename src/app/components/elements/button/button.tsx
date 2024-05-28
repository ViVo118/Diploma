import { ButtonProps } from '@/app/interfaces/interfaces';
import './button.css'


const Button: React.FC<ButtonProps> = ({className, children, onClick}) => {
    return(
        <button className={`btn ${className}` } onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;