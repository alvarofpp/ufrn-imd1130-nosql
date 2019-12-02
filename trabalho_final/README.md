# MongoDB vs PostGIS (PostgreSQL)
Em vários sistemas das mais diversas finalidades é comum o processamento de dados georreferenciáveis, isso significa que seus dados/objetos são referenciados a uma localização geográfica.

A dificuldade em processar esses dados/objetos se dar pela natureza do georreferenciamento: valores geográficos, como latitude e longitude, não são ordinais, isso significa que um valor menor a outro não corresponde diretamente a um valor menor de maneira significativa.

Por causa dessa dificuldade, vários soluções foram desenvolvidas com a finalidade de ajudar nesse processamento. Nesse estudo iremos abordar duas dessas soluções e realizar um comparativo entre elas: MongoDB, que implementa nativamente ferramentas para processar esses dados, e o PostGIS, extensão do banco de dados PostgreSQL.

[Clique aqui para ler o artigo no Medium]().

----------

Esse estudo foi realizado para a disciplina de Bancos de Dados NoSQL (IMD1130, 2019.2, T01).

Trabalho realizado por:
- <a href="https://github.com/alvarofpp">Álvaro Ferreira Pires de Paiva</a>
  - Matrícula: 2016039162
  - E-mail: alvarofepipa@gmail.com
- <a href="https://github.com/brunnomatheuus">Bruno Matheus de Lima Cabral</a>
  - Matrícula: 2016038307
  - E-mail: brunomatheuslc@hotmail.com
- <a href="https://github.com/danielleiros">Daniel Maciel de Leiros Ferreira</a>
  - Matrícula: 20170069210
  - E-mail: danielmleiros@hotmail.com

Professor:
- <a href="https://github.com/gustavoleitao">Gustavo Bezerra Paz Leitão</a>
  - E-mail: gustavo.leitao@imd.ufrn.br
