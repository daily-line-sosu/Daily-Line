FROM node:16.17.1-alpine
WORKDIR /usr/app
COPY ./package*.json ./
RUN npm install
COPY ./ ./
RUN npm run build
CMD ["npm", "run", "start"]
EXPOSE 3000