FROM node:latest
EXPOSE 8080

WORKDIR /usr/src/app

COPY . .

RUN [ "npm", "install" ]
# RUN [ "npm", "run", "build" ]
ENTRYPOINT [ "node", "--optimize_for_size", "--max_old_space_size=460", "--gc_interval=100", "./dist/main.js" ]
