FROM node:12
WORKDIR /usr/src/api_finance
COPY package.json .
RUN npm install --only=prod
COPY ./dist ./dist
EXPOSE 3000