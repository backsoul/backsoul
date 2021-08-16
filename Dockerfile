FROM node:16-alpine3.11

RUN mkdir -p /web
WORKDIR /web
RUN apk update && apk upgrade
RUN apk add git 
RUN npm install
COPY .  /web/
RUN npm run build 

EXPOSE 5000
ENV NUXT=0.0.0.0
ENV NUXT_PORT=5000
CMD npm start