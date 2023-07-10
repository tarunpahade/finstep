import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../constants";

const UnderstandCoursePage = ({ route }) => {
  const data = route.params.data;
  const navigation = useNavigation();
  const [conversation, setConversation] = useState([]);
  const [userAnswer, setUserAnswer] = useState("");
  const [CoryReply, setCoryReply] = useState(
    "I am Cory, your personal assistant. I will help you understand this lesson."
  );

  const handleBackButton = () => {
    navigation.goBack();
  };

  const handleUserReply = (answer) => {
    setUserAnswer(answer);
    const updatedConversation = [
      ...conversation,
      { question: CoryReply, answer },
    ];
    setConversation(updatedConversation);
  };

  const handleCheckAnswer = () => {
    if (userAnswer === "Bartering") {
      setConversation([
        ...conversation,
        { question: "Congrats! You have completed the test.", answer: "" },
      ]);
    } else {
      setConversation([
        ...conversation,
        { question: "Oops! That's incorrect. Try again.", answer: "" },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={handleBackButton}>
          <MaterialIcons name="arrow-back" size={18} color="black" />
        </TouchableOpacity>
        <View style={styles.navbarCenter}>
          <Text style={styles.navbarTitle}>
            Lesson {data.key}: {data.name}
          </Text>
        </View>
        <View style={styles.navbarRight}></View>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.panelContainer}>
          {/* Conversation */}
          <View style={styles.conversationContainer}>
            <Image
              source={require("../../assets/icons/robot.png")}
              style={styles.panelImage}
            />
            <View style={styles.messagesContainer}>
              {conversation.map((item, index) => (
                <View key={index}>
                  <Text style={styles.messageText}>{item.question}</Text>
                  <Text style={styles.messageText}>{item.answer}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Question and Answer */}
          <View style={styles.questionContainer}>
            <Text style={styles.questionText}>
              Cory's Question: Are you ready to learn {data.name}?
            </Text>
            <TouchableOpacity
              style={styles.answerButton}
              onPress={() => handleUserReply("Lets BEGIN")}
            >
              <Text style={styles.answerButtonText}>Lets BEGIN</Text>
            </TouchableOpacity>

            <Text style={styles.questionText}>
              In ancient times, people swapped things that they own or tasks
              that they could do instead of paying money. This was called?
            </Text>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleUserReply("Bartering")}
            >
              <Text style={styles.optionText}>Bartering</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleUserReply("Bluffing")}
            >
              <Text style={styles.optionText}>Bluffing</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleUserReply("Biding")}
            >
              <Text style={styles.optionText}>Biding</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleUserReply("Biting")}
            >
              <Text style={styles.optionText}>Biting</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.checkAnswerButton}
              onPress={handleCheckAnswer}
            >
              <Text style={styles.checkAnswerButtonText}>Check Answer</Text>
            </TouchableOpacity>

            {conversation.length > 0 && (
              <View style={styles.resultContainer}>
                <Text style={styles.resultText}>
                  {conversation[conversation.length - 1].question}
                  {conversation[conversation.length - 1].answer}
                </Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    height: 56,
    backgroundColor: "#FFFFFF",
  },
  navbarCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  navbarTitle: {
    marginLeft: 12,
    fontSize: 15,
    fontWeight: "bold",
    color: "#000",
  },
  navbarRight: {
    width: 24,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  panelContainer: {
    alignItems: "center",
    backgroundColor: "#fff",
    width: "70%",
    marginHorizontal: "15%",
    marginTop: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  conversationContainer: {
    position: "absolute",
    left: -30,
    bottom: -100,
  },
  panelImage: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: "rgba(0,96,255,0.2)",
    backgroundColor: "#eee",
    borderRadius: 40,
  },
  messagesContainer: {
    position: "absolute",
    left: 30,
    top: 35,
    width: 180,
    borderRadius: 10,
    backgroundColor: COLORS.lightpurple,
    height: 100,
    padding: 10,
    paddingHorizontal: 9,
  },
  messageText: {
    fontSize: 11,
    letterSpacing: 0.8,
  },
  questionContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  questionText: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  answerButton: {
    backgroundColor: "blue",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    width: "90%",
    alignItems: "center",
  },
  answerButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  optionButton: {
    backgroundColor: "#f2f2f2",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 5,
    width: "90%",
    alignItems: "center",
  },
  optionText: {
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
  },
  checkAnswerButton: {
    backgroundColor: "blue",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    width: "90%",
    alignItems: "center",
  },
  checkAnswerButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  resultContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  resultText: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default UnderstandCoursePage;
