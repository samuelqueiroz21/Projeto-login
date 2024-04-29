import { useState } from 'react';
import {ScrollView,View,Text,Image,TouchableOpacity,TextInput,} from 'react-native';
import { styles } from './styles';
import { Back } from './components/Back'

export default function App() {
  const [emailField, setEmailField] = useState<string>('');
  const [email, setEmail] = useState('');
  const [passwordField, setPasswordField] = useState<string>('');
  const [password, setPassword] = useState('');
  const [resetPasswordField, setResetPasswordField] = useState('');
  const [resetPassword, setResetPassword] = useState('');
  const [confirmResetPasswordField, setConfirmResetPasswordField] = useState('');
  const [confirmResetPassword, setConfirmResetPassword] = useState('');
  const [enterButton, setEnterButton] = useState('false')
  const [loginPage, setLoginPage] = useState('true') 
  const [resetPage, setResetPage] = useState('false')
  const [restoredPage, setRestoredPage] = useState('false')
  const [signUpPage, setSignUpPage] = useState('false')
  const [emailRegisterField, setEmailRegisterField] = useState('')
  const [cpfRegisterField, setCpfRegisterField] = useState('')
  const [passwordRegisterField, setPasswordRegisterField] = useState('')
  //Função do Esqueci minha senha
  const handleForgotButton = () => {
    setResetPage('true'); 
    setLoginPage('false')  
  };
  //Função do botao Entrar
  const handleLoginButton = () => {  
    setEmail(emailField);     
    setPassword(passwordField);  
    if(emailField == '' && passwordField != ''){
      alert('Você não digitou o email')
    } else if (emailField != '' && passwordField == ''){ 
      alert('Você não digitou a senha')
    }else if(emailField == '' && passwordField == ''){
      alert('Você não digitou o Email e a senha') 
    }  else {
      setLoginPage('false')
      setEnterButton('true')
    }
  };    

  //Função do Cadastre-se  
  const handleSignUpButton = () => {
    setLoginPage('false') 
    setSignUpPage('true')
     
  };
  
  const handlePasswordReset = () => { 
    setResetPassword(resetPasswordField)
    setConfirmResetPassword(confirmResetPasswordField)
    if(resetPasswordField == confirmResetPasswordField){
      setRestoredPage('true')
      setResetPage('false');
    } else{
      alert('As senhas não estão iguais')
    }
  } 

  const returnHome = () => {
    setResetPage('false');
    setLoginPage('true')    
    setRestoredPage('false')    
    setSignUpPage('false')
    setEnterButton('false')
  };
  const handleRegisterButton = () =>{
    if(passwordRegisterField == '' && emailRegisterField != '' && cpfRegisterField != ''){
      alert('Está faltando a senha')
  } else if (emailRegisterField == '' && passwordRegisterField != '' && cpfRegisterField != ''){
      alert('Está faltando o email')
  } else if(cpfRegisterField == '' && passwordRegisterField != '' && emailRegisterField != ''){
      alert('Está faltando o cpf')
  } else if (passwordRegisterField == '' && emailRegisterField == '' && cpfRegisterField != ''){
      alert('Está faltando o email e a senha')
  }else if (passwordRegisterField == '' && cpfRegisterField == '' && emailRegisterField != ''){
      alert('Está faltando o cpf e a senha')
  }else if (emailRegisterField == '' && cpfRegisterField == '' && passwordRegisterField != ''){
      alert('Está faltando o cpf e o email')
  } else if (emailRegisterField == '' && passwordRegisterField == '' && cpfRegisterField == ''){
    alert('Está faltando todas as informações')
  } else{
    alert('Você foi cadastrado com sucesso, volte para a tela de login')
  }
  }
  return (
    <ScrollView style={styles.scrollview}>
      { loginPage == 'true' &&  
        <>
          <View style={styles.container}>

          
            <Image
              style={styles.logo} 
              source={require('./assets/logo.png')}
            />
            <Text style={styles.h1}>Sistema de Login</Text>
            <Text style={styles.h2}>
              Bem vindo(a)! Digite seus dados abaixo.
            </Text>

            <View style={styles.inputArea}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                style={styles.inputField}
                placeholder="Digite seu email"
                placeholderTextColor="#fff"
                value={emailField}
                onChangeText={(t) => setEmailField(t)}
                autoCapitalize="none"
                keyboardType="email-address"
              />
            </View>

            <View style={styles.inputArea}>
              <Text style={styles.inputLabel}>Senha</Text>
              <TextInput
                style={styles.inputField}
                placeholder="**********" 
                placeholderTextColor="#fff"
                value={passwordField}
                onChangeText={(s) => setPasswordField(s)} 
                autoCapitalize="none"
                secureTextEntry
              />
            </View>

            <View style={styles.aditionals}>
              <TouchableOpacity
                style={styles.forgotBtnArea}
                onPress={handleForgotButton}>
                <Text style={styles.forgotBtnText}>Esqueci minha senha</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleLoginButton}> 
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <View style={styles.signUpArea}>
              <Text style={styles.signUpText}>Não tem conta?</Text>
              <TouchableOpacity onPress={handleSignUpButton}>
                <Text style={styles.signUpBtnText}>Cadastre-se</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.footerArea}>
              <Text style={styles.footerText}>Criado por Samuel Queiroz</Text>
            </View>
          </View>
        </> 
      } 
      {enterButton == 'true' &&  
        <> 
          <TouchableOpacity onPress={returnHome}>
            <Back/>
          </TouchableOpacity>
          <ScrollView>
            <View style={styles.container}>
              <Image
                style={styles.logo}
                source={require('./assets/logo.png')}
              />
              <Text style={styles.h1}>Bank House</Text>
              <Text style={styles.h2}>Bem vindo(a) a sua conta</Text>
              <View style={styles.inputArea}>
                <Text style={styles.saldoArea}>Saldo: XXXXXX</Text>
              </View>
              <View style={styles.resources}>
                <View style={styles.resources1}>
                  <TouchableOpacity style={styles.pix}>
                    <Image
                      source={require('./assets/pix.png')}
                    /> 
                    <Text style={styles.textResoruces}>Pix</Text>

                  </TouchableOpacity>

                  <TouchableOpacity style={styles.poupanca}>
                    <Image
                      source={require('./assets/poupanca.png')}
                    /> 
                    <Text style={styles.textResoruces}>Poupança</Text> 

                  </TouchableOpacity>
                </View>
                <View style={styles.resources2}>
                  <TouchableOpacity style={styles.cripto}>
                    <Image
                      source={require('./assets/criptomoeda.png')}
                    /> 
                    <Text style={styles.textResoruces}>Criptocoins</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.converter}>
                    <Image source={require('./assets/converter.png')}/>
                    <Text style={styles.textResoruces}>Conversor de moedas</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </>
      }
      {resetPage == 'true' && 
        <>
          <TouchableOpacity onPress={returnHome}>
            <Back/>
          </TouchableOpacity>
          <View style={styles.container}>
              <Image
                style={styles.logo}
                source={require('./assets/logo.png')}
              />
              <Text style={styles.h1}>Sistema de Recuperação</Text>
              <Text style={styles.h2}>
                Bem vindo(a)! Digite seus dados abaixo.
              </Text>
          </View>

          <View style={styles.inputArea}>
            <Text style={styles.inputLabel}>Digite sua nova senha</Text>
            <TextInput
              style={styles.inputField}
              placeholder="**********" 
              placeholderTextColor="#fff"
              value={resetPasswordField} 
              onChangeText={(s) => setResetPasswordField(s)}
              autoCapitalize="none"
              secureTextEntry 
            />
          </View>  

          <View style={styles.inputArea}> 
            <Text style={styles.inputLabel}>Redigite sua nova senha</Text> 
            <TextInput 
              style={styles.inputField}
              placeholder="**********"  
              placeholderTextColor="#fff"
              value={confirmResetPasswordField} 
              onChangeText={(s) => setConfirmResetPasswordField(s)}
              autoCapitalize="none"  
              secureTextEntry
            />
          </View>
          <TouchableOpacity style={styles.redefinir} onPress={handlePasswordReset}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </>
      }
      {restoredPage == 'true' &&
        <>
          <TouchableOpacity onPress={returnHome}>
            <Back/>
          </TouchableOpacity>
          <View style={styles.container}>
            <Image source={require('./assets/happy.png')} style={styles.happy}/>
            <View style={styles.restoredPassword}>
              <Text style={styles.textResetPassword}>Sua senha foi redefinida com sucesso</Text>
            </View> 
          </View>
        </>
      }
      {signUpPage == 'true' &&
        <>
          <TouchableOpacity onPress={returnHome}>
            <Back/>
          </TouchableOpacity>
           <View style={styles.container}>
              <Image
                style={styles.logo}
                source={require('./assets/logo.png')}
              />
              <Text style={styles.h1}>Sistema de Cadastro</Text>
              <Text style={styles.h2}>
                Bem vindo(a)! Digite seus dados abaixo.
              </Text>
          </View>

          <View style={styles.inputArea}>
            <Text style={styles.inputLabel}>Digite seu CPF</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Digite seu cpf" 
              placeholderTextColor="#fff"
              value={cpfRegisterField} 
              onChangeText={(s) => setCpfRegisterField(s)}
              autoCapitalize="none"
              
            />
          </View>  

          <View style={styles.inputArea}>
            <Text style={styles.inputLabel}>Digite seu Email</Text>
            <TextInput 
              style={styles.inputField}
              placeholder="Digite seu email" 
              placeholderTextColor="#fff"
              value={emailRegisterField} 
              onChangeText={(s) => setEmailRegisterField(s)}
              autoCapitalize="none"
              
            />
          </View>  

          <View style={styles.inputArea}> 
            <Text style={styles.inputLabel}>Digite sua senha</Text> 
            <TextInput 
              style={styles.inputField}
              placeholder="**********"   
              placeholderTextColor="#fff" 
              value={passwordRegisterField} 
              onChangeText={(s) => setPasswordRegisterField(s)}
              autoCapitalize="none"  
              secureTextEntry 
            />
          </View>
          <TouchableOpacity style={styles.redefinir} onPress={handleRegisterButton}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </>
      }
     
    </ScrollView> 
  
  )
}
