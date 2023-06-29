SERVICE := rotary

docker_build:
	docker build -t moses12345/rotary:v1 .

docker_tag:
	docker tag moses12345/rotary:v1 moses12345/rotary:v1

docker_push:
	docker push moses12345/rotary:v1

# build_service: docker_build docker_tag docker_push