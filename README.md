# My-Pet
* O projeto cuja  função é manipular dados do database para api , tendo com exemplo uma clínica de pets.
 
#### Associações
* Primeirio faço o cadastro do cliente. (Um cliente para muitos pets | Um para muitos)
* Em seguida faço o cadastro do pet associado ao cliente. (Um pet para um cliente | Um para um)
* Também crio as imagens. (Várias imagens para um pet | Muitos para um)  

Minha dificuldade foi fazer com que uma tabela recebesse apenas chaves estrangeiras de outras duas tabelas, no caso o sexo do pet e o próprio pet.

Sendo assim: 
* Um pet-id para um cliente | Um para Um

* Muitos pets para muitos sexos e vice versa |  Muitos para Muitos. 


<img src="https://github.com/JeanFragaJS/My-Pet/blob/master/imgGitHub/My-pet%20atualizado%2004-10-2021.gif?raw=true" width="797" height="450"/>


## Diagrama atual

![gif Layout](https://github.com/JeanFragaJS/My-Pet/blob/master/imgGitHub/Diagrama.png?raw=true)

## Fase anterior do projeto
Diagrama no qual me orientei para montar o database. Confesso que encontrei desafios no caminho pois o primeiro diagrama
foi montado de modo equivocado, e como todo erro traz uma resposta logo entendi que a fase de planejar um diagrama requer
uma análise com mais atenção aos possíveis cenários que as tables eventualmente podem se relacionar. 

#### Este é o diagrama atualizado 
![gif Layout](https://github.com/JeanFragaJS/My-Pet/blob/master/imgGitHub/Diagrama%20updated.png?raw=true) 

#### Primeiro Diagrama
![gif Layout](https://github.com/JeanFragaJS/My-Pet/blob/master/imgGitHub/Diagrama-Database.png?raw=true) 

 * Um dos CRUD's realizados hoje. 
![gif Layout](https://github.com/JeanFragaJS/My-Pet/blob/master/imgGitHub/CRUD.gif?raw=true)


*  Retornar cadastro sem mostrar dados sensíveis 
![gif Layout](https://github.com/Azkabann/My-Pet/blob/master/valida%C3%A7%C3%A3o%20de%20dados.gif?raw=true)
