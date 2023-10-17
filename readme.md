O sistema Church Finance, tem a finalidade única de estudo da linguagem NodeJS.

A ideia centra, é ter uma API para gerencialmento financeiro de uma paróquia e suas comunidades.

## Construindo uma imagem Docker

```bash
docker build -t church-finance .
```

## Executando um contêiner Docker

```bash
docker run --rm -p 3000:3000 church-finance
```

## Outros Comandos Úteis

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
