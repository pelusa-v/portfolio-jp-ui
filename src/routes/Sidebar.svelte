<script>
    export let isOpen = false; // Prop to control sidebar visibility
  </script>

<div class="sidebar-container" class:open={isOpen}>
    Modern sidebar
    <div class="text-gray-500">
        projects
    </div>
    <div class="text-gray-500">
        tags
    </div>
    <div class="text-gray-500">
        projects
    </div>
    <div class="text-gray-500">
        projects
    </div>
    <div class="text-gray-500">
        projects
    </div>

    <ul class="directory-tree">
        <li>
          <span class="folder">Folder 1</span>
          <ul>
            <li>
              <span class="folder">Subfolder 1.1</span>
              <ul>
                <li><span class="file">File 1.1.1</span></li>
                <li><span class="file">File 1.1.2</span></li>
              </ul>
            </li>
            <li>
              <span class="file">File 1.2</span>
            </li>
          </ul>
        </li>
        <li>
          <span class="file">File 2</span>
        </li>
      </ul>
</div>

<style>

.directory-tree {
  list-style: none;
}

.folder::before {
  content: "";
  display: inline-block;
  width: 12px;
  height: 12px;
  border: 1px solid #000;
  border-radius: 50%;
  background-color: #000;
  margin-right: 6px;
}

.folder::after {
  content: "";
  position: absolute;
  top: 6px;
  left: -15px;
  border-left: 1px solid #000;
  height: calc(100% - 6px);
}

.file::before {
  content: "";
  position: absolute;
  top: 0;
  left: -15px;
  border-left: 1px solid #000;
  height: 100%;
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