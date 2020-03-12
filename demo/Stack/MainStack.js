import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Main from './screens/Main';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import WithParams from './screens/WithParams';

const Stack = createStackNavigator();

function MainStack() {
	return (
    <NavigationContainer>
    
      <Stack.Navigator
        initialRouteName="Main"
        headerMode="screen"
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'tomato' },
        }}
      >
        <Stack.Screen 
          name="Main" 
          component={Main} 
        />
        
        <Stack.Screen 
          name="Screen1" 
          component={Screen1} 
        />
        
        <Stack.Screen 
          name="Screen2" 
          component={Screen2} 
          options={{
            title:"Custom Screen Name"
          }}
        />

        <Stack.Screen 
          name="WithParams" 
          component={WithParams} 
          options={{
            title:"With Parameters"
          }}
        />

      </Stack.Navigator>
		</NavigationContainer>
	);
}

export default MainStack;
