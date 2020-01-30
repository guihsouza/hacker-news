# Hacker News App

[![Build Status](https://travis-ci.org/gui-od/hacker-news.svg?branch=master)](https://travis-ci.org/gui-od/hacker-news)

Aplicação teste baseada na aplicação Hacker News utilizando NextJS, React Server Render, SSR Cache e Service workers

## Index

- [Dependências](#dependências)
- [Instalando dependências](#instalando-dependências)
- [Instalando pacotes](#instalando-pacotes)
- [Executando a aplicação](#executando-a-aplicação)
- [Executando rotinas de testes](#executando-rotinas-de-testes)

## Dependências

- NodeJS 8+
- Yarn

## Instalando dependências

### Linux/MacOS

```bash
$ wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
```

Adicione a seguinte linha em seu arquivo `.bashrc`

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

Instale a última versão do NodeJS

```bash
$ nvm install node
```

Instale o pacote do Yarn

```bash
$ nvm install -g yarn
```

Adicione a pasta de executáveis do Yarn ao `PATH` do sistema

```bash
export PATH="$HOME/.yarn/bin:$PATH"
```

## Instalando pacotes

Utilize o terminal para realizar a instalação dos pacotes da aplicação.
Acesse o diretório do projeto e execute o seguinte comando

```bash
$ yarn
```

## Executando a aplicação

Feita a instalação, a aplicação poderá ser executada através do seguinte comando

```bash
$ yarn build
$ yarn start
```

## Executando rotinas de testes

As rotinas de testes podem ser executadas através do script `test`

```bash
$ yarn test
```

É isso :)
