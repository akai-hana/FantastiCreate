Ponder.registry((event) => {
    event
        .create("minecraft:cake")
        .scene("animate_section", "The cake is a lie.", "ponderjs:the_cake_is_a_lie", (scene, util) => {
            /**
             * Layer 0
             */
            for (let x = 0; x < 5; x++) {
                for (let z = 0; z < 5; z++) {
                    scene.world.showSection([x, 0, z], Facing.DOWN);
                }
                /**
                 * Idle can be used to create animations.
                 */
                scene.idle(3);
            }

            /**
             * Layer 1
             */
            for (let z = 0; z < 5; z++) {
                for (let x = 0; x < 5; x++) {
                    scene.world.showSection([x, 1, z], Facing.DOWN);
                }
                scene.idle(3);
            }

            /**
             * Layer 2
             */
            for (let x = 0; x < 5; x++) {
                for (let z = 0; z < 5; z++) {
                    scene.world.showSection([x, 2, z], Facing.DOWN);
                    scene.idle(2);
                }
            }

            /**
             * Top layer
             */
            for (let x = 0; x < 5; x++) {
                for (let z = 0; z < 5; z++) {
                    scene.world.showSection([x, 3, z], Facing.DOWN);
                    scene.idle(1);
                }
            }

            scene.text(30, "What a great cake!", [2.5, 3.5, 2.5]);
            scene.idle(40);

            /**
             * hiding a section
             */
            scene.world.hideSection([0, 0, 0, 1, 4, 1], Facing.NORTH);

            scene.text(30, "Yummy!", [1, 1.5, 2.5]).colored(PonderPalette.MEDIUM);
            scene.idle(40);
        });
});