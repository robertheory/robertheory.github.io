---
layout: post
title: SOLID no Frontend
date: 2023-09-23 16:40:16
description: Como usar os princípios SOLID no frontend para criar aplicações escaláveis e de fácil manutenção.
tags: solid frontend reactjs typescript javascript
categories: frontend
---

Começar um novo projeto é o caminho fácil, o desafio vem em manter este projeto saudável ao longo do tempo.

Aqui trarei exemplos de conceito e código, demonstrando como aplicar os tão famosos princípios SOLID no frontend para uma aplicação sustentável e resistente ao tempo.

## Table Of Contents
* [O Problema do ReactJS...](#chapter-1)
* [Resolvendo alguns problemas](#chapter-2)
* [Aplicando SOLID no ReactJS](#chapter-3)
  * [Single Responsability Principle](#chapter-3.1)
  * [Open-Closed Principle](#chapter-3.2)
  * [Liskov Substituition Principle](#chapter-3.3)
  * [Interface Segregation Principle](#chapter-3.4)
  * [Dependency Inversion Principle](#chapter-3.5)

## O Problema do ReactJS... <a name="chapter-1"></a>

![React projects begin easy and angular begin hard, after 1 year the situation shifts](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/04b5clsdy52u1wugqf5h.png)

Na verdade o que vou falar aqui não em si um problema, mas uma característica que pode ser problemática:

### Flexibilidade

A flexibilidade do React é algo notável, uma vez que essa biblioteca permite realizar escolhas para cada peça do quebra-cabeça que é o nosso frontend.

Essa flexibilidade é um ponto chave para o React, ela te permite realizar os mais diversos casos de uso e usar a sua criatividade de forma abundante no código.

No entanto isso não é apenas um ponto positivo...

Frequentemente aplicações ReactJS chegam em um ponto onde a manutenção é dificultosa, repetindo-se muito código e tendo bastante retrabalho, e se você ainda não viu isso ocorrendo, temos 3 possibilidades para considerar:
- Seu projeto é muito novo;
- Seu projeto é pequeno;
- Existe alguém cuidando da arquitetura e design de código do seu frontend.

Quando falamos de design de código e arquitetura de software estamos indo muito além de estrutura de pastas.

No frontend, mais especificamente no ReactJS, esses conceitos têm um lugar especial, uma vez que essa biblioteca não oferece uma estrutura opinada pensada para escalar e ser de fácil manutenção, ela deixa tudo para você decidir, o que para muitas pessoas não é realmente recomendado.

## Resolvendo alguns problemas <a name="chapter-2"></a>

A componentização é uma mão na roda na hora de programar interfaces, mas criar componentes cegamente não ajuda em nada.

Uma coisa que você já deve ter percebido é que a forma como seus componentes se relacionam está diretamente ligada a qualidade do seu frontend.

Algumas más práticas que existem:
- Prop Drilling

Quando um componente pai passa um estado para o filho, que passa para seu filho, que passa para seu filho, que passa para seu filho, etc.

- Context APIs desnecessárias

Já criou um contexto e depois percebeu que está sendo sub utilizado, ou que não faz sentido usar na aplicação inteira?
A melhor forma aqui é ver aplicações maiores e sua utilização de seus próprios contextos, pode ser esclarecedor.

- Pacotes desnecessários

Calma ai, quer dizer que você precisa baixar um pacote para validar um CPF que poderia utilizar uma RegExp?
Tem alguma vantagem em usar o Axios ao invés da Fetch API?
Pergunte-se, entenda o uso de cada coisa e saiba suas alternativas.

- Hooks usados de forma errada ou sub utilizados

Por vezes um hook mal implementado pode fazer com que algumas requisições seja feitas a mais ou que algum regra da sua aplicação não seja devidamente validada, obviamente podemos chegar a problemas de segurança e de desempenho aqui.

Requisitos para mandar bem no design de código no ReactJS:
1. Dominar a base: JavaScript ou TypeScript;
2. React Hooks;
3. Context API;
4. Conheça o terreno: saiba as opções de pacotes que tem para fazer cada função.

### 1. Dominar a base
Essa não é difícil de explicar: seja JS ou TS, se você não estiver seguro do que está fazendo e se não tiver algum conhecimento prévio de estruturas de dados e do funcionamento dessas tecnologias isso torna-se um fator limitante muito grande.
Conforme você verá aqui, alguns conceitos são mais abstratos que outros, e certas abstrações ficam mais simples de se entender depois de um certo tempo batendo a cabeça no código ou sentindo a necessidade natural de resolver um problema no código.

### 2. React Hooks
Sim, todo dia lança um React Hook novo e você vai ter mesmo que ficar se atualizando nisso???
Infelizemente você está na área de tecnologia, se atulizar é algo intrínseco da sua carreira.
Mas olhe por esse lado:
Os Hooks são seus aliados, eles resolvem problemas muito importantes do ciclo de vida do React, se existe um novo Hook  provavelmente ele vai resolver um problema interessante e pode te ajudar em algo, então pelo menos saiba o que eles fazem, isso já é de grande ajuda.

### 3. Context API
A amada Context API é uma ferramenta sensacional que temos no ReactJS para criar nossos próprios contextos e disponibilizá-los por toda aplicação ou onde acharmos necessário.
Qual a importância dela?
Criando nossos próprios contextos podemos atingir várias metas:
- Diminuir repetição de código;
- Concentrar o controle de uma funcionlidade em um só lugar;
- Criar abstrações de alto nível;
- Gerenciar melhor o ciclo de vida da aplicação.

### 4. Conheça o terreno

Conhecer onde está pisando te dá maior segurança para seguir em frente.
Entender melhor do ecossistema do ReactJS e do JavaScript é essencial para que você encontre as peças certas para seu quebra-cabeça.
Como temos muitas opções, é muito importante que você pelo menos esteja ciente dos prós e contras das principais para tomar decisões conscientes..
Algumas das decições que temos:
- CSS: CSS, CSS Modules, SASS, Styled-Components, TailwindCSS;
- Gerenciamento de estado: Redux, Recoil, nenhuma hahaha
- Router: React Router Dom, Appwrite
- Testes: Jest, Cypress, Playwright, Selenium
- Formulários: React Hook Form, Formik, Redux-form
- HTTP requests: Fetch API, Axios

Nossa, são muitas opções mesmo!
Não listei todas, apenas algumas mais conhecidas, mas deu para entender que, pela variedade, temos muitas coisas no nosso cinto de utilidades.

## SOLID no ReactJS <a name="chapter-3"></a>

Agora chegou a hora, chega de enrolação, vamos falar de como aplicar os princípios SOLID para deixar seu frontend mais sênior!

Os conceitos SOLID estão diretamente ligados à `Programação Orientada a Objetos`, logo é interessante que você seja familiar com esses conceitos para tirar melhor proveito deste conteúdo.

Todos os exemplos de código são parte do repositório que criei para este artigo: https://github.com/robertheory/solid-react-js

Os exemplos são inspirados em situações reais e também nas referências ao final do artigo.

### S — Single Responsibility <a name="chapter-3.1"></a>
Seus componentes deve ter responsabilidades bem definidas e isoladas.

Se o seu componente faz muita coisa, pode ser uma boa oportunidade de componentizar.

![Single Responsibility](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vzsl0tkevnb5yluiadcc.png)
*All illustrations in this article are by [Ugonna Thelma](https://medium.com/@ugonnat)

Exemplo:
Neste exemplo, apresento um componente consulta em API e ordenação de resultados que concetra toda a lógica da funcionalidade em si próprio:

```
const SearchAndSort = () => {
  const [sorting, setSorting] = useState<'asc' | 'desc'>('asc');

  const [search, setSearch] = useState<string>('');

  const [data, setData] = useState<any[]>([]);

  const [loading, setLoading] = useState<boolean>(false);

  const [error, setError] = useState<string>('');

  const handleSort = () => {
    setSorting(sorting === 'asc' ? 'desc' : 'asc');
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos?title=${search}`
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      setData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        {error}

        <button onClick={() => setError('')}>Retry</button>
      </div>
    );
  }

  return (
    <div>
      <div>
        <input
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch} disabled={loading}>
          Search
        </button>
      </div>
      <div>
        <button onClick={handleSort}>Sort</button>
      </div>
      <div>
        {data.map((item, index) => (
          <div key={index}>{item.title}</div>
        ))}
      </div>
    </div>
  );
};
```

Ele é candidato a ser dividido em várias partes, podemos citar:
- Acesso à API e retorno de dados;
- Interação com a busca e feedback visual;
- Apresentação do resultado;
- Ordenação do resultado.

Cada um destes itens é passível de se tornar um novo componente, onde podemos isolar completamente a sua lógica dentro de si para que os datalhes de implementação sejam abstraídos.

O caso de `Acesso à API e retorno de dados` é até mais interessante pois ele nem mesmo tem a ncessidade de ser um componente, pode ser uma função separada que recebe o input de busca e retorna os resultados, dessa forma, o componente que utilizar essa função, nem mesmo precisa saber como que os dados estão sendo buscados, criando uma abstração maior ainda e um menor acoplamento a métodos de busca de dados (RestAPI, GraphQL, FileSystem, etc).

Segue o exemplo após a refatoração:

```
const seachToDos = async (search: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos?title=${search}`
  );

  const data = (await response.json()) as Todo[];

  if (!response.ok) {
    throw new Error('Something went wrong');
  }

  return data;
};

const SearchComponent = ({
  onSearch,
}: {
  onSearch: (todos: Todo[]) => void;
}) => {
  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleSearch = async () => {
    try {
      setLoading(true);

      const data = await seachToDos(search);

      onSearch(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        {error}

        <button onClick={() => setError('')}>Retry</button>
      </div>
    );
  }

  return (
    <div>
      <input
        type='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch} disabled={loading}>
        Search
      </button>
    </div>
  );
};

const ListTodoComponent = ({ todos }: { todos: Todo[] }) => (
  <div>
    {todos.map((item, index) => (
      <div key={index}>
        <h1>{item.title}</h1>
        <p>{item.completed ? 'Completed' : 'Not completed'}</p>
      </div>
    ))}
  </div>
);

const SearchAndSort = () => {
  const [sorting, setSorting] = useState<'asc' | 'desc'>('asc');

  const [data, setData] = useState<Todo[]>([]);

  const handleSort = () => {
    setSorting(sorting === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div>
      <SearchComponent onSearch={setData} />

      <button onClick={handleSort}>Sort</button>

      <ListTodoComponent todos={data} />
    </div>
  );
};
```

### O — Open-Closed <a name="chapter-3.2"></a>

Componentes devem ser abertos para extensão e fechados para modificação.

![Open-Closed](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1e287wroeusvowam63ah.png)

Neste exemplo, trago um simples botão com ícone que deve variar entre os tipos `add` e `remove`.

A depender do tipo do botão, o ícone e a cor devem mudar, contudo essa implementação se torna bem problemática ao passo de que você precisa adicionar mais variantes para este botão.

```
type ButtonProps = {
  type: 'add' | 'remove';
  text: string;
};


const ButtonWithIcon = ({ type, text }: ButtonProps) => {
  const buttonStyles = {
    backgroundColor: type === 'add' ? 'green' : 'red',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <>
      <button style={buttonStyles}>{text}</button>
      {type === 'add' && <i className='material-icons'>add</i>}
      {type === 'remove' && <i className='material-icons'>remove</i>}
    </>
  );
};

```

Em um cenário onde há a necessidade de se criar mais variantes para este mesmo botão, acabaria ficando inviável e extremamente verboso adicionar cada vez mais condicionais dentro dele.

A solução é simples: vamos tornar o componente extensível!

Tornar o componente extensível significa que os detalhes sobre a variante do botão ficarão totalmente a encargo de quem o implementar, vejamos melhor no exemplo a seguir:

```
type ButtonProps = {
  text: string;
  icon: string;
  color: string;
};

const ButtonWithIconExtended = ({ color, icon, text }: ButtonProps) => {
  const buttonStyles = {
    backgroundColor: color,
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <>
      <button style={buttonStyles}>{text}</button>
      <i className='material-icons'>{icon}</i>
    </>
  );
};

export const App = () => {
  return (
    <div>
      <ButtonWithIconExtended color='green' icon='add' text='Add' />
      <ButtonWithIconExtended color='red' icon='delete' text='Delete' />
      <ButtonWithIconExtended color='blue' icon='edit' text='Edit' />
    </div>
  );
};
```

Após refatorar o código do botão, teremos um componente que será não só menor e mais legível, como também permitirá maior flexibilidade na sua implementação.

### L — Liskov Substitution <a name="chapter-3.3"></a>

Essa explicação pode ser um pouco confusa, mas já te explico como que funciona.

`Se um componente do tipo S é uma representação do componente T, então componentes do tipo T devem poder ser substituidos pelo componente S sem alterar o funcionamento desejado da aplicação.`

![Liskov Substitution](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/59llpurlycdli96e909k.png)

Basicamente, se você está criando a sua própria versão de um elemento, por exemplo, um `input` então o seu novo componente deve ser capaz de substituir um input comum e continuar funcionando.

Vamos ver na prática com este exemplo `errado` antes de refatorar:

```
type PrettyInputProps = {
  isLarge: boolean;
};

const PrettyInput = ({ isLarge }: PrettyInputProps) => (
  <div
    style={{
      backgroundColor: 'white',
      border: '1px solid #ccc',
      borderRadius: '5px',
      padding: '10px',
      width: isLarge ? '300px' : '100px',
    }}
  >
    <input type='text' style={{ width: '100%' }} />
  </div>
);
```

Este componente JAMAIS poderia substituir verdadeiramente um input, pois se você tentar fazer isso daqui:
`<PrettyInput type="button" onChange={someFunction}/>`

Isso nunca funcionaria pois seu componente desconhece tais propriedades que são intrísecas ao `HTMLInput` comum.

Para resolver isto é bem simples, basta extender seu componente para herdar as propriedades de um `HTMLInput` e repassar essas `props` para o devido input:

```
interface PrettyInputProps extends React.HTMLAttributes<HTMLInputElement> {
  isLarge: boolean;
}

const PrettyInput = ({ isLarge, ...rest }: PrettyInputProps) => (
  <div
    style={{
      backgroundColor: 'white',
      border: '1px solid #ccc',
      borderRadius: '5px',
      padding: '10px',
      width: isLarge ? '300px' : '100px',
    }}
  >
    <input type='text' style={{ width: '100%' }} {...rest} />
  </div>
);

export const App = () => (
  <div>
    <PrettyInput isLarge={true} placeholder='Type something...' />
    <PrettyInput isLarge={false} onChange={console.log} />
    <PrettyInput isLarge={false} onLoad={console.log} />
  </div>
);

```

### I — Interface Segregation <a name="chapter-3.4"></a>

Componentes não deveriam depender de `props` que eles não utilizam

![Interface Segregation](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/p11bo1hoxqgsv7ssbk2l.png)

Veja o seguinte exemplo:

```
type SimpleCardProps = {
  user: {
    fullName: string;
    firstName: string;
    lastName: string;
    state: string;
    country: string;
    cellphone: string;
    email: string;
    avatar: string;
    description: string;
  };
};

const Avatar = ({ user }: SimpleCardProps) => (
  <div
    style={{
      backgroundColor: 'white',
      border: '1px solid #ccc',
      borderRadius: '50%',
      padding: '10px',
      width: '100px',
    }}
  >
    <img src={user.avatar} alt='description' />
  </div>
);

const SimpleCard = ({ user }: SimpleCardProps) => {
  return (
    <div>
      <h2>{user.fullName}</h2>
      <Avatar user={user} />
      <p>{user.description}</p>
    </div>
  );
};
```

Este exemplo é mais ingênuo, contudo esta necessidade se torna mais evidente em componentes maiores e que se utilizam de muitos dados.

Basicamente, o componente de Avatar não tem nenhuma necessidade de entender outros detalhes do usuário, desde que ele utiliza apenas a URL da imagem, ele nem mesmo deveria conhecer o tipo do usuário.

Segue o exemplo refatorado:

```
type SimpleCardProps = {
  user: {
    fullName: string;
    firstName: string;
    lastName: string;
    state: string;
    country: string;
    cellphone: string;
    email: string;
    avatarUrl: string;
    description: string;
  };
};

const Avatar = ({ avatarUrl }: { avatarUrl: string }) => (
  <div
    style={{
      backgroundColor: 'white',
      border: '1px solid #ccc',
      borderRadius: '50%',
      padding: '10px',
      width: '100px',
    }}
  >
    <img src={avatarUrl} alt='description' />
  </div>
);

const SimpleCard = ({ user }: SimpleCardProps) => {
  return (
    <div>
      <h2>{user.fullName}</h2>
      <Avatar avatarUrl={user.avatarUrl} />
      <p>{user.description}</p>
    </div>
  );
};
```

Após uma simples refatoração, podemos ver que o componente de Avatar agora não depende do tipo do usuário, apenas necessita de receber uma URL, podendo ser utilizado em outros contextos, diminuindo o acomplamento com o Card de usuário.

### D — Dependency Inversion <a name="chapter-3.5"></a>

Componetes genéricos devem depender de abstrações e não de implementações.

Os detalhes de implementação devem ser de responsabilidade do componente pai.

![Dependency Inversion](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lmi29yz4k5tkhbnk7a0u.png)

Para este exemplo vamos começar com um componente de formulário simples:

```
const SimpleSimpleForm = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: username, password }),
    })
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        if (res.error) {
          setError(res.error);
          return;
        }
        console.log(res);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        {error}
        <button onClick={() => setError('')}>Reset</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          id='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type='submit'>Login</button>
    </form>
  );
};
```

Num cenário onde temos que reutilizar este componente em diversos locais da aplicação, mas a depender do local, a função de submit vai precisar ser alterada.

O objetivo agora é tornar esse componente se tornar mais genérico, fazendo com que o componente pai seja responsável por lidar com a requisição e seu retorno.

Agora veja o componente após a refatoração:

```
type SimpleSimpleFormProps = {
  onSubmit: (username: string, password: string) => void;
};

const SimpleSimpleForm = ({ onSubmit }: SimpleSimpleFormProps) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          id='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type='submit'>Login</button>
    </form>
  );
};

export const App = () => {
  const [user, setUser] = React.useState<null | unknown>(null);

  const handleLoginWithRestAPI = async (username: string, password: string) => {
// details
  };

  const handleLoginWithGraphQL = async (username: string, password: string) => {
// details
  };

  return (
    <>
      <h1>Login With Provider 1</h1>
      <SimpleSimpleForm onSubmit={handleLoginWithRestAPI} />

      <h1>Login With Provider 2</h1>
      <SimpleSimpleForm onSubmit={handleLoginWithGraphQL} />

      <h1>User</h1>
      <pre>{JSON.stringify(user, null, 4)}</pre>
    </>
  );
};

```

Após essa refatoração é notavel como podemos delegar para o componente pai os detalhes de implementação sobre como o método de login é realizado.

## Bônus: OCP + DIP

O verdadeiro potencial dos princípios SOLID mora não só na sua adoção e compreensão, mas também na capacidade de interligar um princípio com outro quando temos a oportunidade.

Neste exemplo bônus eu vou juntar 2 deles: Open-Close Principle com Dependency Inversion Principle.

O objetivo é:
- Tornar o componente de formulário extensível para que seus campos sejam customizáveis;
- Tornar este componente genérico para que seu componente pai lide com os detalhes de implementação do submit.

Como resultado, teremos o seguinte código:

```
type SimpleSimpleFormProps = {
  onSubmit: (event) => void;
  children: React.ReactNode;
};

const SimpleSimpleForm = ({ onSubmit, children }: SimpleSimpleFormProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(event);
  };

  return (
    <form onSubmit={handleSubmit}>
      {children}

      <button type='submit'>Login</button>
    </form>
  );
};

export const App = () => {
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    const username = event.currentTarget.username.value;
    const password = event.currentTarget.password.value;


    // details
  };

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    const username = event.currentTarget.username.value;
    const password = event.currentTarget.password.value;
    const passwordConfirmation = event.currentTarget.passwordConfirmation.value;
    const email = event.currentTarget.email.value;

    // details
  };

  return (
    <>
      <h1>Login With Provider 1</h1>
      <SimpleSimpleForm onSubmit={handleLogin}>
        <input type='text' placeholder='Username' name='username' />
        <input type='password' placeholder='Password' name='password' />
      </SimpleSimpleForm>

      <h1>Register Form</h1>
      <SimpleSimpleForm onSubmit={handleRegister}>
        <input type='text' placeholder='Username' name='username' />
        <input type='password' placeholder='Password' name='password' />
        <input
          type='passwordConfirmation'
          placeholder='Confirm Password'
          name='confirm'
        />
        <input type='text' placeholder='Email' name='email' />
      </SimpleSimpleForm>
    </>
  );
};
```

Note que o ponto onde parei ainda está longe do ideal:
- O componente pai recebe seus campos a partir do evento de submit e não temos compo inferir tipos nisso _ainda_;
- Não temos tratamento de erros;

Apesar da implementação estar longe de ser ideal e poder evoluir bastante ainda, o principal é cultivar a ideia de fundir 2 princípios SOLID para tornar o componente o mais genérico e extensível possível.

## Conclusão 

Design de software pode ser algo bem abstrato e complexo de entender a princípio, mas é que naturalmente iremos enxergar a necessidade de utilizar.

Tenho certeza que esses princípios são de grande utilidade no desenvolvimento Frontend, especialmente nas aplicações ReactJS onde nós somos responsáveis por todas as decisões na aplicação, desde de pacotes e funcionamento, até arquitetura e estrutura de pastas que não são a mesma coisa 😂.

## Referências
Titulo:  The S.O.L.I.D Principles in Pictures
Autor: Ugonna Thelma
May 18, 2020
https://medium.com/backticks-tildes/the-s-o-l-i-d-principles-in-pictures-b34ce2f1e898

Titulo: 10 Best Practices for Writing Clean React Code
Autor: Dhawal Pandya
https://www.turing.com/kb/writing-clean-react-code

Titulo: 7 React Clean Code Tips You Should Know
Autor: Juntao Qiu
https://itnext.io/7-react-clean-code-tips-you-should-know-846b8108fc46

Titulo: How to Write Cleaner React Code
Autor: Reed Barger
https://www.freecodecamp.org/news/how-to-write-cleaner-react-code/

Titulo: 10 Must-Know Patterns for Writing Clean Code with React and TypeScript✨🛀
Autor: Alex Omeyer
https://dev.to/alexomeyer/10-must-know-patterns-for-writing-clean-code-with-react-and-typescript-1m0g

Titulo: Four Tips for Writing Clean React Code
Autor: Julien Delange
https://www.codiga.io/blog/clean-react-code/

Titulo: This is the Only Right Way to Write React clean-code - SOLID
Autor: Islem Maboud
https://www.youtube.com/watch?v=MSq_DCRxOxw