import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! 
      כל שינוי שנבצע פה יופיע ישירות בפון ת נתן להוסיף קומפוננטות ןלעשות אימפורט לכל מיני קומפוננטים בשביל ליצור אתר שלם שהוא רספונסיבי
       starting with react native ::
        on the terminal :
        1. npm install --global expo-cli
        2. expo init "name of your project"
        3. expo init "name of your project" --template blank.

        we finish with the expo-cli installation now we will start the project with the next steps.
        1. cd "name of your project".
        2.expo start.
        3. scannning QR code with your phone 'first dwonload 'expogo/expo on your mobile' .

        #done 
        now the computer will bundle with the phone ,with that being said now every change that we will make on the machine will applied on the mobile also. 
      </Text>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'brown',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
