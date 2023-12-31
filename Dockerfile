# Use uma imagem base oficial do Node.js 18.
FROM node:18

# Crie e defina o diretório de trabalho no contêiner.
WORKDIR /usr/app/

# Copie o arquivo package.json e package-lock.json (se existir) para o contêiner.
COPY package*.json ./

# Execute npm install para instalar as dependências do aplicativo.
RUN npm install

# Copie todo o código do aplicativo para o contêiner.
COPY . .

# Exponha a porta em que o aplicativo será executado.
EXPOSE 3000

ENV PORT=3000
ENV MONGODB_DATABASE=nodejschurchfinance.xo6an7u.mongodb.net/?retryWrites=true&w=majorityd
ENV MONGODB_USERNAME=lgerardlucas
ENV MONGODB_PASSWORD=JdzStE3fL27ZfT4t

# Defina o comando para iniciar o aplicativo quando o contêiner for iniciado.
CMD [ "node", "app.js" ]
