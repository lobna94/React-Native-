import React, {useEffect} from 'react';
import {SafeAreaView, Text, StatusBar, View} from 'react-native';
import { COLORS } from './common/colors';
import { SearchScreen } from './screens';


import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import AppContainer from './navigation';



const App = () => {
 
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} >
     <StatusBar barStyle={'light-content'} />
        <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: COLORS.oxfordBlue,
        }}>   
        <AppContainer />    
      </SafeAreaView>
      </PersistGate>
      </Provider>
  );
};

export default App;
