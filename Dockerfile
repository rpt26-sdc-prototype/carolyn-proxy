FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

CMD [ "npm", "start" ]

# builds using the Dockerfile
# docker build -t anthonysim/proxy:latest ."

# creates a container
# "docker run -d -p 3000:3000 anthonysim/proxy"