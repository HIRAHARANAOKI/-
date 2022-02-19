FROM golang:1.16.9-alpine

RUN apk update && apk add git

RUN mkdir /go/src/app

WORKDIR /go/src/app

ADD . /go/src/app

RUN go mod tidy && go install github.com/cosmtrek/air@v1.27.3
# RUN go install github.com/cosmtrek/air@v1.27.3

CMD ["air", "-c", ".air.toml"]
