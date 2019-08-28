const redis = require('redis');


module.exports = {
  // Cliente cache redis
  client: redis.createClient().on('connect', () => {
    console.log('Redis is ready');
  }).on('error', (e) => {
    console.log('Redis error', e);
  }),

  getByKey: function (key, res) {
    this.client.get(key, (err, reply) => {
      this.client.expire(key, 10, (err, reply) => {});
      res.append(reply);
    });
  },

  /**
   *
   */
  response: function (key, res) {
    this.client.get(key, (err, reply) => {
      this.client.expire(key, 10, (err, reply) => {});
      res.send((err)?'ERROR':`Fatorial: ${reply}`);
    });
  },

  /**
   *
   */
  update: function(key, value, res) {
    this.client.set(key, value, (err, reply) => {
      res.send((err)?'ERROR':`Fatorial: ${reply}`);
    });
  }
};
