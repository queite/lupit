### **Como rodar**:
Suba o banco usando docker compose:
```
docker compose up -d
```
Abra a pasta do backend:
```
cd backend
```
Crie o banco:
```
npx prisma migrate dev
```
Rode a API:
```
npm run star:dev
```
Retorne a raiz do projeto
```
cd ..
```
Acesse o frontend
```
cd frontend
```
Rode o frontend:
```
npm run dev
```

### **Front-end**
[http://localhost:3000](http://localhost:3000)

### **Back-end**
Endpoints:
- GET [http://localhost:3333/teams](http://localhost:3333/teams) - Listar times
- POST `http://localhost:3333/team` - Criar time
- PUT `http://localhost:3333/team/:id` - Atualizar time
- DELETE `http://localhost:3333/team/:id` - Deletar time
- GET [http://localhost:3333/players](http://localhost:3333/players) - Listar jogadores
- POST `http://localhost:3333/player` - Criar jogador
- GET `http://localhost:3333/player/:id` - Listar jogador pelo ID
- PUT `http://localhost:3333/player/:id` - Atualizar jogador
- DELETE `http://localhost:3333/player/:id` - Deletar jogador

Próximos passos:
- testes
- dockeirização do back e front
- revisão estrutura do front
- estilização