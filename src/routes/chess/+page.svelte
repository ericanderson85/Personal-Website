<div class="md:p-16
p-6">
    <div class="w-full bg-gray border-black border-px border-opacity-20 rounded-2xl">
        <div class="mt-2 flex flex-col items-center">
            <h1 class="md:text-6xl
            text-4xl">Chess Engine</h1>

            <div class="md:text-xl
            text-lg my-2 flex flex-col items-center text-center">
                <br>
                <p>To play against the engine, click <a class="text-link" href="https://lichess.org/@/ChessBot8051" target="_blank">here</a> and challenge the bot to a bullet, blitz, or rapid game.</p>
                <p>( It may take a bit if the bot is currently playing a game )</p>
                <br>
                <p>Click <a class="text-link" href="https://github.com/ericanderson85/chess" target="_blank">here</a> to view the source code.</p>
                <br>
                <h2 class="text-2xl font-medium underline">Overview</h2>
                <p>It has an approximate <a class="text-link" href="https://www.chess.com/terms/elo-rating-chess" target="_blank">ELO</a> of 1,900. This is better than 99% of human chess.com players.</p>
                <img class="
                lg:w-1/2
                md:w-3/4
                w-5/6 mb-2 border-black border-px border-opacity-20 rounded-2xl" src="/ratings.png" alt="chess ratings distribution">
                <p>It can perform <a class="text-link" href="https://www.chessprogramming.org/Perft" target="_blank">PERFT</a> tests with 100% accuracy.</p>
                <img class="
                lg:w-1/2
                md:w-3/4
                w-5/6 mb-2 border-black border-px border-opacity-20 rounded-2xl" src="/perft_results.png" alt="PERFT test results of depth 8">
                <p>It communicates with the Universal Chess Interface and the Lichess Bot API.</p>

                <h2 class="text-2xl mt-2 font-medium underline">Bitboards</h2>
                <p>The rating of the engine was achieved largely due to how far ahead the engine can see compared to a human player, which it is able to do because of the time and space efficiency of bitboards.</p>
                <br>
                <p>In short, a bitboard is a very long integer that represents the placement of a certain type of piece on the board. For example, the starting value of the black pawn bitboard is 71776119061217280. This seems very cryptic, but when converted to binary and formatted, this turns into:</p>
                <p class="font-mono mt-2">0 0 0 0 0 0 0 0</p>
                <p class="font-mono">1 1 1 1 1 1 1 1</p>
                <p class="font-mono">0 0 0 0 0 0 0 0</p>
                <p class="font-mono">0 0 0 0 0 0 0 0</p>
                <p class="font-mono">0 0 0 0 0 0 0 0</p>
                <p class="font-mono">0 0 0 0 0 0 0 0</p>
                <p class="font-mono mb-2">0 0 0 0 0 0 0 0</p>
                <p>By using an bits to represent the pieces, this allows us to use bitwise operations on the bitboards to efficiently move the pieces.</p>
                <p>For example, to generate the moves for black pawn east captures, the entire bitboard can be shifted &gt&gt 9 to get:</p>
                <p class="font-mono mt-2">0 0 0 0 0 0 0 0</p>
                <p class="font-mono">0 0 0 0 0 0 0 0</p>
                <p class="font-mono">0 1 1 1 1 1 1 1</p>
                <p class="font-mono">0 0 0 0 0 0 0 0</p>
                <p class="font-mono">0 0 0 0 0 0 0 0</p>
                <p class="font-mono">0 0 0 0 0 0 0 0</p>
                <p class="font-mono mb-2">0 0 0 0 0 0 0 0</p>
                <p>The & operator is then used with the white pieces bitboard to leave just the squares with enemy pieces on them.</p>
                <p>There is a <i>lot</i> more that goes into it, but this is the core part of the engine that allows its efficiency.</p>
            </div>
        </div>
    </div>
</div>