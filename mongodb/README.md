# MongoDB
> MongoDB is a general purpose, document-based, distributed database built for modern application developers and for the cloud era. No database is more productive to use.

[MongoDB site](https://www.mongodb.com/).

----------

Installing MongoDB via Docker.
```bash
docker run -p 27017:27017 --name nosql-mongo -v /home/mongo:/data/ -d mongo
```

Mongo interactive shell.
```bash
docker exec -it nosql-mongo mongo
```
