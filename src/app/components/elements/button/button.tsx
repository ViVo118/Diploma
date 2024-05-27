import './button.css'
import { ButtonProps } from '@/app/types/types';
const Button: React.FC<ButtonProps> = ({className, children, onClick}) => {
    return(
        <button className={`btn ${className}` } onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;