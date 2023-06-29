FROM node:18-alpine

# working directory
WORKDIR /usr/src/app

# Copy Package Json Files
COPY package*.json ./

# install files
RUN npm ci

# Copy source files
COPY . .

# expose the API Port
EXPOSE 80

CMD ["npm", "start"]