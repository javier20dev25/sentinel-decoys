// ----------------------------------------------------------------------
// TEST DE DETECCIÓN: AVANZADO (Firmas Antivirus e Intentos de Ofuscación Falsa)
// ----------------------------------------------------------------------

// 1. EICAR Test String
// Esta es la firma estándar mundial para probar motores antivirus. 
// NO ES UN VIRUS. Es un archivo de texto seguro, pero CUALQUIER motor 
// de análisis (desde Windows Defender hasta snyk) debe saltar al verlo.
const EICAR_TEST_SIGNATURE = "X5O!P%@AP[4\\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*";

// 2. Ejecución Ofuscada (Fake Payload)
// Un motor AST o de análisis dinámico debería ver esto y marcarlo
// como "Ejecución de código ofuscado sospechoso".
const _0x5a31 = ["\x63\x6f\x6e\x73\x6f\x6c\x65", "\x6c\x6f\x67", "\x5b\x53\x45\x4e\x54\x49\x4e\x45\x4c\x20\x54\x45\x53\x54\x5d\x20\x50\x61\x79\x6c\x6f\x61\x64\x20\x4f\x66\x75\x73\x63\x61\x64\x6f\x20\x45\x6a\x65\x63\x75\x74\x61\x64\x6f"];
global[_0x5a31[0]][_0x5a31[1]](_0x5a31[2]);

console.log("Iniciando validación avanzada...");
