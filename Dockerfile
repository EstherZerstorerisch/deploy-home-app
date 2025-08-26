FROM golang:1.25.0-alpine3.22 AS builder

WORKDIR /app

COPY . .

RUN go build server.go

FROM alpine:latest

WORKDIR /app

COPY --from=builder /app/server .

EXPOSE 3000

CMD ["./server"]
