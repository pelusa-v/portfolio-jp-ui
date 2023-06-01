<script>
    import Project from '../Project.svelte';
    let desc1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc semper justo a tellus rutrum varius. Maecenas quis metus vitae turpis tempus pharetra nec quis justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique nibh felis, non mattis mi hendrerit in. Sed non elit eu mi suscipit dictum elementum nec mauris"
    let desc2 = "Proyecto desarrollado con fines educativos"
    let desc3 = "Vivamus ac luctus massa. Quisque laoreet, ipsum non venenatis consectetur, mauris elit gravida nunc, tincidunt placerat elit tortor sit amet tellus. Ut vitae sagittis nibh."
    let desc4 = "In scelerisque, leo ac accumsan ornare, ex lorem viverra enim, at porta sapien purus non quam. Nam imperdiet justo sed tempus porttitor. Suspendisse eget neque nibh. Praesent id est ut tortor ornare blandit. Nulla et mollis nisi. Nulla vitae gravida turpis, vitae lacinia felis. Proin feugiat enim at laoreet sodales"
</script>

<h1>Put all projects here!</h1>


<div class="h-96 overflow-y-scroll scrollbar">
    <div class="columns-2 gap-2 ">
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

<!-- <div class="parent">
    <div class="column">
        <Project description={desc4} name="OMAR"></Project>
        <Project description={desc3} name="Radar"></Project>
      <div class="child">Item 3</div>
    </div>
    <div class="column">
        <Project description={desc1} name="PIAC"></Project>
        <Project description={desc2} name="WARE"></Project>
    </div>
  </div> -->

<style>

</style>