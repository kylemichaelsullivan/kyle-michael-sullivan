import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
	plugins: [
		react(),
		viteCompression({
			algorithm: 'gzip',
			ext: '.gz',
			threshold: 1024,
			deleteOriginFile: false,
		}),
		viteCompression({
			algorithm: 'brotliCompress',
			ext: '.br',
			threshold: 1024,
			deleteOriginFile: false,
		}),
	],
	build: {
		cssCodeSplit: true,
		chunkSizeWarningLimit: 600,
		rollupOptions: {
			output: {
				manualChunks: id => {
					if (id.includes('node_modules')) {
						if (id.includes('react') || id.includes('react-dom')) {
							return 'react-vendor';
						}
						if (id.includes('clsx')) {
							return 'react-vendor';
						}
					}
				},
				assetFileNames: assetInfo => {
					const name = assetInfo.names?.[0];
					if (name?.match(/\.(png|jpe?g|svg|gif|webp)$/)) {
						return 'assets/images/[name]-[hash][extname]';
					}
					if (name?.match(/\.css$/)) {
						return 'assets/css/[name]-[hash][extname]';
					}
					return 'assets/[name]-[hash][extname]';
				},
				chunkFileNames: 'assets/js/[name]-[hash].js',
				entryFileNames: 'assets/js/[name]-[hash].js',
			},
		},
		minify: 'esbuild',
		target: 'esnext',
		sourcemap: false,
		reportCompressedSize: true,
	},
});
