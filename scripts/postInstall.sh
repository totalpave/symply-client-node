#!/bin/bash

if [[ -d "./sympy-client" ]]
then
    cd sympy-client
    git fetch origin
    git reset --hard origin/master
else
    git clone https://github.com/totalpave/sympy-client
    cd sympy-client
fi

activate() {
    source ./bin/activate
    pip install --user -r requirements
    # python sympy_client.py simplify "0.5*(x-0)"
}

activate
