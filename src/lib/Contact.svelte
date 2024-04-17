<script>
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

    let contact;
</script>

<section>
    <IntersectionObserver element={contact} let:intersecting>
        <div bind:this={contact} id="contact" class="p-16">
            {#if intersecting}
            <div in:scale={scaleParams}>
                <h2 class="md:text-6xl
                text-4xl">Contact</h2>
                <div class="md:mx-8 md:text-xl
                sm:block
                flex text-lg my-2">

                    <div class="md:flex-row 
                    flex items-center">
                        <a href="mailto: anderson.eric.christopher@gmail.com"><img class="m-2" src="/Email_icon.webp" alt="Email icon" width="40"></a>
                        <a class="underline hidden sm:block" href="mailto: anderson.eric.christopher@gmail.com">anderson.eric.christopher@gmail.com</a>
                    </div>

                    <div class="md:flex-row 
                    flex items-center">
                        <a href="https://github.com/ericanderson85"><img class="m-2" src="/GitHub_logo.webp" alt="GitHub logo" width="40"></a>
                        <a class="underline hidden sm:block" href="https://github.com/ericanderson85">https://github.com/ericanderson85</a>
                    </div>

                    <div class="md:flex-row 
                    flex items-center">
                        <a href="https://www.linkedin.com/in/eric-anderson-b015b5294"><img class="m-2" src="/LinkedIn_logo.webp" alt="LinkedIn logo" width="40"></a>
                        <a class="underline hidden sm:block" href="https://www.linkedin.com/in/eric-anderson-b015b5294">https://www.linkedin.com/in/eric-anderson-b015b5294</a>
                    </div>

                </div>
            </div>
            {/if}
        </div>
    </IntersectionObserver>
</section>