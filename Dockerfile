# Dockerfile for frontend (inside ./client)
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# Production image
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
