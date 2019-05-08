import prodConfig from './config.production';
import devConfig from './config.development';

export default process.env.NODE_ENV === 'production' ? prodConfig : devConfig;
