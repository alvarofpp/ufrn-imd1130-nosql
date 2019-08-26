const redis = require('redis');


const cache = redis.createClient().on('connect', () => {
  console.log('Redis is ready');
}).on('error', (e) => {
  console.log('Redis error', e);
});

function responseCache(key, res) {
  cache.get(key, (err, reply) => {
    cache.expire(key, 10, (err, reply) => {});
    res.send((err)?'ERROR':`Fatorial: ${reply}`);
  });
}

function updateCache(key, value, res) {
  cache.set(key, value, (err, reply) => {
    res.send((err)?'ERROR':`Fatorial: ${reply}`);
  });
}

module.exports = {
  // Cache redis
  cache: cache,

  /**
   *
   */
  responseCache: responseCache(),

  /**
   *
   */
  updateCache: updateCache()
};
