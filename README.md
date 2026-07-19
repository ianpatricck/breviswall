# 🏷️ BrevisWall 

A simple and quick idea I had to manage my everyday tasks, this isn’t a serious project with robust business rules. However, it can be an excellent aid for those who appreciate simplicity and organization.

> This repository is currently still under development (I don’t have much free time, sorry 😔).

### Clone repository

```bash
$ git clone https://github.com/ianpatricck/breviswall
```

## 🔥 Running application

```bash
$ cp .env.example .env 
```

My recommendation is that you initialize this application using Docker. This way, you avoid version and compatibility issues with the required dependencies and requirements.

### 🐋 Docker

```bash
$ docker compose up -d
$ docker exec breviswall-app composer db:migrate
```

Now you can see the API documentation at [http://localhost:8000/api](http://localhost:8000/api).

## ☠️ Running from source

```bash
$ cp .env.example .env 
```

Of course, you can also run this application without Docker. Just make sure to check the requirements beforehand.

- php v8.3
- composer 2.9.5

Some dependencies may break due to incompatibility.

### 📦 Install dependencies via composer

```bash
$ composer install
$ composer api:generate
```

You must run a migration script to create all database tables.

```bash
$ composer db:migrate
```

### 🚀 Start the http server

```bash
$ php -S localhost:8000 -t public
```

Now you can see the API documentation at http://localhost:8000/api.

### 🧪 Execute tests (PHPUnit)

```bash
$ composer test
```

Test execution will delete all rows in `database.db` file.
