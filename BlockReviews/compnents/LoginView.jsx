import { StyleSheet, Text, View, SafeAreaView, TextInput, Button } from 'react-native';
import { useState } from "react";
import RegisterView from './RegisterView';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function LoginView(navigation){
    
    Btn_Register_Click = () => {
        navigation.navigate('Register');
    }

    const [loginId, onChangeText] = useState(null);
    const [pwd, onChangePwd] = useState(null);
    return(
        <SafeAreaView>
            <TextInput            
            onChangeText={onChangeText}
            value={loginId}
            placeholder="비밀번호를 입력해주세요"        
            />
            <TextInput            
            onChangeText={onChangePwd}
            value={pwd}
            placeholder="비밀번호를 입력해주세요"        
            />
            <Button
                onPress={() => Btn_Register_Click()}
                title="계정 생성"
                color="#841584"
                accessibilityLabel="계정 생성"
                />           

        
        </SafeAreaView>
    
    )
}


export default LoginView;