<script lang="ts">
    import { authClient } from "$lib/auth";

    let session = authClient.useSession()

    let signOut = () => {authClient.signOut()}
</script>

<h1>Welcome to YACMS™</h1>
{#if $session}
    <p>Email: {$session.data?.user.email}</p>
{/if}
<button onclick={signOut}>Signout</button>