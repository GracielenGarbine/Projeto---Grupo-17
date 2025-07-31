#!/usr/bin/env node

import fetch from 'node-fetch';
import chalk from 'chalk';
import figlet from 'figlet';

// Pegando argumentos
const [,, valor, moedaOrigem, moedaDestino] = process.argv;

if (!valor || !moedaOrigem || !moedaDestino) {
  console.log(chalk.red('⚠️  Uso correto: cambio <valor> <moedaOrigem> <moedaDestino>'));
  console.log(chalk.yellow('Exemplo: cambio 100 USD BRL'));
  process.exit(1);
}

const valorNumerico = parseFloat(valor);
const origem = moedaOrigem.toUpperCase();
const destino = moedaDestino.toUpperCase();

const url = `https://api.exchangerate.host/convert?from=${origem}&to=${destino}&amount=${valorNumerico}`;

console.log(chalk.blue(figlet.textSync('Câmbio CLI')));

console.log(chalk.white(`🔍 Buscando câmbio de ${chalk.green(origem)} para ${chalk.green(destino)}...`));

try {
  const resposta = await fetch(url);
  const dados = await resposta.json();

  if (!dados.success) {
    throw new Error('Erro na conversão. Verifique as moedas.');
  }

  const convertido = dados.result;
  console.log(chalk.cyan(`💵 ${valorNumerico} ${origem} = ${chalk.bold(convertido.toFixed(2))} ${destino}`));
} catch (erro) {
  console.error(chalk.red('❌ Erro ao buscar dados de câmbio:'), erro.message);
}
try {
  const resposta = await fetch(url);
  const dados = await resposta.json();

  console.log(dados); // <-- Adicione essa linha para debug

  if (!dados.success) {
    throw new Error('Erro na conversão. Verifique as moedas.');
  }

  const convertido = dados.result;
  console.log(chalk.cyan(`💵 ${valorNumerico} ${origem} = ${chalk.bold(convertido.toFixed(2))} ${destino}`));
} catch (erro) {
  console.error(chalk.red('❌ Erro ao buscar dados de câmbio:'), erro.message);
}
