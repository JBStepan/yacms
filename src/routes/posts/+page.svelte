<script lang="ts">
  import * as Empty from "$lib/components/ui/empty/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import ArrowUpRightIcon from "@lucide/svelte/icons/arrow-up-right";
</script>
 
<div class="w-full">
    <Empty.Root>
    <Empty.Header>
    <Empty.Title>No Posts Yet</Empty.Title>
    <Empty.Description>
      You haven't created any posts yet. Get started by creating your first
      post.
    </Empty.Description>
  </Empty.Header>
  <Empty.Content>
    <div class="flex gap-2">
      <Button>Create Post</Button>
    </div>
  </Empty.Content>
  <Button variant="link" class="text-muted-foreground" size="sm">
    <a href="#/">
      Learn More <ArrowUpRightIcon class="inline" />
    </a>
  </Button>
    </Empty.Root>
</div>