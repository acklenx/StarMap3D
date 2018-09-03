var ly =  (99.96 / 7.152);
map.loadStars = function()
{
	this.stars[0] = new Star( 0, 0, 0, "Sol", "G2", "8", "6", 1, 1 );

	this.stars[1] = new Star( 87.22, 115.92, -24.22, "Epsilon Eridani", "K2", "4", "5", 1, 0, "2144	Aug	1	14",	"Bob" );
	this.wormholes[0] = { from: 0, to: 1, color: '0,255,255' };

	this.stars[2] = new Star( ly * 16.33, ly * 24.05, ly *5.002, "Delta Eridani", "K0", "150", "9", 1, 0, "2145	Sep",	1, 18, "Bob" );
	this.wormholes[1] = { from: 1, to: 2, color: '0,255,255' };

	this.stars[3] = new Star( ly * 7.195, ly * 14.63, ly * -2.191 , "Omicron(2) Eridani (Vulcan, Romulus)", "K1", "166", "9", 1, 0, "2145	Sep",	1, 18, "Milo" );
	this.wormholes[2] = { from: 1, to: 3, color: '0,255,255' };

	this.stars[4] = new Star(  ly * 5.345, ly * 0.603, ly * -23.78 , "Beta Hydri", "G2", "19", "9", 1, 0, "2169 Aug",	1, 18, "Milo" );
	this.wormholes[3] = { from: 1, to: 4, color: '0,255,255' };

	this.stars[5] = new Star(   ly * 9.285, ly * 11.06, ly * -13.50 , "82 Eridani", "G5", "19", "9", 1, 0, "2153 Feb",	1, 23, "Milo" );
	this.wormholes[4] = { from: 3, to: 5, color: '0,255,255' };

	this.stars[6] = new Star(   ly *-1.643, ly *-1.374, ly *-3.838 , "Alpha Centauri", "G2", "19", "9", 1, 0, "2163\tNov",	1, 28, "Calvin, Goku" );
	this.wormholes[5] = { from: 1, to: 6, color: '0,255,255' };

	this.stars[7] = new Star( ly *5.658, ly *-3.157, ly *-9.896, "Epsilon Indi", "K5", "19", "9", 1, 0, "2165 Apr",	1, 40, "Linus" );
	this.wormholes[6] = { from: 1, to: 7, color: '0,255,255' };


	this.wormholes[7] = { from: 0, to: 7, color: '255,128,128' };

	this.stars[8] = new Star( ly *10.11, ly *2.198, ly *16.43 , "Eta Cassiopeiae", "G3", "19", "9", 1, 0, "2165 Apr",	1, 40, "Mulder" );
	this.wormholes[8] = { from: 1, to: 8, color: '0,255,255' };

	this.stars[9] = new Star( ly *11.85, ly *1.041, ly *-25.37 , "Zeta Tucanae", "F9", "19", "9", 1, 0, "2176\tNov",	2, 10, "Mario" );
	this.wormholes[9] = { from: 1, to: 9, color: '0,255,255' };

	//this.stars[10] = new Star( 0, 0, 1000, "ZZZ", "0", "19", "9", 1, 0 );
	//this.wormholes[10] = { from: 0, to: 10, color: '128,128,128' };
	//
	//this.stars[11] = new Star( 0, 0, -1000, "-zzz", "0", "19", "9", 1, 0 );
	//this.wormholes[11] = { from: 0, to: 11, color: '128,128,128' };
	//
	//this.stars[12] = new Star( 0, 1000, 0, "YYY", "0", "19", "9", 1, 0 );
	//this.wormholes[12] = { from: 0, to: 12, color: '128,128,128' };
	//
	//this.stars[13] = new Star( 0, -1000, 0, "-yyy", "0", "19", "9", 1, 0 );
	//this.wormholes[13] = { from: 0, to: 13, color: '128,128,128' };
	//
	//this.stars[14] = new Star( 1000, 0, 0, "YYY", "0", "19", "9", 1, 0 );
	//this.wormholes[14] = { from: 0, to: 14, color: '128,128,128' };
	//
	//this.stars[15] = new Star( -1000, 0, 0, "-yyy", "0", "19", "9", 1, 0 );
	//this.wormholes[15] = { from: 0, to: 15, color: '128,128,128' };

	this.draw();
};
