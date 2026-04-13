const crypto = require('crypto');

function generateSecret(name) {
  return crypto.randomBytes(32).toString('base64');
}

function getEnvWithFallback(env, key, fallback) {
  const val = env(key);
  if (!val || val.trim() === '') {
    return fallback;
  }
  return val;
}

module.exports = ({ env }) => ({
  auth: {
    secret: getEnvWithFallback(env, 'ADMIN_JWT_SECRET', generateSecret('admin-jwt')),
  },
  apiToken: {
    salt: getEnvWithFallback(env, 'API_TOKEN_SALT', generateSecret('api-token-salt')),
  },
  transfer: {
    token: {
      salt: getEnvWithFallback(env, 'TRANSFER_TOKEN_SALT', generateSecret('transfer-token-salt')),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', false),
  },
});
