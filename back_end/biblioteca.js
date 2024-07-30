class Biblioteca {
    constructor() {
        this.livros = [];
    }

    adicionarLivro(titulo, autor) {
        const novoLivro = { titulo, autor };
        this.livros.push(novoLivro);
        console.log(`Livro adicionado: ${titulo}`);
    }

    listarLivros() {
        if (this.livros.length === 0) {
            console.log("livro não encontrado na  biblioteca.");
            return;
        }
        console.log("Lista de Livros:");
        this.livros.forEach((livro, index) => {
            console.log(`${index + 1}. ${livro.titulo} - ${livro.autor}`);
        });
    }

    buscarLivro(titulo) {
        const livroEncontrado = this.livros.find(livro => livro.titulo.toLowerCase() === titulo.toLowerCase());
        if (livroEncontrado) {
            console.log(`Livro encontrado: ${livroEncontrado.titulo} - ${livroEncontrado.autor}`);
        } else {
            console.log("Livro não encontrado.");
        }
    }

    removerLivro(titulo) {
        const indice = this.livros.findIndex(livro => livro.titulo.toLowerCase() === titulo.toLowerCase());
        if (indice !== -1) {
            this.livros.splice(indice, 1);
            console.log(`Livro removido da biblioteca: ${titulo}`);
        } else {
            console.log("Livro não encontrado para remoção.");
        }
    }
}

module.exports = Biblioteca;
