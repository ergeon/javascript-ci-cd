

install: .install
.install: package.json
	npm install
	touch $@


coverage: install
	npm run coverage
