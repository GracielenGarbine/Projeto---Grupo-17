#!/usr/bin/env node

import fetch from 'node-fetch';

// Pegando o nome da cidade do terminal
const cidade = process.argv.slice(2).join(' ');

if (!cidade) {
  console.log('❗ Por favor, digite o nome de uma cidade. Exemplo: node clima.js "São Paulo"');
  process.exit(1);
}

const url = `https://wttr.in/${encodeURIComponent(cidade)}?format=3`;

try {
  const resposta = await fetch(url);
  const clima = await resposta.text();
  console.log(`📍 Clima em ${cidade}:`);
  console.log(clima);
} catch (erro) {
  console.error('❌ Erro ao buscar o clima:', erro.message);
}
