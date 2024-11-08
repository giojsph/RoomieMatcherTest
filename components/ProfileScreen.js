import React from 'react';
import {  View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from '../styles/ProfileScreenStyles';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Roomie Matcher</Text>
      </View>
      
      <View style={styles.profileCard}>
        <View style={styles.profileInfo}>
          <View style={styles.profilePicture}></View>
          <Text style={styles.profileName}>John Doe</Text>
          <Text style={styles.profileDetails}>Student - USTP CDO</Text>
          <Text style={styles.profileDetails}>19 years old</Text>
          <Text style={styles.rating}>★★★★☆</Text>
        </View>

        <ScrollView style={styles.optionsContainer}>
          <TouchableOpacity style={styles.optionButton}>
            <FontAwesome name="phone" size={20} color="#333" />
            <Text style={styles.optionText}>Phone</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
            <FontAwesome name="envelope" size={20} color="#333" />
            <Text style={styles.optionText}>E-mail</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
            <FontAwesome name="home" size={20} color="#333" />
            <Text style={styles.optionText}>Home address</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
            <FontAwesome name="bell" size={20} color="#333" />
            <Text style={styles.optionText}>Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
            <FontAwesome name="lock" size={20} color="#333" />
            <Text style={styles.optionText}>Privacy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
            <FontAwesome name="file" size={20} color="#333" />
            <Text style={styles.optionText}>Manage Reports</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
            <FontAwesome name="globe" size={20} color="#333" />
            <Text style={styles.optionText}>Language Preference</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
            <FontAwesome name="question-circle" size={20} color="#333" />
            <Text style={styles.optionText}>Help & Support</Text>
          </TouchableOpacity>
        </ScrollView>

        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;
