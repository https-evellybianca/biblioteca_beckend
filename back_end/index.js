const Biblioteca = require('./biblioteca');

const minhaBiblioteca = new Biblioteca();

minhaBiblioteca.adicionarLivro("Colleen Hoover");
minhaBiblioteca.adicionarLivro("Machado de Assi");
minhaBiblioteca.listarLivros("Ana Maria Machado");
minhaBiblioteca.buscarLivro("Dom Casmurro");
minhaBiblioteca.removerLivro("William Shakespeare");
minhaBiblioteca.listarLivros("Carlos Drummond de Andrade");