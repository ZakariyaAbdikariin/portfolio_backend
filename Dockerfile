# portfolio_backend/Dockerfile
FROM node:20-alpine

WORKDIR /app

# Copy package.json first for caching
COPY package*.json ./
RUN npm install --production

# Copy the rest of the code
COPY . .

# Expose port 5000
EXPOSE 5000

# Start the backend
CMD ["node", "dist/server.js"]