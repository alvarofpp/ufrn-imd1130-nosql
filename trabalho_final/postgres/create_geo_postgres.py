import psycopg2;

con = psycopg2.connect(
    host = "localhost",
    database = "mydb",
    user = "brunnom",
    password = "postgres"
)

cur = con.cursor();

cur.execute("DROP TABLE IF EXISTS lugares")
cur.execute("CREATE TABLE lugares ( point_id SERIAL PRIMARY KEY, lat FLOAT, lon FLOAT, geo geometry(POINT) )")

cur.execute("CREATE INDEX lugares_index ON lugares USING GIST(geo)")
con.commit()


with open('lat_lon.csv', 'r') as f:
    for line in f:
        lat, lon = line.split(',')
        print('Inserindo: ', lat, lon)
        cur.execute("INSERT INTO lugares(lat, lon, geo) VALUES(%s, %s, ST_Point( %s, %s ))", (lat, lon, lon, lat))
        con.commit()

cur.close();
con.close();