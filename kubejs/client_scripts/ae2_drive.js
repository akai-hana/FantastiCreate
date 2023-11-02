
Ponder.registry((event) => {
    event.create("ae2:drive").scene("our_first_scene", "Learning about how to store items digitally in applied energistics 2!", (scene, util) => {
        /**
         * Shows the whole structure.
         * Alternatively, `scene.showBasePlate()` can be used to show the base plate.
         * Useful for animating different parts of the structure.
         */
        scene.showStructure();
        
        /**
         * Encapsulate the structure bounds to given positions. This is useful if the custom structure has no proper bounds.
         * scene.showStructure() automatically encapsulates the bounds.
         */
        // scene.encapsulateBounds(blockPos)

        /**
         * idle(ticks) or idleSeconds(seconds) is used to wait for a certain amount of time.
         * 20 ticks = 1 second
         */
        scene.idle(10);

        /**
         * `.createEntity()` returns an entity link from Create which will be used
         * as reference in the future
         * [x, y, z] is the position but any KubeJS way to represent a position can be used.
         *
         * Don't modify the entity directly!
         */
        scene.world.setBlock([2, 1, 2], 'ae2:drive', false);
        scene
            .text(70, "This block is used for digital storage, you can add digital storage disks to store lots of items within one block", [2.0, 2.5, 2.5])    
            /**
             * Optional | Sets the color of the text.
             * Possible values:
             * - PonderPalette.WHITE, PonderPalette.BLACK
             * - PonderPalette.RED, PonderPalette.GREEN, PonderPalette.BLUE
             * - PonderPalette.SLOW, PonderPalette.MEDIUM, PonderPalette.FAST
             * - PonderPalette.INPUT, PonderPalette.OUTPUT
             */
    
            /**
             * Optional | Places the text closer to the target position.
             */
            .placeNearTarget()
            /**
             * Optional | Adds a keyframe to the scene.
             */
            .attachKeyFrame()
            

        /**
         * 120 -> the tick length of the instruction
         * [x, y, z] -> the position that the controls should point at
         * "down" -> the direction that is used by the controls for pointing
         */

     
        scene.world.modifyTileNBT([2, 1, 2], nbt => {
            nbt.visual = {
                online: true, // Controls whether the LEDs are on or off (default: false)
                // Set the cells using cell0 to cell9
                cell2: {
                    id: 'ae2:item_storage_cell_4k', // Item ID of cell
                    state: 'full' // Status of cell LED
                },
                cell1: {
                    id: 'ae2:item_storage_cell_4k',
                    state: 'full'
                },
                cell3: {
                    id: 'ae2:item_storage_cell_4k', // Item ID of cell
                    state: 'full' // Status of cell LED
                },
                cell4: {
                    id: 'ae2:item_storage_cell_4k', // Item ID of cell
                    state: 'types_full' // Status of cell LED
                },
                cell5: {
                    id: 'ae2:item_storage_cell_4k', // Item ID of cell
                    state: 'not_empty' // Status of cell LED
                },
                cell6: {
                    id: 'ae2:item_storage_cell_4k', // Item ID of cell
                    state: 'empty' // Status of cell LED
                },
                cell7: {
                    id: 'ae2:item_storage_cell_4k', // Item ID of cell
                    state: 'empty' // Status of cell LED
                },
                cell8: {
                    id: 'ae2:item_storage_cell_64k', // Item ID of cell
                    state: 'empty' // Status of cell LED
                },
                cell9: {
                    id: 'ae2:item_storage_cell_64k', // Item ID of cell
                    state: 'empty' // Status of cell LED
                },
            };
        }, true);
        scene.idle(80)
        /**
         * 50 -> the tick length of the instruction
         * [x, y, z] -> the position that the text should point at
         */
        scene
            .text(70, "You can interact with the block and add storage drives to store items or replace existing storage drives with bigger drives to enable you to store more items", [2.0, 2.5, 2.5])    
            /**
             * Optional | Sets the color of the text.
             * Possible values:
             * - PonderPalette.WHITE, PonderPalette.BLACK
             * - PonderPalette.RED, PonderPalette.GREEN, PonderPalette.BLUE
             * - PonderPalette.SLOW, PonderPalette.MEDIUM, PonderPalette.FAST
             * - PonderPalette.INPUT, PonderPalette.OUTPUT
             */
            .attachKeyFrame()
            /**
             * Optional | Places the text closer to the target position.
             */
            .placeNearTarget()
        scene
            .showControls(60, [2, 2.5, 2], "down")
            .rightClick()
            .withItem("ae2:item_storage_cell_16k")
            /**
             * Optional | Adds a keyframe to the scene.
             */
            

        /**
         * 120 -> the tick length of the instruction
         * [x, y, z] -> the position that the controls should point at
         * "down" -> the direction that is used by the controls for pointing
         */
        scene.world.modifyTileNBT([2, 1, 2], nbt => {
            nbt.visual = {
                online: true, // Controls whether the LEDs are on or off (default: false)
                // Set the cells using cell0 to cell9
                cell2: {
                    id: 'ae2:item_storage_cell_4k', // Item ID of cell
                    state: 'full' // Status of cell LED
                },
                cell1: {
                    id: 'ae2:item_storage_cell_16k',
                    state: 'not_empty'
                },
                cell3: {
                    id: 'ae2:item_storage_cell_4k', // Item ID of cell
                    state: 'not_empty' // Status of cell LED
                },
                cell4: {
                    id: 'ae2:item_storage_cell_4k', // Item ID of cell
                    state: 'empty' // Status of cell LED
                },
                cell5: {
                    id: 'ae2:item_storage_cell_4k', // Item ID of cell
                    state: 'empty' // Status of cell LED
                },
                cell6: {
                    id: 'ae2:item_storage_cell_4k', // Item ID of cell
                    state: 'empty' // Status of cell LED
                },
                cell7: {
                    id: 'ae2:item_storage_cell_4k', // Item ID of cell
                    state: 'empty' // Status of cell LED
                },
                cell8: {
                    id: 'ae2:item_storage_cell_64k', // Item ID of cell
                    state: 'empty' // Status of cell LED
                },
                cell9: {
                    id: 'ae2:item_storage_cell_64k', // Item ID of cell
                    state: 'empty' // Status of cell LED
                },
            };        
    }, true);
    scene.idle(80)
    });
});
