// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/LoginScreenStyles';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation(); // Access navigation

  const handleLogin = () => {
    // You can add validation logic here
    navigation.navigate('Dashboard'); // Navigate to DashboardScreen
  };

  return (
    <LinearGradient colors={['#D8FFE9', '#B8E0FF']} style={styles.container}>
      <View style={styles.logoContainer}>
        <FontAwesome name="home" size={50} color="white" />
        <Text style={styles.logoText}>Roomie Matcher</Text>
      </View>

      <Text style={styles.subTitle}>Fill out the required information to proceed</Text>

      <TextInput
        style={styles.input}
        placeholder="email@domain.com"
        placeholderTextColor="#AAAAAA"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#AAAAAA"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>

      <View style={styles.linksContainer}>
        <TouchableOpacity>
          <Text style={styles.linkText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.linkText}>Create new account</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.orText}>or continue with</Text>

      <TouchableOpacity style={styles.googleButton}>
        <FontAwesome name="google" size={20} color="black" />
        <Text style={styles.googleButtonText}>Google</Text>
      </TouchableOpacity>

      <Text style={styles.agreementText}>
        By clicking continue, you agree to our <Text style={styles.linkText}>Terms of Service</Text> and <Text style={styles.linkText}>Privacy Policy</Text>
      </Text>
    </LinearGradient>
  );
};

export default LoginScreen;
