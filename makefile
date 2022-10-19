
HEROKU_APP = kou-kou-web

JS_LINT = eslint
JS_LINT_FLAGS =
JS_FILES = $(shell find src -type f \( -name \*.js -o -name \*.jsx \))

BUILD_VARIANT ?= 'staging'
INDEX_OUT_DIR ?= 'build/'
BUILD_OUT_DIR ?= 'build/'

FORCE:

lint: $(patsubst %.js,%.jslint,$(JS_FILES))

%.jslint:
	$(JS_LINT) $(JS_LINT_FLAGS) $*.js

dev_env: FORCE
	npm install

tests: FORCE
	npm run test -- --watchAll=false

build: dev_env
	npm run build:$(BUILD_VARIANT)
	mv build/index.html $(INDEX_OUT_DIR)
	mv build/* $(BUILD_OUT_DIR)
