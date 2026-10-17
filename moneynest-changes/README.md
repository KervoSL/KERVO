# MoneyNest — cambios pendientes de aplicar

`moneynest-security-phases-1-2-4.patch` contiene 3 commits para el repositorio de MoneyNest
(Edge Functions de Supabase, migraciones, front y tests). No forma parte de la web corporativa.

Aplicar en una copia de MoneyNest, en una rama aparte:

```
git checkout -b fix/security-phase1
git am moneynest-security-phases-1-2-4.patch
```

Orden de despliegue recomendado (primero en un entorno de pruebas): migraciones
`20261013000001` y `20261014000001`, funciones de Supabase, y por último front + `vercel.json`.
Tests en `supabase/tests/` (ver su README).
