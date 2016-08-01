# remove all containers
docker-compose rm --all
# remove ponchotracker_node image
docker rmi $(docker images -a)
# build new images
docker-compose build
# run containers
docker-compose up
