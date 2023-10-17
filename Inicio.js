import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Modal, Button, TextInput, Alert } from 'react-native';

export default class Inicio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible : false,
      nombre:"",
      correo:"",
      password:"",
    };
  }

  render() {

    

    const clic_email = () => {
        console.log("press");
        //this.props.navigation.navigate("Menu");
        this.setState({ isVisible:true })
    }

    const clic_facebook = () => {
      console.log("press facebook");
    }

    const clic_inscripcion = () => {
      console.log("press sign up");
      this.props.navigation.navigate("Inscripcion");
    }

    const clic_continuar_email = () => {
      this.setState({ isVisible: false });
    
      var xhttp = new XMLHttpRequest();
      var conexion = false;
      xhttp.onreadystatechange = () => {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
          console.log(xhttp.responseText);
          if(xhttp.responseText === "3"){
              Alert.alert("Correo desconocido, Registrate");
          }else{
            if(xhttp.responseText === "0"){
              Alert.alert("Password malo. intenta de nuevo");
            }else{
              this.props.navigation.navigate("Menu");
            }
          }
          //this.props.navigation.navigate("Menu");
        }
      };
      //xhttp.open("GET", "https://programacion-para-internet-i5909.000webhostapp.com/2023B/datos2.php?nombre=alex&correo=abc@&password=12345", true);
      xhttp.open("GET", "https://programacion-para-internet-i5909.000webhostapp.com/2023B/datos2.php?nombre=alex&correo="+ this.state.correo +"&password=" + this.state.password, true);
      xhttp.send();

    };

    return (
        

      <View>

        <Modal            
          animationType = {"fade"}  
          transparent = {false}  
          visible = {this.state.isVisible}  
          onRequestClose = {() =>{ console.log("Modal has been closed.") } }>  
          {/*All views of Modal*/}  
              <View style = {styles.modal}>  
              <Text style = {styles.text}>Inicio de Sesion</Text>
              <Text style = {styles.text}>Correo: </Text>
              <TextInput onChangeText={correo => this.setState({correo})}></TextInput>
              <Text style = {styles.text}>Contraseña: </Text>
              <TextInput onChangeText={password => this.setState({password})}></TextInput>
              <TouchableOpacity style={styles.btn_email} onPress={ clic_continuar_email } navigation={this.props.navigation} >
                <Text style={styles.txt_email}>Aceptar</Text>
              </TouchableOpacity>  
              <Button title="Click To Close Modal" onPress = {() => {  
                  this.setState({ isVisible:!this.state.isVisible})}}/>  
          </View>  
        </Modal>  
        
        <View style = { styles.fondo }>
        <Image
        style={styles.img_handyman}
        source={require('./img/handyman.png')}
        />
        </View>

        <View style={ styles.login }>

        <Text style={styles.txt_handyman}>Welcome to handyman</Text>

        <TouchableOpacity style={styles.btn_email} onPress={ clic_email }>
            <Text style={styles.txt_email}>Sign in email</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn_facebook} onPress={ clic_facebook }>
            <Text style={styles.txt_facebook}>Sign in facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity  onPress={ clic_inscripcion }>
            <View styles={styles.btn_signup} >
                <Text>dont have an account</Text>
                <Text>SIGN UP</Text>
            </View>  
        </TouchableOpacity>
        
        
        
        </View>

        
      </View>

      
    );
  }
}

const styles = StyleSheet.create({
    fondo:{
        paddingTop: 50,
    },

    img_handyman:{
        marginLeft:5,
        width: 400,
        height: 550,
    },

    login:{
        marginLeft:5,
        width: 400,
         height:220,
        backgroundColor:"#E58835",
        borderRadius:20,
    },

    txt_handyman:{
        marginLeft:80,
        marginTop:25,
        color:"white",
        fontSize: 20,
        fontWeight: 'bold',
    },

    btn_email:{
        marginLeft:90,
        marginTop:20,
        marginRight:100,
        width:200,
        height:40,
        backgroundColor:"#1a4bed",
        borderRadius:16,
        textAlign: 'center', 
    },

    txt_email:{
        color:"white",
        marginLeft:60,
        marginTop:7,
    },

    btn_facebook:{
        marginLeft:90,
        marginTop:10,
        marginRight:100,
        width:200,
        height:40,
        borderWidth:2,
        backgroundColor:"white",
        borderRadius:16,
        textAlign: 'center', 
    },

    txt_facebook:{
        marginLeft:60,
        marginTop:7,
    },

    btn_signup:{
        flexDirection: 'row',
        marginBottom: 20,
    },
    
})