
docker image build -t hotburger:v1 .
docker container run -d -p 80:8080 --mount type=bind,source="$(pwd)"/project.log,target=/project.log hotburger:v1
