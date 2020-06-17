<template>
  <div>
    <section id="labs" class="section">
      <h1 class="title">
        Mis Laboratorios
      </h1>
      <div class="columns is-multiline">
        <div class="column is-3-desktop is-6-tablet">
          <a href="#">
            <div class="card">
              <div class="card-image">
                <figure class="image">
                  <img
                    src="https://images.unsplash.com/photo-1567789884554-0b844b597180?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9"
                    alt=""
                  />
                </figure>
              </div>
              <div class="card-content has-background-jet">
                <span class="has-text-white has-text-weight-semibold">
                  INGI-002 - Procesos de Manufactura
                </span>
              </div>
            </div>
          </a>
        </div>
        <div class="column is-3-desktop is-6-tablet">
          <a>
            <div class="card">
              <div class="card-image">
                <figure class="image">
                  <img
                    src="https://images.unsplash.com/photo-1511629091441-ee46146481b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9"
                    alt=""
                  />
                </figure>
              </div>
              <div class="card-content has-background-grey">
                <span class="has-text-grey-darker has-text-weight-semibold">
                  MATH-114 - Lab. de Física II [No Disponible]
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
    <section id="pending-practices" class="section">
      <h1 class="title">
        Practicas Pendientes
      </h1>
      <ul class="columns is-multiline">
        <li class="column  is-3-desktop is-6-tablet">
          <a href="#" class="is-size-5 box">
            <article class="media">
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>Practica 1: </strong> Estudio de tiempos
                    <br />
                    <small class="has-text-grey">
                      En esta practica de laboratorio estaremos utilizando el
                      cronometro para medición de tiempos y determinación de
                      tiempos estandard, tiempos de ciclo, etc. en un conveyor.
                    </small>
                  </p>
                  <small><strong>Vence:</strong> 30-jun-2020</small>
                </div>
              </div>
              <div class="media-right">
                <b-tag rounded type="is-danger">Nueva</b-tag>
              </div>
            </article>
          </a>
        </li>
        <li class="column  is-3-desktop is-6-tablet">
          <a href="#" class="is-size-5 box">
            <article class="media">
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>Practica 2: </strong> Balanceo de Línea
                    <br />
                    <small class="has-text-grey">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eos aperiam qui rem quas, ad maxime provident dolorum
                      incidunt sapiente enim quasi, ea distinctio blanditiis
                      eligendi mollitia ducimus rerum! Perferendis, cupiditate!
                    </small>
                  </p>
                  <small><strong>Vence:</strong> 15-jul-2020</small>
                </div>
              </div>
              <div class="media-right">
                <b-tag rounded type="is-danger">Nueva</b-tag>
              </div>
            </article>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="scss">
a {
  .card {
    border-radius: 0.375rem;
    .card-image {
      img {
        border-radius: 0.375rem 0.375rem 0 0;
      }
    }
    .card-content {
      border-radius: 0 0 0.375rem 0.375rem;
    }
  }
}

section:not(:last-child) {
  padding-bottom: 0;
}

ul {
  li {
    .box {
      height: 100%;
    }
  }
}
</style>
