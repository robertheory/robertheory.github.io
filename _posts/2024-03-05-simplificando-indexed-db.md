---
layout: post
title: Simplificando IndexedDB
date: 2024-03-05 00:00:00
description: Aprenda a usar IndexedDB de forma simples e prática
tags: frontend javascript indexeddb webstorage webdev
categories: frontend
---

Mais espaço, mais rápido e menos amigável.

A partir daqui é menos ódio e mais amor pela forma de armazenamento mais poderosa do seu navegador.

O IndexedDB pode ser um pouco complicado a princípio, mas ao final deste artigo você vai entender o essencial para usar o melhor desta ferramenta ao seu favor!

## Tabela de Conteúdos
- [Pontos fortes](#pontos-fortes)
- [Pontos de atenção](#pontos-atencao)
- [Teoria e conceitos do IndexedDB](#teoria)
  - [Database](#database)
  - [Object Store](#object-store)
  - [Índices](#indices)
  - [Transações](#transacoes)
  - [Versionamento](#versionamento)
- [IndexedDB na prática](#pratica)
  - [Criando o banco e a store](#criando)
    - [Operações de armazenamento](#operacoes)
  - [Trabalhando com Índices](#indices-pratica)
  - [Transações](#transacoes-pratica)
- [Conclusão](#conclusao)
- [Referências](#referencias)


De acordo com [Developer Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API):

> IndexedDB é uma API de baixo nível para armazenamento no lado do cliente de quantidades significativas de dados estruturados, incluindo arquivos/blobs.

O IndexedDB é um sistema de banco de dados transacional, semelhante a bancos que utilizam SQL, contudo, sua semelhança com SQL acaba por ai.

Nele trabalhamos com o armazenamento de objetos indexados com chaves, logo, podemos sim considerá-lo um banco de dados NoSQL, e nesse aspecto lembra um pouco bancos como o Redis que trabalham no esquema Chave-Valor.

## Pontos fortes <a name="pontos-fortes"></a>
- Alta performance em consultas: Seu funcionamento baseado em índices permite realizar consultas de forma mais performática em comparação aos mecanismos de WebStorage.
- Altas cotas de armazenamento: Ainda em comparação com o WebStorage, que pode armazenar cotas de até 5 MiB, o IndexedDB oferece até 10% do tamanho total do disco onde o perfil do usuário está armazenado.

Por exemplo, se o dispositivo tiver um disco rígido de 500 GiB, o navegador permitirá que uma origem armazene até:

- No modo de melhor esforço: 10 GiB de dados, que é o limite do grupo eTLD+1.
- No modo persistente: 250 GiB, que representa 50% do tamanho total do disco.

Navegadores diferentes tratam os limites e o despejo de dados de forma diferente, entenda mais em: https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria#other_web_technologies

- Armazenamento de dados estruturados: Aqui podemos armazenar diretamente objetos complexos da nossa aplicação sem a necessidade de conversões mirabolantes, ou transformar em string como é o caso do `localStorage`.

Sim, diferente do localStorage que armazena apenas texto aqui você pode armazenar diretamente qualquer tipo objeto suportado pelo [algoritmo de clone estruturado](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

## Pontos de atenção <a name="pontos-atencao"></a>

- Complexidade: IndexedDB é uma API de baixo nível, o que significa que pode ser complexa para iniciantes. Requer uma compreensão sólida de conceitos como transações, índices e manipulação de eventos.

- Não é adequado para todos os casos de uso: IndexedDB é mais adequado para armazenar grandes volumes de dados, como em aplicativos da web que precisam de armazenamento offline robusto. Para casos de uso mais simples, como armazenamento temporário de dados, pode ser excessivo.

- Desempenho em alguns cenários: Embora seja geralmente eficiente para grandes conjuntos de dados, IndexedDB pode ter desempenho inferior em cenários onde há muitas operações de leitura e escrita frequentes em pequenos conjuntos de dados.

- API Verbosa: As operações em IndexedDB muitas vezes exigem muito código para realizar tarefas simples. Isso pode tornar o desenvolvimento mais demorado e propenso a erros.

## Teoria e conceitos do IndexedDB  <a name="teoria"></a>

![estrutura exemplo indexedDB](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3cykrg8mkdivn969844v.png)

### Database <a name="database"></a>
A estrutura de mais alto nível do IndexedDB.
Nele iremos conter as Object Stores, onde de fato iremos armazenar os dados.
É possível criar múltiplos Databases, que por sua vez podem conter múltiplas Object Stores.

### Object Store <a name="object-store"></a>
Cada Object Store é um compartimento individual onde seus dados serão armazenados.
Traçando um paralelo com bancos de dados relacionais, as Object Stores normalmente são criadas para um fim específico, como armazenar apenas produtos, ou apenas posts de um blog.
É comum criar uma Object Store para cada finalidade dentro da aplicação, como: armazenar uma lista de produtos, publicações de um blog, etc.

Diferentemente das tabelas em bancos de dados tradicionais, os tipos de dados no armazenamento não precisam ser consistentes.

Assim, podemos por exemplo, armazenar um objeto com propriedades que podem ser `String` ou `undefined` sem problemas.

Neste exemplo temos uma Store de métodos de pagamento por usuário, onde cada objeto tem as propriedades: `name` e `payment`.

Contudo é perceptível que nem todos os objetos desta Store possuem um valor válido para `payment`.

![object store com inconsistencia](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ungnuairlxe4jon1udqm.png)

### Índices <a name="indices"></a>

No IndexedDB os índices funcionam como se fosse uma nova Object Store, contudo a chave para consulta é definida por um campo específico do objeto armazenado.

Levando em consideração o exemplo anterior com a Store de métodos de pagamento por usuário, vamos criar um índice baseado nas formas de pagamento:

![índice baseado nas formas de pagamento](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6p5nwjyxn9z0mizrbvma.png)

Neste novo índice podemos observar as seguintes mudanças:

1. A chave agora é o método de pagamento;
2. Os objetos armazenados continuam os mesmos;
3. Registros que não possuem a propriedade `payment` não são retornados;

A Object Store anterior que se baseava em um ID incremental ainda existe, contudo, no ato da consulta da Object Store é crucial informar o índice de consulta desejado, caso contrário a consulta será realizada no índice padrão.

### Transações <a name="transacoes"></a>
Uma transação é um procedimento que envolve uma operação ou grupo de operações que garante a integridade do banco de dados.

Se uma das ações de uma transação falhar, nenhuma delas será aplicada e o banco de dados retornará ao estado em que estava antes do início da transação.

Todas as operações de leitura ou gravação no IndexedDB precisam fazer parte de uma transação. Isso permite operações atômicas de leitura-modificação-gravação sem precisar se preocupar com outras linhas de execução agindo no banco de dados ao mesmo tempo.

### Versionamento <a name="versionamento"></a>
No IndexedDB existe o conceito de versão do banco de dados, onde cada versão é numerada, normalmente de forma sequencial.

Quando o banco é executado pela primeira vez, a sua versão começa em `0`.

Esta funcionalidade é realmente útil quando se precisa por algum motivo modificar a estrutura do banco, assim criamos uma nova versão com uma estrutura diferente.

## IndexedDB na prática <a name="pratica"></a>

Na prática a verbosidade da API do IndexedDB é algo que pode realmente complicar o seu trabalho e levá-lo a reconsiderar o uso da ferramenta. Inclusive sua complexidade é algo que leva muitas pessoas a desistirem mesmo de entender como se usa a ferramenta, assim perdendo uma ferramenta que é boa para diversos trabalhos.

Eu particularmente tenho certo apreço pelo uso de bibliotecas que tornam a usabilidade do IndexedDB muito melhor como o [IDB](https://www.npmjs.com/package/idb):

> IndexedDB com usabilidade.
> Esta é uma biblioteca pequena (~ 1,19kB brotli'd) que reflete principalmente a API IndexedDB, mas com pequenas melhorias que fazem uma grande diferença na usabilidade.

Uma vez que o IndexedDB tem uma documentação muito boa, vou me ater a exemplos já existentes das documentações e lhes encorajo a notar como sua implementação com a biblioteca npm IDB se torna muito mais simples em comparação com a API padrão.

### Verificando a compatibilidade com IndexedDB

A compatibilidade do IndexedDB é quase absoluta, contudo existem cenários onde é importante checar sua compatibilidade, por exemplo se você estiver trabalhando com navegadores mais antigos, por precaução, não é uma má ideia detectar o suporte de recursos.

A maneira mais fácil é verificar o objeto window:

```
if (!window.indexedDB) {
  window.alert(
    "Seu navegador não suporta uma versão estável do IndexedDB. Alguns recursos não estarão disponíveis.",
  );
}
```
Este e outros exemplos de código em: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB

### Criando o banco e a store <a name="criando"></a>

Para abrir um banco é preciso realizar um pedido (request) que será atendido em algum momento, assim várias operações do IndexedDB.

Para criar o banco de dados temos que realizar os seguintes passos:

1. Informar o nome do banco
2. Informar a versão do banco
3. Criar a Object Store

No seguinte exemplo vamos criar dar vida ao nosso exemplo anterior de `métodos de pagamento por usuário` utilizando a biblioteca IDB para realizar a abertura do banco e a criação da primeira store.

```
import { openDB } from 'idb';

const dbPromise = openDB('MeuBancoIDB', 1, {
  upgrade(db) {
// aqui é onde realizamos a definição do nosso banco
// podemos criar quantas stores quisermos
    db.createObjectStore('usuariosPagamento');
  },
});

```

O método `upgrade` é chamado se essa versão do banco de dados nunca tiver sido aberta antes.

Nele especificamos o esquema (estrutura) do banco de dados.

Veja em profundidade o funcionamento do método openDB e seu ciclo de vida: https://www.npmjs.com/package/idb#opendb

#### Operações de armazenamento <a name="operacoes"></a>

Com o nosso banco de dados criado com sucesso, é hora de realizarmos as operações de leitura e escrita.

Uma vez que a `dbPromise` será nossa interface assíncrona com o banco, os métodos para acessar o banco precisam resolver as promises para que só então possam interagir com o banco.

Veja a seguir o exemplo da documentação:

```
import { openDB } from 'idb';

const dbPromise = openDB('MeuBancoIDB', 1, {
  upgrade(db) {
    db.createObjectStore('usuariosPagamento');
  },
});


// espere a promise do banco resolver com async/await
// resolvendo a promise, realize a operação

export async function get(key) {
  return (await dbPromise).get('usuariosPagamento', key);
}
export async function set(key, val) {
  return (await dbPromise).put('usuariosPagamento', val, key);
}
```

### Trabalhando com Índices <a name="indices-pratica"></a>

Gosto de dizer que os índices são a parte legal do IndexedDB (também o nome dele é Indexed, se os índices não fossem legais não faria sentido).

O uso dos índices pode conferir velocidade e praticidade na recuperação de dados da sua aplicação.

Com o IDB sua criação e utilização é muito simples, vamos recriar o índice `payment` do exemplo passado:

```
const dbPromise = openDB('MeuBancoIDB', 2, {
  upgrade(db) {
    const store = db.createObjectStore('usuariosPagamento', {
      // ID é a chave padrão
      keyPath: 'id',
      // ID é um valor de auto incremento
      autoIncrement: true,
    });

   //store.createIndex('nomeDoÍndice', 'propriedadeDoObjeto')
    store.createIndex('payment', 'payment');
  },
});
```

Como o método upgrade é onde definimos as alterações estruturais do banco, nele mesmo iremos declarar nosso novo índice.

Além de criar um novo índice, definimos também que a chave padrão da nossa store é um ID incremental.

```
// buscar um registro pela chave em um índice
await dbPromise.getFromIndex('usuariosPagamento', 'payment', key)

// retornar todos registros de um índice
await dbPromise.getAllFromIndex('usuariosPagamento', 'payment')

```

A biblioteca IDB dispões de métodos específicos para interagir com índices, o que facilita bastante o trabalho que teríamos usando a API padrão do IndexedDB.

### Transações <a name="transacoes-pratica"></a>

Trabalhar com transações é um diferencial para realizar diversas operações de uma só vez.

Caso haja algum tipo de intercorrência durante a transação, todas as operações são canceladas e o banco volta a seu estado anterior à transação.

```
// instância da transação
const tx = dbPromise.transaction('usuariosPagamento', 'readwrite');

// operações assíncronas a serem resolvidas
await Promise.all([
 tx.store.add({
  name: 'Anna',
  payment: 'credit'
 }),
 tx.store.add({
  name: 'Steve',
  payment: 'cash'
 }),
// a última operação é o fechamento da transação
 tx.done,
]);
```

Mais detalhes sobre a operação de transações em: https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction

## Conclusão <a name="conclusao"></a>

IndexedDB é uma ferramenta incrivelmente poderosa nos seus casos de uso adequados, entender seu funcionamento e como posso tirar o melhor dele me ajudou não só a expandir meus horizontes para aplicações frontend, como também para trazer soluções cada vez mais especializadas para projetos onde era necessário.

Assim como qualquer tecnologia, o IDB tem seus pontos fortes e fracos, dessa forma, utilize-o com sabedoria e ceticismo.

Espero que tenham gostado <3.

## Referências <a name="referencias"></a>

npmjs.com - "IDB: IndexedDB is a low-level API for client-side storage of significant amounts of structured data." [Online]. Available: https://www.npmjs.com/package/idb.

Mozilla Developer Network (MDN) - "Storage quotas and eviction criteria". [Online]. Available: https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria.

web.dev - "Storage for the web". [Online]. Available: https://web.dev/articles/storage-for-the-web.

Medium - Julien Etienne, "The power of IndexedDB and the birth of DB64: A practical alternative." [Online]. Available: https://medium.com/@julienetienne/the-power-of-indexeddb-and-the-birth-of-db64-a-practical-alternative-4a5aa2a94794.

web.dev - "IndexedDB". [Online]. Available: https://web.dev/articles/indexeddb?hl=pt-br.

Mozilla Developer Network (MDN) - "IDBTransaction". [Online]. Available: https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction.

Mozilla Developer Network (MDN) - "Using IndexedDB". [Online]. Available: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB.