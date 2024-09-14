function showInfo(vitamin) {
    let infoText = '';

    switch(vitamin) {
        case 'A':
            infoText = 'La Vitamina A es soluble en grasa. Se encuentra en alimentos como el hígado, la zanahoria y los huevos.';
            break;
        case 'B':
            infoText = 'Las Vitaminas del grupo B son solubles en agua. Incluyen B1, B2, B3, B5, B6, B7, B9 y B12, y se encuentran en granos, carnes y vegetales.';
            break;
        case 'C':
            infoText = 'La Vitamina C es soluble en agua. Se encuentra en frutas cítricas, fresas y pimientos.';
            break;
        case 'D':
            infoText = 'La Vitamina D es soluble en grasa. Se puede obtener de la exposición al sol, el aceite de hígado de bacalao y los pescados grasos.';
            break;
        case 'E':
            infoText = 'La Vitamina E es soluble en grasa. Se encuentra en aceites vegetales, nueces y semillas.';
            break;
        case 'K':
            infoText = 'La Vitamina K es soluble en grasa. Se encuentra en verduras de hoja verde, aceites vegetales y algunos vegetales crucíferos.';
            break;
        default:
            infoText = 'Selecciona una vitamina para obtener información.';
    }

    document.getElementById('info-text').innerText = infoText;
}
