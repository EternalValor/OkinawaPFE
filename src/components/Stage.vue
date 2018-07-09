<template>
  <div class="stages">
    <div class="stage">
      <div class="icon">
        <img src="@/assets/img/stageicon.png" alt="">
      </div>
      <h1 class="title">Stages</h1>
      <div class="text">
        <p class="p">Les inscriptions aux stages de karaté avec les meilleurs instructeurs nationaux et internationaux sont réservés à l'avance, car ces événements sont très importants et se remplient très rapidement. Ces stages sont ouverts à tous les clubs, associations et karatékas individuels.</p>
      </div>
    </div>

    <div class="stage">
      <div class="icon">
        <img src="@/assets/img/gradeicon.png" alt="">
      </div>
      <h1 class="title">Grades</h1>
      <div class="text">
        <p class="p">Tout commencerez par une ceinture blanche, mais à mesure que vous progresserez dans les notes, vous serez récompensé par des ceintures de différentes couleurs. Les ceintures sont décernées dans cet ordre; Orange, Rouge, Jaune, Vert, Violet, Violet & Blanc, Marron et ensuite ceinture Noire ou Shodan </p>
      </div>
    </div>

    <div class="stage">
      <div class="icon">
        <img src="@/assets/img/competitionicon.png" alt="">
      </div>
      <h1 class="title">Competitions</h1>
      <div class="text">
        <p class="p">Les compétitions annoncées sur le site sont ouvertes aux membres de la FRMK&DA ou aux membres d'autres organismes nationaux affiliés à la WKF et aux concurrents qui ne contreviennent pas uniquement à la loi 21.9 de la WKF.</p>
      </div>
    </div>
    
  </div>
</template>


<style lang="scss" scoped>
.stages{
  margin: 10rem 0;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  text-align: center;
}

.stage{
  width: calc(100%/3 - 6rem);
  margin: 0 3rem;
}
.icon{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    width: 100px;
  }
}
.text{
  width: 100%;
  .p{
    word-spacing: 1rem;
    text-align: center;
    font-size: 2rem;
    color: dimgrey;
  }
}

.title{
    color: red;
    font-size: 2.5rem;
    padding: 2.5rem;
}

@media (max-width: 700px) {
  .stage {
    margin: 0 auto;
    width: 65%;
    margin-bottom: 5rem;
  }

  .text {
    .p {
      font-size: 1.75rem;
    }
  }
}
</style>
