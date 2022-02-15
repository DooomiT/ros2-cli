.PHONY : setup-cli
setup-cli:
	npm i typescript ts-node -g
	cd cli && npm install && npm i -g

.PHONY : setup-server
setup-server:
	cd server && npm install
