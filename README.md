# Lighthouse

Pruebas auditorias Lighthouse taller #3 y evidencias

Instalar las siguientes dependencias, al nivel de la raíz del proyecto en su terminal, ejecute los siguientes comandos: 

$ npm install
$ npm install -g lighthouse

Las pruebas lighthouse requieren de 3 archivos:

Un Gatherer que se encarga de recolectar las estadísticas de la página
Un Audit que prueba si las estadísticas recolectadas por el Gatherer cumplen con los valores esperados.
Un archivo de configuración que dice dónde se encuentran los Gatherers y los Audits de la prueba y además especifica en qué momento correrlos.

para ejecutar las pruebas 
$ lighthouse --config-path=custom-config.js https://miso-4208-labs-ratp-pwa-6.glitch.me/

Se crea un archivo localhost_<timestamp>.report.dom.html en el directorio de la prueba. Al final se deberá ver la categoría creada con el resultado.
