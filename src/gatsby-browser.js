import React from 'react'
import netlifyIdentity from 'netlify-identity-widget'

export function onInitialClientRender({ setPostBodyComponents }, options) {
	netlifyIdentity.init(options)
	window.netlifyIdentity = netlifyIdentity
}