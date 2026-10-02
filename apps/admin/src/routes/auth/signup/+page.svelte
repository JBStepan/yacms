<script lang="ts">
    import { goto } from "$app/navigation";
    import { authClient } from "$lib/auth";

    let email = $state("")
    let password = $state("")
    let name = $derived(email)
    let error1 = $state("")

    async function signup(e: SubmitEvent) {
        e.preventDefault()
        const { error: err } = await authClient.signUp.email({ email, name, password})
        if(err) {
            error1 = err.message ?? "Login failed"
            console.log(err)
            return
        }

        goto("/")
    }

</script>

<form onsubmit={signup} >
    <input type="email" bind:value={email} placeholder="Email" required>
    <input type="password" bind:value={password} placeholder="Password" required>
    {#if error1}<p>{error1}</p>{/if}
    <button type="submit">Signup</button>
</form>