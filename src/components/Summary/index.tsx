import { useContext } from 'react';
import incomeImg from '../../assets/income.svg';
import  outcomeImg  from "../../assets/outcome.svg";
import  totalImg  from "../../assets/total.svg";
import { TransactionsContext } from '../../TransactionsContexts';
import { Container } from "./styles";

export function Summary() {
  const {transactions} = useContext(TransactionsContext);
  
  return(
    <>
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="income"/>
        </header>
        <strong>1200.00</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImg} alt="income"/>
        </header>
        <strong> -200.00</strong>
      </div>
      <div className='total'>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="total"/>
        </header>
        <strong>1000.00</strong>
      </div>
    </Container>
    
    </>
  );
}