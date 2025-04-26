---
layout: post
title: Sistemas Numéricos na Computação - Introdução e Binário
date: 2024-01-11 00:00:00 +0000
description: Neste post, vamos explorar os sistemas numéricos na computação, com foco no sistema binário.
tags: computacao sistemas-numericos binario ciencia-da-computacao hexadecimal
categories: computacao
---

> Há 10 tipos de pessoas no mundo: aquelas que entendem binário e aquelas que não entendem.

Vamos juntos em uma jornada para compreender as bases da computação e desbravar o mundo da tecnologia: **sistemas numéricos em computação!**


## Tabela de conteúdos

- [Breve introdução à sistemas de numeração](#intro)
   * [Decimal no detalhe](#decimal)
- [Sistemas numéricos na computação](#sistemas-numericos)
   * [Binário](#binario)
   * [Convertendo binário para decimal](#binario-decimal)
   * [Decimal pra binário](#decimal-binario)
   * [Contando em binário](#contando-binario)
- [Conclusão](#conclusao)
- [Referências](#referencias)

## Breve introdução à sistemas de numeração <a name="intro"></a>

Antes de falar como este sistems se aplicam na computação, vamos fazer uma breve introdução que vai nos assistir com conceitos super importantes para entender o restante.

Sistemas de numeração consistem em um conjunto de regras e símbolos utilizados para _representar quantidade de forma organizada_.

Historicamente já passamos por diversos sistemas de numeração que evoluíram de acordo com a cultura e necessidade das civilizações.

Alguns exemplos:

Sistema de numeração Sumério
![Sistema de numeração Sumério](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dz2p6t830yc31rchn4vg.png)

Sistema de numeração Romano
![Sistema de numeração Romano](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gxbra21rjxae1qq2jfid.png)

Sistema vigesimal Maia
![Sistema vigesimal Maia](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jxhpkngh68dnk5qw07v7.png)

E ao longo do tempo foi-se desenvolvendo o sistema de numeração que utilizamos no nosso dia a dia:

Sistema decimal
![Sistema decimal](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lhm3c3mluh145aw7gw6a.png)

O sistema decimal está presente em diversas áreas de conhecimento modernas, contudo, há áreas com necessidades específicas que desenvolveram diferentes sistemas para solucionar problemas, e uma delas é a *computação*.

### Decimal no detalhe <a name="decimal"></a>

É muito provável que você seja bem familiar com o sistema decimal, mas vamos passar aqui um conceito que vai ajudar a entender o binário mais à frente.

Cada casa (ou ordem) de um número decimal tem um peso diferente.

Avançar ou retroceder uma casa, significa multiplicar ou dividir este número por 10.

![casas decimais](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hsj01l040otkf8jg1wbv.png)

Cada casa de um número decimal possui 10 possíveis dígitos:
`1 2 3 4 5 6 7 8 9 0`

Com um número com 1 dígito, temos apenas 10 possíveis variações numéricas.

Agora, com 2 dígitos temos 100 possibilidades diferentes:

```
00, 01, 02, 03, 04, 05, 06, 07, 08, 09,
10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
60, 61, 62, 63, 64, 65, 66, 67, 68, 69,
70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
80, 81, 82, 83, 84, 85, 86, 87, 88, 89,
90, 91, 92, 93, 94, 95, 96, 97, 98, 99
```

E o padrão segue: a cada dígito a mais em um número decimal temos a quantidade de combinações anterior vezes 10!
- 1 dígito decimal: 10 opções (0 à 9)
- 2 dígitos decimais: 10 × 10 = 100 opções (00 à 99)
- 3 dígitos decimais: 10 × 10 × 10 = 1000 opções (000 à 999)

Este conceito é importante pois cada sistema de numeração irá apenas implementar sua própria base, como será com o _binário_.

## Sistemas numéricos na computação <a name="sistemas-numericos"></a>

A história da computação é marcada por uma necessidade crescente de representar e manipular informações de forma eficiente, dessa forma, sistemas como binário, hexadecimal e octal foram largamente empregados para diversas necessidades específicas.

Um dos fins mais comuns que estes sistemas nos permitem é a entrada de dados e sua representação em texto, ou seja, digitar no teclado:

Conversão Decimal, Binário, Octal, Hexadecimal para ASCII
![IConversão Decimal, Binário, Octal, Hexadecimal para ASCII](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zx3osb0rk8v7jgts00qd.png)

Baseando-se nesta tabela que muitos computadores compreendem a informação enviada por teclados e outros dispositivos de entrada.

### Binário <a name="binario"></a>

Vamos entender agora o básico de binário para que você possa compreender o meme abaixo e não estar mais no lugar da segunda pessoa.

![pessoas que entendem binario](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jb22tk3tbv8o4ed4w7cl.png) <a name="meme-binario"></a>

Como mencionamos antes, binário é um sistema de base 2, logo, para representar informações temos 2 símbolos: `1` (ligado) e `0` (desligado).

É realmente como se fosse uma lâmpada, ou um circuito (o que geralmente é):

![binário 101011](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lfp6eaewsl2a21nspedh.png)

Seguindo a lógica da quantidade de dígitos:
- 1 dígito binário: 2 opções (0 ou 1)
- 2 dígitos binários: 2 × 2 = 4 opções (00, 01, 10, 11)
- 3 dígitos binários: 2 × 2 × 2 = 8 opções (000, 001, 010, 011, 100, 101, 110, 111)

Como convenção, utilizamos potências de 2 para representar a progressão em binário, logo:

4 dígitos binários: 2^4 = 16 opções (0000 a 1111)

### Convertendo binário para decimal <a name="binario-decimal"></a>

Agora vamos ver na prática como se realiza esta conversão.

Regras da conversão:
- Em binário contamos da direita para esquerda;
- Dígitos `0` em uma posição específica contribuem para o valor total, mas seu valor é zero;
- Cada casa (ordem) tem um peso diferente.

Exemplo prático:

```
Converter para decimal 🤔

 0   1   0   1   1   0   0   1 
```

Respectivamente, cada casa deste número tem seu peso (ordem) começando da direita:

```
 0   1   0   1   1   0   0   1 - número
 7   6   5   4   3   2   1   0 - ordem
```

Assim como no sistema decimal, o número de uma ordem específica tem seu valor absoluto:

No número: `1920`, o dígito `9` representa `900`, pois está na ordem das centenas, ou seja: `9 (ele mesmo) x 10 (dezena) x 10 (centena) = 900`.

No binário vamos fazer a potência da ordem para chegar no valor de cada dígito

```
 0    1    0    1    1    0    0    1
2^7  2^6  2^5  2^4  2^3  2^2  2^1  2^0
128  64   32   16    8    4    2    1
```

Contudo, devemos lembrar que o dígito `0` (zero) significa desligado, dessa forma vamos cumprir uma das regras citadas anteriormente: o dígito `0` não possui valor.

Assim obtemos o seguinte resultado:
```
 0   1   0   1   1   0   0   1
2^7 2^6 2^5 2^4 2^3 2^2 2^1 2^0
 0  64   0  16   8   0   0   1  = 89
```

Por fim basta somar os números resultantes para obter o número decimal convertido com sucesso.

Este método é um pouco trabalhoso se feito à mão, mas é garantidamente uma das melhores formas de compreender sistemas de numeração e compreender de fato o binário para aplicações futuras em tecnologia.

Para converter um número decimal em binário é bem mais simples.

### Decimal pra binário <a name="decimal-binario"></a>

O processo de conversão aqui é bem mais tranquilo, só precisamos de uma divisão simples do número por 2:

![Decimal pra binário](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1b8mr0v0z3631md0pyb5.png)

Note que nem sempre a divisão irá terminar com resto zero, o que é comum para este tipo de conversão.

### Contando em binário <a name="contando-binario"></a>

A habilidade de contar em binário é uma aptidão fundamental em diversos domínios, sendo especialmente crucial no universo da programação e lógica digital. 

Compreender como os números binários se desdobram é uma peça-chave para programadores, engenheiros e entusiastas da tecnologia.

Contar em binário é razoavelmente simples depois que já notamos como funciona a ordem dos dígitos.

Para entender a lógica por trás disso no binário, vamos revisitar o sistema decimal:

Quando uma ordem alcança seu último dígito e ainda sim precisamos incrementar 1 unidade, como seria para passar de `09` para `10`, o que ocorre é a famosa "adição com reserva" ou "reagrupamento", popularmente chamado de "vai um".

Assim nós zeramos a casa das unidades e incrementamos a casa das dezenas, resultando em: `10`.

Em binário temos apenas 2 dígitos de possibilidade, então é muito fácil atingir o limite e precisar fazer o "vai um".

Observe o padrão:
```
Binario  Decimal
 0000       0
 0001       1
 0010       2
 0011       3
 0100       4
 0101       5
 0110       6
 0111       7
 1000       8
 1001       9
 1010       10
```

> Sim, você chegou na parte onde finalmente entendeu o [meme lá de cima](#meme-binario). 🎉

Veja também como acontecem nas bases hexadecimal e octal

![bases decimal, binaria, octal e hexadecimal](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9b9990e171bfcg220ye2.png)

## Conclusão <a name="conclusao"></a>

Pronto, agora você já sabe o básico de sistemas numéricos e binário, mas isso não é tudo!

Olha só o que você desbloqueia com o conhecimento deste post:

- Redes de computadores: vários aspectos das redes, desde transporte de dados, organização e configuração de redes envolve conhecimento em binário e hexadecimal;

- Robótica e Automação: plataformas como Arduino e Raspberry Pi se utilizam amplamente de sistemas binários e hexadecimal para compor sua lógica de funcionamento;

- Segurança: usa-se binário em tópicos como criptografia, algoritmos de hashing, assinaturas digitais, protocolos de segurança, engenharia reversa e outros.

Então não deixe seu conhecimento pegar poeira, desbloqueie mais possibilidades e vá além ⚡️.

## Referências <a name="referencias"></a>

Toda Matéria. Sistema de Numeração Decimal. Disponível em: https://www.todamateria.com.br/sistema-de-numeracao-decimal/. Acesso em: 10 jan. 2024.

IFSC - Instituto Federal de Educação, Ciência e Tecnologia de Santa Catarina. AULA 2 - Eletrônica Digital 1 - Graduação. Disponível em: https://wiki.ifsc.edu.br/mediawiki/index.php/AULA_2_-_Eletr%C3%B4nica_Digital_1_-_Gradua%C3%A7%C3%A3o. Acesso em: 10 jan. 2024.

Ciência de Garagem. Como os Sistemas Numéricos Evoluíram ao Longo do Tempo? Disponível em: https://cienciadegaragem.blogspot.com/2014/12/como-os-sistemas-numericos-evoluiram-ao.html. Acesso em: 10 jan. 2024.

Vivah, Linda. Learn How to Read Binary in 5 Minutes. Disponível em: https://medium.com/@LindaVivah/learn-how-to-read-binary-in-5-minutes-dac1feb991e. Acesso em: 10 jan. 2024.

CadCobol. Mecaweb - Conversão Bin/Dec, Dec/Bin. Disponível em: https://www.cadcobol.com.br/mecaweb_conversao_bin_dec_dec_bin.htm. Acesso em: 10 jan. 2024.