FROM node:8

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080
CMD [ "node", "--optimize_for_size --max_old_space_size=460 --gc_interval=100 -p $PORT" , "./dist/main.js" ]
