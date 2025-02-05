import { useState } from 'react';
import Banner from './Components/Banner';
import Formulario from './Components/Formulario';
import Time from './Components/Time';
import Rodape from './Components/Rodape';

function App() {
  
  const times = [
    {
      nome:'Programação',
      corPrimaria:'#57c278',
      corSecundaria:'#D9F7E9'
    },
    {
      nome:'Front-end',
      corPrimaria:'#82CFFA',
      corSecundaria:'#E8F8FF'
    },
    {
      nome:'Data Science',
      corPrimaria:'#A6D157',
      corSecundaria:'#F0F8E2'
    },
    {
      nome:'Devops',
      corPrimaria:'#A6D157',
      corSecundaria:'#FDE7E8'
    },
    {
      nome:'UX e Design',
      corPrimaria:'#DB6EBF',
      corSecundaria:'#FAE9F5'
    },
    {
      nome:'Mobile',
      corPrimaria:'#FFBA05',
      corSecundaria:'#FFF5D9'
    },
    {
      nome:'Inovação e Gestão',
      corPrimaria:'#FF8A29',
      corSecundaria:'#FFEEDF'
    }
]

  //Criando um array de colaboradores e usando useState para atualizar
  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    //console.log(colaborador)    
    setColaboradores([...colaboradores, colaborador])   
  }
  
  return ( 
    <div className="App">
      
      <Banner />
      
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
            
      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria} 
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}  
      
      <Rodape/>
    </div>

  );
}

export default App;
