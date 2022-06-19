.PHONY: docker-image start-frontend start-frontend-docker start-backend

default: build

build: install-dependencies
	npm run build

install-dependencies:
	npm ci

docker-image:
	docker build -t shtl-ink .

dev-docker-image:
	docker build -t shtl-ink:local-dev .

start-frontend-dev:
	npm run dev

start-frontend-docker:
	docker run --rm -it --add-host localapi.shtl.ink:host-gateway -p 3000:3000/tcp shtl-ink:local-dev

start-backend:
	docker pull skymoore/shtl-ink-api:latest
	docker run --rm -it  -p 8000:8000/tcp skymoore/shtl-ink-api:latest
