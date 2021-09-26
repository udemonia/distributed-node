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

## Where is the downside with clustering?

I've updated the amount of clusters to ten with cluster.fork() repeated ten times

See the output with ten concurrent requests

```bash
✅ $ab -c 10 -n  100   http://localhost:505/
This is ApacheBench, Version 2.3 <$Revision: 1879490 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient).....done


Server Software:
Server Hostname:        localhost
Server Port:            505

Document Path:          /
Document Length:        12 bytes

Concurrency Level:      10
Time taken for tests:   1.087 seconds
Complete requests:      100
Failed requests:        0
Total transferred:      21100 bytes
HTML transferred:       1200 bytes
Requests per second:    92.03 [#/sec] (mean)
Time per request:       108.657 [ms] (mean)
Time per request:       10.866 [ms] (mean, across all concurrent requests)
Transfer rate:          18.96 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.1      0       1
Processing:    56  101  14.7     99     183
Waiting:       55  101  14.7     99     183
Total:         56  101  14.7    100     184

Percentage of the requests served within a certain time (ms)
  50%    100
  66%    105
  75%    107
  80%    109
  90%    114
  95%    119
  98%    157
  99%    184
 100%    184 (longest request)
```

There is an **UPPER LIMIT** on how much work a computer can do. If we over allocate clusters - we're slowing down the entire system

We should not increase the number of fork() instances past the number of cores we have on our computer - this seems to be the key

Okay, actually, it looks like you match physical cores for CPU intensive and logical cores for standard work
