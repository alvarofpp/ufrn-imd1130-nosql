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
   * @param req
   * @param res
   */
  index: function (req, res) {
    redisCache.client.keys('factorial:*', (err, keys) => {
      if (err) return console.log(err);
      var resHtml = '<ul>';

      for(var i = 0, len = keys.length; i < len; i++) {
        resHtml += `<li>`;
        resHtml += `<b>${keys[i]}</b>: `;
        resHtml += redisCache.client.get(keys[i]);
        resHtml += `</li>`;
      }
      resHtml += `</ul>`;
      res.send(resHtml);
    });
  },

  /**
   * Mostra a fatorial de um número. Calcula, se for preciso
   * @param req
   * @param res
   */
  show: async function (req, res) {
    const keyNumber = req.params.keyNumber;
    const key = `factorial:${keyNumber}`;

    redisCache.client.exists(key, (err, reply) => {
      if (reply === 1) {
        console.log('Fonded in cache');
        redisCache.response(key, res);
      } else {
        console.log('Calculating...');
        const fat = factorialCalc(keyNumber);
        redisCache.update(key, fat, res);
        console.log(`fat: ${fat}`);
      }
    });
  }
};
