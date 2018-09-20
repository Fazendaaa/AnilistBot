FROM node:8

WORKDIR /usr/src/app

COPY package*.json ./

COPY ./dist/ ./dist/

COPY ./others/locales/ ./others/locales/

EXPOSE 8080
CMD [ "node", "--optimize_for_size", "--max_old_space_size=460", "--gc_interval=100", "./dist/main.js" ]
