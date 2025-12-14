<script lang="ts" module>
  import Gauge from "@lucide/svelte/icons/gauge";
  import NotebookPen from "@lucide/svelte/icons/notebook-pen";
  import Camera from "@lucide/svelte/icons/camera";
  import SettingsIcon from "@lucide/svelte/icons/settings";
  import ChevronRightIcon from "@lucide/svelte/icons/chevron-right";
  import ChevronUp from "@lucide/svelte/icons/chevron-up";
  import ArrowUpRight from "@lucide/svelte/icons/arrow-up-right";


  const data = {
    navMain: [
      {
        title: "Dashboard",
        url: "/",
        icon: Gauge
      },
      {
        title: "Posts",
        icon: NotebookPen,
        url: "/posts",
        items: [
          {
            title: "Add Post",
            url: "/posts/add",
          },
          {
            title: "Categories",
            url: "/posts/categories",
          },
          {
            title: "Tags",
            url: "/posts/tags",
          },
        ],
      },
      {
        title: "Media",
        icon: Camera,
        url: "/media",
      },
      {
        title: "Settings",
        icon: SettingsIcon,
        url: "/settings",
        items: [
          {
            title: "Overview",
            url: "/settings",
          },
          {
            title: "API Keys",
            url: "/settings/api-keys",
          },
          {
            title: "Media",
            url: "/settings/media",
          },
          {
            title: "Users",
            url: "/settings/roles",
          },
          {
            title: "Roles",
            url: "/settings/roles",
          },
          {
            title: "E-Mail Config",
            url: "/settings/email",
          },
          {
            title: "Audit Log",
            url: "/settings/audit-log",
          },
        ]
      }
    ],
  };
</script>

<script lang="ts">
  import * as Collapsible from "$lib/components/ui/collapsible/index.js";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  import { Badge } from "$lib/components/ui/badge/index.js";
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";

  let { ref = $bindable(null), pathname = "", ...restProps } = $props();
</script>
<Sidebar.Root bind:ref  {...restProps}>
  <Sidebar.Header>
    <h1 class="flex justify-center text-2xl font-bold">YACMS</h1>
  </Sidebar.Header>
  <Sidebar.Content class="p-1">
    {#each data.navMain as item (item.title)}
      {#if item.items}
        <Sidebar.Menu>
          <Collapsible.Root title={item.title} open class="group/collapsible">
            <Sidebar.MenuItem>
              <Collapsible.Trigger>
                {#snippet child({ props })}
                  <Sidebar.MenuButton {...props} class="cursor-pointer">
                    <item.icon class="w-full h-full"></item.icon>
                    <span class="">{item.title}</span>
                    <ChevronRightIcon
                    class="ms-auto transition-transform group-data-[state=open]/collapsible:rotate-90"
                    />
                  </Sidebar.MenuButton>
                {/snippet}
              </Collapsible.Trigger>
              <Collapsible.Content>
                <Sidebar.MenuSub>
                  {#each item.items as t}
                    <Sidebar.MenuSubItem>
                      
                      <Sidebar.MenuSubButton isActive={pathname === t.url}>
                        {#snippet child({props})}
                          <a href={t.url} {...props}>
                            <span>{t.title}</span>
                          </a>
                        {/snippet}
                      </Sidebar.MenuSubButton>

                    </Sidebar.MenuSubItem>
                  {/each}
                </Sidebar.MenuSub>
              </Collapsible.Content>
            </Sidebar.MenuItem>
          </Collapsible.Root>
        </Sidebar.Menu>
      {:else}
        <Sidebar.MenuItem>
            <Sidebar.MenuButton isActive={pathname === item.url}>
              {#snippet child({ props })}
                <a href={item.url} {...props}>
                  <item.icon></item.icon>
                  <span class="">{item.title}</span>
                </a>
              {/snippet}
            </Sidebar.MenuButton>
        </Sidebar.MenuItem>
      {/if}
    {/each}
  
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
            <DropdownMenu.Group>
              <div class="flex flex-col p-3 gap-1 justify-start">
                <span class="font-bold">Username <Badge class="" variant="outline">Role</Badge></span>
                <span class="text-gray-400">example@example.com</span>
              </div>
              <DropdownMenu.Separator />
            </DropdownMenu.Group>
            <DropdownMenu.Group>
              <DropdownMenu.Item class="cursor-pointer">
                <span>Account</span>
              </DropdownMenu.Item>
              <DropdownMenu.Item class="cursor-pointer">
                <span class="text-red-700">Sign out</span>
              </DropdownMenu.Item>
            </DropdownMenu.Group>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </Sidebar.MenuItem>
      </Sidebar.Menu>
    </Sidebar.Footer>
</Sidebar.Root>
