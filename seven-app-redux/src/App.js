import Counter from './components/Counter.js';
import Header from './components/Header.js';
import Auth from './components/Auth.js'
import UserProfile from './components/UserProfile.js';
import { useSelector } from 'react-redux';

function App() {
  const isAuthenticated = useSelector(state => state.authentication.isAuthenticated)
  return (
    <>
      <Header></Header>
      {!isAuthenticated ? 
      <Auth></Auth> : 
      <UserProfile></UserProfile>
    }
      <Counter></Counter>
    </>
  );
}

export default App;
