import {View, StyleSheet, Modal, Text, Pressable, Image} from 'react-native';

export const LogOutDeleteModal = ({ isVisible, handleModalVisibility, title, description, logout, onPress}) => {
  return (
    <Modal visible={isVisible} transparent={true} animationType={'fade'}>
      <Pressable onPress={handleModalVisibility} style={styles.opacityBackground}>
        <View style={styles.container}>
          <Image source={logout ? require('../../../assets/icons/logout-icon.png') : require('../../../assets/icons/caution-icon.png')} />
          <Text style={styles.textTitle}>{title}</Text>
          <Text style={styles.textDescription}>{description}</Text>
          <View style={styles.buttonsContainer}>
            <Pressable style={styles.button} onPress={handleModalVisibility}>
              <Text style={styles.cancelText}>Cancelar</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={onPress}>
              <Text style={styles.acceptText}>Aceptar</Text>
            </Pressable>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  opacityBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)'
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    width: 312,
    height: 220,
    padding: 24,
    borderRadius: 15
  },
  textTitle: {
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 32,
    marginTop: 18,
    marginBottom: 16
  },
  textDescription: {
    flex: 2,
    color: '#1E1E1E',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'left'
  },
  buttonsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignSelf: 'flex-end',
    flex: 3,
  },
  button: {
    padding: 16
  },  
  cancelText: {
    color: '#018349',
    fontWeight: '500',
    fontSize: 14
  },
  acceptText: {
    color: '#018349',
    fontWeight: '500',
    fontSize: 14
  }
})
