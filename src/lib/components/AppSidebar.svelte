<script lang="ts">
  import Gauge from "@lucide/svelte/icons/gauge";
  import NotebookPen from "@lucide/svelte/icons/notebook-pen";
  import Camera from "@lucide/svelte/icons/camera";
  import SearchIcon from "@lucide/svelte/icons/search";
  import SettingsIcon from "@lucide/svelte/icons/settings";
  import ChevronUp from "@lucide/svelte/icons/chevron-up"

  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  import type { ComponentProps } from "svelte";
  import { page } from "$app/state";
    
  const pathname = $derived(page.url.pathname);

  console.log(pathname)

  // Menu items.
  const items = [
    {
      title: "Dashboard",
      url: "/",
      icon: Gauge,
    },
    {
      title: "Posts",
      url: "/posts",
      icon: NotebookPen,
    },
    {
      title: "Media",
      url: "/media",
      icon: Camera,
    },
  ];

  let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();
  
</script>
 
<Sidebar.Root {...restProps} bind:ref>
    <Sidebar.Header />
    <Sidebar.Content>
    <Sidebar.Group>
      <Sidebar.GroupLabel>YACMS</Sidebar.GroupLabel>
      <Sidebar.GroupContent>
        <Sidebar.Menu>
          {#each items as item (item.title)}
            <Sidebar.MenuItem>
              <Sidebar.MenuButton isActive={item.url === pathname}>
                {#snippet child({ props })}
                  <a href={item.url} {...props}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                {/snippet}
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
          {/each}
        </Sidebar.Menu>
      </Sidebar.GroupContent>
    </Sidebar.Group>
  </Sidebar.Content>
    <Sidebar.Footer>
      <Sidebar.Menu>
        <Sidebar.MenuItem>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                {#snippet child({ props })}
                <Sidebar.MenuButton
                  {...props}
                  class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  Username
                  <ChevronUp class="ms-auto" />
                </Sidebar.MenuButton>
              {/snippet}
            </DropdownMenu.Trigger>
            <DropdownMenu.Content
              side="top"
              class="w-(--bits-dropdown-menu-anchor-width)"
            >
              <DropdownMenu.Item>
                <span>Account</span>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <span>Users</span>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <span>Sign out</span>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </Sidebar.MenuItem>
      </Sidebar.Menu>
    </Sidebar.Footer>
</Sidebar.Root>
