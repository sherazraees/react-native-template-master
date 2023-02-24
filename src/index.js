import {Provider} from 'react-redux';
import Navigation from './navigation';
import store from './redux';

const Main = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default Main;
