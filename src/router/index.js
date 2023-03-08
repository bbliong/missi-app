import {createStackNavigator} from '@react-navigation/stack';

import {SplashScreen, Homepage} from '../pages/';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Homepage"
        component={Homepage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
