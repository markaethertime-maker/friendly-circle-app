#!/bin/bash

# Remplace TON_API_KEY par ta clé Builder.io
API_KEY="TON_API_KEY"
MODEL="page"

mkdir -p builder/$MODEL

curl -H "Authorization: Bearer $API_KEY"  "https://builder.io/api/v1/content/$MODEL?limit=100"  -o builder/$MODEL/export.json

echo "Export terminé !"
