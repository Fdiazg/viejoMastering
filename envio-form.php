<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  // Obtener los datos del formulario
  $name = $_POST['name'];
  $email = $_POST['email'];
  $country = $_POST['country'];
  $proyect = $_POST['proyect'];
  $type = $_POST['type'];
  $numberTracks = $_POST['numberTracks'];
  $duration = $_POST['duration'];
  $dateMix = $_POST['dateMix'];
  $dateMaster = $_POST['dateMaster'];
  $comment = $_POST['comment'];

  // Validar los datos (ejemplo)
  if (empty($name) || empty($email)) {
    // Enviar una respuesta de error
    http_response_code(400);
    echo "Por favor ingrese su nombre y correo electrónico.";
    exit;
  }

  // Enviar un correo electrónico
  $to = "destinatario@example.com";
  $subject = "Nuevo formulario de contacto";
  $message = "Nombre: $name\nCorreo: $email\nPaís: $country\nProyecto: $proyect\nTipo: $type\nCantidad de temas: $numberTracks\nDuración aprox.: $duration\nFecha de envío de mezclas: $dateMix\nFecha de espera de masters: $dateMaster\nComentarios: $comment";
  $headers = "From: remitente@example.com";

  if (mail($to, $subject, $message, $headers)) {
    // Enviar una respuesta de éxito
    http_response_code(200);
    echo "¡Gracias! Su mensaje ha sido enviado correctamente.";
  } else {
    // Enviar una respuesta de error
    http_response_code(500);
    echo "Lo siento, ha ocurrido un error al enviar su mensaje. Por favor intente de nuevo más tarde.";
  }

} else {
  // Enviar una respuesta de error
  http_response_code(405);
  echo "Método no permitido.";
}
?>
