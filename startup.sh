
docker image build -t hotburger:v0 .
docker container run -d -p 80:80 --mount type=bind,source="$(pwd)"/project.log,target=/project.log hotburger:v0
