.PHONY: emulate

%:
	@:

# ---------------------------------
# -----[Execução da aplicação]-----
# ---------------------------------

emulate:
	npx expo start --android

# -------------------------------
# -----[Qualidade de código]-----
# -------------------------------

lint:
	npm run lint

lint/fix:
	npm run lint:fix

# ----------------------------------
# -----[Suporte a comandos GIT]-----
# ----------------------------------

log:
	git log --graph -n $(filter-out $@,$(MAKECMDGOALS))
