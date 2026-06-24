import AsyncStorage from '@react-native-async-storage/async-storage';
import { Todo } from '../types';

const KEY = 'todos';

const todosStorage = {
  async get(): Promise<Todo[] | undefined> {
    try {
      const jsonData = await AsyncStorage.getItem(KEY);
      const todos = jsonData && JSON.parse(jsonData);
      return todos;
    } catch (err) {
      console.error(`Failed to load ${KEY} data.`, err);

      return undefined;
    }
  },

  async set(value: any) {
    try {
      await AsyncStorage.setItem(KEY, value);
    } catch (err) {
      console.error(`Failed to save ${KEY} data.`, err);
    }
  },

  async clearAll() {
    try {
      await AsyncStorage.clear();
    } catch (err) {
      console.error(`Failed to clear ${KEY} data.`, err);
    }
  },
};

export default todosStorage;
