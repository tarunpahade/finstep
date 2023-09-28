import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const FAQPage = ({data}) => {
  const faqData = data
  return (
    <ScrollView>
      {faqData.map((faqItem, index) => (
        <View key={index} style={styles.faqItem}>
          <Text style={styles.question}>{faqItem.question}</Text>
          <Text style={styles.answer}>{faqItem.answer}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = {
  faqItem: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  answer: {
    fontSize: 16,
  },
};

export default FAQPage;
