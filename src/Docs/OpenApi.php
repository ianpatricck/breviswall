<?php

// |============================================|
// | Documentação da API com Swagger            |
// |============================================|

namespace App\Docs;

use OpenApi\Attributes as OA;

#[OA\OpenApi(
    info: new OA\Info(
        title: 'BrevisWall API',
        version: '1.0',
        description: 'This is a Kanban Project Management API',
    ),
    servers: [
        new OA\Server(
            url: 'https://localhost',
            description: 'BrevisWall API development environment'
        )
    ],
    security: [['bearerAuth' => []]],
    tags: [
        new OA\Tag(
            name: 'Kanban',
            description: 'Kanban as a agile methodology'
        ),
        new OA\Tag(
            name: 'Project Management',
            description: 'Fast, agile, simple, and easy management'
        ),
    ],
)]
#[OA\SecurityScheme(
    securityScheme: 'bearerAuth',
    type: 'http',
    scheme: 'bearer',
    description: 'Basic Auth'
)]
class OpenApi {}
