import config from '../config/config';

const listFiles = async (filepath) => {
  const response = await fetch(`${config.server.host}:${config.server.port}`, {
    mode: config.cors,
  });
  return await response.json();
}

export default {
  listFiles,
}