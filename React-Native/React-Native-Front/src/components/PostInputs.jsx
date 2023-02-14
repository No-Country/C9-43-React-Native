import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// Recibe un arreglo de objetos. Cada arreglo de segundo nivel debe contener un título en la posicion 0 y un placeholder en la posición 1. Ejemplo: [ { title: 'Agrega un título', placeholder: 'Ej: Departamento de 2 ambientes y 1 baño'}, { title: 'Describí tu inmueble', placeholder: 'Ej: Departamento amplio a 3 cuadras del centro, amplio, ubicado en un tercer piso} ].

export const PostInputs = ({ titleAndPlaceholder = [{ title: '', placeholder: '' }], type = '' }) => {
  return (
    <View style={ styles.container }>

      {
        titleAndPlaceholder.map( input => {

          const { title, placeholder } = input;

          if( type === 'price' ){

            return(
              <View key={ `${ title } ${ placeholder }` }>
                <Text key={ title } style={ styles.title }>
                  { title }
                </Text>

                <View style={ styles.inputContainer }>
                  <TextInput 
                    key={ placeholder }
                    style={ styles.input }
                    placeholder={ placeholder }
                    placeholderTextColor={ '#979797' }
                    autoComplete='off'
                  />

                  <View style={ styles.buttonsContainer }>
                    <TouchableOpacity style={ styles.buttonPesos }>
                      <Text style={ styles.buttonText }>$</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={ styles.buttonDolares }>
                      <Text style={ styles.buttonText }>USD</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )
          }

          return (
            <View key={ `${ title } ${ placeholder }` }>
              <Text key={ title } style={ styles.title }>
                { title }
              </Text>

              <View style={ styles.inputContainer }>
                <TextInput 
                  key={ placeholder }
                  style={ styles.input }
                  placeholder={ placeholder }
                  placeholderTextColor={ '#979797' }
                  autoComplete='off'
                />
              </View>
            </View>
          )
        })
      }


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 19,
    marginRight: 29
  },
  title: {
    lineHeight: 32,
    color: '#1C1B1F',
    fontSize: 16
  },
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 24,
    marginTop: 21,
    marginBottom: 35,
    borderBottomWidth: 4,
    borderBottomColor: '#D9D9D9'
  },
  input: {
    flex: 1,
    fontSize: 14,
    letterSpacing: 0.1,
    height: 24
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: 40,
    height: 20,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 4,
    marginTop: -10
  },
  buttonText:{
    fontSize: 9,
    textAlign: 'center'
  },  
  buttonPesos: {
    justifyContent: 'center',
    width: 14,
    borderRightWidth: 1,
    borderRightColor: '#D9D9D9'
  },  
  buttonDolares: {
    justifyContent: 'center',
    width: 26
  }
})