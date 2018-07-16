import netlifyIdentity from 'netlify-identity-widget'

export function onInitialClientRender(a, options){
	options = { ...options }
	delete options.plugins
	netlifyIdentity.init(options)
	window.netlifyIdentity = netlifyIdentity
}