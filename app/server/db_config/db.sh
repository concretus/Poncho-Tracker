psql -U postgres << EOF
DROP DATABASE poncho_db_test;
DROP DATABASE poncho_db_dev;

CREATE DATABASE poncho_db_test;
CREATE DATABASE poncho_db_dev;

EOF

# create tables in poncho test and poncho development - see knexfile.js
knex migrate:latest --env test
knex migrate:latest --env development
