REM Create build-output/debug for all the projects

cd charts/app
call npm run build:dev
cd ../..

cd form-external-paging/app
call npm run build:dev
cd ../..

cd form-with-crud/app
call npm run build:dev
cd ../..

cd grid-external-filtering/app
call npm run build:dev
cd ../..

cd grid-foreignkey/app
call npm run build:dev
cd ../..

cd grid-image/app
call npm run build:dev
cd ../..

cd GridWithFormJFP/app
call npm run build:dev
cd ../..

cd list-view-crud-with-validation/app
call npm run build:dev
cd ../..

cd ListView_FormWithCRUD/app
call npm run build:dev
