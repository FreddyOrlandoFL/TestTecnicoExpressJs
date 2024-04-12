'use strict';

const env = {
  PORT: process.env.PORT || 4000,
  DATABASE_URL:
    process.env.DATABASE_MONGO_URL || 'mongodb://localhost/zora-core',
  SECRET_TOKEN: 'itsasecret',
};

module.exports = env;
