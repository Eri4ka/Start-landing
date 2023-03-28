## Демо

https://eri4ka.github.io/Start-landing/

---

## Запуск и сборка проекта

На проекте используется Docker. Если на рабочей машине установлен Make, то для удобства можно выполять команды с помощью make.

Запуллить docker образ из dockerhub

```
docker pull eri4ka/start-landing
```

Локальное создание docker образа

```
make build
```

Запуск docker контейнера

```
make run
```

Остановка docker контейнера

```
make stop
```

Все docker команды представлены в файле Makefile репозитория.
