/**
 * External dependencies.
 */
import React from 'react'

/**
 * Local dependencies.
 */
import AdToggleField from './AdToggleField.js';
import CommercialTypeField from './CommercialTypeField.js';
import AdNameField from './AdNameField.js';

/**
 * WordPress dependencies.
 */
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { PluginSidebarMoreMenuItem, PluginSidebar } = wp.editPost;

/**
 * Advertisements sidebar component for the gutenberg editor.
 *
 * @since 1.0.0
 */
class Sidebar extends React.Component {

    constructor() {
        super()
    }


    render() {

        return (
            <Fragment>

                <PluginSidebarMoreMenuItem target="advertisingsettings-sidebar" icon='awards'>

                    {__("Advertising Settings", "advertisingsettings")}

                </PluginSidebarMoreMenuItem>

                <PluginSidebar name="advertisingsettings-sidebar" title={__("Advertising Settings", "advertisingsettings")} >

                    <div className="advertisement-sidebar-content">

                        <AdToggleField />

                        <CommercialTypeField>
                            <AdNameField />
                        </CommercialTypeField>

                    </div>

                </PluginSidebar>

            </Fragment>
        )
    }

}


export default Sidebar
