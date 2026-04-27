# 🏷️ Easy Kanban

A simple and quick idea I had to manage my everyday tasks, this isn’t a serious project with robust business rules. However, it can be an excellent aid for those who appreciate simplicity and organization.

I could use other productivity tools, but I chose to create my own (yes, I’m running out of ideas).

## A Simple Kanban

> This repository is currently still under development (I don’t have much free time, sorry 😔).

### Clone repository

```bash
$ git clone https://github.com/ianpatricck/easy-kanban
```

## 🔥 Runining application

```bash
$ cp .env.example .env 
```

My recommendation is that you initialize this application using Docker. This way, you avoid version and compatibility issues with the required dependencies and requirements.

### 🐋 Docker

```bash
$ docker build -t easy-kanban .
$ docker run -p 8000:8000 -it --name easy-kanban-container -d easy-kanban
```

Now you can see the API documentation at [http://localhost:8000/](http://localhost:8000/).

## ☠️ Running from source

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
$ composer serve
```

Now you can see the API documentation at http://localhost:8000/.

### 🧪 Execute tests (PHPUnit)

Here are some useful database commands for quick tests.

```bash
$ composer db:seed		# Populate the database with fake records.
$ composer db:rollback		# Revert changes in the database.
```

Run all tests:

```bash
$ composer test
```

Test execution will delete all rows in `development.db` file.
