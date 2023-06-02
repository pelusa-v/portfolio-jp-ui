<script>
    import Project from '../Project.svelte';
    import Gopher from '../Gopher.svelte';
    let desc1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc semper justo a tellus rutrum varius. Maecenas quis metus vitae turpis tempus pharetra nec quis justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique nibh felis, non mattis mi hendrerit in. Sed non elit eu mi suscipit dictum elementum nec mauris"
    let desc2 = "Proyecto desarrollado con fines educativos"
    let desc3 = "Vivamus ac luctus massa. Quisque laoreet, ipsum non venenatis consectetur, mauris elit gravida nunc, tincidunt placerat elit tortor sit amet tellus. Ut vitae sagittis nibh."
    let desc4 = "In scelerisque, leo ac accumsan ornare, ex lorem viverra enim, at porta sapien purus non quam. Nam imperdiet justo sed tempus porttitor. Suspendisse eget neque nibh. Praesent id est ut tortor ornare blandit. Nulla et mollis nisi. Nulla vitae gravida turpis, vitae lacinia felis. Proin feugiat enim at laoreet sodales"
</script>

<div class="projects-hero justify-center mb-4 md:flex lg:flex items-center">
    <h1 class="text-3xl">Explore my projects here!</h1>
    <div class="mx-3 mt-2 flex justify-center items-center">
        <Gopher/>
    </div>
</div>

<div class="projects-container overflow-y-scroll scrollbar">
    <div class="lg:columns-2 md:columns-2 sm:columns-1 gap-2 ">
        <div class="break-inside-avoid-column">
            <Project description={desc4} name="OMAR"></Project>
        </div>
        <div class="break-inside-avoid-column">
            <Project description={desc3} name="Radar"></Project>
        </div>
        <div class="break-inside-avoid-column">
            <Project description={desc2} name="WARE"></Project>
        </div>
        <div class="break-inside-avoid-column">
            <Project description={desc4} name="OMAR"></Project>
        </div>
        <div class="break-inside-avoid-column">
            <Project description={desc3} name="Radar"></Project>
        </div>
        <div class="break-inside-avoid-column">
            <Project description={desc1} name="PIAC"></Project>
        </div>
        <div class="break-inside-avoid-column">
            <Project description={desc4} name="OMAR"></Project>
        </div>
        <div class="break-inside-avoid-column">
            <Project description={desc3} name="Radar"></Project>
        </div>
        <div class="break-inside-avoid-column">
            <Project description={desc2} name="WARE"></Project>
        </div>
        <div class="break-inside-avoid-column">
            <Project description={desc1} name="PIAC"></Project>
        </div>
    </div>
</div>

<style>
.projects-container{
    max-height: 70vh;
}
</style>