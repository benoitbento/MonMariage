// Configuration SEO pour Vue CLI
// Ajouter cette configuration à votre vue.config.js existant

const robotsPlugin = {
  apply: 'post',
  enforce: 'post',
  async generateBundle() {
    this.emitFile({
      fileName: 'robots.txt',
      source: `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /
Disallow: /admin/

# Sitemap
Sitemap: https://www.elyneetbenoit.fr/sitemap.xml

# Crawl delay
Crawl-delay: 1
`
    })
  }
}

module.exports = {
  // ... vos configurations existantes ...
  
  configureWebpack: {
    plugins: [robotsPlugin]
  },
  
  chainWebpack: config => {
    // Optimization du build pour SEO
    config.optimization.splitChunks({
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'chunk-vendors',
          priority: 10
        }
      }
    })
  }
}
