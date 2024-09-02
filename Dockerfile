# Use the official NGINX image from the Docker Hub
FROM nginx:alpine

# Copy your website's static files to the default nginx html directory
COPY . /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
