import React from 'react';
import {View, Text, Button} from 'react-native';

const DrawerTwo = ({navigation}) => {
    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 18}}>Drawer Two</Text>
            <Button title="Toggle Drawer" onPress={()=>navigation.toggleDrawer()}/>
        </View>
    );
};

export default DrawerTwo;