import Header from "../../components/Header";
import background from '../../assets/background2.png'
import ItemList from "../../components/ItemList";
import './styles.css';
import { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";

function App() {
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleUser = (event) => {
    setUser(event.target.value)
  }

  const handleGetData = async () => {

    try {
      console.log('Fetching data for user:', user)
      const userData = await fetch(`https://api.github.com/users/${user}`)
      if (!userData.ok) {
        throw new Error('Network response was not ok');
      }
      const newUser = await userData.json();

      if (newUser.name) {
        const {avatar_url, name, bio, login} = newUser
        setCurrentUser({avatar_url, name, bio, login})

        const reposData = await fetch(`https://api.github.com/users/${user}/repos`)
        const newRepos = await reposData.json();

        if (newRepos.length) {
          setRepos(newRepos)
        }
      }


    } catch (error) {
      console.error("Error fetching user data: ", error);
    }  
  }

  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} className="background" alt="Imagem github" />
        <div className="info">
          <div>
            <Input name='usuario'
            value={user}
            onChange={handleUser}
            placehodler='@user' />
            <Button onClick={handleGetData}>Buscar</Button>
          </div>
          {currentUser?.name ? (
            <>
              <div className="perfil">
                <img src={currentUser.avatar_url} className="profile" alt="foto de perfil" />
                <div>
                  <h3>{currentUser.name}</h3>
                  <span>@{currentUser.login}</span>
                  <p>{currentUser.bio}</p>
                </div>
              </div>
              <hr />
            </>
          ) : null}
          
          {repos?.length ? (
            <div className="repositorio">
              <h4>Repositórios</h4>
              {repos.map(repo => (
                <ItemList title={repo.name} description={repo.description} homepage={repo.homepage ? repo.homepage : null}/>
              )
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
