FROM node:lts-alpine3.19

#create a working directory
WORKDIR /usr/src/app/assignment-service

#copy package.json file under the working directory
COPY package.json /usr/src/app/assignment-service

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . /usr/src/app/assignment-service

#expose the port 4005
EXPOSE 4005

RUN npm run build

#start nodejs server
CMD [ "node", "./dist/bin/server.js" ]