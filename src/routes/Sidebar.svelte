<script lang="ts">
    import type { SidebarItem } from "../models/SidebarItem";

    export let isOpen = false; // Prop to control sidebar visibility
    export let data : SidebarItem[];
</script>

<div class="sidebar-container" class:open={isOpen}>
    <h4 class="mb-5">Index</h4>
    
    <ul>
      {#each data as sideBarItem, i }
        <li class="text-gray-500">
          {#if sideBarItem.data.path !== undefined}
            <a href="{sideBarItem.data.path}" >{sideBarItem.data.key}</a>
          {:else}
            {sideBarItem.data.key}
          {/if}
          <ul>
            {#each sideBarItem.subItems as subItem }
              {#if subItem.path !== undefined}
                <li><span></span><a href="{subItem.path}" >{subItem.key}</a></li>
              {:else}
                <li><span></span>{subItem.key}</li>
              {/if}
            {/each}
          </ul>
        </li>
      {/each}
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