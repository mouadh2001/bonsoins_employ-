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
import ResetPassword from "./Component/ResetPassword";
import ConjeDemandes from "./Component/ConjeDemandes";
import DisponibilitieDemandes from "./Component/DisponibilitieDemandes";
import ShiftDemandes from "./Component/ShiftDemandes";
import PointageScreen from "./Component/PointageScreen";
import AjouterConjé from "./Component/AjouterConjé";
import AjouterShifts from "./Component/AjouterShifts";
import AjouterDisponibilities from "./Component/AjouterDisponibilities";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import NotificationsScreen from "./Component/NotificationsScreen";
import { Octicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import CustemHeaderHoraire from "./Component/CustemHeaderHoraire";
import ActualiteScreen from "./Screens/ActualiteScreen";



const Stack = createStackNavigator();

const StackR = createStackNavigator();

const MainDrawer = createDrawerNavigator();

const DrawerS = createDrawerNavigator();

function StackReset ({ navigation }) {
  return(
    <StackR.Navigator>
      <StackR.Screen name='Log In' component={LogIn} options={{ headerShown: false }} />
      <StackR.Screen name='Mot de passe oublié' component={ResetPassword} options={{ headerStyle: {backgroundColor: 'white'}, headerTintColor: '#1A938C', headerTitleAlign: 'center' }} />
    </StackR.Navigator>
  );
}



function StackScreens({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Log In"
        component={StackReset}
        options={{ headerShown: false }}
      />
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
              <MaterialCommunityIcons name="sort-variant" size={35} color="#1A938C" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
            onPress={() => navigation.navigate('Notifications')}
            style={styles.opendrawer}
            >
            <MaterialCommunityIcons name="bell-outline" size={35} color="#1A938C" />
            </TouchableOpacity>
            ),
          headerStyle: {backgroundColor: 'white'}, headerTintColor: '#1A938C', headerTitleAlign: 'center',
          
        }}
      />
      <Stack.Screen
        name="Horaire"
        component={HoraireScreen}
        options={{
          header: props => <CustemHeaderHoraire {...props}/>,
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
              <MaterialCommunityIcons name="sort-variant" size={35} color="#1A938C" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
            onPress={() => alert('chercher')}
            style={styles.opendrawer}
            >
            <Fontisto name="search" size={35} color="#1A938C" />
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
              <MaterialCommunityIcons name="sort-variant" size={35} color="#1A938C" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
            onPress={() => alert('chercher')}
            style={styles.opendrawer}
            >
            <Fontisto name="search" size={35} color="#1A938C" />
            </TouchableOpacity>
            ),
          headerStyle: {backgroundColor: 'white'}, headerTintColor: '#1A938C', headerTitleAlign: 'center'
        }}
      />
      <Stack.Screen
        name="Demandes des Conjés"
        component={ConjeDemandes}
        options={{ headerStyle: {backgroundColor: 'white'}, headerTintColor: '#1A938C', headerTitleAlign: 'center'}}
      />
      <Stack.Screen
        name="Demandes des Disponibilités"
        component={DisponibilitieDemandes}
        options={{ headerStyle: {backgroundColor: 'white'}, headerTintColor: '#1A938C', headerTitleAlign: 'center'}}
      />
      <Stack.Screen
        name="Proposition des Shifts"
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
        name="Ajouter Plage à Combler"
        component={AjouterShifts}
        options={{ headerStyle: {backgroundColor: 'white'}, headerTintColor: '#1A938C', headerTitleAlign: 'center', title: 'Proposer a une shift'}}
      />
      <Stack.Screen
        name="Ajouter Disponibilities"
        component={AjouterDisponibilities}
        options={{ headerStyle: {backgroundColor: 'white'}, headerTintColor: '#1A938C', headerTitleAlign: 'center', title: 'Demande de diponibilité'}}
      />
        <Stack.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{ headerStyle: {backgroundColor: 'white'}, headerTintColor: '#1A938C', headerTitleAlign: 'center', title: 'Notifications',
        headerRight: () => (
          <TouchableOpacity
          onPress={() => alert('Notification checked')}
          style={styles.opendrawer}
          >
          <Ionicons name="checkmark-done" size={35} color="#1A938C" />
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
              <Octicons name="home" size={size} color={focused ? "#fff" : "#c7c7c7"} /> 
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
          name="Actualités"
          component={ActualiteScreen}
          options={{
            drawerIcon: ({ focused, size }) => (
              <MaterialCommunityIcons name="newspaper" size={size} color={focused ? "#fff" : "#c7c7c7"} />
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
    marginRight: 15,
  },
});
