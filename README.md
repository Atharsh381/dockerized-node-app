# Dockerized Node.js Web Application

A simple Express.js web app containerized using Docker with **multi-stage builds** for smaller, secure production images.

## Features
- Multi-stage Dockerfile (reduces image size significantly)
- Runs as non-root user (security)
- Lightweight Alpine base image

## How to Run

```bash
docker build -t my-app .
docker run -p 3000:3000 my-app
