async ({ page, request, log, Apify }) => {
    log.info(`Captura rápida para: ${request.url}`);

    // Definimos el tamaño de ventana
    await page.setViewportSize({ width: 1280, height: 800 });

    // Forzamos la navegación rápida
    await page.goto(request.url, { waitUntil: 'domcontentloaded', timeout: 15000 });

    // Espera técnica de 2 segundos para que aparezcan los precios
    await new Promise(res => setTimeout(res, 2000));

    // Tomamos la foto
    const screenshot = await page.screenshot({ type: 'png' });
    
    // Guardamos con el nombre que espera el flujo de Make
    await Apify.setValue('screenshot', screenshot, { contentType: 'image/png' });
    
    log.info('¡Finalizado!');
}