import React from 'react';
import ReactDOM from 'react-dom';

import {createServer, Model} from 'miragejs';
import {App} from './App';
/**
 * routes -> quais são as rotas que tem na api ficticia
 */
createServer({
    models:{
      transaction: Model
    },
    seeds(server){
      server.db.loadData({
        transactions: [
          {
            id: 1,
            title: 'Freela',
            category: 'dev',
            type:'deposit',
            amount:6000,
            createdAt: new Date('2021-12-20 09:00:00')
          },
          {
            id: 2,
            title: 'compras',
            category: 'mercado',
            type:'withdraw',
            amount:500,
            createdAt: new Date('2021-12-20 09:00:00')
          }
        ]
      })
    },
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
        return this.schema.all('transaction')
      })
      this.post('/transactions', (shema, request) => {
        const data = JSON.parse(request.requestBody)
        return shema.create('transaction', data);
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