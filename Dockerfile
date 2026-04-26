FROM php:8.3-cli

RUN apt-get update && apt-get install -y zlib1g-dev libzip-dev unzip
RUN docker-php-ext-install zip

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

COPY . /usr/src/easy-kanban
WORKDIR /usr/src/easy-kanban

RUN composer install
RUN composer api:generate

EXPOSE 8000

CMD [ "php", "-S", "0.0.0.0:8000", "-t", "src"]
