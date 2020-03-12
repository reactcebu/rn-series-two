import React from 'react';
import {View, Text, Button} from 'react-native';

const DrawerThree = ({navigation}) => {
    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 18}}>Drawer Three</Text>
            <Button title="Toggle Drawer" onPress={()=>navigation.toggleDrawer()}/>
        </View>
    );
};

export default DrawerThree;