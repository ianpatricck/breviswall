/* ---------------------------------
 * Função Mock que simula um consumo
 * de dados dos quadros de um usuário
 * através de uma API fake.
 * ---------------------------------
 *
 */

export function getBoards() {
  return [
    {
      id: 1,
      name: "Front-End Application",
      description: "Lorem Ipsum is simply dummy text.",
      cards: {
        backlog: {
          name: "Backlog",
          tasks: [
            {
              id: 1,
              name: "Fazer bolo de chocolate",
            },
            {
              id: 2,
              name: "Comprar carne",
            },
            {
              id: 3,
              name: "Criar agendador de tarefas",
            },
            {
              id: 4,
              name: "Desenvolver Front-End",
            },
          ],
        },
        in_progress: {
          name: "In Progress",
          tasks: [
            {
              id: 5,
              name: "Organizar pratos",
            },
            {
              id: 6,
              name: "Preparar o ambiente de homologação",
            },
          ],
        },
        done: {
          name: "Done",
          tasks: [
            {
              id: 7,
              name: "Criar Design da plataforma",
            },
            {
              id: 8,
              name: "Preparar o ambiente de homologação",
            },
          ],
        },
        review: {
          name: "Review",
          tasks: [],
        },
        refactor: {
          name: "Refactor",
          tasks: [
            {
              id: 9,
              name: "Preparar o ambiente de homologação",
            },
          ],
        },
      },
    },
    {
      id: 2,
      name: "Design System Modeling",
      description: "Lorem Ipsum is simply dummy text.",
      cards: {
        backlog: {
          name: "Backlog",
          tasks: [
            {
              id: 1,
              name: "Novas regras da aplicação",
            },
            {
              id: 2,
              name: "Comprar carne",
            },
            {
              id: 3,
              name: "Calendário acadêmico",
            },

            {
              id: 4,
              name: "Nova regras de infra",
            },
          ],
        },
        in_progress: {
          name: "In Progress",
          tasks: [
            {
              id: 5,
              name: "Aplicar IaaC",
            },
            {
              id: 6,
              name: "Preparar o ambiente de homologação",
            },
          ],
        },
        done: {
          name: "Done",
          tasks: [
            {
              id: 7,
              name: "Estilizar",
            },
            {
              id: 8,
              name: "Preparar o ambiente de homologação",
            },
          ],
        },
        review: {
          name: "Review",
          tasks: [],
        },
        refactor: {
          name: "Refactor",
          tasks: [
            {
              id: 9,
              name: "Preparar o ambiente de homologação",
            },
          ],
        },
      },
    },
    {
      id: 3,
      name: "Infraestructure Architecture",
      description: "Lorem Ipsum is simply dummy text.",
      cards: {
        backlog: {
          name: "Backlog",
          tasks: [
            {
              id: 1,
              name: "Criar sistema de autenticação",
            },
            {
              id: 2,
              name: "Melhorar performance",
            },
            {
              id: 3,
              name: "Blindar segurança",
            },

            {
              id: 4,
              name: "Desenvolver Front-End",
            },
          ],
        },
        in_progress: {
          name: "In Progress",
          tasks: [
            {
              id: 5,
              name: "Organizar pratos",
            },
            {
              id: 6,
              name: "Integrar APIs",
            },
          ],
        },
        done: {
          name: "Done",
          tasks: [
            {
              id: 7,
              name: "Aplicar DDD",
            },
            {
              id: 8,
              name: "Realizar testes unitários",
            },
          ],
        },
        review: {
          name: "Review",
          tasks: [],
        },
        refactor: {
          name: "Refactor",
          tasks: [
            {
              id: 9,
              name: "Preparar o ambiente de homologação",
            },
          ],
        },
      },
    },
  ];
}
