# Apache Cassandra
> The Apache Cassandra database is the right choice when you need scalability and high availability without compromising performance. Linear scalability and proven fault-tolerance on commodity hardware or cloud infrastructure make it the perfect platform for mission-critical data. Cassandra's support for replicating across multiple datacenters is best-in-class, providing lower latency for your users and the peace of mind of knowing that you can survive regional outages.

[Apache Cassandra site](http://cassandra.apache.org/).

----------

Creating network via Docker.
```bash
docker network create cassandra-net
```

Installing Cassandra via Docker.
```bash
docker run --name cassandra1 --network cassandra-net -d cassandra
```

Cassandra prompt.
```bash
docker run -it --network cassandra-net --rm cassandra cqlsh cassandra1
```

----------

Datastax via Docker.
```bash
docker run -e DS_LICENSE=accept --name my-dse -d datastax/dse-server -g -s -k

docker run -e DS_LICENSE=accept --link my-dse -p 9091:9091 --memory 1g --name my-studio -d datastax/dse-studio
```
