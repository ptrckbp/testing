docker-compose -f ./docker-compose.json down --remove-orphans;
docker-compose -f docker-compose.json up --force-recreate --remove-orphans --build;