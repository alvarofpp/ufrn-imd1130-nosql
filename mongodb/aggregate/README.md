# Questão 1
Localize a quantidade de restaurantes por _zipcode_ de cozinha brasileira no bairro do Queens.
```js
db.restaurants.aggregate([
  {
    $match: {
      'cuisine': 'Brazilian',
      'borough': 'Queens'
    }
  },
  {
    $group: {
      _id: '$address.zipcode',
      count: {
        $sum: 1
      }
    }
  },
  {
    $sort: {
      count: -1
    }
  }
]);
```

# Questão 2
Faça uma consulta para retornar a quantidade de restaurantes por letra inicial de seu nome. Traga os dados ordenados alfabeticamente A --> Z.
```js

```
