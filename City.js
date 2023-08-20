
import {View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';

import React from 'react';

export default function City(){

    const cidades =[

        <View style={styles.container}>
            <React.Fragment key={'cities'} >

                <TouchableOpacity key={"BH"}><Text style={styles.texto}>Belo Horizonte</Text></TouchableOpacity>
                <TouchableOpacity key={"GV"}><Text style={styles.texto}>Governador Valadares</Text></TouchableOpacity>
                <TouchableOpacity key={"JF"}><Text style={styles.texto}>Juiz de Fora</Text></TouchableOpacity>
                <TouchableOpacity key={"AP"}><Text style={styles.texto}>Além Paraíba</Text></TouchableOpacity>
                <TouchableOpacity key={"BT"}><Text style={styles.texto}>Betim</Text></TouchableOpacity>
                <TouchableOpacity key={"DMT"}><Text style={styles.texto}>Diamantina</Text></TouchableOpacity>
                <TouchableOpacity key={"DIV"}><Text style={styles.texto}>Divinopólis</Text></TouchableOpacity>
                <TouchableOpacity key={"ITU"}><Text style={styles.texto}>Ituiutaba</Text></TouchableOpacity>
                <TouchableOpacity key={"MAN"}><Text style={styles.texto}>Manhuaçu</Text></TouchableOpacity>
                <TouchableOpacity key={"MC"}><Text style={styles.texto}>Montes Claros</Text></TouchableOpacity>
                <TouchableOpacity key={"PAS"}><Text style={styles.texto}>Passos</Text></TouchableOpacity>
                <TouchableOpacity key={"PDM"}><Text style={styles.texto}>Patos de Minas</Text></TouchableOpacity>
                <TouchableOpacity key={"UB"}><Text style={styles.texto}>Uberlândia</Text></TouchableOpacity>
        </React.Fragment>


        </View>
        
        

        
    ];

    

    
    return (

        <SafeAreaView style={styles.container}>
          {cidades}
            
         
        </SafeAreaView>


    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        
       
       
    },

    texto:{
        color: 'white',
        fontWeight: 'bold',
        fontSize:15,
        backgroundColor: 'red',
        padding: 8.5,
        margin: 10,
        marginLeft: 100,
        marginRight: 100,
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 5,

       
    }
     
});