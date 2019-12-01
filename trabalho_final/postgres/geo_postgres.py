import psycopg2;
import time;
import numpy as np

con = psycopg2.connect(
    host = "localhost",
    database = "mydb",
    user = "brunnom",
    password = "postgres"
)

cur = con.cursor();

time1km = []
qtd1km = 0;
time15km = []
qtd15km = 0;
time2km = []
qtd2km = 0;
time25km = []
qtd25km = 0;
time3km = []
qtd3km = 0;

#1KM
for i in range (1000):
    start = time.time()    
    cur.execute("SELECT * FROM lugares WHERE ST_DistanceSphere(geo, ST_MakePoint(-35.2084091, -5.8117310)) <= 1000");
    rows = cur.fetchall();
    end = time.time()
    time1km.append(end - start)

qtd1km = len(rows);
time1km = np.average(time1km);
print("1KM - Quantidade de pontos: ", qtd1km, " - Média de tempo: ", time1km);


#1.5KM
for i in range (1000):
    start = time.time()    
    cur.execute("SELECT * FROM lugares WHERE ST_DistanceSphere(geo, ST_MakePoint(-35.2084091, -5.8117310)) <= 1500");
    rows = cur.fetchall();
    end = time.time()
    time15km.append(end - start)

qtd15km = len(rows);
time15km = np.average(time15km);
print("1.5KM - Quantidade de pontos: ", qtd15km, " - Média de tempo: ", time15km);


#2KM
for i in range (1000):
    start = time.time()    
    cur.execute("SELECT * FROM lugares WHERE ST_DistanceSphere(geo, ST_MakePoint(-35.2084091, -5.8117310)) <= 2000");
    rows = cur.fetchall();
    end = time.time()
    time2km.append(end - start)

qtd2km = len(rows);
time2km = np.average(time2km);
print("2KM - Quantidade de pontos: ", qtd2km, " - Média de tempo: ", time2km);


#2.5KM
for i in range (1000):
    start = time.time()    
    cur.execute("SELECT * FROM lugares WHERE ST_DistanceSphere(geo, ST_MakePoint(-35.2084091, -5.8117310)) <= 2500");
    rows = cur.fetchall();
    end = time.time()
    time25km.append(end - start)

qtd25km = len(rows);
time25km = np.average(time25km);
print("2.5KM - Quantidade de pontos: ", qtd25km, " - Média de tempo: ", time25km);


#3KM
for i in range (1000):
    start = time.time()    
    cur.execute("SELECT * FROM lugares WHERE ST_DistanceSphere(geo, ST_MakePoint(-35.2084091, -5.8117310)) <= 3000");
    rows = cur.fetchall();
    end = time.time()
    time3km.append(end - start)

qtd3km = len(rows);
time3km = np.average(time3km);
print("3KM - Quantidade de pontos: ", qtd3km, " - Média de tempo: ", time3km);

cur.close();
con.close();