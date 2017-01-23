@echo Checking for node_modules...

call cd build-output/debug
call npm install
call grunt serve