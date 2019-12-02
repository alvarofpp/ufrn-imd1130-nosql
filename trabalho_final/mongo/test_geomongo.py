# Criando conexão com o banco 
from pymongo import MongoClient
import time
db = MongoClient('localhost', 27017).geo_exemple2

time1km = []
time15km = []
time2km = []
time25km = []
time3km = []
count = 0

#Localização desejada lat/long: -5.8117310,-35.2084091
#Contabilização para 1km
print('Iniciando para 1km')
for i in range (1000):
    start = time.time()    
    for doc in db.places.find({"loc": {"$within": {"$center": [[-35.2084091, -5.8117310], 0.01]}}}):
        continue
    end = time.time()
    time1km.append(end - start)
print("Para 1km de raio: " + str(sum(time1km)/len(time1km)))

print('Iniciando para 1.5km')
#Contabilização para 1.5km
for i in range (1000):
    start = time.time()    
    for doc in db.places.find({"loc": {"$within": {"$center": [[-35.2084091, -5.8117310], 0.015]}}}):
        continue
    end = time.time()
    time15km.append(end - start)
print("Para 1.5km de raio: " + str(sum(time15km)/len(time15km)))

print('Iniciando para 2km')
#Contabilização para 2km
for i in range (1000):
    start = time.time()    
    for doc in db.places.find({"loc": {"$within": {"$center": [[-35.2084091, -5.8117310], 0.02]}}}):
        continue
    end = time.time()
    time2km.append(end - start)
print("Para 2km de raio: " + str(sum(time2km)/len(time2km)))

print('Iniciando para 2.5km')
#Contabilização para 2.5km
for i in range (1000):
    start = time.time()    
    for doc in db.places.find({"loc": {"$within": {"$center": [[-35.2084091, -5.8117310], 0.025]}}}):
        continue
    end = time.time()
    time25km.append(end - start)
print("Para 2.5km de raio: " + str(sum(time25km)/len(time25km)))

print('Iniciando para 3km')
#Contabilização para 3km
for i in range (1000):
    start = time.time()    
    for doc in db.places.find({"loc": {"$within": {"$center": [[-35.2084091, -5.8117310], 0.03]}}}):
        continue
    end = time.time()
    time3km.append(end - start)
print("Para 3km de raio: " + str(sum(time3km)/len(time3km)))
