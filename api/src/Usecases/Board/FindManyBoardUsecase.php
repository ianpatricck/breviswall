<?php declare(strict_types=1);

// |==========================================|
// | Caso de uso para resgatar muitos quadros |
// |==========================================|

namespace App\Usecases\Board;

use App\Data\Repositories\BoardRepository;
use Exception;

class FindManyBoardUsecase
{
    public function __construct(
        protected BoardRepository $boardRepository
    ) {}

    public function execute(array $params = []): array|null
    {
        $limit = !empty($params) && $params['limit'] ? (int) $params['limit'] : null;

        $boards = $this->boardRepository->findMany($limit);

        if (empty($boards)) {
            throw new Exception('Boards could not be found', 404);
        }

        return $boards;
    }
}
