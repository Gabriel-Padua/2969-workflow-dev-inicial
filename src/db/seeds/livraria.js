/* eslint-disable import/prefer-default-export */
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("livros").del();
  await knex("editoras").del();
  await knex("autores").del();
  await knex("autores").insert([
    {
      nome: "K. Johnson",
      nacionalidade: "Springfield",
    },
    {
      nome: "A. Lovelace",
      nacionalidade: "Paris",
    },
    {
      nome: "D. Vaughn",
      nacionalidade: "Orlando",
    },
  ]);
  await knex("editoras").insert([
    {
      nome: "Editora Node.js",
      cidade: "São Paulo",
      email: "node@node.com",
    },
    {
      nome: "Editora JavaScript",
      cidade: "Rio de Janeiro",
      email: "js@js.com",
    },
    {
      nome: "Editora REST",
      cidade: "Belo Brasília",
      email: "ed@ed.com",
    },
  ]);
  await knex("livros").insert([
    {
      titulo: "O Grande Livro de Node.js",
      paginas: 123,
      editora_id: 7,
      autor_id: 7,
    },
    {
      titulo: "JavaScript Completo",
      paginas: 234,
      editora_id: 8,
      autor_id: 8,
    },
    {
      titulo: "Tudo Sobre APIs REST",
      paginas: 345,
      editora_id: 9,
      autor_id: 9,
    },
  ]);
}

// npx knex --knexfile=./src/db/knexfile.jws seed:make livraria
