module.exports = {
  apps: [{
    name: 'GitSla',
    version: '1.0.0',
    script: 'npm',
    args: 'run start:prod',
    instances: 4,
    autorestart: true,
    watch: false,
    kill_timeout: 2000,
    restart_delay: 2000,
    exec_mode: 'cluster',
    max_restarts: 50,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
    },
    env_production: {
      NODE_ENV: 'production',
    },
  }],
};
