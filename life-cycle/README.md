# advanced-reactjs-dio
Curso avançado de ReactJS para a Digital Innovation One

- Inicialização 
- Montagem 
- Atualização 
- Desmontagem 
 ![](../img/ciclo.PNG)



- componentWillmount será depreciado na versão 17 do react 

- toda vez que há atualização de um component, o react reinicia o ciclo 

- react é declarativo existe ou nao existe 

- component  willmount receive props e will update serão depreciados em 17 

mais usados 
- component didmount didupdate didcatch willunmount shouldcomponent update 
pouco usados 
- getderivedstatefromprops
- get snapshotbeforeupdate 

## Exemplos de ciclo de vida 

- ao inves de configurar um por um vamos usar o create-react 

- npx create-react-app nome_app

-Exercício Criar uma app passando por todos os passos do ciclo de vida do React 


## O que são Hooks e Como podem otimizar o código 

Hooks são uma nova adição ao React 16.8 que permitem que você use o state e outros recursos do react sem escrever uma classe 
## Hooks : 
Hooks esperam uma função 
- useState passa por todos os ciclos de vida da aplicação
- useEffect
- useContext
- useReduce
- useCallback
- useMemo
- useRef
- useImperativeHandle
- useLayoutEffect
- useDebugValue

Não use hook dentro de funções Js comuns, ao inves disso você pode 
- chamar hooks em componentes react 
- chamar hooks dentro de hooks customizados 
seguindo estas regras você garante que toda lógica de estado (state ) n ocomponente seja claramente visível no código fonte 

## Context API 

controlamos a utilização de um contexto global <Theme Provider>

muitas vezes nao eh necessario utilizar contexto global 

evitar usar redux em casos não global 

dessa forma (use context) também conseguimos passar informações sem utilizar props 

Design Patterns 
https://tautorn.com.br/javascript-design-patterns/






# Técnicas com components e DOM 

## Por que trabalhar com Fragments ? 

-Fragments : Um padrão comum no React é que um componente pode retornar múltiplos elementos. Os Fragmentos 
permitem agrupar uma lista de filhos sem adicionar nós extras ao DOM 

- Trabalhar sem fragments utilizando diversas divs polui o html do codigo 

 <div>
    <div>
    React A 
    </div>
    <div>
    React B 
    </div>
 </div>

MElhor utilizar fragments 

 <Fragment>
    <div>
    React A 
    </div>
    <div>
    React B 
    </div>
 </Fragment>

ou ainda usando a sintax sugar 

 <>
    <div>
    React A 
    </div>
    <div>
    React B 
    </div>
 </>

## Error Boundaries 






