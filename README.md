<strong>Typer 100% en español.<br>Proyecto en desarrollo.<br>NO DISPONIBLE - Working: CORRIGIENDO FALLOS</strong>

Versiones:<br>
[![Typer](https://img.shields.io/badge/Documentación-v1.0.0-blue)](https://jucrik.com/typer-app)
[![Changelog](https://img.shields.io/badge/Typer-v1.0.0-blue)]()
[![Ubuntu](https://img.shields.io/badge/Ubuntu-v20.04.4-orange)]()
[![Web](https://img.shields.io/badge/Sitio_Web-jucrik.com-blue)](https://jucrik.com/)

[![Donar](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/jucrik)
[![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white)](https://instagram.com/jucrik)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/+593983927872)
[![YouTube](https://img.shields.io/badge/YouTube-%23FF0000.svg?style=for-the-badge&logo=YouTube&logoColor=white)](https://www.youtube.com/@jucrik)

## Características

- Tener varios usuarios chateando en el mismo número de WhatsApp ✅
- Conéctese a múltiples cuentas de WhatsApp y reciba todos los mensajes en un solo lugar ✅ 🆕
- Crea y chatea con nuevos contactos sin tocar el celular ✅
- Enviar y recibir mensaje ✅
- Enviar medios (imágenes/audio/documentos) ✅
- Recibir medios (imágenes/audio/video/documentos) ✅

## Instalación en VPS (Ubuntu 20.04)

<strong>ANTES DE COMENZAR:</strong> Se necesitan dos subdominios apuntados al servidor.<br>
Backend: developer.jucrik.com<br>
Frontend: typer.jucrik.com

Lo primero es actualizar paquetes a las últimas versiones.
```bash
apt -y update && apt -y upgrade
```

Instalar MySQL y comprobar la versión.
```bash
apt -y install mysql-server
```
```bash
mysql --version
```

Verificar el estado de MySQL.
```bash
sudo systemctl status mysql
```

Acceder a MySQL.
```bash
sudo mysql -u root
```

Crear la base de datos.
```bash
CREATE DATABASE typer CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
```

Acceder a la base de datos.
```bash
USE mysql;
```

Cambiar el complemento de autenticación en MySQL.
```bash
UPDATE user SET plugin='mysql_native_password' WHERE User='root';
```

Para asegurar los cambios, ejecutar FLUSH, salir y reinicar de MySQL.
```bash
FLUSH PRIVILEGES;
```
```bash
exit;
```
```bash
service mysql restart
```

Crear un nuevo usuario y otorgarle privilegios <code>sudo</code>.
```bash
adduser deploy
```
```bash
usermod -aG sudo deploy
```

Iniciar sesión con el nuevo usuario.
```bash
su deploy
```

Instalar Node18.x y librerías.
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
```
```bash
sudo apt -y install nodejs
```
```bash
sudo apt -y install apt-transport-https ca-certificates curl software-properties-common git
```
```bash
sudo apt -y update
```

Agregar al usuario deploy a MySQL. La contraseña que solicita es del usuario deploy.
```bash
sudo usermod -aG mysql ${USER}
```
```bash
su - ${USER}
```

Clonar el repositorio de Typer.
```bash
git clone https://github.com/jucrik/typer.git typer
```

Crear el archivo .env en la carpeta ./backend.
```bash
cp typer/backend/.env.example typer/backend/.env
```

Generar y copiar claves para JWT_SECRET y JWT_REFRESH_SECRET para usarla en el paso siguiente.
```bash
openssl rand -base64 32
```

Abrir .env con el editor nano.
```bash
nano typer/backend/.env
```

Completar los campos restantes.
```bash
NODE_ENV=
BACKEND_URL=https://developer.jucrik.com
FRONTEND_URL=https://typer.jucrik.com
PORT=4000
PROXY_PORT=443
CHROME_BIN=/usr/bin/google-chrome-stable

DB_DIALECT=mysql
DB_HOST=localhost
DB_TIMEZONE=-05:00
DB_USER=root
DB_PASS=
DB_NAME=typer

USER_LIMIT=3
CONNECTIONS_LIMIT=1

JWT_SECRET=
JWT_REFRESH_SECRET=
```

Instalar las dependencias.
```bash
sudo apt-get install -y libgbm-dev wget unzip fontconfig locales gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgbm1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget libgbm-dev libx shmfence-dev
```

Instalar Google Chrome.
```bash
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
```
```bash
sudo apt -y install ./google-chrome-stable_current_amd64.deb
```

Ir a la carpeta backend e instalar dependencias, contruir y ejecutar migraciones. (En este paso se desintala Nodejs 18 para instalar Nodejs 16).
```bash
cd typer/backend
```
```bash
npm install
```
```bash
npm run build
```
```bash
sudo apt -y remove nodejs
```
```bash
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
```
```bash
sudo apt-get install -y nodejs
```
```bash
npx sequelize db:migrate
```
```bash
npx sequelize db:seed:all
```

Instalar PM2 con sudo e iniciar el backend.
```bash
sudo npm install -g pm2
```
```bash
pm2 start dist/server.js --name typer-backend
```

Hacer que PM2 se inicie automáticamente con el usuario deploy después de reiniciar.
```bash
pm2 startup ubuntu -u deploy
```

Copiar la última línea generada por el comando anterior y ejecutarlo. Será algo como esto:
```bash
sudo env PATH=$PATH:/usr/bin pm2 startup ubuntu -u deploy --hp /home/deploy
```

Ir a la carpeta frontend e instalar las dependencias.
```bash
cd ../frontend
```
```bash
npm install
```

Crear el archivo .env en la carpeta ./frontend y abrirlo con el editor nano.
```bash
cp .env.example .env
```
```bash
nano .env
```

Editar el dominio del backend, debería verse así:
```bash
REACT_APP_BACKEND_URL=https://developer.jucrik.com
REACT_APP_HOURS_CLOSE_TICKETS_AUTO=24
SERVER_PORT=3000
REACT_APP_PAGE_TITLE=Typer
```

Crear un archivo config.json basado en config.json.example.
```bash
cp src/config.json.example src/config.json
```

Abrir el archivo config.json con el editor nano y editar el dominio y el título de la página.
```bash
nano src/config.json
```

Construir el fronted.
```bash
npm run build
```

Iniciar el fronted con PM2 y guardar la lista de procesos de PM2 para que se inicie automáticamente después de reiniciar.
```bash
pm2 start server.js --name typer-frontend
```
```bash
pm2 save
```

Para verificar si se está ejecutando, ejecutar pm2 list y debería verse algo así:
```bash
pm2 list
```
```bash
┌────┬────────────────────┬──────────┬──────┬───────────┬──────────┬──────────┐
│ id │ name               │ mode     │      │ status    │ cpu      │ memory   │
├────┼────────────────────┼──────────┼──────┼───────────┼──────────┼──────────┤
│ 0  │ typer-backend      │ fork     │ 0    │ online    │ 0%       │ 83.1mb   │
│ 1  │ typer-frontend     │ fork     │ 0    │ online    │ 0%       │ 18.0mb   │
└────┴────────────────────┴──────────┴──────┴───────────┴──────────┴──────────┘
```

## Instalación de Nginx

Instalar Nginx.
```bash
sudo apt -y install nginx
```

Crear y editar el sitio del frontend con el siguiente comando y editar la URL del frontend.
```bash
sudo nano /etc/nginx/sites-available/typer-frontend
```
```bash
server {
  server_name typer.jucrik.com;
  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_cache_bypass $http_upgrade;
  }
}
```

Crear y editar el sitio del backend con el siguiente comando, editar la URL del backend.
```bash
sudo nano /etc/nginx/sites-available/typer-backend
```
```bash
server {
  server_name developer.jucrik.com;
  location / {
    proxy_pass http://127.0.0.1:4000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_cache_bypass $http_upgrade;
  }
}
```

Ir hasta la carpeta donde se crearon los archivos.
```bash
cd /etc/nginx/sites-available/
```

Verificar si los archivos fueron creados.
```bash
ls
```

Crear enlaces simbólicos a los archivo typer-frontend y typer-backend.
```bash
sudo ln -s /etc/nginx/sites-available/typer-frontend /etc/nginx/sites-enabled
```
```bash
sudo ln -s /etc/nginx/sites-available/typer-backend /etc/nginx/sites-enabled
```

Editar el archivo de configuración de nginx y modifica la carga de archivos multimedia.
```bash
sudo nano /etc/nginx/nginx.conf
```

Aumenta la carga de archivos multimedia a 20M.
```bash
# HANDLE BIGGER UPLOADS
client_max_body_size 20M;
```

Comprobar, reiniciar y verificar el estado de nginx.
```bash
sudo nginx -t
```
```bash
sudo service nginx restart
```
```bash
sudo systemctl status nginx
```

## Instalación de Certbot 

Instalar Snap y Notes.
```bash
sudo apt-get -y install snapd && sudo snap install notes
```

Instalar el paquete Certbot (SSL).
```bash
sudo snap install --classic certbot
```

Generar los certificados para el backend y el frontend.
```bash
sudo certbot --nginx
```

Los paquetes de Certbot en su sistema vienen con un trabajo cron o un temporizador systemd que renovará sus certificados automáticamente antes de que caduquen. No necesitará volver a ejecutar Certbot, a menos que cambie su configuración. Puede probar la renovación automática de sus certificados ejecutando este comando:
```bash
sudo certbot renew --dry-run
```

## Datos de acceso

Usuario: typer@jucrik.app<br>
Contraseña: admin

## Actualizar

Typer es una aplicación en constante desarrollo para mejorar el rendimiento. Para actualizarla y obtener las nuevas funciones ejecutar el comando dentro de la rama del proyecto.
```bash
cd ~
```
```bash
cd typer/
```
```bash
sh update.sh
```

## Aumentar Usuarios y Conexiones

Edita las líneas <code>USER_LIMIT</code> y <code>CONNECTIONS_LIMIT</code>. Para incrementar el número se debe considerar rendimiento del servidor donde está alojado el proyecto, de lo contrario correrá lento y con dificultades.
```bash
cd ~
```
```bash
nano typer/backend/.env
```
```bash
pm2 restart all
```
