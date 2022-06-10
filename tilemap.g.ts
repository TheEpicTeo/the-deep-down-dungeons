// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001050505050505050505050505050502080c1010101010101010101010100906080e1211191911111111111711110f06080e191111191a191919111111110f06080e111119111111111919111a110f06080e11131211121a1a11191111110f06080e1315151119121112111111110f06080e1513151111111111171111110f06080e1414111119111a11111117110f06080e1417121111111212111119110f06080e161616121a111919191211110f06080e13121717121118111112111b0f06080e1313171111141811111911110f06080e13191111141111191911181a0f06080a0d0d0d0d0d0d0d0d0d0d0d0d0b0603070707070707070707070707070704`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.purpleOuterEast2,sprites.dungeon.purpleOuterWest2,sprites.dungeon.purpleOuterSouth2,sprites.dungeon.floorDark0,sprites.dungeon.floorDark5,sprites.dungeon.floorDark4,sprites.dungeon.floorDark3,sprites.dungeon.floorLightMoss,sprites.dungeon.floorLight2,sprites.dungeon.floorLight4,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorMixed,sprites.dungeon.floorLight5,sprites.dungeon.chestClosed], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
