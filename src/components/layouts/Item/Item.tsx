import './Item.css'
import { useAppDispatch } from '@utils/hooks';
import { openModal } from '@store/reducers/descriptionModal.slice';
import { ItemData } from '@interfaces/ItemData';

interface ItemProps {
  item: ItemData;
}

export default function Item(props: ItemProps) {
  const dispatch = useAppDispatch()

  return (
    <div className='item itemsize' onClick={() => dispatch(openModal(props.item))} >
      <img src={`../img/${props.item.icon}.png`} className='item-icon iconsize' />
      <div className="item-text-container text">
        <div className="item-title">{props.item.title}</div>
        <div className="item-desc">{props.item.subtitle}</div>
      </div>
    </div>
  );
}