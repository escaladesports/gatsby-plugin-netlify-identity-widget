import React from 'react'
import netlifyIdentity from 'netlify-identity-widget'

export function onInitialClientRender(options) {
	netlifyIdentity.init(options)
	window.netlifyIdentity = netlifyIdentity
}