module.exports = {
  apps: [{
    name: "search",
    script: "./index.js",
    watch: true,
    watch_options: {
      usePolling: true,
    },
    env: {
      "NODE_ENV": "development",
    },
    env_production: {
       "NODE_ENV": "production"
    }
  }]
}
