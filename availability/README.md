Deploy a Docker swarm cluster to see how container orchestration frameworks ensure high availability.

## Deploying the stack

Initialise Docker Swarm.

`docker swarm init`

Deploy the stack.

`docker stack deploy -c docker-compose.yml hello-swarm`.

Observe 2 running containers.

`docker ps`

## Accessing the service

Point a browser to http://localhost:80 to request a page from container A.
Open an incognito browser window to the same URL to request a page from container B.
Notice that *server name* is different.

Traffic is routed like this because Docker Swarm uses a *round robin* algorithm.

## Recovering from failure

Select a container id.

`docker ps`

Kill the container.

`docker kill <container-id>`

Observe Docker Swarm now reports 1/2 replicas.

`docker service ls`

Wait until replicas reads 2/2 to verify recovery.

## Scaling manually

Scale down to 1 replica or up to 3 replicas.

 `docker service scale hello-swarm_hello-world=<count>`

Browse http://localhost:80 and confirm that traffic is routed to the available replicas.