import './styles.css';

const Button = (props) => (
    
    <button onClick={props.onClick}>{props.children}</button>
)

export default Button;