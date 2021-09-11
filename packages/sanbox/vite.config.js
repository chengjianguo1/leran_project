// @ts-check
// import reactPlugin from 'vite-plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh';

import { defineConfig } from 'vite'

export default defineConfig({
    // jsx: 'react',
    plugins: [reactRefresh()]
})
