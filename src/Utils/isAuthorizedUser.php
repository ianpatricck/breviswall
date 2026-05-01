<?php

// |==============================================|
// | Função que verifica a autorização do usuário |
// |==============================================|

namespace App\Utils;

use App\Usecases\User\AuthorizeUserUsecase;

function isAuthorizedUser(string $bearer)
{
    $authorizeUserUsecase = new AuthorizeUserUsecase();
    $token = explode(" ", $bearer)[1];
    $authorizedUser = $authorizeUserUsecase->execute($token);

    return $authorizedUser;
}
