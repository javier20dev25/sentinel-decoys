# Sentinel Decoys

Laboratorio de vectores de prueba para validar las señales defensivas de Sentinel
y de cualquier escáner de seguridad estático (SAST, detección de secretos,
análisis de supply chain).

> **Aviso:** todos los secretos, tokens y firmas de este repositorio son **falsos
> e inertes**, incluidos a propósito para probar detección. No contienen
> credenciales reales ni código malicioso funcional.

## Qué contiene

| Archivo | Vector de prueba |
|---------|------------------|
| `config.js` | Credenciales con formato real pero falsas: AWS example key, token de GitHub mock y service account de GCP mock. Sirve para validar detectores de secretos y reglas de entropía. |
| `index.js` | Firma EICAR (estándar de la industria para probar antivirus, no es un virus) y un payload ofuscado que solo imprime un mensaje. Sirve para validar detección de firmas y de código ofuscado. |
| `package.json` | Scripts `preinstall`/`postinstall` que simulan comportamiento sospechoso (solo `echo` y `ping` a loopback) para validar la detección de ejecución en lifecycle scripts. |

## Uso

Apunta cualquier escáner a este repositorio y comprueba que:

- detecta patrones de credenciales (AWS, GitHub, GCP),
- reconoce la firma EICAR,
- marca ofuscación y ejecución en scripts de ciclo de vida.

```bash
git clone https://github.com/javier20dev25/sentinel-decoys.git
sentinel scan .        # o semgrep, gitleaks, trivy, etc.
```

## Advertencia

No ejecutes `npm install` esperando un entorno limpio: el `package.json` incluye
hooks de ciclo de vida simulados. Todos son locales e inofensivos, pero están
ahí para disparar detecciones.

## Licencia

ISC (ver `package.json`).
