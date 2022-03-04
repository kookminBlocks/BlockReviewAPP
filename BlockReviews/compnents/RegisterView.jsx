import { StyleSheet, Text, View, SafeAreaView, TextInput, Button } from 'react-native';
import { useState } from "react";
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 
import axios from 'axios';
import uuid from 'react-uuid'

// export const registerAPI = axios.create({
//     baseURL:'https://localhost:44387',
//     timeout:1000
// });

function RegisterView(navigation){    

    const [addr, onChangeText] = useState(null);

    const params = {
        Id : uuid(),
        NAME: 'TEXT',
        Email : addr
    }

    const CallAPI = () => { 
        axios.post('http://3.35.203.53/api/User/Register', params)
        .then((resposne) => {
            console.log(resposne.status)
            // if (resposne.status = true){
                
            // }
        }).catch(function(error){
            console.log('Failed')
            console.log(error)
        });
    }    
    
    return(

        <SafeAreaView>
            <TextInput                    
                    onChangeText={(val) => onChangeText(val)}
                    value={addr}
                    placeholder="지갑 주소를 입력해주세요"        
                />
                <Button
                title="Register"
                onPress={ () => CallAPI()}
                />
        </SafeAreaView>
    )
}


export default RegisterView;