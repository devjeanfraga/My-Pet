# My-Pet
O projeto cuja  função é manipular dados do database para api , tendo com exemplo uma clínica de pets, se encontra numa fase mais avançada diante da minha evolução. 
No gif, primeirio faço o cadastro do cliente e em seguida de um pet associado a este cliente, essa mesma associação também é feita da tabela imagens para um pet.
Minha dificuldade foi fazer com que uma tabela recebesse apenas chaves estrangeiras de outras duas tabelas, no caso o sexo do pet e o próprio pet. 
Sendo assim: 

Um cliente para muitos pets | Um para Muitos 

Um pet-id para um cliente | Um para Um

Muitos pets para muitos sexos e vice versa |  Muitos para Muitos. 


![gif Layout](https://github.com/JeanFragaJS/My-Pet/blob/master/My-pet%20atualizado%2004-10-2021.gif?raw=true)


### Esse é o diagrama atual

![gif Layout](https://github.com/JeanFragaJS/My-Pet/blob/master/Diagrama.png?raw=true)

## Fase anterior do projeto
Diagrama no qual me orientei para montar o database. Confesso que encontrei desafios no caminho pois o primeiro diagrama
foi montado de modo equivocado, e como todo erro traz uma resposta logo entendi que a fase de planejar um diagrama requer
uma análise com mais atenção aos possíveis cenários que as tables eventualmente podem se relacionar. 

Este é o diagrama atualizado a baixo desse é o antigo. 


![gif Layout](https://github.com/Azkabann/My-Pet/blob/master/Diagrama%20updated.png?raw=true)  ![gif Layout](https://github.com/Azkabann/My-Pet/blob/master/Diagrama-Database.png?raw=true) 

:small_red_triangle: Um dos CRUD's realizados hoje. 


![gif Layout](https://github.com/Azkabann/My-Pet/blob/master/CRUD.gif?raw=true)


:small_red_triangle: Retornar cadastro sem mostrar dados sensíveis 


![gif Layout](https://github.com/Azkabann/My-Pet/blob/master/valida%C3%A7%C3%A3o%20de%20dados.gif?raw=true)
