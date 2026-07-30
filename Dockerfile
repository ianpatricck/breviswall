FROM dunglas/frankenphp:1.12-php8.5

RUN install-php-extensions \
	pdo_mysql \
	gd \
	intl \
	zip \
	opcache

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /app

COPY start.sh /app/start.sh

RUN chmod +x /app/start.sh
