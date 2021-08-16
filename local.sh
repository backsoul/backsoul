echo "- Se construirá la imagén -" &&
docker-compose build &&
echo "- imagén construida, se esta deteniendo el contenedor -" &&
docker-compose down --remove-orphans &&
echo "- Lanzado el contenedor -" &&
docker-compose up -d &&
echo "- El contenedor esta corriendo es segundo plano -" &&
echo "la web esta en: http://localhost:5000/"