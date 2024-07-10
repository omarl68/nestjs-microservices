#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
  DO
  \$\$
  BEGIN
     IF NOT EXISTS (SELECT FROM pg_catalog.pg_database WHERE datname = 'postgres') THEN
         CREATE DATABASE postgres;
     END IF;
  END
  \$\$;
EOSQL
