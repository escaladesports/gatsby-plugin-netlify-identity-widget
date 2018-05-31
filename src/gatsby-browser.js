import netlifyIdentity from 'netlify-identity-widget'

export function onInitialClientRender(){
	netlifyIdentity.init()
	window.netlifyIdentity = netlifyIdentity
}