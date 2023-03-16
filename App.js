import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import "react-native-gesture-handler";
import HomeScreen from "./Screens/HomeScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import HoraireScreen from "./Screens/HoraireScreen";
import MessangerScreen from "./Screens/MessangerScreen";
import PresenceScreen from "./Screens/PresenceScreen";
import DemandesScreen from "./Screens/DemandesScreen";
import SettingsScreen from "./Screens/SettingsScreen";
import LogIn from "./Screens/LogIn";
import ResetPassword from "./Screens/ResetPassword";

const Stack = createStackNavigator();

const MainDrawer = createDrawerNavigator();

function SignOut({ navigation }) {
  navigation.navigate("Log In");
}

function StackScreens({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Log In"
        component={LogIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Mot de passe oublié" component={ResetPassword} />
      <Stack.Screen
        name="Accueil"
        component={HomeScreen}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.toggleDrawer()}
              style={styles.opendrawer}
            >
              <FontAwesome name="bars" size={24} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Horaire"
        component={HoraireScreen}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.toggleDrawer()}
              style={styles.opendrawer}
            >
              <FontAwesome name="bars" size={24} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Presence"
        component={PresenceScreen}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.toggleDrawer()}
              style={styles.opendrawer}
            >
              <FontAwesome name="bars" size={24} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Messanger"
        component={MessangerScreen}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.toggleDrawer()}
              style={styles.opendrawer}
            >
              <FontAwesome name="bars" size={24} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MainDrawer.Navigator
        initialRouteName="Accueil"
        drawerStyle={{
          backgroundColor: "#1a1a1a",
          width: "80%",
        }}
        drawerContentOptions={{
          activeTintColor: "#fff",
          activeBackgroundColor: "#8994c5",
          inactiveTintColor: "#fff",
          labelStyle: {
            fontSize: 16,
            fontWeight: "bold",
          },
          itemStyle: {
            marginVertical: 10,
          },
        }}
      >
        <MainDrawer.Screen
          name="Accueil"
          component={StackScreens}
          options={{
            drawerIcon: ({ focused, size }) => (
              <FontAwesome
                name="home"
                size={size}
                color={focused ? "#fff" : "#c7c7c7"}
              />
            ),
          }}
        />
        <MainDrawer.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            drawerIcon: ({ focused, size }) => (
              <FontAwesome
                name="user"
                size={size}
                color={focused ? "#fff" : "#c7c7c7"}
              />
            ),
          }}
        />
        <MainDrawer.Screen
          name="Mes Demandes"
          component={DemandesScreen}
          options={{
            drawerIcon: ({ focused, size }) => (
              <FontAwesome
                name="list"
                size={size}
                color={focused ? "#fff" : "#c7c7c7"}
              />
            ),
          }}
        />
        <MainDrawer.Screen
          name="Paramétre"
          component={SettingsScreen}
          options={{
            drawerIcon: ({ focused, size }) => (
              <FontAwesome
                name="cog"
                size={size}
                color={focused ? "#fff" : "#c7c7c7"}
              />
            ),
          }}
        />
        <MainDrawer.Screen
          name="Deconnextion"
          component={LogIn}
          options={{
            drawerIcon: ({ focused, size }) => (
              <FontAwesome
                name="sign-out"
                size={size}
                color={focused ? "#fff" : "#c7c7c7"}
              />
            ),
          }}
        />
      </MainDrawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  opendrawer: {
    marginLeft: 15,
  },
});
