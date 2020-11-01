
/**
 * Local dependencies.
 */
import Sidebar from './components/sidebar.js';

/**
 * WordPress dependencies.
 */
const { registerPlugin } = wp.plugins;

/**
 * Register the AdvertisingSettings plugin.
 */
registerPlugin("advertisingsettings", {
    icon: 'awards',
    render: Sidebar
});