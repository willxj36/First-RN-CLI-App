/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

interface IPost {
  id: string,
  title: string,
  body: string
}

const App = () => {

  const [data, setData] = useState<IPost[]>([]);

  useEffect(() => {
    (async () => {
      let res = await fetch('https://jsonplaceholder.typicode.com/posts');
      let posts = await res.json();
      setData(posts);
    })();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardText}>Title: {item.title}</Text>
      <Text style={styles.cardText}>Body: {item.body}</Text>
    </View>
  )

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.mainView}>
        <FlatList data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#611',
  },
  card: {
    margin: 10,
    backgroundColor: '#000',
    padding: 5
  },
  cardText: {
    marginVertical: 10,
    color: '#fff',
    fontSize: 25
  }
});

export default App;
