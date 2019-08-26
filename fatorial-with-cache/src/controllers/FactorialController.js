const redisCache = require('../redis/Cache');


module.exports.factorial = {
  /**
   * Calcula a fatorial.
   * @param number is a integer
   * @returns number
   */
  factorialCalc: function (number) {
    return (number === 0)?1:number * factorialCalc(number-1);
  },

  /**
   *
   */
  show: async function (req, res) {
    const keyNumber = req.params.keyNumber;
    const key = `factorial:${keyNumber}`;
    console.log(redisCache);

    redisCache.cache.exists(key, (err, reply) => {
      if (reply === 1) {
        console.log('Fonded in cache');
        redisCache.responseCache(key, res);
      } else {
        console.log('Calculating...');
        const fat = this.factorialCalc(keyNumber);
      }
    });
  },

  /**
   *
   */
  ler: async function(req, res) {
    redisCache.cache.get('sorteio:last:megasena', (err, reply) => {
      res.send((err)?'ERROR':reply);
    });
  },

  /**
   *
   */
  escrever: async function (req, res) {
    redisCache.cache.set('sorteio:last:megasena', '1,2,3,4,5,6', (err, reply) => {
      res.send((err)?'ERROR':reply);
    });
  }
};
