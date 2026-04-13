const { join } = require('path');
const crypto = require('crypto');

function generateSecret() {
  return crypto.randomBytes(32).toString('base64');
}

function getEnvArraySafe(env, key, fallback) {
  const val = env(key);
  if (val === undefined || val === null || val.trim() === '') {
    return fallback;
  }
  // Видаляємо лапки та розділяємо по комі
  const cleaned = val.replace(/^["']|["']$/g, '').trim();
  if (cleaned === '') return fallback;
  return cleaned.split(',').map(s => s.trim().replace(/^["']|["']$/g, '')).filter(Boolean);
}

module.exports = ({ env }) => ({
  autoOpen: false,
  app: {
    keys: getEnvArraySafe(env, 'APP_KEYS', [generateSecret(), generateSecret()]),
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
