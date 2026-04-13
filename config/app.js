const { join } = require('path');
const crypto = require('crypto');

function generateSecret() {
  return crypto.randomBytes(32).toString('base64');
}

function getEnvArrayWithFallback(env, key, fallback) {
  const val = env(key);
  if (!val || val.trim() === '') {
    return fallback;
  }
  if (typeof val === 'string') {
    return val.split(',').map(s => s.trim()).filter(Boolean);
  }
  return val;
}

module.exports = ({ env }) => ({
  autoOpen: false,
  app: {
    keys: getEnvArrayWithFallback(env, 'APP_KEYS', [generateSecret(), generateSecret()]),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  bodyParsers: {
    json: {
      limit: '100mb',
    },
    form: {
      limit: '100mb',
    },
  },
});
