import React from 'react'
import netlifyIdentity from 'netlify-identity-widget'

export function onRenderBody({ setPostBodyComponents }, pluginOptions) {
	if (process.env.NODE_ENV === 'production') {
		return setPostBodyComponents([
			<script key='gatsby-plugin-hubspot' type='text/javascript' id='hs-script-loader' async defer src={`//js.hs-scripts.com/${pluginOptions.id}.js`}></script>
		])
	}
}