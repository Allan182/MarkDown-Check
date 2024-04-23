# Automatizacao-Node-JS

Esta Lib tem o intuito de automatizar o processo de verificação de links dentro de arquivos Markdown analisando as URL's e realizando a filtragem dos dados e demonstrando os endereços que estão fora do AR com seu status code ou endereços remotos que não existem. Trazendo automatização na verificação de grandes blogs e processos repetitivos dentro da rotina de uma empresa que trabalha com arquivos em formato markdown. 

Para construção da Lib foi utilizado expressões regulares para realizar a filtragem correta dos arquivos.md, lib fs para leitura dos diretórios / arquivos e o fetch do próprio node para consultar todas as URL's e fazer a filtragem do retorno da consulta e construir um array com os dados desejados, além de tratamentos de erros e exceções e outras funcionalidades como o Promisse.all

Além disso foi implementado verificação por Diretórios e Arquivos Específicos para facilitar a utilização / otimização.

A lib se chama: "markdown-check"

Para Instalar A LIB utilize : npm install -g markdown-check

Para executar a Lib Utilize no terminal: 
markdown-check "caminhoDoArquivo ou Diretorio" validate

Exemplo de execução: 
markdown-check ./files validate ou markdown-check ./files/texto.md validate

Será retornado um Array com cada objeto JSON contando a URL de acesso e seu Seu Status Code da HTTP Request e o Status Text.
