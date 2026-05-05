# workbe-backend

API en [NestJS](https://nestjs.com/) con [PostgreSQL](https://www.postgresql.org/) y [Prisma](https://www.prisma.io/). Arranque con Docker Compose.

## Requisitos

- Node 20+
- Docker (opcional, recomendado)

## Configuración

```bash
cp .env.example .env
npm install
```

## Desarrollo

### Con Docker (API + PostgreSQL)

```bash
docker compose up --build
```

La API queda expuesta en `http://localhost:${PORT}` y el endpoint `GET /` debería responder con `Hello World!`.

### Solo API (local)

```bash
npm run start:dev
```

Asegúrate de que `DATABASE_URL` apunte a una instancia de PostgreSQL accesible desde tu máquina.

## Prisma

### Generar Prisma Client

```bash
npm run prisma:generate
```

### Migraciones (cuando agregues modelos)

```bash
npm run prisma:migrate:dev
```

Nota: como ahora mismo `prisma/schema.prisma` no incluye modelos, las migraciones todavía no tienen tablas que crear hasta que agregues tus entidades.

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

