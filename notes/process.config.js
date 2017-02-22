module.exports = {
  apps: [{
    name: "service1",
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
