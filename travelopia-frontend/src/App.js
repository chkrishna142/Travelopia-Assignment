import { Button, ButtonGroup, useColorMode } from '@chakra-ui/react'
import './App.css';
import Headpage from './component/Headpage';
import Allroutes from './component/Allroutes';
import { Link } from 'react-router-dom';


function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div className="App"
      style={{
        backgroundImage: colorMode === "light" ? "url('https://wallpapercave.com/wp/wp4069436.jpg')" : "url('https://wallpaperaccess.com/full/3275817.jpg')",

      }}>

      <Headpage />
      <ButtonGroup gap='4' mt={"-10px"}>
        <Link to={"/"}> <Button w={"150px"} colorScheme={colorMode === "light" ? 'blackAlpha' : 'gray'}>FORM</Button ></Link>
        <Link to={"/dashboard"}> <Button w={"150px"} colorScheme={colorMode === "light" ? 'blackAlpha' : 'gray'}>DASHBOARD</Button></Link>
      </ButtonGroup>
      <Allroutes />
    </div >
  );
}

export default App;
