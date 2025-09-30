# Inventory (Node.js + PostgreSQL)

Aplicación de inventario de ejemplo.  
Este proyecto demuestra cómo migrar una app Node.js de **SQLite** a **PostgreSQL** usando **Docker**.

Incluye:
- API REST para CRUD de productos (`/api/products`)
- Endpoint de estadísticas (`/api/stats`)
- Frontend simple servido desde la carpeta `public/`
- Base de datos PostgreSQL corriendo en contenedor Docker
- Creación automática de la tabla `products` y carga de datos iniciales

---

## Requisitos

- **Node.js** ≥ 18 (recomendado 20)
- **npm** (incluido con Node)
- **Git**
- **Docker Desktop** (o Docker Engine en Linux)

> La aplicación escucha en **puerto 80** (configurado en `server.js`).

---

## Instalación y ejecución

1. **Clonar el repositorio**

```bash
git clone https://github.com/josecastineiras/inventory.git
cd inventory
npm install


## Docker

docker run --name inventory-postgres -d ^
  -e POSTGRES_USER=inventory ^
  -e POSTGRES_PASSWORD=inventory ^
  -e POSTGRES_DB=inventory ^
  -p 5432:5432 ^
  postgres:16
