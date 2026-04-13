const crypto = require('crypto');

function generateSecret() {
  return crypto.randomBytes(32).toString('base64');
}

function getEnvSafe(env, key, fallback) {
  const val = env(key);
  // env() повертає: undefined якщо змінної немає, або рядок якщо є
  // Strapi Cloud може встановлювати порожній рядок ''
  if (val === undefined || val === null || val.trim() === '') {
    return fallback;
  }
  // Видаляємо лапки якщо вони є (env іноді залишає їх)
  return val.replace(/^["']|["']$/g, '').trim();
}

module.exports = ({ env }) => ({
  auth: {
    secret: getEnvSafe(env, 'ADMIN_JWT_SECRET', generateSecret()),
  },
  apiToken: {
    salt: getEnvSafe(env, 'API_TOKEN_SALT', generateSecret()),
  },
  transfer: {
    token: {
      salt: getEnvSafe(env, 'TRANSFER_TOKEN_SALT', generateSecret()),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', false),
  },
});
