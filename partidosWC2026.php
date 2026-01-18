<?php
// api_competiciones.php

header("Content-Type: application/json");

// TU API KEY (NO va en JS)
$API_KEY = "ccbdcb265ba0436fac94f04dc5513585";

// Endpoint de la API externa
$url = "http://api.football-data.org/v4/competitions/2000/matches";

// Inicializar cURL
$ch = curl_init($url);

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "X-Auth-Token: $API_KEY"
]);

$response = curl_exec($ch);

// Manejo de error
if ($response === false) {
    http_response_code(500);
    echo json_encode([
        "error" => "Error al consumir la API",
        "detalle" => curl_error($ch)
    ]);
    curl_close($ch);
    exit;
}

curl_close($ch);

// Decodificar JSON
$data = json_decode($response, true);

// Devolver datos al frontend
echo json_encode($data);