import { StyleSheet, Text, TextInput, View } from 'react-native';

// Recibe un arreglo de objetos. Cada arreglo de segundo nivel debe contener un título en la posicion 0 y un placeholder en la posición 1. Ejemplo: [ { title: 'Agrega un título', placeholder: 'Ej: Departamento de 2 ambientes y 1 baño'}, { title: 'Describí tu inmueble', placeholder: 'Ej: Departamento amplio a 3 cuadras del centro, amplio, ubicado en un tercer piso} ].

export const PostInputs = ({ titleAndPlaceholder = [{ title: '', placeholder: '' }], type = '' }) => {
  return (
    <View style={ styles.container }>

      {
        titleAndPlaceholder.map( input => {

          const { title, placeholder } = input;

          /* if( type === 'price' ){
            return(
              <>
                <Text style={ styles.title }>
                  { input.title }
                </Text>

                <TextInput 
                  style={ styles.input }
                  placeholder={ input.placeholder }
                  placeholderTextColor={ '#979797' }
                  autoComplete='off'
                />
              </>
            )
          } */ 

          return (
            <View key={ `${ title } ${ placeholder }` }>
              <Text key={ title } style={ styles.title }>
                { title }
              </Text>

              <TextInput 
                key={ placeholder }
                style={ styles.input }
                placeholder={ placeholder }
                placeholderTextColor={ '#979797' }
                autoComplete='off'
              />
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
  input: {
    width: '100%',
    fontSize: 14,
    letterSpacing: 0.1,
    borderBottomWidth: 4,
    borderBottomColor: '#D9D9D9',
    marginTop: 21,
    marginBottom: 35,
    height: 24
  }
})
