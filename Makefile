strapi:
	npx nx run rn-strapi:serve
app-ios:
	npx nx run-ios rn-strapi-app
up:
	docker compose up --build -d
stop:
	docker compose down
down:
	docker compose down -v
