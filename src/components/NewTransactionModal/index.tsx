import Modal from 'react-modal';
import { Container,TransactionTypeContainer } from './styles';
import closeImg from "../../assets/close.svg";
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg'
import { useState } from 'react';

interface NewTransactionModal {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen,  onRequestClose}: NewTransactionModal) {
   const [type, setType] = useState('deposit');

 
    
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

            <Container>
                <h2>Cadastrar Transação</h2>

                <input placeholder='titulo' />
                <input type="number" placeholder='valor' />

                <TransactionTypeContainer>
                    <button type='button'>
                        <img src={incomeImg} alt="entrada" />
                        <span>Entrada</span>
                    </button>
                    <button type='button'>
                        <img src={outcomeImg} alt="saida" />
                        <span>Saida</span>
                    </button>

                </TransactionTypeContainer>
                <input placeholder='categoria'/>
                <button type="submit">Cadastrar</button>

            </Container>
          
      </Modal>
    )    
}