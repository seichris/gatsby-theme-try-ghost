/**
* This is the place where you can tell Gatsby which plugins to use
* and set them up the way you want.
*
* Further info 👉🏼 https://www.gatsbyjs.org/docs/gatsby-config/
*
*/
module.exports = () => {
    return {
        plugins: [
            {
                resolve: `gatsby-plugin-less`,
                options: {
                    javascriptEnabled: false,
                    postCssPlugins: [
                        require(`autoprefixer`)(),
                        require(`cssnano`)()
                    ],
                },
            },
        ],
    }
}
