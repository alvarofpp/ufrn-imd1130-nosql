const redisCache = require('../redis/Cache');

/**
 * Calcula a fatorial.
 * @param number is a integer
 * @returns number
 */
module.exports.factorialCalc = (number) => {
  return (number === 0)?1:number * factorialCalc(number-1);
};

module.exports.cache = {
  /**
   *
   */
  show: async function (req, res) {
    const keyNumber = req.params.keyNumber;
    const key = `factorial:${keyNumber}`;

    cache.exists(key, (err, reply) => {
      if (reply === 1) {
        console.log('Fonded in cache');
        responseCache(key, res);
      } else {
        console.log('Calculating...');
        const fat = factorialCalc(value);
      }
    });
  },

  /**
   *
   */
  async ler(req, res) {
    cache.get('sorteio:last:megasena', (err, reply) => {
      res.send((err)?'ERROR':reply);
    });
  },

  /**
   *
   */
  async escrever(req, res) {
    cache.set('sorteio:last:megasena', '1,2,3,4,5,6', (err, reply) => {
      res.send((err)?'ERROR':reply);
    });
  }
};
