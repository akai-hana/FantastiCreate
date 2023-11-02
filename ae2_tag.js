Ponder.tags((event) => {
    /**
     * "kubejs:getting_started" -> the tag name
     * "minecraft:paper"        -> the icon
     * "Getting Started"        -> the title
     * "This is a description"  -> the description
     * [...items]               -> default items
     */
    event.createTag("kubejs:getting_started", "ae2:controller", "Getting started.", "We ponder now!", [
        // some default items
        "ae2:controller",
        "ae2:drive",
    ]);
});