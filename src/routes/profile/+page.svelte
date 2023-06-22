<script>
    import ProfilePhoto from './ProfilePhoto.svelte';
    import Gopher from '../Gopher.svelte';
    import ProfileSummary from './ProfileSummary.svelte';
    import ExperienceBadge from './ExperienceBadge.svelte';
    let desc1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc semper justo a tellus rutrum varius. Maecenas quis metus vitae turpis tempus pharetra nec quis justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique nibh felis, non mattis mi hendrerit in. Sed non elit eu mi suscipit dictum elementum nec mauris"
    let desc2 = "Proyecto desarrollado con fines educativos"
    let desc3 = "Vivamus ac luctus massa. Quisque laoreet, ipsum non venenatis consectetur, mauris elit gravida nunc, tincidunt placerat elit tortor sit amet tellus. Ut vitae sagittis nibh."
    let desc4 = "In scelerisque, leo ac accumsan ornare, ex lorem viverra enim, at porta sapien purus non quam. Nam imperdiet justo sed tempus porttitor. Suspendisse eget neque nibh. Praesent id est ut tortor ornare blandit. Nulla et mollis nisi. Nulla vitae gravida turpis, vitae lacinia felis. Proin feugiat enim at laoreet sodales"
    let tools1 = ["Bitbucket", "C#", ".NET", "Angular"];
    let tools2 = ["Gitlab", "Python", "Javascript", "React", "Angular"];

</script>

<div class="aboutme-hero justify-center mb-4 md:flex lg:flex items-center ">
    <h1 class="text-3xl">Hello world!</h1>
    <div class="mx-3 mt-2 flex justify-center items-center">
        <Gopher/>
    </div>
</div>

<div class="flex justify-center items-center">
  <div class="py-3 aboutme-container flex flex-wrap md:flex-nowrap">
    <div class="flex flex-wrap justify-center items-center w-full md:w-2/5 lg:w-2/5 md:order-1">
      <div>
        <ProfilePhoto></ProfilePhoto>
        <ProfileSummary 
          full_name="Jean Pierre Leon Vivanco"
          github_url="https://github.com/pelusa-v"
          github_username="pelusa-v"
          role="Full Stack developer"
          summary="I like cats"></ProfileSummary>
      </div>
    </div>
    <div class=" w-full md:w-3/5 lg:w-3/5 md:order-2 md:overflow-y-scroll lg:overflow-y-scroll md:scrollbar lg:scrollbar">
      <div class="px-10 py-2">
        <div class="mb-5 text-sm font-light text-gray-400">
          <p>I'm a passionate software developer, Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
            scrambled it to make a type specimen book.</p>
        </div>
        <div>
          <ExperienceBadge enterprise="Entel Perú" role="Full Stack Developer" tools={tools1} summary={desc1} startDate="01/05/22" endDate="25/07/23"/>
        </div>
        <div>
          <ExperienceBadge enterprise="Métrica Andina (Kyndryl - BCP)" role="Full Stack Developer" tools={tools2} summary={desc2} startDate="01/05/22" endDate="25/07/23"/>
        </div>
        <div>
          <ExperienceBadge enterprise="OSC Top Solutions Group" role="Full Stack Developer" tools={tools1} summary={desc3} startDate="01/05/22" endDate="25/07/23"/>
        </div>
        <div>
          <ExperienceBadge enterprise="EGO Telecom services" role="Backend Developer" tools={tools1} summary={desc4} startDate="01/05/22" endDate="25/07/23"/>
        </div>
      </div>
    </div>
  </div>
</div>

<style>

.aboutme-hero{
    width: 100%;
    height: 8vh;
}

@media screen and (max-width: 765px) {
  .aboutme-hero {
    margin-bottom: 50px;
  }
}

@media screen and (max-width: 390px) {
  .aboutme-hero {
    margin-bottom: 90px;
  }
}

.aboutme-container{
    width: 80%;
    max-height: 70vh;
}

@media screen and (min-width: 1500px) {
  .aboutme-container {
    width: 120%; /* Width of the div when the screen is larger than 768px */
  }
}

</style>