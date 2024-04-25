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

    let projects;
</script>

<section>
    <IntersectionObserver element={projects} let:intersecting>
        <div bind:this={projects} id="projects" class="p-16">
            {#if intersecting}
            <div in:scale={scaleParams}>
                <h2 class="md:text-6xl
                text-4xl">Projects</h2>
                <div class="md:mx-8 md:text-xl
                text-lg my-2">

                    <div class="md:h-60
                    my-4 w-full border-px border-black border-opacity-20 bg-gray rounded-2xl">
                        <div class="md:h-[25%]
                        w-full border-black border-b-px border-opacity-20 rounded-t-2xl">
                            <div class="md:mx-4 md:flex-row md:justify-between
                            flex flex-col items-center h-full">
                                <span class="font-medium">Chess Engine</span>
                                <span class="italic text-lg">January 2024 - Present</span>
                            </div>
                        </div>
                        <div class="w-full 
                        md:w-auto md:flex md:h-[75%]">
                            <img class="object-cover h-32 w-full
                            md:border-r-px md:border-black md:border-opacity-20 md:rounded-bl-[15px] md:h-full md:w-auto" alt="chess board" src="/board.jpeg">
                            <div class="flex flex-col m-2 justify-between">
                                <span>Chess engine with an ELO of approximately 1,900. Made in C# using bitboards to represent the game state.</span>
                                <a href="/chess" class="text-link">Learn more</a>
                            </div>
                        </div>
                    </div>

                    <div class="md:h-60
                    my-4 w-full border-px border-black border-opacity-20 bg-gray rounded-2xl">
                        <div class="md:h-[25%]
                        w-full border-black border-b-px border-opacity-20 rounded-t-2xl">
                            <div class="md:mx-4 md:flex-row md:justify-between
                            flex flex-col items-center h-full">
                                <span class="font-medium">Basketball Compare</span>
                                <span class="italic text-lg">November 2023 - January 2024</span>
                            </div>
                        </div>
                        <div class="w-full 
                        md:w-auto md:flex md:h-[75%]">
                            <img class="object-cover h-32 w-full
                            md:border-r-px md:border-black md:border-opacity-20 md:rounded-bl-[15px] md:h-full md:w-auto" alt="graph of player statistics" src="/Plot_example.png">
                            <div class="flex flex-col m-2 justify-between">
                                <span>Web application for comparing NBA players to find the most statistically similar player.</span>
                                <a href="https://www.basketballcompare.xyz/" target="_blank" class="text-link">Learn more</a>
                            </div>
                        </div>
                    </div>

                    <div class="md:h-60
                    my-4 w-full border-px border-black border-opacity-20 bg-gray rounded-2xl">
                        <div class="md:h-[25%]
                        w-full border-black border-b-px border-opacity-20 rounded-t-2xl">
                            <div class="md:mx-4 md:flex-row md:justify-between
                            flex flex-col items-center h-full">
                                <span class="font-medium">Color Palette Extractor</span>
                                <span class="italic text-lg">April 2024</span>
                            </div>
                        </div>
                        <div class="w-full 
                        md:w-auto md:flex md:h-[75%]">
                            <img class="object-cover h-32 w-full
                            md:border-r-px md:border-black md:border-opacity-20 md:rounded-bl-[15px] md:h-full md:w-auto" alt="extracted color palette" src="/color_palette.png">
                            <div class="flex flex-col m-2 justify-between">
                                <span>Get a color palette from the most prominent colors in an image.</span>
                                <a href="https://ericanderson85.github.io/color-extractor/" target="_blank" class="text-link">Learn more</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/if}
        </div>
    </IntersectionObserver>
</section>