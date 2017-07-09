<script>
  export default {
    name: 'About'
  }
</script>

<template lang="pug">
  section#about
    .content
      h1 Qué es?
      p Find Earth es una plataforma <a class="link" href="https://github.com/FindEarth" target="_blank">open source</a>, que tiene como objetivo facilitar el reporte de personas perdidas, agilizar la viralización de sus datos en redes sociales y lo más importante: ayudar a encontrarlas.
      p La plataforma está compuesta por 3 aplicaciones:

      h3 1. Web de Administración
      p Desde esta web una organización, como por ejemplo <a class="link" href="http://redsolidaria.org.ar" target="_blank">Red Solidaria</a>, puede cargar información de personas perdidas, recibir y evaluar denuncias de los usuarios y ver estadísticas en tiempo real.
      .image-wrapper
        img(src="https://cdn-images-1.medium.com/max/1600/1*zQaAv0bNMJ3d6KJhoSR_vw.png")
        span.description <a class="link" href="https://admin.find.earth" target="_blank">https://admin.find.earth</a>
      p Esto permite tener toda la información en un mismo lugar, de una manera organizada y fácil de procesar. Por otro lado la herramienta también facilita la difusión de imágenes y datos de las personas en distintas redes sociales.

      h3 2. Web Pública
      p Portal donde cualquier usuario puede ver los datos de una persona perdida: nombre, edad, fotos y lugar en el mapa donde fue la última vez vista.
      .image-wrapper
        img(src="https://cdn-images-1.medium.com/max/1600/1*w3jv0K5C2RwCRscO6IFJzQ.png")

      h3 3. App Mobile
      p Esta capa de la plataforma todavía está <a class="link" href="https://github.com/FindEarth/app" target="_blank">en desarrollo</a> pero el objetivo es:
      p <b>a.</b> Que el usuario pueda reportar personas perdidas
      p <b>b.</b> Mostrar una lista de las personas reportadas más cercanas a la posición actual del dispositivo
      p <b>c.</b> Enviar una notificación al usuario cuando alguien reporto una persona a unos pocos KMs de distancia
      .image-wrapper
        img(style="width: 30%; max-width: 30%;" src="https://cdn-images-1.medium.com/max/1600/1*kLO2xbftpELUqp-kXKg2MA.png")

      h1 Por qué?
      p Cuando se pierde una persona, el tiempo vale más de lo normal. Por medio de Find Earth se puede reportar, ver los datos y compartir personas perdidas con solo un click.
      p Es necesario una plataforma así? Miremos las estadísticas: en 27 días de Abril acontecieron 28 femicidios. Casi un femicidio por día.
      .image-wrapper
        img(src="https://cdn-images-1.medium.com/max/1600/1*5kp5-MeTa5zS1kyI3JrK8Q.png")
        span.description Fuente: <a class="link" href="http://cosecharoja.org/femicidio-araceli" target="_blank">http://cosecharoja.org/femicidio-araceli</a>
      p Cuando una persona se pierde, las primeras 72 horas son de suma importancia para ayudar a encontrarla. Pasado este tiempo las estadísticas se reducen desfavorablemente.
      p Para nosotros es de suma importancia la concientización y colaboración de la sociedad ya que Find Earth es simplemente una herramienta, el medio somos <b>TODOS</b> nosotros.
</template>

<style lang="scss" scoped>
  section#about {

    padding: 2em 3em;

    p {
      line-height: 25px;
    }

    .image-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 50%;
      }
      .description {
        margin-top: 10px;
        font-size: 0.8em;
      }
    }

  }
</style>
