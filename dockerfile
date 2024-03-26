#version of node to use
FROM node:20

#directory to save img
WORKDIR  /app

#install app dependencies
# A Wildcard is used to ensure that both package and package-lock are copied

COPY package*.json ./
RUN npm install
#Copy all files to /app
COPY . .
EXPOSE 3000
CMD [ "npm","RUN","START" ]