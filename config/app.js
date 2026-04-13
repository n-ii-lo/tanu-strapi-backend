const { join } = require('path');
const crypto = require('crypto');

function generateSecret() {
  return crypto.randomBytes(32).toString('base64');
}

module.exports = ({ env }) => ({
  autoOpen: false,
  app: {
    keys: env.array('APP_KEYS', [generateSecret(), generateSecret()]),
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
