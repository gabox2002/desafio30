const fs = require('fs')
const args = process.argv.slice(2);

function crearArchivo(nombre, contenido) {
    fs.writeFile(nombre, contenido, (err) => {
        if (err) {
            console.error('Error al crear el archivo:', err);
            return;
        }
        console.log('Archivo creado correctamente.');
    });
}

function leerArchivo(nombre) {
    fs.readFile(nombre, 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return;
        }
        console.log('Contenido del archivo:', data);
    });
}

function modificarArchivo(nombre, nuevoContenido) {
    if (nuevoContenido === undefined) {
        console.error('Error: Debes proporcionar el nuevo contenido del archivo para modificarlo.');
        return;
    }
    
    fs.writeFile(nombre, nuevoContenido, (err) => {
        if (err) {
            console.error('Error al modificar el archivo:', err);
            return;
        }
        console.log('Archivo modificado correctamente.');
    });
}

function eliminarArchivo(nombre) {
    fs.unlink(nombre, (err) => {
        if (err) {
            console.error('Error al eliminar el archivo:', err);
            return;
        }
        console.log('Archivo eliminado correctamente.');
    });
}

const comando = args[0];
const nombreArchivo = args[1];
const contenidoArchivo = args[2];

switch (comando) {
    case 'crear':
        crearArchivo(nombreArchivo, contenidoArchivo);
        break;
    case 'leer':
        leerArchivo(nombreArchivo);
        break;
    case 'modificar':
        modificarArchivo(nombreArchivo, contenidoArchivo);
        break;
    case 'eliminar':
        eliminarArchivo(nombreArchivo);
        break;
    default:
        console.log('Comando no reconocido. Operación no válida');
}