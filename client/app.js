import React from 'react';
import { Navbar, WildPokemonModal } from './components';
import Routes from './routes';

const App = () => {
  return (
    <div>
      <Navbar />
      <WildPokemonModal />
      <Routes />
      <footer>
        <p>Pokemon is Copyright Gamefreak, Nintendo and The Pokémon Company 2001-2013</p>
      </footer>
    </div>
  )
}

export default App;

