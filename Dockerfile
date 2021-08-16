FROM node:16-alpine3.11

RUN mkdir -p /web
WORKDIR /web
RUN apk update && apk upgrade
RUN apk add git 
COPY package.json yarn.lock   ./web/
RUN yarn install
COPY .  /web/
RUN yarn build 

EXPOSE 5000
ENV NUXT=0.0.0.0
ENV NUXT_PORT=5000
CMD npm start