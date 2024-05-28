import { ContainerProps } from '@/app/interfaces/interfaces';
import './container.css'

const Container: React.FC<ContainerProps> = ({className, children}) => {
    return(
        <div className={`container ${className}`}>
            {children}
        </div>
    )
}

export default Container;