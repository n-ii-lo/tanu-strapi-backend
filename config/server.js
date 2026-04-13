const crypto = require('crypto');

function generateSecret(name) {
  return crypto.randomBytes(32).toString('base64');
}

module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', generateSecret('admin-jwt')),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', generateSecret('api-token-salt')),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', generateSecret('transfer-token-salt')),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', false),
  },
});
