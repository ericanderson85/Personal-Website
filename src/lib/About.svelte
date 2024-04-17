<script>
    import Age from "./Age.svelte"
    import IntersectionObserver from "svelte-intersection-observer";
    import { scale } from "svelte/transition";
    import { quadInOut } from "svelte/easing";

    $: scaleParams = {
        delay: 300,
        duration: 200,
        easing: quadInOut,
        start: .92,
        opacity: 1
    }

    let about;
</script>

<section>
    <IntersectionObserver element={about} let:intersecting>
        <div bind:this={about} id ="about" class="p-16">
            {#if intersecting}
            <div in:scale={scaleParams}>
                <div class="max-w-[600px]
                ml-auto mr-auto
                border-px border-black rounded-2xl border-opacity-20 bg-gray flex flex-col items-center">
                    <h2 class="md:text-6xl
                    text-4xl mt-2">About Me</h2>
                    <div class="md:mx-8 md:text-xl
                    mx-4 text-lg my-2">
                        <span>Hi, I'm Eric. I am a <Age /> year old freshman studying computer science at the University of Massachusetts Boston. I am originally from Foxborough, Massachusetts, and I graduated from Foxborough High School in June of 2023.</span>
                    </div>
                </div>
            </div>
            {/if}
        </div>
    </IntersectionObserver>
</section>