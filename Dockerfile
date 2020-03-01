FROM node:latest
EXPOSE 8080

WORKDIR /usr/src/app

COPY . .

ENTRYPOINT [ "npm", "run", "docker" ]
