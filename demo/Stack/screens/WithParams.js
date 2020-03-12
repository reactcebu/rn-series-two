import React from 'react';
import {View, Text} from 'react-native';

const WithParams = ({route}) => {
    return (
        <View>
            <Text>{route.params.company}</Text>
        </View>
    );
};

export default WithParams;