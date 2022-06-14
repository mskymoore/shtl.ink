.PHONY: docker-image start-frontend start-backend

docker-image:
	docker build -t shtl-ink .

start-frontend:
	npm run dev

start-backend:
	docker pull skymoore/shtl-ink-api:latest
	docker run --rm -it  -p 8000:8000/tcp shtl-ink-api:latest
