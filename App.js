import React from 'react';
import Navigator from 'react-native-easy-router';
import Landing from './src/pages/landing';
import Lab31 from './src/pages/lab-31';
import Lab32 from './src/pages/lab-32';

const App = () => <Navigator screens={{Landing, Lab31, Lab32}} initialStack="Landing" />;

export default App;
