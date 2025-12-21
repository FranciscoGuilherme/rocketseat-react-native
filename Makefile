.PHONY: emulate

emulate:
	npx expo start --android

# -------------------------------
# -----[Qualidade de código]-----
# -------------------------------

lint:
	npm run lint

lint/fix:
	npm run lint:fix
