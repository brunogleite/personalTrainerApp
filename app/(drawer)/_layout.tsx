import { Tabs } from 'expo-router';
import FavoritePage from './favorites';
import HomePage from './home';


const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
      />

      <Tabs.Screen
        name="favorites"
      />
    </Tabs>
  );
};

export default Layout;