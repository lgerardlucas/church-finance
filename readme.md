# Trabalhando com Docker

O Docker é uma plataforma de contêinerização que permite empacotar e distribuir aplicativos em contêineres leves e portáteis. Neste guia, veremos como criar e executar contêineres usando o Docker.

## Construindo uma imagem Docker

Para criar uma imagem Docker a partir de um arquivo de configuração chamado Dockerfile, utilizamos o comando `docker build`. Aqui está um exemplo:

```bash
docker build -t church-finance .
```

- `docker build`: Este comando é usado para construir uma imagem Docker.
- `-t church-finance`: A opção `-t` define um nome e uma tag para a imagem que está sendo criada. Neste caso, o nome da imagem é "church-finance".
- `.`: O ponto no final indica que o Docker deve procurar o arquivo Dockerfile no diretório atual como base para a construção da imagem.

## Executando um contêiner Docker

Após criar uma imagem, você pode executar um contêiner com base nessa imagem usando o comando `docker run`. Vamos ver como fazer isso:

```bash
docker run --rm -p 3000:3000 church-finance
```

- `docker run`: Este comando é usado para criar e executar um contêiner Docker.
- `--rm`: A opção `--rm` remove automaticamente o contêiner após sua execução ser encerrada, evitando acúmulo de contêineres inativos.
- `-p 3000:3000`: A opção `-p` permite mapear portas entre o host e o contêiner. Neste caso, a porta 3000 do host é mapeada para a porta 3000 do contêiner, permitindo o acesso ao aplicativo dentro do contêiner através da porta 3000 do seu computador.
- `church-finance`: Este é o nome da imagem Docker usada para criar o contêiner.

## Outros Comandos Úteis

Além desses comandos básicos, aqui estão alguns outros comandos Docker úteis:

- **Listar contêineres em execução:**

  ```bash
  docker ps

  ou

  docker ps -q # para listar somente os ID das images
  ```

- **Listar todas as imagens Docker disponíveis localmente:**

  ```bash
  docker images
  ```

- **Parar a execução de um contêiner em execução:**

  ```bash
  docker stop $(docker ps -q)
  ```

- **Remover uma imagem Docker local:**
  ```bash
  docker rmi <image_name>
  ```

Lembre-se de que o Docker oferece uma ampla variedade de recursos e opções avançadas para gerenciar contêineres. Certifique-se de consultar a documentação oficial do Docker para explorar ainda mais as possibilidades dessa poderosa ferramenta.
