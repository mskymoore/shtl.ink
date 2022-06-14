This is a [api.shtl.ink](https://api.shtl.ink/docs) frontend in Next.js
The backend repository is [here](https://github.com/mskymoore/api.shtl.ink)
## Run with Make
### terminal 1

```bash
make start-backend
```

### terminal 2
```bash
make start-frontend
```

## Run with Make via docker
  The images presently on hub.docker.com require the ```/etc/hosts``` 
  entry mentioned below if the api is running on the same host.  
  When running on docker create a file called ```.env.docker``` and
  pass it as a volume when creating the container like so
  ```--volume $(pwd)/.env.docker:/opt/shtl_ink/.env.local``` example in ```Makefile```.
### terminal 1

```bash
make start-backend
```

### terminal 2
```bash
make start-frontend-docker
```

## For running locally
  There will need to be an entry in ```/etc/hosts``` on the docker host like
  ```127.0.0.1 localhost, api.shtl.ink``` where ```api.shtl.ink``` matches the
  entry in this projects ```API_BASE_URL``` (without the port) in the
  ```.env.docker``` or ```.env.local```  file as well as the part of the argument before the
  ```:``` to the ```--add-host``` flag under the ```start-frontend-docker```
  section of the ```Makefile```.