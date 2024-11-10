import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function datos() {
  const datos = fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=c76ed6d50b96d2bfc0920abaeade0be3")
    .then(response => response.json())
    .then(data => console.log(data));
}

datos()
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
