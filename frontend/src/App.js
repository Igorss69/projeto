import Index from './views';
import Cadastro from './views/cadrastro';
import Formulario from './views/formularioInicial';
import Covid from './views/covid';
import './App.css';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Index" component={Index} options={{ headerShown: false }}/>  
        <Stack.Screen name = "Covid" component={Covid} options={{ headerShown: false }}/>  
        <Stack.Screen name = "Cadastro" component={Cadastro} options={{ headerShown: false }}/> 
        <Stack.Screen name = "Formulario" component={Formulario} options={{ headerShown: false }}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
