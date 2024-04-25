# Gestor de Archivos de Texto en Node.js

Este proyecto consiste en una aplicación de línea de comandos desarrollada en Node.js que permite gestionar archivos de texto. La aplicación permite crear, leer, modificar y eliminar archivos de texto mediante comandos simples ingresados por el usuario en la consola.

## Funcionalidades

- Crear un archivo de texto con el nombre especificado.
- Leer el contenido de un archivo de texto con el nombre especificado.
- Modificar el contenido de un archivo de texto con el nombre especificado.
- Eliminar un archivo de texto con el nombre especificado.

## Requisitos

- Node.js instalado en el sistema.

## Uso

1. Clona o descarga este repositorio en tu máquina local.
2. Abre una terminal en la ubicación del repositorio.
3. Ejecuta los siguientes comandos según las acciones que desees realizar:

   - Para crear un archivo:
     ```
     node index crear nombre_del_archivo "contenido_del_archivo"
     ```

   - Para leer un archivo:
     ```
     node index leer nombre_del_archivo
     ```

   - Para modificar un archivo:
     ```
     node index modificar nombre_del_archivo "nuevo_contenido_del_archivo"
     ```

   - Para eliminar un archivo:
     ```
     node index eliminar nombre_del_archivo
     ```

   Reemplaza `nombre_del_archivo` y `contenido_del_archivo` con los nombres y contenidos de archivo deseados.
