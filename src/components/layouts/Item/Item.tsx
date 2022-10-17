import { useAppDispatch } from '@utils/hooks';
import { ItemData } from '@interfaces/ItemData';

import './Item.css'

interface ItemProps {
  item: ItemData;
}

export default function Item(props: ItemProps) {
  const dispatch = useAppDispatch()

  const handleClick = () => dispatch({ type: 'descriptionModal/openModal', payload: props.item })

  return (
    <div className='item itemsize' onClick={handleClick} >
      <img src={`../img/${props.item.icon}.png`} className='item-icon iconsize' alt={props.item.icon} />
      <div className="item-text-container text">
        <div className="item-title">{props.item.title}</div>
        <div className="item-desc">{props.item.subtitle}</div>
      </div>
    </div>
  );
}