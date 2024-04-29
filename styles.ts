import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  scrollview: {
    backgroundColor: '#44d62c',
    paddingHorizontal: 15,
    paddingTop: 40,
  },
  container: {
    alignItems: 'center'
  },
  logo: {
    width: 150,
    height: 150,
  },
  h1: { 
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  h2: {
    color: '#fff',
    fontSize: 15,
  },
  inputArea: {
    width: '100%',
    paddingTop: 40,
  },
  inputLabel: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
    paddingBottom: 7,
  },
  inputField: {
    color: '#fff',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#000',
    fontSize: 15,
    padding: 10,
  },
  aditionals: {
    width: '100%',
  },
  forgotBtnArea: {
    paddingVertical: 20,
    alignSelf: 'flex-end',
  },
  forgotBtnText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff'
  },
  button: {
    backgroundColor: '#000',
    width: '100%',
    padding: 10,
    marginVertical: 30,
    borderRadius: 5,
  },
  buttonText: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
  },
  signUpArea: {
    flexDirection: 'row',
    marginTop: 30,
  },
  signUpText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000',
  },
  signUpBtnText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 5,
  },
  footerArea: {
    marginVertical: 30,
  },
  footerText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000',
  },
  saldoArea:{
    height: 50, 
    margin: 5,
    backgroundColor: '#000',
    color: '#FFF',
    border: 'inset rgba(0,0,0,1) ',
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 15,
  },
  redefinir:{
    backgroundColor: '#000',
    width: '100%',
    padding: 10,
    borderRadius: 5,
    marginVertical: 40
  },
  resources:{
    marginTop: 30,
  },
  resources1:{
    flexDirection: 'row'
  },
  resources2:{
    flexDirection: 'row'
  },
  textResoruces:{
    color: '#FFF',
    paddingHorizontal: 5,
    fontWeight: 'bold',
    fontSize: 10
  },
  pix:{
    width: 120, 
    height: 50,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginRight: 20
    
  }, 
  poupanca:{
    width: 120, 
    height: 50,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginLeft: 20
  },
  cripto:{
    width: 120, 
    height: 50,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginVertical: 60,
    marginRight: 20
  },
  converter:{
    width: 120, 
    height: 50,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginVertical: 60,
    marginLeft: 20
  },
  restoredPassword:{
    width: 300,
    height: 250,
    backgroundColor: '#000',
		marginVertical:50,
  },
  happy:{
    marginTop: 150
  },
  textResetPassword:{
    color: '#FFF',
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingVertical: 120
  }
})