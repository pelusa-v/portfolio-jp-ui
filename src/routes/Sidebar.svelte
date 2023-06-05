<script>
    export let isOpen = false; // Prop to control sidebar visibility
    export let treeData = {};
</script>

<div class="sidebar-container" class:open={isOpen}>
    Modern sidebar

    <ul>
      <li class="text-gray-500">About me
        <ul>
          <li><span></span>Profile</li>
          <li><span></span>Projects</li>
          <li><span></span>Contact</li>
        </ul>
      </li>
      <li class="text-gray-500">Blog
        <ul>
          <li><span></span>Posts</li>
          <li><span></span>Tutorials</li>
          <li><span></span>Books</li>
        </ul>
      </li>
    </ul>
</div>


<style>

span {
  border-bottom: 1px solid;
    border-left: 1px solid;
    height: 1.5rem;
    width: 2rem;
    display: inline-block;
    margin-bottom: 0.3rem;
    margin-left: 1rem;
}


  .sidebar-container {
    width: 200px;
    height: 100%;
    position: fixed;
    top: 22vh;
    left: 10%;
    background-color: transparent;
    transition: left 0.3s ease-in-out;
  }

  @media screen and (min-width: 1500px) {
    .sidebar-container {
        width: 200px;
        height: 100%;
        position: fixed;
        top: 18vh;
        left: 10%;
        background-color: transparent;
        transition: left 0.3s ease-in-out;
    }
}

  .sidebar-container.open {
    left: 0;
  }
</style>