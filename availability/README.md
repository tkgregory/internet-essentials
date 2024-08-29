## Availability and Scalability Demo

Deploy a Docker Swarm cluster to demo how container orchestration frameworks ensure high availability.

### Prerequisites

* Docker ([install](https://docs.docker.com/engine/install/))

### Deploying the stack

Initialise Docker Swarm.

`docker swarm init`

Within this subdirectory, run this command to deploy the stack.

`docker stack deploy -c docker-compose.yml hello-swarm`.

View running containers.

`docker ps`

Observe that there are two containers running.

### Accessing the service

Point a browser to http://localhost:80 to request a page from container A.
Then, open an incognito browser window to the same URL to request a page from container B.
Notice that *server name* is different.

Traffic is routed like this because Docker Swarm uses a *round robin* load balancing algorithm.

### Recovering from failure

View running containers.

`docker ps`

Select a container and kill it.

`docker kill <container-id>`

Observe Docker Swarm now reports 1/2 replicas.

`docker service ls`

Wait until replicas reads 2/2 to verify recovery.

### Scaling manually

Scale down to 1 replica or up to 3 replicas.

 `docker service scale hello-swarm_hello-world=<replica count>`

Browse to http://localhost:80 and confirm that traffic is routed to all available replicas.

## Clean up

Remove the Docker Swarm stack:

`docker stack rm hello-swarm`