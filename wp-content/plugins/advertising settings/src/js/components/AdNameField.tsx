/**
 * External dependencies.
 */
import React from 'react'

/**
 * WordPress dependencies.
 */
const { __ } = wp.i18n;
const { compose } = wp.compose;
const { withDispatch, withSelect } = wp.data;
const { TextControl, Disabled } = wp.components;

/**
 * Advertiser name input component.
 *
 * @since 1.0.0
 */
class AdNameField extends React.Component {

    constructor() {
        super()
    }


    render() {

        if (this.props.isUpdating)
            return (

                <div className="field-wrapper">
                    <Disabled>
                        <TextControl
                            label={__("Advertiser name", "advertisingsettings")}
                            value={this.props.metaFieldValue}
                            onChange={this.props.setMetaFieldValue}
                        />
                    </Disabled>
                </div>

            )
        else
            return (

                <div className="field-wrapper">

                    <TextControl
                        label={__("Advertiser name", "advertisingsettings")}
                        value={this.props.metaFieldValue}
                        onChange={this.props.setMetaFieldValue}
                    />
                </div>

            )
    }

}



export default compose([

    withDispatch((dispatch, props) => {

        return {
            setMetaFieldValue: function (value) {
                dispatch('core/editor').editPost({ meta: { advertiser_name: value } });
            }
        }

    }),
    withSelect((select, props) => {

        return {
            metaFieldValue: select('core/editor').getEditedPostAttribute('meta')['advertiser_name'],
            isUpdating: wp.data.select('core/editor').isSavingPost(),
        };

    }),

])(AdNameField);