import React from 'react';
import { Navbar, WildPokemonModal, BattleModal } from './components';
import Routes from './routes';

const App = () => {
  return (
    <div>
      <Navbar />
      <WildPokemonModal />
      <BattleModal />
      <div className="codemon-body">
        <Routes />
      </div>
      <footer>
        <p>Pokémon is Copyright Gamefreak, Nintendo and The Pokémon Company 2001-2018</p>
      </footer>
    </div>
  )
}

export default App;

