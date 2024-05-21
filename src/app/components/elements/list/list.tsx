import { listProps } from '@/app/constants/componentsConsts/componentsConsts';
import { doMapForList } from "../../../../../utils/functions";
import './list.css';

const List = () => {
    return (
        <div className="list__container">
            {doMapForList(listProps)}
        </div>
    )
}

export default List