import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity,FlatList } from "react-native";
import { useState } from "react";

export const MessageScreen = () => {
    const [isRead, setIsRead] = useState(false);
    const [messages, setMessages] = useState([
      { id: '1', 
        sender: 'Juan Manuel', 
        subject: 'Dueño de departamento en venta', 
        body: 
            'Hola buenas tardes, estoy vendiendo el departamento y estaria bueno',
        read: true,
        avatar: require('../../assets/profile-picture.png'), },
      {
        id: '2',
        sender: 'Maria Rodriguez',
        subject: 'Re: Reserva de departamento',
        body:
          'Hola, me interesa el departamento que estas vendiendo, podemos coordinar una visita?',
        read: false,
        avatar: require('../../assets/profile-picture.png'),
      },
    ]);
  
    const renderMessage = ({ item }) => (
      <TouchableOpacity style={styles.messageContainer}>
        <View style={styles.avatarContainer}>
        <Image source={item.avatar} style={styles.avatarImage}/>
         </View>
         <View style={styles.messageContent}>
        <Text style={styles.messageSender}>{item.sender}</Text>
        <Text style={styles.messageSubject}>{item.subject}</Text>
        <Text style={styles.messageBody}>{item.body}</Text>
        </View>
        <View style={[styles.readIndicator, { backgroundColor: item.read ? 'green' : 'red' }]} />
      </TouchableOpacity>
    );
  
    return (
      <View style={[styles.contenedor,isRead && styles.messageRead]}>
         <View style={styles.headerContainer}>
         <Text style={styles.headerText}>Mensajes</Text>
       </View>
        <FlatList
          data={messages}
          renderItem={renderMessage}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={<Text style={styles.emptyText}>No messages to display</Text>}
        />
      </View>

    );
  };


const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    marginVertical: 20,
    width: "100%",
    backgroundColor: '#fff',
  },
  headerContainer: {
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "red",
    borderBottomWidth: 1,
  },
  headerText: {
    fontWeight: "400",
    fontSize: 16,
  },
  listContent: {
    padding: 16,
  },
  messageContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    // padding: 10,
    marginVertical: 5,
    // width: '100%',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'flex-start',
    paddingHorizontal:10,
    paddingVertical:10,
    elevation:10,
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 50/2,
    overflow: 'hidden',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  messageContent: {
    flex: 1,
    paddingHorizontal: 10,
  },
  messageSender: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  messageSubject: {
    fontSize: 16,
  },
  messageBody: {
    marginTop: 4,
    color: '#999',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 32,
    color: '#999',
  },
});