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
          <div className="perfil">
            <img src="https://avatars.githubusercontent.com/u/94396134?v=4" className="profile" alt="foto de perfil" />
            <div>
              <h3>Gabriel Faria</h3>
              <span>@gabrielfari4</span>
              <p>Descrição</p>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default App;
