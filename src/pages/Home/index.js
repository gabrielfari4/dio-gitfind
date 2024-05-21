import Header from "../../components/Header";
import background from '../../assets/background2.png'
import './styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} className="background" alt="Imagem github" />
        <div className="info">
          <div>
            <input name="usuario" placeholder="@user" />
            <button>Buscar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
