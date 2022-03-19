FROM node:lts as builder
ENV NODE_ENV=dev
WORKDIR /
COPY ./package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start"]
