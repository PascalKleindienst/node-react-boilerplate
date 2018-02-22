import renderLoadingPage, { authenticatedView } from './bootstrap';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// Render Loading page
renderLoadingPage();

// Load authenticated view if user is authenticated
authenticatedView();
