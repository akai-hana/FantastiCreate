function fadeInSection(scene, selection, movingOffset, direction, idleTicks) {
    let link = scene.world.showIndependentSection(selection, direction);
    scene.world.moveSection(link, movingOffset, 0); // 0 to instantly move
    scene.idle(idleTicks);
    scene.world.hideIndependentSection(link, direction);
    scene.idle(idleTicks);
}
Ponder.registry((event) => {
    event.create("ae2:energy_acceptor").scene("section_fading", "Let's learn about the energy acceptor", (scene, util) => {

        /**
         * Blocks used for fading so they aren't shown directly.
         *
         * If a custom structure is used, the blocks can be directly added to the structure file.
         */
        
        scene.showBasePlate();
        scene.world.setBlocks([2, 1, 3], "powah:thermo_generator_starter");
        scene.world.setBlocks([3, 1, 3], "createaddition:modular_accumulator");
        scene.world.setBlocks([4,1,3], "createaddition:alternator");
        
        scene.world.setBlocks([2, 1, 2], "ae2:energy_acceptor");
        scene.world.setBlocks([2, 1, 1], "ae2:drive");
        scene.idle(10)
        scene.world.showSection([2, 1, 1, 2, 1, 2], Facing.NORTH);
        scene.world.modifyTileNBT([2, 1, 1], nbt => {
            nbt.visual = {
                online: false, // Controls whether the LEDs are on or off (default: false)
                // Set the cells using cell0 to cell9
                cell2: {
                    id: 'ae2:item_storage_cell_64k', // Item ID of cell
                    state: 'empty' // Status of cell LED
                },
                cell3: {
                    id: 'ae2:item_storage_cell_64k', // Item ID of cell
                    state: 'empty' // Status of cell LED
                },
                cell4: {
                    id: 'ae2:item_storage_cell_64k', // Item ID of cell
                    state: 'empty' // Status of cell LED
                },
                cell1: {
                    id: 'ae2:item_storage_cell_64k', // Item ID of cell
                    state: 'empty' // Status of cell LED
                },
                cell5: {
                    id: 'ae2:item_storage_cell_64k',
                    state: 'empty'
                },
            };
        }, true);

        scene
            .text(180, "This block can be used to accept energy to power your applied energistics 2 system using power sources from other mods", [2.0, 2, 2.0])
            .placeNearTarget()
            .attachKeyFrame()

        /**
         * Only shows the base plate and the hopper that is manually placed right now.
         */
        scene.idle(50)
        scene.world.modifyTileNBT([2, 1, 1], nbt => {
            nbt.visual = {
                online: true, // Controls whether the LEDs are on or off (default: false)
                // Set the cells using cell0 to cell9
                cell2: {
                    id: 'ae2:item_storage_cell_64k', // Item ID of cell
                    state: 'empty' // Status of cell LED
                },
                cell3: {
                    id: 'ae2:item_storage_cell_64k', // Item ID of cell
                    state: 'empty' // Status of cell LED
                },
                cell4: {
                    id: 'ae2:item_storage_cell_64k', // Item ID of cell
                    state: 'empty' // Status of cell LED
                },
                cell1: {
                    id: 'ae2:item_storage_cell_64k', // Item ID of cell
                    state: 'empty' // Status of cell LED
                },
                cell5: {
                    id: 'ae2:item_storage_cell_64k',
                    state: 'empty'
                },
            };
        }, true);
        fadeInSection(scene, [2, 1, 3], [0, 0, 0], Direction.EAST, 15);
        scene.idle(20)
        fadeInSection(scene, [3, 1, 3], [-1, 0, 0], Direction.EAST, 15);
        scene.idle(20)
        fadeInSection(scene, [4, 1, 3], [-2, 0, 0], Direction.EAST, 15);
        scene.idle(20)
    });
});