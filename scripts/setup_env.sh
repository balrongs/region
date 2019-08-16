#!/bin/bash

npm run sequelize db:migrate
npm run sequelize db:seed:all
npm run dev
