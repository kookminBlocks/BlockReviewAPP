import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginView from './compnents/LoginView';
import RegisterView from './compnents/RegisterView';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <View style={styles.container}>
        <NavigationContainer>         	
            <Stack.Navigator>             	
                <Stack.Screen name="Register" component={RegisterView}/> 
                <Stack.Screen name="Login" component={LoginView}/> 
            </Stack.Navigator> 
        </NavigationContainer> 
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
