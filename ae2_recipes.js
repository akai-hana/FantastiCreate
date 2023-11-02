console.info("Hey there! Astro here just letting ya know that the ae2 recipes are being loaded right now")

ServerEvents.recipes(event => {
    event.shaped('ae2:controller',[
        'ABA',
        'CDE',
        'FGF'
    ],{
        A:'ae2:fluix_smart_dense_cable',
        B:'create:electron_tube',
        C:'ae2:logic_processor',
        D:'ae2:engineering_processor',
        E:'ae2:calculation_processor',
        F:'create:industrial_iron_block',
        G:'createaddition:modular_accumulator'
    })
    event.shaped('ae2:inscriber', [
        'ABA',
        'CDC',
        'EFE'
    ],{
        A:'create:sturdy_sheet',
        B:'create:electron_tube',
        C:'minecraft:iron_block',
        D:'create:mechanical_press',
        E:'create:brass_block',
        F:'create:brass_hand'
    })
    event.shaped('ae2:charger', [
        'ABA',
        'ACA',
        'DED'
    ],{
        A:'minecraft:iron_block',
        B:'create:electron_tube',
        C:'createaddition:modular_accumulator',
        D:'create:brass_block',
        E:'createaddition:tesla_coil'
    })
    event.shaped('ae2:cell_component_1k', [
        'ABA',
        'BCB',
        'ABA'
    ],{
        A:'create:industrial_iron_block',
        B:'ae2:cut_quartz_block',
        C:'ae2:logic_processor'
    })
    event.shaped('ae2:cell_component_4k', [
        'ABA',
        'BCB',
        'ABA'
    ],{
        A:'minecraft:redstone_block',
        B:'ae2:cell_component_1k',
        C:'ae2:calculation_processor'
    })
    event.shaped('ae2:cell_component_16k', [
        'ABA',
        'BCB',
        'ABA'
    ],{
        A:'ae2:cut_quartz_block',
        B:'ae2:cell_component_4k',
        C:'ae2:calculation_processor'
    })
    event.shaped('ae2:cell_component_64k', [
        'ABA',
        'BCB',
        'ABA'
    ],{
        A:'minecraft:diamond_block',
        B:'ae2:cell_component_16k',
        C:'ae2:calculation_processor'
    })
    event.shaped('ae2:cell_component_256k', [
        'ABA',
        'BCB',
        'ABA'
    ],{
        A:'minecraft:netherite_block',
        B:'ae2:cell_component_64k',
        C:'ae2:calculation_processor',
    })
})
ServerEvents.recipes(event => {
    [
        'ae2:network/blocks/controller',
        'ae2:network/blocks/inscribers',
        'ae2:network/blocks/crystal_processing_charger',
        'ae2:network/cells/item_storage_components_cell_1k_part',
        'ae2:network/cells/item_storage_components_cell_4k_part',
        'ae2:network/cells/item_storage_components_cell_16k_part',
        'ae2:network/cells/item_storage_components_cell_64k_part',
        'ae2:network/cells/item_storage_components_cell_256k_part',

    ].forEach(recipeID => event.remove({id:recipeID}));
})