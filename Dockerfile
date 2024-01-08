FROM node

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN yarn

# Copy the rest of the application code to the container
COPY . .

# Expose the port on which your app will run
EXPOSE 3000

# Command to run your application
CMD ["yarn", "start:dev"]