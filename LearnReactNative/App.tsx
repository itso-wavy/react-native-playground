import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { TodoApp } from './components';

function App() {
  return (
    <SafeAreaProvider>
      {/* <SafeAreaView > */}
      <TodoApp />
      {/* </SafeAreaView> */}
    </SafeAreaProvider>
  );
}

export default App;
