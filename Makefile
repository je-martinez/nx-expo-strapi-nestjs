strapi:
	npx nx run rn-strapi:serve
run-ios:
	npx nx run-ios rn-app
run-android:
	npx nx run-android rn-app
up:
	docker compose up --build -d
stop:
	docker compose down
down:
	docker compose down -v
