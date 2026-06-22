import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TodoApp } from './components';

function App() {
  return (
    <SafeAreaProvider>
      <TodoApp />
    </SafeAreaProvider>
  );
}

export default App;
