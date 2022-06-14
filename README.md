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
  ```127.0.0.1 localhost, api.shtl.ink```
  where ```api.shtl.ink``` matches the entry in this projects ```API_BASE_URL``` (without the port) in the ```next.config.js```  file as well as the part of the argument before the ```:``` to the ```--add-host``` flag under the ```start-frontend-docker``` section of the ```Makefile```.