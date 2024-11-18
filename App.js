import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; 
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';  

export default function App() {
  
  const stories = [
    { id: '1', name: 'Alice', image: 'https://via.placeholder.com/150' },
    { id: '2', name: 'Bob', image: 'https://via.placeholder.com/150' },
    { id: '3', name: 'Clara', image: 'https://via.placeholder.com/150' },
    { id: '4', name: 'Daniel', image: 'https://via.placeholder.com/150' },
  ];

  
  const posts = [
    {
      id: '1',
      user: 'Alice',
      text: 'Curtindo um lindo dia ao ar livre!',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: '2',
      user: 'Bob',
      text: 'O novo projeto está incrível. Alguém viu?',
      image: 'https://via.placeholder.com/300',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {}
      <View style={styles.header}>
        <Text style={styles.logo}>facebook</Text>
        <View style={styles.headerIcons}>
          <FontAwesome name="search" size={24} color="white" style={styles.icon} />
          <MaterialIcons name="menu" size={24} color="white" style={styles.icon} />
        </View>
      </View>

      {}
      <View style={styles.postArea}>
        <Image
          source={{ uri: 'https://via.placeholder.com/50' }}
          style={styles.profileImage}
        />
        <TextInput
          style={styles.postInput}
          placeholder="No que você está pensando?"
          placeholderTextColor="#999"
        />
      </View>

      {}
      <FlatList
        data={stories}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.stories}
        renderItem={({ item }) => (
          <View style={styles.story}>
            <Image source={{ uri: item.image }} style={styles.storyImage} />
            <Text style={styles.storyText}>{item.name}</Text>
          </View>
        )}
      />

      {}
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        style={styles.feed}
        renderItem={({ item }) => (
          <View style={styles.post}>
            <Text style={styles.postUser}>{item.user}</Text>
            <Text style={styles.postText}>{item.text}</Text>
            <Image source={{ uri: item.image }} style={styles.postImage} />
          </View>
        )}
      />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5', 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#4267B2', 
  },
  logo: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'lowercase',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 15,
  },
  postArea: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  postInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingHorizontal: 15,
    backgroundColor: '#f9f9f9',
  },
  stories: {
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  story: {
    alignItems: 'center',
    marginHorizontal: 8,
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5,
    borderWidth: 2,
    borderColor: '#4267B2',
  },
  storyText: {
    fontSize: 12,
    color: '#555',
    textAlign: 'center',
  },
  feed: {
    flex: 1,
    padding: 10,
  },
  post: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  postUser: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  postText: {
    fontSize: 14,
    marginBottom: 10,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
});
