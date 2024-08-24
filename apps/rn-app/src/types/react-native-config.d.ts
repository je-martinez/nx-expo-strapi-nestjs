declare module 'react-native-config' {
  export interface NativeConfig {
    apiURL?: string;
    wsURL?: string;
  }
  export const Config: NativeConfig;
  export default Config;
}
