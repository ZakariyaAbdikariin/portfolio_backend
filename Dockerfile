# Use Node 18
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the app
COPY . .

# Build (if you have a build step)
RUN npm run build || true

# Expose port
EXPOSE 5000

# Start the backend
CMD ["npm", "start"]
