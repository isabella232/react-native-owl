import * as React from 'react';
import { View, Text, Button, TextInput, Pressable } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to OWL Demo</Text>
      <View style={{ paddingVertical: 48 }} />
      <Pressable
        testID="home.viewDetails"
        onPress={() => navigation.navigate('DetailsScreen')}
      >
        <Text style={{ textDecorationLine: 'underline', color: 'black' }}>
          View Details
        </Text>
      </Pressable>
    </View>
  );
}

function DetailsScreen({ navigation }) {
  const [text, setText] = React.useState('');
  const [isTrue, setTrue] = React.useState(false);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <View style={{ paddingVertical: 48 }} />
      <Pressable testID="details.reveal" onPress={() => setTrue(true)}>
        <Text style={{ textDecorationLine: 'underline', color: 'black' }}>
          Reveal secret
        </Text>
      </Pressable>
      {isTrue ? (
        <TextInput
          testID="details.input"
          placeholder="Type something here"
          onChangeText={(newText) => setText(newText)}
          defaultValue={text}
        />
      ) : null}
    </View>
  );
}

const Stack = createNativeStackNavigator();

export function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={{
            headerLeft: () => <HeaderLeft />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HeaderLeft = () => {
  const navigation = useNavigation();

  return (
    <Button
      title="back"
      testID="button.goBack"
      onPress={() => navigation.goBack()}
    />
  );
};
