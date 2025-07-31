
# Projeto - Criando um CLI

Este repositório é o trabalho do **Grupo 17** na Jornada Tech, onde estamos desenvolvendo uma série de ferramentas CLI (Interface de Linha de Comando) usando Node.js, interagindo com APIs públicas e exibindo dados no terminal.

---

## 👩‍💻 Integrantes do Grupo 17

Este projeto foi realizado por um grupo de estudantes reais da Jornada Tech:

- Paula Azevêdo  
- Rayssa Simões  
- Nay Rodrigues  
- Gracielen Garbine  

---

## Objetivo do Projeto

Construir ferramentas simples de linha de comando (CLI) que:

- Busquem dados de APIs públicas;  
- Utilizem Node.js com async/await e fetch para requisições;  
- Exibam resultados formatados no terminal;  
- Sejam práticas e didáticas para consolidar conceitos de JavaScript, manipulação de terminal e integração com APIs;  
- E, futuramente, possam ser publicadas no NPM.

---

🚀 CLIs do Grupo 17
1. ✨ CLI - Frases de Motivação
Descrição:
Uma ferramenta CLI que exibe frases motivacionais curtas em português diretamente no terminal.

Funcionalidades:

🎯 Exibe uma frase motivacional aleatória ao ser executada.

🎨 Desenvolvida em Node.js utilizando as bibliotecas chalk e figlet para uma apresentação estilizada.

Observação:
Este é o primeiro CLI do nosso grupo, focado em apresentar a base do projeto e práticas essenciais.

2. 📮 CLI – Consulta de CEP
Descrição:
Um projeto simples de linha de comando (CLI) feito em Node.js que consulta dados de endereço a partir de um CEP usando a API pública ViaCEP.

3. 🍽️ CLI de Receitas
Descrição:
Projeto feito em Node.js que busca receitas da API pública TheMealDB e exibe no terminal.

Comandos disponíveis:

🎲 receita aleatoria → Exibe uma receita aleatória (em inglês).

🔍 receita buscar <ingrediente> → Busca receitas contendo o ingrediente informado.

4. 💱 CLI de Dados de Câmbio
Descrição:
Desenvolve um CLI que converte valores entre moedas usando uma API pública de cotação de moedas.

Funcionalidades:

💵 Recebe valor, moeda de origem e moeda de destino como argumentos.

🔄 Busca taxas de conversão na API.

🧮 Calcula e exibe o valor convertido formatado no terminal.

5. ☀️ 🌧️CLI do CLima
Descrição:
Busca o clima atual da cidade informada

Exibe temperatura e condição (ex: ☀️, 🌧️, 🌫️) diretamente no terminal

Não requer chave de API


✅ Pontos Importantes
100% gratuito: usa a API pública wttr.in, sem necessidade de autenticação ou chave de API.

Sem complicação: basta digitar o nome da cidade como argumento no terminal.

Compatível com qualquer sistema operacional que tenha Node.js instalado.

Saída rápida e amigável: mostra a previsão atual com ícones de clima (ex: ☀️ 🌧️ 🌫️).

Ideal para projetos simples ou educacionais, com fácil integração em outros scripts.

Suporte a nomes com espaços: funciona com cidades como "Fortaleza" ou "São Paulo".




📦 Tecnologias utilizadas

💻 Node.js

📦 npm

⚡ Fetch com async/await

🖥️ Manipulação do console (console.log, formatação com chalk, figlet)

🧩 Manipulação e validação de argumentos da linha de comando

🔧 Git e GitHub para versionamento

🚀 Publicação no NPM (planejado)

🧩 ES Modules (import/export) — Para organização moderna do código.


---

1. Clone o repositório:

```bash
git clone https://github.com/Srta-Azevedo/Projeto---Grupo-17.git
>>>>>>> 167afd0 (Renomeia index.js para motiva.js e atualiza README e package.json)
