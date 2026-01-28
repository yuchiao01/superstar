#!/bin/bash

kubectl apply -f cloudflared.yml

kubectl rollout restart deployment cloudflared -n joy-k8s
