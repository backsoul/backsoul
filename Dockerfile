FROM node:lts as builder
ENV NODE_ENV=dev
WORKDIR /
COPY ./package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["npm", "run", "start"]
