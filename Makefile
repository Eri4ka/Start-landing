build:
	docker build -t eri4ka/start-landing .
run:
	docker run -p 3000:3000 --rm --name start-landing eri4ka/start-landing
stop:
	docker stop start-landing