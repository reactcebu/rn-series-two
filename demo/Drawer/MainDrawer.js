import React from 'react';
import { 
    createDrawerNavigator,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import DrawerOne from './screens/DrawerOne';
import DrawerTwo from './screens/DrawerTwo';
import DrawerThree from './screens/DrawerThree';

const Drawer = createDrawerNavigator();

function MainDrawer() {
	return (
		<NavigationContainer>
            <Drawer.Navigator 
                drawerPosition="left"
                drawerType="slide"
            >
				<Drawer.Screen name="DrawerOne" component={DrawerOne} />
				<Drawer.Screen name="DrawerTwo" component={DrawerTwo} />
				<Drawer.Screen name="DrawerThree" component={DrawerThree} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}

export default MainDrawer;
