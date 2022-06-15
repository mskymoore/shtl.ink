.PHONY: docker-image start-frontend start-frontend-docker start-backend

default: build

build: install-dependencies
	npm run build

install-dependencies:
	npm ci

docker-image:
	docker build -t shtl-ink .

start-frontend-dev:
	npm run dev

start-frontend-docker:
	docker pull skymoore/shtl-ink:latest
	docker run --rm -it --add-host api.shtl.ink:host-gateway -v $$(pwd)/.env.docker:/opt/shtl_ink/.env.local -p 3000:3000/tcp shtl-ink:latest

start-backend:
	docker pull skymoore/shtl-ink-api:latest
	docker run --rm -it  -p 8000:8000/tcp skymoore/shtl-ink-api:latest
