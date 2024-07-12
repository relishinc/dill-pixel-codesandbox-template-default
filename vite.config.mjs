import config from 'dill-pixel/config/vite';

config.server.port = undefined;
config.server.host = process.env.CODESANDBOX_SSE ? '0.0.0.0' : undefined;
config.server.open = false;

export default config;