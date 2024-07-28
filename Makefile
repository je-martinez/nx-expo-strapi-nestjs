strapi:
	npx nx run rn-strapi:serve
up:
	docker compose up --build -d
stop:
	docker compose down
down:
	docker compose down -v
