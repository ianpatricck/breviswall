FROM dunglas/frankenphp:1.12-php8.5

RUN install-php-extensions \
	gd \
	intl \
	zip \
	opcache

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /app
