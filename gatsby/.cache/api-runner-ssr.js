var plugins = [{
      plugin: require('/Users/mingram/portfolio-website/gatsby-portfolio/gatsby/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/mingram/portfolio-website/gatsby-portfolio/gatsby/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/mingram/portfolio-website/gatsby-portfolio/gatsby/node_modules/gatsby-source-sanity/gatsby-ssr'),
      options: {"plugins":[],"projectId":"h22n7ef9","dataset":"production","watchMode":true,"token":"skMY75KGBGUlFXROP48sJI2qve5SV1LGxhW34Bxlx71vo2cdiSWF1fY2i4LSAXlC8z0b54QaAKWpIg9GnvFX8GW27DMre3wvIwQkYxzwEMbOMzPflLg0mZl0sEyh1EgoSv2DvtgF3QouYk7Uzi2OdKJdCMkoagfkbJuyHTBdpIP1BPFqX7kn"},
    },{
      plugin: require('/Users/mingram/portfolio-website/gatsby-portfolio/gatsby/node_modules/gatsby-plugin-load-script/gatsby-ssr'),
      options: {"plugins":[],"src":"/myScript.js"},
    },{
      plugin: require('/Users/mingram/portfolio-website/gatsby-portfolio/gatsby/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
