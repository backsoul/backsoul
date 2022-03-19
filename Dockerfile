FROM node:16-alpine3.11 as build

RUN mkdir -p /web
WORKDIR /web
RUN apk update && apk upgrade
RUN apk add git
COPY package.json yarn.lock   ./web/
RUN yarn install
COPY .  /web/
RUN yarn build


# production environment
FROM nginx:1.16.0-alpine
COPY --from=build /web/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
