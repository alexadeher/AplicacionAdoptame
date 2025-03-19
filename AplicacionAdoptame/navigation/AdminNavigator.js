import { createDrawerNavigator } from "@react-navigation/drawer";
import AdminHomeScreen from "../screens/AdminHomeScreen";
import AdminProfileScreen from "../screens/AdminProfileScreen";

const Drawer = createDrawerNavigator();

const AdminNavigator = () => (
  <Drawer.Navigator screenOptions={{ drawerActiveTintColor: "#82C0CC" }}>
    <Drawer.Screen name="Inicio" component={AdminHomeScreen} />
    <Drawer.Screen name="Perfil" component={AdminProfileScreen} />
  </Drawer.Navigator>
);

export default AdminNavigator;
