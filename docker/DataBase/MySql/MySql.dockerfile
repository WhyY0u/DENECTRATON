FROM mysql:8.0


ENV MYSQL_ROOT_PASSWORD=admin
ENV MYSQL_DATABASE=dissimilate
ENV MYSQL_USER=whyy0u
ENV MYSQL_PASSWORD=1200531

COPY DataBase/MySql/init.sql /docker-entrypoint-initdb.d/
