FROM node:20-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3013

CMD [ "npm","run","dev" ]