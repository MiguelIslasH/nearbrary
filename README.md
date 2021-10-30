# 📖 Nearbrary
Proyecto realizado para el NCD Bootcamp NEAR Hispano, edición de octubre 2021.

# Nearbrary es un plataforma donde puedes subir escritos y ganar dinero con ellos, sin editoriales de por medio.

# 📕 En Nearbrary, los usuarios podrán:
  - Subir libros completos de su autoría con el fin de obtener ingresos o ponerlos públicos
  - Comprar obras, ya sea un capítulo o de forma completa
  - Revisar el catálogo de obras disponibles o próximas a publicar

Cada miembro dentro de la comunidad se identifica con su NEAR account ID 

# ✎ Prerequisitos 
  1. Node.js _(Versión en la que se realizó: 16.11.1)_
  2. Yarn instalado <code>npm install --global yarn</code>  
  3. instalar dependencias <code>yarn install</code>
  4. Si es el caso, crear una cuenta de NEAR en [testnet](https://docs.near.org/docs/develop/basics/create-account#creating-a-testnet-account)
  5. Instalar NEAR CLI <code>yarn install --global near-cli</code>
  6. autorizar app para dar acceso a la cuenta de NEAR <code>near login</code>

## 🐑 Clonar el Repositorio
<code>git clone https://github.com/MiguelIslasH/nearbrary</code>

## 🥶 instalar y compilar el contrato
  - <code>yarn install</code>
  - <code>yarn build</code>

## 🚀 Deployar el contrato
  - <code>yarn dev:deploy:contract</code>

## ☃ Correr comandos
Una vez en deploy el contrato, a partir de ahora [será utilizado como CONTRACT_ID en los ejemplos de comandos]
Utilizaremos [ACCOUNT_ID para identificar el account Id] que utilizamos para autorizar la app.

### Registrar usuario
near call _CONTRACT_ID_ registerUser '{"email": "este-email-mola@eldominio.com","name": "Carlitos"}' --accountId _ACCOUNT_ID_

### Publicar una obra: ejemplo que se usa en comprar libro
near call  _CONTRACT_ID_ postBook '{"title": "La hacedora de viudas", "price": "20.20", "synopsis": "La noche es mi velo", "content": "Una vez un hombre me dijo que me pusiera ropa, así que me vestí con..."}' --accountId _ACCOUNT_ID_

### Consultar una obra
near view  _CONTRACT_ID_ getBook '{"title": "La noche"}'

### Consultar todas las obras: regresa la instacia, pues se planea usar así para futuros avances
near view  _CONTRACT_ID_ getBooks

### Comprar libro: ejemplo válido e inválido por la cantidad
near call  _CONTRACT_ID_ buyBook '{"title": "La hacedora de viudas"}' --amount 20.20 --accountId _ACCOUNT_ID_
near call  _CONTRACT_ID_ buyBook '{"title": "La hacedora de viudas"}' --amount 0 --accountId _ACCOUNT_ID_

### Consultar datos del usuario
near view _CONTRACT_ID_ getUserData '{"accountId": "_ACCOUNT_ID_"}'

# Caso de uso: Publicación y compra de obras.
Pensamos en un diseño que tuviera colores oscuros de forma predominante, la gente se desgasta menos su vista si la página cuenta con fondos oscuros, lo que el usuario haría sería:
   * Consultar las obras publicadas y próximas a publicar
   * Consultar las obras adquiridas
   * Crear una cuenta usando tu cuenta de mainet.
   * Iniciar sesión usando tu cuenta de mainet y tu contraseña.
   * Ver el el detalle de alguna obra y:
       * Comprarla completamente
       * Comprarla parcialmente: por capítulos
       * Los comentarios y reseñas sobre la obra
       * Poder comentar y hacer una reseña
   * Buscar obras por título, extensión, año y autor.
   * Subir obras de su autoría
<br />

Estos diseños se pueden encontrar y navegar por ellos aquí: https://www.canva.com/design/DAEuDoppBm4/Ds8X480YRXE-LiZmxx1VOg/view?utm_content=DAEuDoppBm4&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton

![image](https://user-images.githubusercontent.com/29590213/139554969-a6eadbb2-27b8-437c-b7bd-24c27305b292.png)
