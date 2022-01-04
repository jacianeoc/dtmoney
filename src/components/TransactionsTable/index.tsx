
import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";


export function TransactionsTable() {

  useEffect(()=> {
    api.get('transactions')
    .then(response => console.log(response.data))
  }, []);
  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>desenvolvimento</td>
            <td>12.000</td>
            <td>dev</td>
            <td>20/02/2345</td>
          </tr>
          <tr>
            <td>desenvolvimento</td>
            <td className="deposit">12.000</td>
            <td>dev</td>
            <td>20/02/2345</td>
          </tr>
          <tr>
            <td>desenvolvimento</td>
            <td className="withdraw">-12.000</td>
            <td>dev</td>
            <td>20/02/2345</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
  
}