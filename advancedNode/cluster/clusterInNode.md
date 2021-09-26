# Clustering in Node

## Bring in the cluster standard library

> bring in the standard library cluster - the first instance is the worker and the latter instances spin up our server app - wrap in if/else on cluster.isMaster

```js
const cluster = require("cluster");

if (cluster.isMaster){
    cluster.fork()
    cluster.fork()
} else { //! Server Code Goes HERE }
```

Of note, the cluster.fork() method spins up a cluster

## Testing the cluster

We can test the cluster with apache benchmark

```bash
 ab -c 4 -n  4  http://localhost:505/
```

-c is the concurrency
-n is the number of requests

```bash
Server Software:
Server Hostname:        localhost
Server Port:            505

Document Path:          /
Document Length:        12 bytes

Concurrency Level:      4
Time taken for tests:   0.158 seconds
Complete requests:      4
Failed requests:        0
Total transferred:      844 bytes
HTML transferred:       48 bytes
Requests per second:    25.39 [#/sec] (mean)
Time per request:       157.512 [ms] (mean)
Time per request:       39.378 [ms] (mean, across all concurrent requests)
Transfer rate:          5.23 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.2      1       1
Processing:    51   65  26.8     52     105
Waiting:       51   65  26.8     51     105
Total:         52   65  26.7     52     105
ERROR: The median and mean for the initial connection time are more than twice the standard
       deviation apart. These results are NOT reliable.

Percentage of the requests served within a certain time (ms)
  50%     52
  66%     52
  75%    105
  80%    105
  90%    105
  95%    105
  98%    105
  99%    105
 100%    105 (longest request)

```

The output is nice as it provides a histogram of the time to response percentile breakdown. _For instance, Amazon thinks about 99% response time for cart design - as customers with the largest carts are the most valuable to the company_ - see Designing Data Intensive Systems
