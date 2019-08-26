const redisCache = require('../redis/Cache');


/**
 * Calcula a fatorial.
 * @param number is a integer
 * @returns number
 */
function factorialCalc(number) {
  return (number === 1)?number:number * factorialCalc(number-1);
}

module.exports.factorial = {
  /**
   *
   */
  show: async function (req, res) {
    const keyNumber = req.params.keyNumber;
    const key = `factorial:${keyNumber}`;

    redisCache.cache.exists(key, (err, reply) => {
      if (reply === 1) {
        console.log('Fonded in cache');
        redisCache.responseCache(key, res);
      } else {
        console.log('Calculating...');
        const fat = factorialCalc(keyNumber);
        redisCache.updateCache(key, fat, res);
        console.log(`fat: ${fat}`);
      }
    });
  }
};
