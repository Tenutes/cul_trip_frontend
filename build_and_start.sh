#!/bin/bash
docker build -t dirty_vue_image .

docker stop cul_trip_front
docker rm cul_trip_front
docker run -d -p 8080:80 --name cul_trip_front dirty_vue_image