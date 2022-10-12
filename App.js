import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Home from './screens/Home';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='login' component={Login}/>
        <Stack.Screen name='home' component={Home} options={{
          headerBackVisible: false,
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
  return <Login/>;
}
