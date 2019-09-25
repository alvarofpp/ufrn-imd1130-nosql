# Questão 1
Localize os restaurantes que possuem pelo menos uma avaliação "B".
```js
db.restaurants.find({
  'grades.grade': {
    $eq: 'B'
  }
});
```

# Questão 2
Localize os restaurantes que possuem pelo menos 3 avaliações.
```js
db.restaurants.find({
  $where: 'this.grades.length > 2'
});
```

# Questão 3
Localize restaurantes que possuem avaliação A e _score_ maior que 10 (na mesma avaliação).
```js
db.restaurants.find({
  'grades': {
    $elemMatch: {
      'grade': {
        $eq:'A'
      },
      'score': {
        $gt:10
      }
    }
  }
});
```

# Desafio
Localize os documentos que possuem 8 avaliações e todas com grade A!
```js
db.restaurants.find({
  $where: function() {
    return this.grades.filter(function(elem) {
      return elem.grade == 'A';
    }).length == 8;
  }
});
```
