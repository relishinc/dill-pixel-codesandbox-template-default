import {extendConfig} from 'dill-pixel/config/vite';
const port = process.env.PORT || 3000;

export default extendConfig((config) => ({
    ...config,
    server: {
        port,
    }
}));
