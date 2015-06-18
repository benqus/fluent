#!/usr/bin/env bash

# compile all into lib dir
babel src --out-dir lib --sourceMaps=inline --modules=ignore
# compile all compile din lib into main.js
babel lib --out-file tmp/main.js --sourceMaps=inline --modules=ignore

# compile all in src in main.js
# babel src --out-file tmp/main.js --sourceMaps=inline --modules=ignore
