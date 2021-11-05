FROM node:latest
LABEL Yuri Oliveira
COPY . /var/www
WORKDIR /var/www
RUN npm install
EXPOSE 3000

COPY /docker/wait-for-it.sh /var/www/wait-for-it.sh
RUN chmod +x /var/www/wait-for-it.sh
COPY /docker/entrypoint.sh /var/www/entrypoint.sh
RUN chmod +x /var/www/entrypoint.sh