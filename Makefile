strapi:
  npx nx rn-strapi:serve
up:
	docker compose up --build -d
down:
	docker compose down -v
