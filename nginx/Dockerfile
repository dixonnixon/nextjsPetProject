FROM nginx:1.20-alpine

WORKDIR /app

COPY config/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]
