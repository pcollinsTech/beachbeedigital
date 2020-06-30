module.exports = {
	siteMetadata: {
		title: "Gatsby Starter - Forty V2",
		author: "Hunter Chang",
		description: "A Gatsby.js V2 Starter based on Forty by HTML5 UP"
	},
	plugins: [
		"gatsby-plugin-react-helmet",
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: "gatsby-starter-default",
				short_name: "starter",
				start_url: "/",
				background_color: "#663399",
				theme_color: "#663399",
				display: "minimal-ui",
				icon: "src/assets/images/website-icon.png" // This path is relative to the root of the site.
			}
		},
		// {
		// 	resolve: "gatsby-source-wordpress",
		// 	options: {
		// 		baseUrl: "api.beachbeedigital.com",
		// 		protocol: "http",
		// 		// If useACF is true, then the source plugin will try to import the Wordpress ACF Plugin contents.
		// 		// This feature is untested for sites hosted on wordpress.com.
		// 		// Defaults to true.
		// 		useACF: true,
		// 		// Blacklisted routes using glob patterns
		// 		excludedRoutes: [
		// 			"**/settings",
		// 			"**/options",
		// 			"**/stats",
		// 			"**/alert",
		// 			"**/configurator",
		// 			"**/reindex_posts",
		// 			"**/ryte",
		// 			"**/statistics",
		// 			"***/users",
		// 			"***/options",
		// 			"**/key"
		// 		],
		// 		// use a custom normalizer which is applied after the built-in ones.
		// 		normalizer: function({ entities }) {
		// 			return entities;
		// 		}
		// 	}
		// },
		{
			resolve: "gatsby-plugin-google-analytics",
			options: {
				trackingId: "UA-163515722-1" // <- your tracking ID
			}
		},
		"gatsby-plugin-sass",
		"gatsby-plugin-offline"
	]
};
