import './styles.css';

const Input = ({ name, value, onChange, placehodler }) => (
    <input name={name}
    value={value}
    onChange={onChange}
    placeholder={placehodler} />
)

export default Input;