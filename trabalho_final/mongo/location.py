# Criando conexão com o banco
from pymongo import MongoClient, GEOSPHERE
import json
db = MongoClient('localhost', 27017).geo_exemple2

db.places.create_index([('loc', GEOSPHERE)])

#Lendo arquivo csv com localização
coordinates = []

with open('lat_lon.csv', 'r') as f:
    for line in f:
        lat, lon = line.split(',')
        coordinates.append({'loc':[float(lon.split('\n')[0]), float(lat)]})

#Inserindo dados no banco
result = db.places.insert_many(coordinates)
