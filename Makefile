.PHONY start-frontend start-backend

start-frontend:
	npm run dev

start-backend:
	docker run --rm -it  -p 8000:8000/tcp skymoore/shtl-ink-api:latest
