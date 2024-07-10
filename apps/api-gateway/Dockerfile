FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install prom-client
RUN npm install pino-pretty

RUN npm run build api-gateway

CMD ["node", "dist/apps/api-gateway/main"]