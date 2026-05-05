# workbe-backend

API en [NestJS](https://nestjs.com/) con [PostgreSQL](https://www.postgresql.org/) y [Prisma](https://www.prisma.io/). Arranque con Docker Compose.

## Requisitos

- Node 20+
- Docker

## Configuración

....

## Desarrollo

### Con Docker (API + PostgreSQL)
Para arrancar el proyecto se requiere descargar docker y en la terminal dentro de la carpeta del proyecto ejecutar el siguiente comando
```bash
docker compose up --build
```

La API queda expuesta en `http://localhost:3000` y el endpoint `GET /` debería responder con `Hello World!`.

## Prisma

### Generar Prisma Client

```bash
npm run prisma:generate
```

### Migraciones (cuando agregues modelos)

```bash
npm run prisma:migrate:dev
```


## Scripts útiles

- `npm run build` — compila a `dist/`
- `npm run lint` — ESLint
- `npm test` — tests unitarios
- `npm run test:e2e` — smoke HTTP
- `npm run prisma:generate` — genera Prisma Client

## Estructura

- `src/` — código de la aplicación
- `prisma/` — esquema Prisma
- `docker-compose.yml` — servicios `api` y `postgres`
- `Dockerfile` — imagen de producción de la API

