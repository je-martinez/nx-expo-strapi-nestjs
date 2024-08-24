import Config from 'react-native-config';

export default () => ({
  apiURL: Config.apiURL ?? 'http://localhost:1337',
  wsURL: Config.wsURL ?? 'http://localhost:3001',
});
