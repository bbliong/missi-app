import Router from './src/router';
import {NavigationContainer} from '@react-navigation/native';

const MainApp = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};
const App = () => {
  return <MainApp />;
};

export default App;
