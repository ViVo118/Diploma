import './button.css'
import { ButtonProps } from '@/app/types/types';
const Button: React.FC<ButtonProps> = ({className, children}) => {
    return(
        <button className={`btn ${className}`}>
            {children}
        </button>
    )
}

export default Button;