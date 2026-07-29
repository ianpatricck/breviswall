<?php

// |============================================|
// | Entrypoint da aplicação                    |
// |============================================|

use DI\ContainerBuilder;
use Slim\Factory\AppFactory;

require __DIR__ . "/../vendor/autoload.php";
require __DIR__ . "/../src/Utils/isAuthorizedUser.php";

$app = AppFactory::create();

$app->addBodyParsingMiddleware();
$app->addErrorMiddleware(true, true, true);

/*
 * Container que injeta as dependências dos controladores.
 */
$appContainerBuilder = new ContainerBuilder();
$appContainerBuilder->addDefinitions(__DIR__ . "/di-config.php");
$appContainer = $appContainerBuilder->build();

/*
 * Rota que define o Swagger para documentar a API
 */
$app->get("/api", function ($_request, $response) {
    $html = file_get_contents(__DIR__ . "/swagger.html");
    $response->getBody()->write($html);
    return $response->withHeader("Content-Type", "text/html");
});

/*
 * Rota para enxergar o arquivo gerado do Swagger com api:generate
 */
$app->get("/swagger-json", function ($_request, $response) {
    $swaggerJson = file_get_contents(__DIR__ . "/swagger.json");
    $response->getBody()->write($swaggerJson);
    return $response->withStatus(200);
});

require_once __DIR__ . "/api.php";

runApi($app, $appContainer);
