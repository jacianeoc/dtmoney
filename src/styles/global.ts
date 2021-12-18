import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    --blue: #5429CC;
    --blue-ligth: #6933ff;
    --green: #33CC95;
    --red: #E52E4D;
    --shape-principal: #FFFFFF;
    --titles: #363F5F;
    --texts: #969CB2;
    --background: #F0F2F5;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    @media(max-width:1080px){
      font-size: 93.75%;//15px
    }
    @media(max-width:720px){
      font-size: 83.5%;//14px
    }
  }
  
  body{
    background:var(--background);
    /* usado para dizer que queremos a fonte mais detalhadas*/
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
  }

  button{
    cursor: pointer;
  }
  /*tudo que estiver desabilitado */
  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }
`