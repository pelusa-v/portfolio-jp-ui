<script lang="ts">
    import type { SidebarItem } from "../models/SidebarItem";
    export let data : SidebarItem[];

    let showResponsiveSideBar = false; // Prop to control sidebar visibility
    function ShowHideSidebar(): void {
      showResponsiveSideBar = !showResponsiveSideBar;
    }
</script>

<div class="sidebar-container">
  <h4 class="mb-5 sidebar-item-title">Index</h4>
  
  <ul>
    {#each data as sideBarItem, i }
      <li class="sidebar-item-title text-gray-500">
        {#if sideBarItem.data.path !== undefined}
          <a class="sidebar-item-title" href="{sideBarItem.data.path}" >{sideBarItem.data.key}</a>
        {:else}
          {sideBarItem.data.key}
        {/if}
        <ul>
          {#each sideBarItem.subItems as subItem }
            {#if subItem.path !== undefined}
              <li class="sidebar-item-title"><span></span><a href="{subItem.path}" >{subItem.key}</a></li>
            {:else}
              <li class="sidebar-item-title"><span></span>{subItem.key}</li>
            {/if}
          {/each}
        </ul>
      </li>
    {/each}
  </ul>
</div>

{#if showResponsiveSideBar }
  <div class="sidebar-container-responsive">
    <button class="open-close-button" on:click={ShowHideSidebar}>Close</button>
    <h4 class="mb-5 sidebar-item-title">Index</h4>
    
    <ul>
      {#each data as sideBarItem, i }
        <li class="sidebar-item-title text-gray-500">
          {#if sideBarItem.data.path !== undefined}
            <a class="sidebar-item-title" href="{sideBarItem.data.path}" >{sideBarItem.data.key}</a>
          {:else}
            {sideBarItem.data.key}
          {/if}
          <ul>
            {#each sideBarItem.subItems as subItem }
              {#if subItem.path !== undefined}
                <li class="sidebar-item-title"><span></span><a href="{subItem.path}" >{subItem.key}</a></li>
              {:else}
                <li class="sidebar-item-title"><span></span>{subItem.key}</li>
              {/if}
            {/each}
          </ul>
        </li>
      {/each}
    </ul>
  </div>
{:else}
  <div class="sidebar-button-open">
    <button on:click={ShowHideSidebar}>Index</button>
  </div>
{/if}


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
  
  .sidebar-button-open {
    visibility: hidden;
  }

  @media screen and (max-width: 1150px) {
    .sidebar-button-open {
      visibility: visible;
      padding: 10px;
      width: auto;
      height: auto;
      position: fixed;
      top: 0%;
      left: 0%;
      background-color: rgba(46, 46, 48, 0.897);
      transition: left 0.3s ease-in-out;
    }
  }

  .sidebar-item-title {
    font-size: medium;
  }

  @media screen and (max-width: 480px) {
    .sidebar-item-title {
      font-size: larger;
    }
  }

  .open-close-button {
    visibility: hidden;
  }

  @media screen and (max-width: 1150px) {
    .open-close-button {
      visibility: visible;
    }
  }

  @media screen and (max-width: 480px) {
    span {
      border-bottom: 1px solid;
      border-left: 1px solid;
      height: 1.9rem;
      width: 3rem;
      display: inline-block;
      margin-bottom: 0.3rem;
      margin-left: 1rem;
    }
  }

  .sidebar-container {
    width: 200px;
    height: 100%;
    position: fixed;
    top: 24vh;
    left: 10%;
    background-color: transparent;
    transition: left 0.3s ease-in-out;
  }

  @media screen and (min-width: 1700px) {
    .sidebar-container {
        width: 200px;
        height: 100%;
        position: fixed;
        top: 20vh;
        left: 15%;
        background-color: transparent;
        transition: left 0.3s ease-in-out;
    }
  }

  @media screen and (max-width: 1275px) {
    .sidebar-container {
        width: 200px;
        height: 100%;
        position: fixed;
        top: 20vh;
        left: 5%;
        background-color: transparent;
        transition: left 0.3s ease-in-out;
    }
  }

  @media screen and (max-width: 1150px) {
    .sidebar-container {
        visibility: hidden;
    }
  }

  .sidebar-container-responsive {
    width: 200px;
    height: 100%;
    position: fixed;
    padding-top: 18vh;
    padding-left: 20px;
    top: 0;
    left: 0;
    background-color: rgba(46, 46, 48, 0.897);
    transition: left 0.3s ease-in-out;
  }

  @media screen and (max-width: 1150px) {
    .sidebar-container-responsive {
        width: 200px;
        height: 100%;
        position: fixed;
        padding-top: 18vh;
        padding-left: 20px;
        top: 0;
        left: 0;
        background-color: rgba(46, 46, 48, 0.897);
        transition: left 0.3s ease-in-out;
    }
  }

  @media screen and (max-width: 480px) {
    .sidebar-container-responsive {
        width: 100vh;
        height: 100%;
        position: fixed;
        padding-top: 18vh;
        padding-left: 40px;
        top: 0;
        left: 0;
        background-color: rgba(46, 46, 48, 0.897);
        transition: left 0.3s ease-in-out;
    }
  }

</style>