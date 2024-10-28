import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';

const Privacypolicy = () => {
  return (
    <ScrollView style={styles.parentView}>
      <View style={styles.freshTextView}>
        <Text style={styles.freshText}>Farm Fresh Privacy Policy</Text>
        <Text>Effective Date: [Insert Date]</Text>
      </View>

      <View style={styles.freshTextView}>
        <Text style={styles.freshText}>1. Introduction</Text>
        <Text>
          At Farm Fresh, we are committed to protecting your privacy. This
          Privacy Policy outlines how we collect, use, and protect your personal
          information when you use our app and services. By using the Farm Fresh
          app, you agree to the collection and use of information in accordance
          with this policy.
        </Text>
      </View>

      <View style={styles.freshTextView}>
        <Text style={styles.freshText}>2. Information We Collect</Text>
        <Text>
          We collect personal information to provide you with a seamless and
          personalized shopping experience. The information we collect includes:
        </Text>
        <Text>
          • Account Information: When you sign up, we collect your name, email
          address, phone number, and delivery address.
        </Text>
        <Text>
          • Payment Information: We collect payment details (such as
          credit/debit card information) when you make purchases. This
          information is securely processed by third-party payment processors
          and not stored on our servers.
        </Text>
        <Text>
          • Order History: We maintain a record of the products you have
          purchased for order tracking, customer service, and personalized
          recommendations.
        </Text>
        <Text>
          • Location Data (Optional): We may collect your location data if you
          enable location services on your device to improve delivery accuracy
          and provide location-based services.
        </Text>
      </View>

      <View style={styles.freshTextView}>
        <Text style={styles.freshText}>3. How We Use Your Information</Text>
        <Text>
          The personal information we collect is used for the following
          purposes:
        </Text>
        <Text>
          • Order Processing: To process and deliver your orders efficiently.
        </Text>
        <Text>
          • Payment Processing: To process transactions securely through
          third-party payment gateways.
        </Text>
        <Text>
          • Customer Support: To respond to your inquiries, complaints, or
          requests for assistance.
        </Text>
        <Text>
          • Personalization: To recommend products, special offers, and services
          based on your preferences and order history.
        </Text>
        <Text>
          • Marketing: To send promotional emails, special offers, or updates if
          you have opted to receive such communications. You can opt out of
          marketing communications at any time.
        </Text>
        <Text>
          • Legal Obligations: To comply with legal and regulatory requirements.
        </Text>
      </View>

      <View style={styles.freshTextView}>
        <Text style={styles.freshText}>4. Sharing Your Information</Text>
        <Text>
          We do not sell or share your personal information with third parties,
          except in the following cases:
        </Text>
        <Text>
          • Service Providers: We share your information with third-party
          vendors and service providers (such as delivery couriers and payment
          processors) who assist in operating the app and providing services to
          you.
        </Text>
        <Text>
          • Legal Requirements: We may disclose your information if required by
          law, court order, or government regulation.
        </Text>
      </View>

      <View style={styles.freshTextView}>
        <Text style={styles.freshText}>5. Data Security</Text>
        <Text>
          We take data security seriously and use industry-standard measures to
          protect your information from unauthorized access, disclosure,
          alteration, or destruction. This includes the use of encryption,
          firewalls, and secure servers for sensitive data.
        </Text>
        <Text>
          However, please note that no method of transmission over the internet
          or method of electronic storage is 100% secure, and we cannot
          guarantee the absolute security of your information.
        </Text>
      </View>

      <View style={styles.freshTextView}>
        <Text style={styles.freshText}>6. Your Rights</Text>
        <Text>
          You have certain rights regarding your personal information,
          including:
        </Text>
        <Text>
          • Access: You can request a copy of the personal information we hold
          about you.
        </Text>
        <Text>
          • Correction: You can request corrections or updates to your personal
          information.
        </Text>
        <Text>
          • Deletion: You can request that we delete your personal information,
          although certain information may need to be retained for legal or
          operational reasons.
        </Text>
        <Text>
          • Opt-Out: You can opt out of receiving marketing emails by clicking
          the "unsubscribe" link in any promotional email.
        </Text>
      </View>

      <View style={styles.freshTextView}>
        <Text style={styles.freshText}>
          7. Cookies and Tracking Technologies
        </Text>
        <Text>
          We use cookies and similar technologies to improve your experience,
          such as remembering your login details, personalizing content, and
          analyzing traffic. You can control cookie preferences through your
          browser settings.
        </Text>
      </View>

      <View style={styles.freshTextView}>
        <Text style={styles.freshText}>8. Third-Party Links</Text>
        <Text>
          The Farm Fresh app may contain links to third-party websites or
          services. We are not responsible for the privacy practices or content
          of these external sites. We encourage you to read the privacy policies
          of any third-party services you use.
        </Text>
      </View>

      <View style={styles.freshTextView}>
        <Text style={styles.freshText}>9. Changes to This Privacy Policy</Text>
        <Text>
          We may update this Privacy Policy from time to time. Any changes will
          be posted within the app, and your continued use of the app after
          changes are made will constitute your acceptance of the updated
          policy.
        </Text>
      </View>

      <View style={styles.freshTextView}>
        <Text style={styles.freshText}>10. Contact Us</Text>
        <Text>
          If you have any questions about this Privacy Policy or the way we
          handle your personal information, please contact us at:
        </Text>
        <Text>Email: [Insert support email]</Text>
        <Text>Phone: [Insert support phone number]</Text>
      </View>
    </ScrollView>
  );
};

export default Privacypolicy;
