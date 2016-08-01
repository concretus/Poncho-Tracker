FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

# Install app dependencies
WORKDIR /usr/src/app/server
RUN npm install

# Bundle app source

EXPOSE 8080
CMD [ "npm", "start" ]