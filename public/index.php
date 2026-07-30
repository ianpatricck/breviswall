<?php

// |============================================|
// | Entrypoint da aplicação                    |
// |============================================|

use DI\ContainerBuilder;
use Psr\Http\Message\ServerRequestInterface;
use Slim\Exception\HttpNotFoundException;
use Slim\Factory\AppFactory;
use Slim\Psr7\Response;

require __DIR__ . "/../vendor/autoload.php";
require __DIR__ . "/../src/Utils/isAuthorizedUser.php";

$app = AppFactory::create();

$app->addBodyParsingMiddleware();

/*
 * Adiciona middleware de errors e sobrescreve a resposta para
 * alguma rota não encontrada.
 */
$app->addErrorMiddleware(true, true, true)->setErrorHandler(
    HttpNotFoundException::class,
    function (
        ServerRequestInterface $_request,
        Throwable $_exception,
        bool $_displayErrorDetails,
    ) {
        $response = new Response();
        $response->getBody()->write(
            json_encode([
                "code" => 404,
                "message" => "Resource not found",
            ], JSON_PRETTY_PRINT),
        );

        return $response
            ->withStatus(404)
            ->withHeader("Content-Type", "application/json");
    },
);

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
