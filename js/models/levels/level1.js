let level1= new Level();

// Set Start position
level1.setStart(500, 500);

// Set Orientation
level1.setO(0);

// make walls
level1.addWall([0, 0], [0, 1000], 1);
level1.addWall([0, 1000], [1000, 1000], 2);
level1.addWall([1000, 1000], [1000, 0], 2);
level1.addWall([1000, 0], [0, 0], 1);
