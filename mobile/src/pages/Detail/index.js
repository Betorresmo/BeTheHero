import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import {} from 'expo-mail-composer';

import style from './style';
import logoImg from '../../assets/logo.png';

export default function Detail(){

    const navigation = useNavigation()

    function navigateBack(){
        navigation.goBack();
    }

    function sendMail(){

    }

    function sendWhatsapp(){

    }

    return(
        <View style={style.container}>

            <View style={style.header}>
            <Image source={logoImg} />
            <TouchableOpacity onPress={navigateBack}>
                <Feather name='arrow-left' size={28} color='#e02041'/>
            </TouchableOpacity>
            </View>

            <View style={style.incident}>
                    <Text style={[style.incidentProperty, {marginTop: 0}]}>ONG:</Text>
                    <Text style={style.incidentValue}>BetONG</Text>

                    <Text style={style.incidentProperty}>CASO:</Text>
                    <Text style={style.incidentValue}>Cadelinha atropelada</Text>

                    <Text style={style.incidentProperty}>VALOR:</Text>
                    <Text style={style.incidentValue}>R$ 120,00</Text>
            </View>

            <View style={style.contactBox}>
                <Text style={style.heroTitle}>Salve o dia!</Text>
                <Text style={style.heroTitle}>Seja o herói desse caso.</Text>

                <Text style={style.heroDescription}>Entre em contato:</Text>

                <View style={style.actions}>
                    <TouchableOpacity style={style.action} onPress={()=>{}} >
                        <Text style={style.actionText}>Whatsapp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.action} onPress={()=>{}} >
                        <Text style={style.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}