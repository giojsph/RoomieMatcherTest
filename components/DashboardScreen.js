// DashboardScreen.js
import React from 'react';
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from '../styles/DashboardScreenStyles';
import { useNavigation } from '@react-navigation/native';

const DashboardScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <FontAwesome name="home" size={40} color="white" style={styles.logo} />
        <Text style={styles.title}>Roomie Matcher</Text>
        <FontAwesome name="ellipsis-h" size={24} color="gray" style={styles.menuIcon} />
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <FontAwesome name="search" size={18} color="gray" />
        <TextInput
          style={styles.searchText}
          placeholder="Search..."
          placeholderTextColor="#777"
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Recommended Matches Section */}
        <View style={styles.recommendedSection}>
          <Text style={styles.sectionTitle}>Recommended Matches</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.matchCard}>
              <FontAwesome name="user-circle" size={50} color="gray" />
              <Text style={styles.matchText}>Boardmate B</Text>
              <Text style={styles.matchText}>Shared location: Paris</Text>
            </View>
            <View style={styles.matchCard}>
              <FontAwesome name="user-circle" size={50} color="gray" />
              <Text style={styles.matchText}>Boardmate A</Text>
              <Text style={styles.matchText}>Shared interests: Surfing</Text>
            </View>
          </ScrollView>
        </View>

        {/* Community Posts Section */}
        <View style={styles.communitySection}>
          <Text style={styles.sectionTitle}>Community Posts</Text>
          <View style={styles.postCard}>
            <View style={styles.postHeader}>
              <Image source={{ uri: 'https://placekitten.com/200/200' }} style={styles.postAvatar} />
              <View>
                <Text style={styles.postUserName}>Sarah</Text>
                <Text style={styles.postTime}>2 days ago, Kauswagan</Text>
              </View>
            </View>
            <Text style={styles.postContent}>Check out this cozy room I found! 🌿</Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navIcon}>
          <FontAwesome name="home" size={24} color="gray" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navIcon}>
          <FontAwesome name="search" size={24} color="gray" />
          <Text style={styles.navText}>Explore</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navIcon}
          onPress={() => navigation.navigate('Profile')}
        >
          <FontAwesome name="user" size={24} color="gray" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

export default DashboardScreen;
