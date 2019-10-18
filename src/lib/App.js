import React from 'react';

// Import : Redux (Persist, Provider)
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {store, persistor} from '../public/redux/store';

// Import : Navigator
import Navigation from '../helper/Navigator';

const App = props => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
