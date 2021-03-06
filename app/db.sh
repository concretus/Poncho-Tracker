psql -U postgres << EOF
DROP DATABASE poncho_db_test;
DROP DATABASE poncho_db_dev;
EOF

# create tables in poncho test and poncho development - see knexfile.js
# cd server/db_config
# knex migrate:latest --env test
# knex migrate:latest --env development

psql -U postgres < circleci-database-setup.sql
psql -U postgres < dev-database-setup.sql
echo "creating test tables"
echo "creating dev tables"