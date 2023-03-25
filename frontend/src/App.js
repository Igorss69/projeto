import Index from './views';
import Cadastro from './views/cadrastro';
import Formulario from './views/formularioInicial';
import './App.css';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Index" component={Index}/>  
        <Stack.Screen name = "Cadastro" component={Cadastro}/> 
        <Stack.Screen name = "Formulario" component={Formulario}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
