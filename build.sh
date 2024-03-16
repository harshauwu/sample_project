#/bin/bash

# Stop and remove existing container
docker stop assignment-ms && docker rm assignment-ms

# Build Docker image
docker build -t assignment-ms --file Dockerfile .

# Run Docker container
docker run --rm -v $PWD:/usr/src/app/assignmet-service:cached --name assignment-ms -p 4005:4005 --env-file .env --network mynet -d assignment-ms

# Display logs
docker logs -f assignment-ms
