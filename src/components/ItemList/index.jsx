import './styles.css';

const ItemList = ({ title, description, homepage }) => {
  return (
    <div className='item-list'>
        <strong>{title}</strong>
        <p>{description}</p>
        <a href={homepage}>{homepage}</a>
        <hr />
    </div>
  )
}

export default ItemList;
