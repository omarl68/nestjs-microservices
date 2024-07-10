FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install prom-client

RUN npm run build microservice-2

CMD ["node", "dist/apps/microservice-2/main"]