import {createContext, ReactNode, useEffect, useState} from 'react';
import { api } from './services/api';

interface Transaction {
    id: number;  
    title: string;
    category: string;
    amount: number;
    type: string;
    createdAt: string;
  
  } 

interface TransactionsProviderProps {
    children: ReactNode;
}

/*interface TransactionInput{ 

    title: string;
    category: string;
    amount: number;
    type: string;
  
}*/

/**o type vai herdar todos os valoes de Transaction  menos o 
 * id e o createdAt
 */
type TransactionInput = Omit<Transaction , 'id'| 'createdAt'>

interface TransactionsContextData{
    transactions : Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}
/**
 * criando um constexto no react
 */
export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

/**
 * para que o contexto seja acessivel a outros componentes
 * temos que ter o provider 
 */
export function TransactionsProvider({children}:TransactionsProviderProps) {
    const [transactions, setTransations] = useState<Transaction[]>([]);

    useEffect(()=> {
      api.get('transactions')
      .then(response => setTransations(response.data.transactions))
    }, []);

    async function createTransaction(transactionInput: TransactionInput) {
      
        const response = await api.post('/transactions', {...transactionInput, 
                                                           createdAt: new Date()});

        const {transaction} = response.data;
        setTransations([...transactions, transaction]);
    }
 
    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    );
}
 