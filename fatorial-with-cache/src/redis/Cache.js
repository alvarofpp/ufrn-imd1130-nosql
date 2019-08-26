const redis = require('redis');


module.exports = {
  // Cache redis
  cache: redis.createClient().on('connect', () => {
    console.log('Redis is ready');
  }).on('error', (e) => {
    console.log('Redis error', e);
  }),

  /**
   *
   */
  responseCache: function (key, res) {
    this.cache.get(key, (err, reply) => {
      this.cache.expire(key, 10, (err, reply) => {});
      res.send((err)?'ERROR':`Fatorial: ${reply}`);
    });
  },

  /**
   *
   */
  updateCache: function(key, value, res) {
    this.cache.set(key, value, (err, reply) => {
      res.send((err)?'ERROR':`Fatorial: ${reply}`);
    });
  }
};
