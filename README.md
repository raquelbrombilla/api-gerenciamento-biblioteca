# 📚 API CRUD de Livros  

Uma API RESTful em **TypeScript** utilizando **Express** e **MySQL** para gerenciar livros.

## 🚀 Tecnologias  
- 🏗 **Node.js** + **Express** → Servidor web  
- 💻 **TypeScript** → Tipagem segura e melhor organização  
- 🗄 **MySQL** → Banco de dados para armazenar livros  
- 🔒 **dotenv** → Gerenciamento de variáveis de ambiente  

## 🔹 Instalação  
Clone o repositório e instale as dependências:  
```bash
git clone https://github.com/seu-usuario/api-livros.git
cd api-livros
npm install
```

## 🔹 Configuração do Banco de Dados 
Antes de rodar a API, crie o **banco de dados** e a tabela "livro":

CREATE DATABASE biblioteca;  
USE biblioteca;  
CREATE TABLE livro (  
  id INT AUTO_INCREMENT PRIMARY KEY,  
  titulo VARCHAR(255) NOT NULL,  
  autor VARCHAR(255) NOT NULL,  
  isbn VARCHAR(255) NOT NULL,  
  anopublicacao INT NOT NULL  
);

## 🔹 Configuração do .env
Crie um arquivo .env na raiz do projeto e preencha suas credenciais:  
PORT=3000  
DB_HOST=localhost  
DB_USER=root  
DB_PASS=sua_senha  
DB_NAME=biblioteca  

## 🔹 Rodando o Projeto
```bash
npm run dev  # Rodar em modo desenvolvimento
npm run build  # Compilar TypeScript para JavaScript
npm start  # Executar versão compilada
```
