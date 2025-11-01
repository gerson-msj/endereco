# Anotações React
---

# Levantamento inicial

``` shell
yarn create vite
yarn add react-router-dom
yarn add @reduxjs/toolkit
yarn add react-redux
yarn add redux-saga
yarn add json-server --dev
```

# Rotas
As rotas foram criadas em *routes/index.tsx*, onde o conteúdo das rotas fica em *App.tsx* (*AppRoutes*) e o arquivo *main.tsx* passa a ter a tag *BrowserRouter* envolvendo a tag *App*.

As páginas são criadas na estrutura *src/pages* e para obter parâmetros das rotas é utilizado:
``` tsx
// src/routes/index.tsx
export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edit/:id" element={<Edit />} />
        </Routes>
    );
}

// Para obter o parâmetro:
const { id } = useParams();

// src/App.tsx, adicionar a apresentação das rotas.
<AppRoutes />

// src/main.tsx, envolver App com BrowserRouter
<BrowserRouter>
    <App />
</BrowserRouter>
```


# JSon-Server
Para iniciar o JSon Server
```
npx json-server db.json --port 3000
```

# Saga Middleware
Para configurar middleware Saga ao projeto, veja https://redux-saga.js.org/docs/introduction/GettingStarted

Em resumo, o middleware saga é configurado junto a store.


