import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';

import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
	throw new Error('Root element not found');
}

createRoot(rootElement).render(
	<StrictMode>
		<Header />
		<Body />
		<Footer />
	</StrictMode>
);
