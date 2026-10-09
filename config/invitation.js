window.invitation = {
  novio: 'Marco',
  novia: 'Estrella',
  fechaISO: '2026-11-14T16:00:00-05:00',
  fechaTexto: '14 de noviembre de 2026',
  hora: '7:00 PM',
  lugar: 'La Casona Dorada Campestre',
  direccion: 'C. Los Cocalenos 716, San Juan de Lurigancho 15434',
  googleMaps: 'https://maps.app.goo.gl/j8dkCji4X76YWPFRA?g_st=ic',
  whatsappNovio: '+51 974 096 515',
  whatsappNovia: '+51 951 715 020',
  googleForm: 'https://docs.google.com/forms/d/e/1FAIpQLSdVAQ9maRKGIsaU1JQBjF1tCGE4pGK0JY_F9MqWXS9zxk6AGA/viewform?usp=header',
  musica: 'assets/audio/cancion.mp3',
  musicaDisponible: false,
  fotos: Array.from({ length: 14 }, (_, index) => `assets/images/foto-${String(index + 1).padStart(2, '0')}.jpg`),
  colores: {
    burgundy: '#52141F',
    garnet: '#772734',
    terracotta: '#CA6846',
    peach: '#EF9557',
    blush: '#F4CDD4',
    ivory: '#FFF9F4',
    paper: '#F7EFE7',
    ink: '#3B2427'
  }
};
