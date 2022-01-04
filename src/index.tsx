import React from 'react';
import ReactDOM from 'react-dom';

import {createServer} from 'miragejs';
import {App} from './App';
/**
 * routes -> quais são as rotas que tem na api ficticia
 */
createServer({
    routes(){
      /**
       * a partir do endereço api que vai pegar todas as chamas que tenham 
       * api/ e direcionar para o mirage
       */
      this.namespace= 'api'
      /**
       * 
       */
      this.get('/transactions', ()=>{
        return[
          {
            id: 1,
            title: 'Transactions 1',
            amount: 400, 
            type: 'deposit',
            category: 'food',
            data: '20-12-2000'
          }
        ]
      })
    }
  }
)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);