# workbe-backend

API en [NestJS](https://nestjs.com/) con [MongoDB](https://www.mongodb.com/) (Mongoose) y arranque con Docker Compose.

## Requisitos

- Node 20+
- Docker (opcional, recomendado)

## Configuración

```bash
cp .env.example .env
# Edita .env con tus valores
npm install
```

## Desarrollo

```bash
# API + Mongo (Compose)
docker compose up --build

# Solo API en local (necesitas Mongo accesible según MONGO_URI)
npm run start:dev
```

Por defecto la app escucha en el puerto definido en `PORT` (3000). Comprueba `GET /`.

## Scripts útiles

| Comando | Descripción |
|--------|-------------|
| `npm run start:dev` | Nest en modo watch |
| `npm run build` | Compila a `dist/` |
| `npm run lint` | ESLint |
| `npm test` | Tests unitarios |
| `npm run test:e2e` | Smoke HTTP (sin Mongo) |

## Estructura

- `src/` — código de la aplicación
- `docker-compose.yml` — servicios `api` y `mongodb`
- `Dockerfile` — imagen de producción de la API
