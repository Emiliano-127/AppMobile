import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, requireNativeComponent, Button } from 'react-native';


export default function HomeScreen({navigation}){

   

    return(
        <View style={styles.container}>
      
      
        <Text>  My Aplicationality </Text>
        <Image 
        //style={{ width: 'auto', height: 'auto'}}
        source={require('./assets/doesangue.png')}/>
        <Image 
          style={styles.image}
          source={require('./assets/men.jpg')}/>
  
  
        < View style={styles.buttonContainer}>
  
          <Button title={'Login'} onPress={()=> navigation.navigate('First')} 
            color = "red"
            borderRadius = {100 } />
          
        </View>
        <Text style={styles.text}>Você não tem uma conta? </Text>
        <Button title={'Sign-Up'} onPress={()=>navigation.navigate('Second')}
        color = "blue"
        borderRadius= {100} />
        <StatusBar style="auto" />
      </View>
      
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
  
    image:{
      width: '100%',
      height:'50%',
    },
  
    buttonContainer:{
      marginBottom: 30,
      width: '70%',
      textAlign: 'left',
      
    },
  
    text:{
      textAlign: 'right',
      color : "red"
  
    },
  
    
  });
  