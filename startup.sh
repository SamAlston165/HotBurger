docker-compose down

docker volume create --name logger

docker run --rm -v logger:/logger ubuntu

#docker-compose build --no-cache

docker-compose up --build
