FROM node:16-alpine AS builder

RUN apk add --no-cache libc6-compat

WORKDIR /app

# COPY package.json yarn.lock ./
COPY package.json package-lock.json ./ 

RUN npm ci

FROM node:16-alpine
WORKDIR /app
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

COPY . .

RUN chown -R node:node .

RUN npm run build

USER node

EXPOSE 3000

CMD ["npm", "start"]

