import Modal from 'react-modal';
import { Container,TransactionTypeContainer,  RadioBox } from './styles';
import closeImg from "../../assets/close.svg";
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg'
import { FormEvent, useContext, useState } from 'react';
import { api } from '../../services/api';
import { TransactionsContext } from '../../TransactionsContexts';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen,  onRequestClose}: NewTransactionModalProps) {
    /**
     * valor de um estado para cada input que estiver
     */
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');
   
    const {createTransaction} = useContext(TransactionsContext);

   async function handleCreateNewTransaction(event: FormEvent) {
       event.preventDefault();
        await createTransaction(
           {title, 
            amount,
            category,
            type

        })
        setTitle('');
        setAmount(0);
        setCategory('');
        onRequestClose();

   }
    return (
        <Modal isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content">

            <button type='button' 
            onClick={onRequestClose}
            className="react-modal-close" >
                <img src={closeImg} alt="close modal" />
            </button>

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar Transação</h2>

                <input placeholder='titulo' 
                value={title}
                onChange={event => setTitle(event.target.value)}/>
                <input type="number"
                 placeholder='valor'
                 value={amount}
                onChange={event => setAmount(Number(event.target.value))} 
                />

                <TransactionTypeContainer>
                    < RadioBox type='button'
                        onClick={()=> {setType('deposit')}}
                        isActive= {type === 'deposit'} //passa de acordo com a propriedade
                        activeColor = 'green'
                    >
                        <img src={incomeImg} alt="entrada" />
                        <span>Entrada</span>

                    </ RadioBox>

                    < RadioBox type='button'
                        onClick={()=> {setType('withdraw')}}
                        isActive= {type === 'withdraw'}
                        activeColor = 'red'
                   >
                        <img src={outcomeImg} alt="saida" />
                        <span>Saida</span>
                    </ RadioBox>

                </TransactionTypeContainer>
                <input placeholder='categoria'
                value={category}
                onChange={event => setCategory(event.target.value)}/>
                <button type="submit">Cadastrar</button>

            </Container>
          
      </Modal>
    )    
}