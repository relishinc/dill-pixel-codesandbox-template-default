import config from 'dill-pixel/config/vite';

config.server.port = 3000;
config.server.strictPort = true;
if (!config.server.hmr) {
  config.server.hmr = {}
}
config.server.hmr.port = 443;
config.server.hmr.protocol = 'wss';

export default config;