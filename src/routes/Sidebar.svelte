<script>
    export let isOpen = false; // Prop to control sidebar visibility
  </script>

<div class="sidebar-container" class:open={isOpen}>
    Modern sidebar
    <div>
        projects
    </div>
    <div>
        tags
    </div>
    <div>
        projects
    </div>
    <div>
        projects
    </div>
    <div>
        projects
    </div>
</div>

<style>
  .sidebar-container {
    width: 200px;
    height: 100%;
    position: fixed;
    top: 25vh;
    left: 10%;
    background-color: transparent;
    transition: left 0.3s ease-in-out;
  }

  .sidebar-container.open {
    left: 0;
  }
</style>