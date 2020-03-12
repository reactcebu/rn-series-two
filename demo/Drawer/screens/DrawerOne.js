import React from 'react';
import {View, Text, Button} from 'react-native';

const DrawerOne = ({navigation}) => {
    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 18}}>Default Screen</Text>
            <Button title="Open Drawer" onPress={()=>navigation.toggleDrawer()}/>
        </View>
    );
};

export default DrawerOne;