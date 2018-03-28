import React from 'react';
import { Navbar, WildPokemonModal, BattleModal, EndBattleModal } from './components';
import Routes from './routes';

const App = () => {
  return (
    <div>
      <Navbar />
      <WildPokemonModal />
      <BattleModal />
      <EndBattleModal />
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

