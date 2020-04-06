# Latest LTS version
FROM node:12.16.0

# Necessary for watchers to work properly on MacOS
RUN apt-get update && apt-get install -y -q inotify-tools

RUN mkdir -p /app
WORKDIR /app

ENV NODE_ENV development

COPY ./package.json /app
RUN yarn install --silent

COPY . /app
