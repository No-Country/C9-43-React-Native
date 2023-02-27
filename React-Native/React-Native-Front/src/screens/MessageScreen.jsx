import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useState } from "react";
import { SimpleHeader, UnregisteredMessage } from "../components/layout";
import { color } from "@rneui/base";
import { UserCredentialsContext } from "../context/user-credentials-context/UserCredentialsContext";

export const MessageScreen = () => {
  const { userCredentials } = useContext(UserCredentialsContext)
  const [isRead, setIsRead] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: "1",
      sender: "Juan Manuela",
      subject: "Dueño de departamento en venta",
      body: "Hola buenas tardes, estoy vendiendo el departamento y estaria bueno",
      read: true,
      avatar: require("../../assets/Home/avatar_2.png"),
    },
    {
      id: "2",
      sender: "Maria Rodriguez",
      subject: "Re: Reserva de departamento",
      body: "Hola, me interesa el departamento que estas vendiendo, podemos coordinar una visita?",
      read: false,
      avatar: require("../../assets/Home/avatar_2.png"),
    },
  ]);

  const renderMessage = ({ item }) => (
    <TouchableOpacity style={styles.messageContainer}>
      <View style={styles.avatarContainer}>
        <Image source={item.avatar} style={styles.avatarImage} />
      </View>
      <View style={styles.messageContent}>
        <Text style={styles.messageSender}>{item.sender}</Text>
        <Text style={styles.messageSubject}>{item.subject}</Text>
        <Text style={styles.messageBody}>{item.body}</Text>
      </View>
      <View
        style={[
          styles.readIndicator,
          { backgroundColor: item.read ? "green" : "#CB2D2DCC" },
        ]}
      />
      {isRead && (
        <View
          style={[
            styles.readCircle,
            { backgroundColor: item.read ? "green" : "red" },
          ]}
        />
      )}
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, isRead && styles.messageRead]}>
      <SimpleHeader title={"Mensajes"} />
      
      {
        !userCredentials.email ? (<UnregisteredMessage text={'enviar un mensaje'} />)
        :
        (
          <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No messages to display</Text>
        }
      />
        )
      }

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listContent: {
    padding: 16,
  },
  messageContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 10,
    elevation: 10,
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    overflow: "hidden",
  },
  avatarImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  messageContent: {
    flex: 1,
    paddingHorizontal: 10,
  },
  messageSender: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.25,
    color: "#1E1E1E",
  },
  messageSubject: {
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "500",
    color: "#979797",
    lineHeight: 24,
  },
  messageBody: {
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: 12,
    lineHeight: 20,
    color: "#979797",
    letterSpacing: 0.25,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 32,
    color: "#999",
  },
  messageRead: {
    backgroundColor: "red",
  },
  readIndicator: {
    backgroundColor: "red",
    height: 32,
  },
  readIndicator: {
    position: "absolute",
    width: 23,
    height: 23,
    borderRadius: 23 / 2,
    marginLeft: 10,
    right: 10,
    top: 12,
  },
  // readCircle: {
  //   position: "absolute",
  //   top: 15,
  //   right: -5,
  //   width: 10,
  //   height: 10,
  //   borderRadius: 10 / 2,
  // },
});
