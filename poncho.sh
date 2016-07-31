docker build -t fishfishher/poncho-tracker .
echo "Starting server / client containter..."
docker run -p 8080:8080 -d fishfisher/poncho-tracker
echo "Running server / client containter..."