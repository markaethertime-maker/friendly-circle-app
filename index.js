import React from 'react'
import ReactDOM from 'react-dom/client'

console.log('Friendly Circle App fonctionne !');

function Home() {
  return <h1>Bienvenue sur Friendly Circle App</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home />);
