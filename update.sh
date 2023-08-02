#!/bin/bash
echo ""

echo "${CYAN_LIGHT}"
echo " ███████ ██   ██ ███████ ██████ "
echo " ██      ██▄▄▄██ ██   ██   ██ "
echo " ██      ██▀▀▀██ ███████   ██ "
echo " ███████ ██   ██ ██   ██   ██ "
echo "${NC}"
echo " "
echo "🚀 Actualizando Typer..."
echo " "

sleep 2

git reset --hard
git fetch
git pull
git fetch origin
git branch
git checkout main
git merge origin/main

echo " "
echo "⬇️ Actualizando el backend..."
echo " "

sleep 2

cd backend

sleep 2

sudo rm -rf node_modules
sudo apt -y remove nodejs
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt -y install nodejs
npm install
npm run build
sudo apt -y remove nodejs
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs

sleep 2

npx sequelize db:migrate
npx sequelize db:seed:all

echo " "
echo "⬇️ Actualizando el frontend..."
echo " "

sleep 2

cd ../frontend

sleep 2

sudo rm -rf node_modules
npm install
rm -rf build
npm run build

echo " "
echo "⭕ Reiniciando PM2..."
echo " "

sleep 2

pm2 restart all

echo " "
echo "✅ Typer ha sido actualizado con éxito."
echo " "