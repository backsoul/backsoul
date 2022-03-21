FROM node:15-alpine

RUN apk add g++ make python

# Create app directory
WORKDIR /app

COPY package*.json .

COPY yarn.lock .

RUN yarn install

COPY . .

ENV NODE_ENV=production

RUN yarn build

EXPOSE 3000

# set app serving to permissive / assigned
ENV NUXT_HOST=0.0.0.0
# set app port

ENV NUXT_PORT=3000

# start command
CMD yarn start
