import './App.css';
import Button from './Components/Buttons/Button';
import Text from './Components/Text/Text';

function App() {
  return ( 
  <div className='container'>
    <Button variant='solid'>TEXTO DO BOTÃO</Button>
    <Button variant='outlined'>TEXTO DO BOTÃO 2</Button>
    <Button variant='solid' isLoading>TEXTO DO BOTÃO 3</Button>
    <Button disabled variant='solid'>TEXTO DO BOTÃO 4</Button>
    <Button disabled variant='outlined'>TEXTO DO BOTÃO 5</Button>
    
    <Button variant='solid' onClick={() => console.log("Clicou")}></Button>
    <Text fontSize='sm' >Texto pequeno</Text>
    <Text fontSize='md' className='text-blue'>Texto médio</Text>
    <Text as="h1" fontSize='lg' className='text-red'>Texto Grande</Text>

    <Button variant="solid" colorScheme="teal">Teal solid</Button>
    <Button variant="outlined" colorScheme="teal">Teal outlined</Button>
    <Button variant="solid" colorScheme="blue">Blue solid</Button>
    <Button variant="outlined" colorScheme="blue">Blue outlined</Button>
    <Button variant="solid" colorScheme="pink">Pink solid</Button>
    <Button variant="outlined" colorScheme="pink">Pink outlined</Button>

    <Text align='start'>Start</Text>    
    <Text align='center'>Center</Text>
    <Text align='end'>End</Text>


   </div>

  )
}

export default App;
