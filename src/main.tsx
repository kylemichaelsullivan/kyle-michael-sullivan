import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

import './index.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Header />
		<Body />
		<Footer />
	</StrictMode>
);
