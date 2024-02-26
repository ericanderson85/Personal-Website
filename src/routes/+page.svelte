<script>
    import IntersectionObserver from "svelte-intersection-observer";
    import { fly } from "svelte/transition";
    import { quadInOut } from "svelte/easing";

    let about;
    let projects;
    let resume;
    let contact;
    let windowHeight;

    $: inParams = {
        duration: 1000,
        y: windowHeight / 1.5,
        easing: quadInOut,
    };

</script>

<div class="flex gap-48 flex-col">

    <div class="flex-col flex h-screen justify-end text-10xl leading-none">
        <span>Eric</span>
        <span>Anderson</span>
    </div>

    <div class="h-screen p-16">
        <IntersectionObserver element={about} let:intersecting once>
            <div bind:this={about}>
                {#if intersecting}
                <div in:fly={inParams}>
                    <h2 class="text-8xl">About</h2>
                    <div class="bg-red w-full h-96"></div>
                </div>
                {/if}
            </div>
        </IntersectionObserver>
    </div>

    <div class="h-screen p-16">
        <IntersectionObserver element={projects} let:intersecting once>
            <div bind:this={projects}>
                {#if intersecting}
                <div in:fly={inParams}>
                <h2 class="text-8xl">Projects</h2>
                <div class="bg-red w-full h-96"></div>
                </div>
                {/if}
            </div>
        </IntersectionObserver>
    </div>

    <div class="h-screen p-16">
        <IntersectionObserver element={resume} let:intersecting once>
            <div bind:this={resume}>
                {#if intersecting}
                <div in:fly={inParams}>
                <h2 class="text-8xl">Resume</h2>
                <div class="bg-red w-full h-96"></div>
                </div>
                {/if}
            </div>
        </IntersectionObserver>
    </div>

    <div class="h-screen p-16">
        <IntersectionObserver element={contact} let:intersecting once>
            <div bind:this={contact}>
                {#if intersecting}
                <div in:fly={inParams}>
                <h2 class="text-8xl">Contact</h2>
                <div class="bg-red w-full h-96"></div>
                </div>
                {/if}
            </div>
        </IntersectionObserver>
    </div>

</div>

<svelte:window bind:innerHeight={windowHeight}/>

