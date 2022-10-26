import './App.css';
import TestMocking from './components/TestMocking';
import Counter from './features/counter/Counter';
import Counter2 from './components/Counter2';
import FontButton from './components/RecoilExample/FontButton';
import Text from './components/RecoilExample/Text';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <div className="App">
      {/* <TestMocking />
      <Counter />
      <br />
      <br />
      <br />
      <br />
      <Counter2 /> */}
      <RecoilRoot>
        <FontButton />
        <Text />
      </RecoilRoot>
    </div>
  );
}

export default App;
