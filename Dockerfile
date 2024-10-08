FROM node:20

ENV PORT=80

WORKDIR /usr/src/app

# Install dependencies
COPY package*.json /usr/src/app/
RUN npm install

# Copy source
COPY index.js /usr/src/app

EXPOSE $PORT
CMD [ "npm", "start" ]
