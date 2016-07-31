docker build -t fishfishher/poncho-tracker .
echo "Starting server / client containter..."
docker run -p 8080:8080 -d fishfishher/poncho-tracker
echo "Running server / client containter..."