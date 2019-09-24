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
    // Variável com todas as fatoriais
    var factorials = [];
    // Pega todas as chaves de fatorial
    redisCache.client.keys('factorial:*', (err, keys) => {
      if (err) return console.log(err);
      // Se existir chaves
      if (keys.length > 0) {
        var p1 = new Promise(
          function(resolve, reject) {
            // Percorro todas as chaves
            keys.forEach((item, index) => {
              // Variável com a chave e valor da fatorial
              redisCache.client.get(item, function (error, value) {
                if (err) return console.log(err);
                var factorial = {};
                factorial['factorialKey'] = item;
                factorial['factorialValue'] = value;
                factorials.push(factorial);
              });

              if (index === (keys.length-1)) {
                console.log(index, item, factorials);
                resolve();
              }
            });
          }
        );
        // Após a promise ser realizada
        p1.then(() => {
          res.json({data: factorials});
        });
      } else {
        res.send('Não tem keys.');
      }
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
