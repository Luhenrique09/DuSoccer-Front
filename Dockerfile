FROM node:16.17
WORKDIR /src/index.js
COPY ./package*.json ./
COPY ./.husky ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]