.PHONY: docker-image start-frontend start-frontend-docker start-backend

docker-image:
	docker build -t shtl-ink .

start-frontend:
	npm run dev

start-frontend-docker: docker-image
	docker run --rm -it --add-host api.shtl.ink:host-gateway  -p 3000:3000/tcp shtl-ink:latest

start-backend:
	docker pull skymoore/shtl-ink-api:latest
	docker run --rm -it  -p 8000:8000/tcp shtl-ink-api:latest
