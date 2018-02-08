FROM node:6.10

WORKDIR /app
RUN yarn install

ENTRYPOINT '/bin/bash'