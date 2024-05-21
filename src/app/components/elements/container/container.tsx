import './container.css'
import { ContainerProps } from '@/app/types/types';

const Container: React.FC<ContainerProps> = ({className, children}) => {
    return(
        <div className={`container ${className}`}>
            {children}
        </div>
    )
}

export default Container;