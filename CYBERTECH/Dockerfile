# Use uma imagem base do Node.js (versão 18, compatível com Next.js 15)
FROM node:18-alpine AS base

# Defina o diretório de trabalho
WORKDIR /app

# Copie os arquivos de dependências
COPY package.json package-lock.json* ./

# Instale as dependências (apenas produção para reduzir tamanho)
RUN npm ci --omit=dev || npm install --omit=dev

# Copie o restante do projeto
COPY . .

# Build da aplicação
RUN npm run build

# Segunda etapa (multi-stage build) para reduzir o tamanho da imagem
FROM node:18-alpine AS runner

WORKDIR /app

# Copie apenas os arquivos necessários do build
COPY --from=base /app/.next ./.next
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/package.json ./package.json
COPY --from=base /app/public ./public

# Defina variáveis de ambiente para produção
ENV NODE_ENV=production
ENV PORT=3000

# Exponha a porta padrão do Next.js
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
