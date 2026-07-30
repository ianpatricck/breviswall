# 🏷️ BrevisWall 

A simple and quick idea I had to manage my everyday tasks, this isn’t a serious project with robust business rules. However, it can be an excellent aid for those who appreciate simplicity and organization.

> This repository is currently still under development (I don’t have much free time, sorry 😔).

### Clone repository

```bash
$ git clone https://github.com/ianpatricck/breviswall
```

## 🔥 Running application

```bash
$ cp ./api/.env.example ./api/.env 
```

My recommendation is that you initialize this application using Docker. This way, you avoid version and compatibility issues with the required dependencies and requirements.

### 🐋 Docker

```bash
$ docker compose up -d
$ docker exec breviswall-api composer install --no-interaction --optimize-autoloader
$ docker exec breviswall-api composer db:migrate
$ docker exec breviswall-api composer api:generate
```

Now you can see the API documentation at [https://localhost/api](https://localhost/api).

### 🧪 Execute tests (PHPUnit)

```bash
$ docker exec breviswall-api composer db:migrate
$ docker exec breviswall-api composer test 
```

Test execution will delete all rows in `database.db` file.
