import React from 'react';
import {View, Button} from 'react-native';

const Main = ({navigation}) => {
    return (
        <View>
           <Button title="Open Screen 1" onPress={()=>navigation.navigate("Screen1")}/>
           <Button title="Open Screen 2" onPress={()=>navigation.navigate("Screen2")}/>
           
           <Button 
               title="Open With Params" 
               onPress={()=>navigation.navigate("WithParams", { company: "XYZ Company" })}
            />
        </View>
    );
};

export default Main;