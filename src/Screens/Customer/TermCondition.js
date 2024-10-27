import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const Termcondition = () => {
  return (
    <ScrollView style={styles.container }>
      <View>
        <Text style={styles.headerText}>Terms and Conditions</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Introduction</Text>
        <Text style={styles.paragraph}>
          Welcome to Farm Fresh! By using our app, you agree to comply with and be bound by the following terms and conditions. Please read them carefully. If you do not agree with any part of these terms, you must not use our services.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>User Responsibilities</Text>
        <Text style={styles.paragraph}>
          As a customer of Farm Fresh, you agree to provide accurate information during the registration and ordering process. You are responsible for maintaining the confidentiality of your account details and for all activities that occur under your account.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Orders and Payments</Text>
        <Text style={styles.paragraph}>
          All orders placed on the Farm Fresh app are subject to availability. Prices for our products are subject to change without notice. We accept various payment methods, including credit cards, debit cards, and mobile payment options. By placing an order, you authorize us to charge your selected payment method for the total amount of your purchase.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Shipping and Delivery</Text>
        <Text style={styles.paragraph}>
          We aim to deliver fresh fruits and vegetables in the best possible condition. Delivery times are estimates and may vary due to external factors. We are not responsible for any delays caused by third-party couriers or events beyond our control. Please ensure that someone is available to receive your delivery at the provided address.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Returns and Refunds</Text>
        <Text style={styles.paragraph}>
          If you are unsatisfied with your order or believe that the product quality does not meet your expectations, you may request a return or refund within 24 hours of delivery. Please contact our customer support team with your order details and a description of the issue. Refunds will be processed back to the original payment method.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Product Availability</Text>
        <Text style={styles.paragraph}>
          We strive to keep our inventory updated, but there may be instances where certain products are out of stock or unavailable. In such cases, we reserve the right to substitute unavailable products with similar items of equal or greater value, or we will inform you to adjust your order accordingly.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Privacy and Data Protection</Text>
        <Text style={styles.paragraph}>
          Your privacy is important to us. We are committed to protecting your personal data and only using it in accordance with our Privacy Policy. By using our app, you consent to the collection and use of your data as outlined in the Privacy Policy.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Changes to Terms</Text>
        <Text style={styles.paragraph}>
          Farm Fresh reserves the right to modify or update these terms at any time. Any changes will be posted within the app, and continued use of the app constitutes acceptance of the updated terms.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Information</Text>
        <Text style={styles.paragraph}>
          If you have any questions about these Terms and Conditions, please contact us at [insert support email or phone number].
        </Text>
      </View>
    </ScrollView>
  )
}

export default Termcondition

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    marginBottom:20
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  section: {
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  paragraph: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
  },
});
