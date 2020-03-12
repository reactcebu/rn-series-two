import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from 'react-native-vector-icons';
import TabOne from './screens/TabOne';
import TabTwo from './screens/TabTwo';
import TabThree from './screens/TabThree';

const Tab = createBottomTabNavigator();

function MainTab() {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen
					name="TabOne"
					component={TabOne}
					options={{
						tabBarLabel: 'Tab One',
						tabBarIcon: ({ color, size }) => <MaterialIcons name="home" color={color} size={size} />,
					}}
				/>

				<Tab.Screen
					name="TabTwo"
					component={TabTwo}
					options={{
						tabBarLabel: 'Tab Two',
						tabBarIcon: ({ color, size }) => <MaterialIcons name="favorite" color={color} size={size} />,
					}}
				/>

				<Tab.Screen
					name="TabThree"
					component={TabThree}
					options={{
						tabBarLabel: 'Tab Three',
						tabBarIcon: ({ color, size }) => <MaterialIcons name="menu" color={color} size={size} />,
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}

export default MainTab;
