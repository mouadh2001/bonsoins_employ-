import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import "react-native-gesture-handler";
import HomeScreen from "./Screens/HomeScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import HoraireScreen from "./Screens/HoraireScreen";
import PresenceScreen from "./Screens/PresenceScreen";
import DemandesScreen from "./Screens/DemandesScreen";
import SettingsScreen from "./Screens/SettingsScreen";
import LogIn from "./Screens/LogIn";
import ResetPassword from "./Screens/ResetPassword";
import ConjeDemandes from "./Component/ConjeDemandes";
import DisponibilitieDemandes from "./Component/DisponibilitieDemandes";
import ShiftDemandes from "./Component/ShiftDemandes";
import PointageScreen from "./Component/PointageScreen";
import AjouterConjé from "./Component/AjouterConjé";
import AjouterShifts from "./Component/AjouterShifts";
import AjouterDisponibilities from "./Component/AjouterDisponibilities";

const Stack = createStackNavigator();

const MainDrawer = createDrawerNavigator();


function StackScreens({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Log In"
        component={LogIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Mot de passe oublié" component={ResetPassword} options={{ headerStyle: {backgroundColor: 'white'}, headerTintColor: '#1A938C', headerTitleAlign: 'center' }}/>
      <Stack.Screen
        name="Accueil"
        component={HomeScreen}
        options={{
          title:'Accueil', headerTintColor: '#1A938C', headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.toggleDrawer()}
              style={styles.opendrawer}
            >
              <FontAwesome name="bars" size={24} color='#1A938C' />
            </TouchableOpacity>
          ),
          headerStyle: {backgroundColor: 'white'}, headerTintColor: '#1A938C', headerTitleAlign: 'center'
        }}
      />
      <Stack.Screen
        name="Horaire"
        component={HoraireScreen}
        options={{
          title:'Horaire', headerTintColor: '#1A938C', headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.toggleDrawer()}
              style={styles.opendrawer}
            >
              <FontAwesome name="bars" size={24} color='#1A938C' />
            </TouchableOpacity>
          ),
          headerStyle: {backgroundColor: 'white'}, headerTintColor: '#1A938C', headerTitleAlign: 'center'
        }}
      />
      <Stack.Screen
        name="Presence"
        component={PresenceScreen}
        options={{
          title:'Présence', headerTintColor: '#1A938C', headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.toggleDrawer()}
              style={styles.opendrawer}
            >
              <FontAwesome name="bars" size={24} color='#1A938C' />
            </TouchableOpacity>
          ),
          headerStyle: {backgroundColor: 'white'}, headerTintColor: '#1A938C', headerTitleAlign: 'center'
        }}
      />
      <Stack.Screen
        name="Demandes"
        component={DemandesScreen}
        options={{
          title:'Demandes', headerTintColor: '#1A938C', headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.toggleDrawer()}
              style={styles.opendrawer}
            >
              <FontAwesome name="bars" size={24} color='#1A938C' />
            </TouchableOpacity>
          ),
          headerStyle: {backgroundColor: 'white'}, headerTintColor: '#1A938C', headerTitleAlign: 'center'
        }}
      />
      <Stack.Screen
        name="Conjés"
        component={ConjeDemandes}
        options={{ headerStyle: {backgroundColor: 'white'}, headerTintColor: '#1A938C', headerTitleAlign: 'center'}}
      />
      <Stack.Screen
        name="Disponibilités"
        component={DisponibilitieDemandes}
        options={{ headerStyle: {backgroundColor: 'white'}, headerTintColor: '#1A938C', headerTitleAlign: 'center'}}
      />
      <Stack.Screen
        name="Shifts"
        component={ShiftDemandes}
        options={{ headerStyle: {backgroundColor: 'white'}, headerTintColor: '#1A938C', headerTitleAlign: 'center'}}
      />
      <Stack.Screen
        name="Pointage"
        component={PointageScreen}
        options={{ headerStyle: {backgroundColor: 'white'}, headerTintColor: '#1A938C', headerTitleAlign: 'center'}}
      />
      <Stack.Screen
        name="Ajouter Conjé"
        component={AjouterConjé}
        options={{ headerStyle: {backgroundColor: 'white'}, headerTintColor: '#1A938C', headerTitleAlign: 'center', title: 'Demande de conjé'}}
      />
      <Stack.Screen
        name="Ajouter Shift"
        component={AjouterShifts}
        options={{ headerStyle: {backgroundColor: 'white'}, headerTintColor: '#1A938C', headerTitleAlign: 'center', title: 'Proposer a une shift'}}
      />
      <Stack.Screen
        name="Ajouter Disponibilities"
        component={AjouterDisponibilities}
        options={{ headerStyle: {backgroundColor: 'white'}, headerTintColor: '#1A938C', headerTitleAlign: 'center', title: 'Demande de diponibilité'}}
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
