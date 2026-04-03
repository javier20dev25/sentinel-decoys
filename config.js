module.exports = {
    // ----------------------------------------------------------------------
    // TEST DE DETECCIÓN: BÁSICO (Exposición de Secretos)
    // Este archivo contiene credenciales FALSAS diseñadas específicamente para 
    // probar si los escáneres estáticos (como el pre-push de Sentinel) logran
    // interceptar cadenas con estructura de secretos críticos.
    // ----------------------------------------------------------------------
    
    // AWS Test Key (Esta llave es famosa, usada por analistas de seguridad para pruebas)
    aws_access_key: "AKIAIOSFODNN7EXAMPLE",
    aws_secret: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",

    // Mock Github Token
    github_token: "ghp_1234567890abcdefghijklmnopqrstuvwxyz",

    // Google Cloud Service Account (Mock)
    gcp_client_email: "test-service-account@fake-project-123.iam.gserviceaccount.com"
};
