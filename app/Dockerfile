FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/app/server
# Copy server files
COPY ./server/. /usr/src/app/server/

# Copy client files
RUN mkdir -p /usr/src/app/client
COPY ./client/index.html ./client/style.css ./client/bundle.js /usr/src/app/client/

WORKDIR /usr/src/app
RUN npm install

WORKDIR /usr/src/app/server

EXPOSE 8080
CMD [ "npm", "start" ]