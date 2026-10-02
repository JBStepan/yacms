<script lang="ts">
    import { goto } from "$app/navigation";
    import { authClient } from "$lib/auth";

    let email = $state("")
    let password = $state("")
    let error1 = $state("")

    async function login(e: SubmitEvent) {
        e.preventDefault()
        const { error: err } = await authClient.signIn.email({email, password})
        if(err) {
            error1 = err.message ?? "Login failed"
            console.log(err)
            return
        }

        goto("/")
    }

</script>

<form onsubmit={login} >
    <input type="email" bind:value={email} placeholder="Email" required>
    <input type="password" bind:value={password} placeholder="Password" required>
    {#if error1}<p>{error1}</p>{/if}
    <button type="submit">Signup</button>
</form>