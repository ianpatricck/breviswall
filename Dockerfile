FROM php:8.3-cli

RUN apt-get update && apt-get install -y zlib1g-dev libzip-dev unzip curl
RUN docker-php-ext-install zip

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

WORKDIR /usr/src/easy-kanban

EXPOSE 8000
