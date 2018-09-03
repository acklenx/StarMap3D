var ly =  (99.96 / 7.152);

map.load_stars = function() {
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

			this.stars[7] = new Star(    ly *5.658, ly *-3.157, ly *-9.896, "Epsilon Indi", "K5", "19", "9", 1, 0, "2165 Apr",	1, 40, "Linus" );
			this.wormholes[6] = { from: 1, to: 7, color: '0,255,255' };


			this.wormholes[7] = { from: 0, to: 7, color: '255,128,128' };

			this.stars[8] = new Star(    ly *10.11, ly *2.198, ly *16.43 , "Eta Cassiopeiae", "G3", "19", "9", 1, 0, "2165 Apr",	1, 40, "Mulder" );
			this.wormholes[8] = { from: 1, to: 8, color: '0,255,255' };

			this.stars[9] = new Star(    ly *11.85, ly *1.041, ly *-25.37 , "Zeta Tucanae", "F9", "19", "9", 1, 0, "2176\tNov",	2, 10, "Mario" );
			this.wormholes[9] = { from: 1, to: 9, color: '0,255,255' };




	//
		//
  	//this.stars[13] = new Star( -23.1, -19.18, -53.76, "Alpha Centauri", "G2", "6", "9", 1, 0 );
    //this.stars[117] = new Star( -23.1, -19.18, -53.76, "--", "K0", "0", "0", 0, 0 );
    //this.stars[3] = new Star( -21.56, -16.38, -52.5, "Proxima Centauri C", "M5.5", "0", "0", 1, 0 );
    //this.stars[4] = new Star( -0.98, -82.88, 6.86, "Barnard's Star  ", "M5", "3", "1", 0, 1 );
    //this.stars[5] = new Star( -104.16, 29.82, 13.3, "Wolf 359  ", "M6", "4", "6", 0, 0 );
    //this.stars[6] = new Star( -91.28, 23.1, 68.32, "Lalande 21185  ", "M2", "1", "8", 0, 0 );
    //this.stars[7] = new Star( -22.54, 113.12, -34.58, "Sirius A", "A1", "4", "3", 0, 0 );
    //this.stars[8] = new Star( -22.54, 113.12, -34.58, "Sirius B", "DA2", "0", "0", 0, 0 );
    //this.stars[9] = new Star( 105.56, 48.72, -37.66, "L 726-8 A", "M5.5", "5", "2", 0, 0 );
    //this.stars[10] = new Star( 105.56, 48.72, -37.66, "L 726-8 B", "M5.5", "0", "0", 0, 0 );
    //this.stars[11] = new Star( 26.46, -121.24, -54.88, "Ross 154  ", "M4.5", "4", "4", 0, 0 );
    //this.stars[12] = new Star( 103.32, -8.54, 100.8, "Ross 248  ", "M6", "1", "2", 0, 0 );
		//
    //this.stars[14] = new Star( 118.3, -28.84, -87.92, "Lacaille 9352  ", "M2", "2", "5", 0, 0 );
    //this.stars[15] = new Star( -152.18, 8.54, 2.1, "Ross 128  ", "M4.5", "3", "9", 0, 0 );
    //this.stars[16] = new Star( 140.14, -52.36, -40.88, "L 789-6 A", "M5.5", "2", "4", 0, 0 );
    //this.stars[17] = new Star( 140.14, -52.36, -40.88, "L 789-6 B", "M5", "0", "0", 0, 0 );
    //this.stars[18] = new Star( 140.14, -52.36, -40.88, "L 789-6 C", "M7", "0", "0", 0, 0 );
    //this.stars[19] = new Star( -66.64, 144.48, 14.56, "Procyon A", "F5", "1", "7", 0, 0 );
    //this.stars[20] = new Star( -66.64, 144.48, 14.56, "Procyon B", "DA", "0", "0", 0, 0 );
    //this.stars[21] = new Star( 90.44, -85.68, 99.96, "61 Cygni A", "K5", "2", "5", 0, 0 );
    //this.stars[22] = new Star( 90.44, -85.68, 99.96, "61 Cygni B", "K7", "0", "0", 0, 0 );
    //this.stars[23] = new Star( 14.98, -80.78, 140.14, "Struve 2398 A", "M4", "3", "3", 0, 0 );
    //this.stars[24] = new Star( 14.98, -80.78, 140.14, "Struve 2398 B", "M5", "0", "0", 0, 0 );
    //this.stars[25] = new Star( 116.76, 9.24, 113.26, "Groombridge 34 A", "M2", "3", "5", 0, 0 );
    //this.stars[26] = new Star( 116.76, 9.24, 113.26, "Groombridge 34 B", "M6", "0", "0", 0, 0 );
    //this.stars[27] = new Star( -89.6, 117.6, 74.62, "G51-15  ", "M6.5", "3", "8", 0, 0 );
    //this.stars[28] = new Star( 79.24, -44.24, -138.6, "Epsilon Indi A", "K4", "3", "1", 0, 0 );
    //this.stars[29] = new Star( 79.38, -43.96, -138.6, "Epsilon Indi B", "T1", "0", "0", 0, 0 );
    //this.stars[30] = new Star( 79.38, -43.96, -138.6, "Epsilon Indi C", "T6", "0", "0", 0, 0 );
    //this.stars[31] = new Star( 143.92, 70.28, -45.78, "Tau Ceti  ", "G8", "3", "2", 1, 0 );
    //this.stars[32] = new Star( 70.7, 97.44, -118.44, "L 372-58  ", "M5.5", "3", "1", 0, 0 );
    //this.stars[33] = new Star( 154.28, 50.26, -49.56, "L 725-32  ", "M5", "1", "4", 0, 0 );
    //this.stars[34] = new Star( -64.12, 160.44, 15.82, "Luyten's Star  ", "M3.5", "2", "5", 0, 0 );
    //this.stars[35] = new Star( 122.78, 115.5, 51.24, "SO 0253+1652  ", "M6.5", "3", "3", 0, 0 );
    //this.stars[36] = new Star( 26.74, 123.62, -126.56, "Kapteyn's Star  ", "M1", "2", "2", 0, 0 );
    //this.stars[37] = new Star( 15.4, -77.42, -161.56, "SCR 1845-6357 A", "M8.5", "3", "1", 0, 0 );
    //this.stars[38] = new Star( 15.4, -77.42, -161.56, "SCR 1845-6357 B", "T5.5", "0", "0", 0, 0 );
    //this.stars[39] = new Star( 106.26, -91.56, -113.12, "Lacaille 8760  ", "M0", "1", "4", 0, 0 );
    //this.stars[40] = new Star( 90.02, -38.22, 154.7, "Kruger 60 A", "M3", "2", "9", 0, 0 );
    //this.stars[41] = new Star( 90.02, -38.22, 154.7, "Kruger 60 B", "M6", "0", "0", 0, 0 );
    //this.stars[42] = new Star( -134.4, 43.68, -118.3, "DENIS 1048-39  ", "M9", "1", "13", 0, 0 );
    //this.stars[43] = new Star( -23.8, 186.34, -9.24, "Ross 614 A", "M4.5", "0", "9", 0, 0 );
    //this.stars[44] = new Star( -23.8, 186.34, -9.24, "Ross 614 B", "M7", "0", "0", 0, 0 );
    //this.stars[45] = new Star( -72.66, -175.56, -42.7, "Wolf 1061  ", "M3.5", "1", "5", 0, 0 );
    //this.stars[46] = new Star( -192.22, -27.86, 30.8, "Wolf 424 A", "M5.5", "3", "9", 0, 0 );
    //this.stars[47] = new Star( -192.22, -27.86, 30.8, "Wolf 424 B", "M7", "0", "0", 0, 0 );
    //this.stars[48] = new Star( 158.2, 3.5, -120.82, "CD-37 15492  ", "M4", "1", "4", 0, 0 );
    //this.stars[49] = new Star( 195.72, 42.56, 18.9, "van Maanen's Star  ", "DZ7", "1", "4", 0, 0 );
    //this.stars[50] = new Star( 172.06, 99.4, 46.06, "L 1159-16  ", "M8", "1", "8", 0, 0 );
    //this.stars[51] = new Star( -93.1, 32.06, -179.06, "L 143-23  ", "M5.5", "2", "10", 0, 0 );
    //this.stars[52] = new Star( -192.64, 62.58, -40.6, "LP 731-58  ", "M6.5", "2", "14", 0, 0 );
    //this.stars[53] = new Star( -7.98, -75.88, 192.22, "BD+68 946  ", "M3.5", "2", "8", 0, 0 );
    //this.stars[54] = new Star( -19.6, -140.14, -151.34, "CD-46 11540  ", "M3", "1", "6", 0, 0 );
    //this.stars[55] = new Star( -89.6, 5.88, -190.96, "L 145-141  ", "DQ6", "2", "10", 0, 0 );
    //this.stars[56] = new Star( 212.66, 5.74, -28.14, "G158-27  ", "M5.5", "2", "6", 0, 0 );
    //this.stars[57] = new Star( 199.36, -59.92, -52.92, "Ross 780  ", "M5", "2", "6", 0, 0 );
    //this.stars[58] = new Star( 72.94, -135.52, 150.78, "G208-44 A", "M5.5", "1", "7", 0, 0 );
    //this.stars[59] = new Star( 72.94, -135.52, 150.78, "G208-44 B", "M6", "0", "0", 0, 0 );
    //this.stars[60] = new Star( 72.94, -135.52, 150.78, "G208-44 C", "M8", "0", "0", 0, 0 );
    //this.stars[61] = new Star( -155.4, 37.94, 152.04, "Lalande 21258 A", "M2", "2", "9", 0, 0 );
    //this.stars[62] = new Star( -155.4, 37.94, 151.9, "Lalande 21258 B", "M6", "0", "0", 0, 0 );
    //this.stars[63] = new Star( -128.66, 66.22, 168.98, "Groombridge 1618  ", "K7", "2", "9", 0, 0 );
    //this.stars[64] = new Star( 110.32, 105.56, -163.8, "DENIS 0255-47  ", "L8", "1", "3", 0, 0 );
    //this.stars[65] = new Star( -190.54, 89.74, 76.16, "BD+20 2465  ", "M4.5", "2", "10", 0, 0 );
    //this.stars[66] = new Star( 118.44, -88.34, -170.1, "L 354-89  ", "M1", "1", "7", 0, 0 );
    //this.stars[67] = new Star( 106.54, 150.92, -131.46, "LP 944-20  ", "M9", "1", "4", 0, 0 );
    //this.stars[68] = new Star( -16.52, -163.94, -160.86, "CD-44 11909  ", "M3.5", "2", "6", 0, 0 );
    //this.stars[69] = new Star( 100.94, 204.68, -30.66, "Omicron² Eridani A", "K1", "1", "10", 1, 0 );
    //this.stars[70] = new Star( 100.94, 204.68, -30.66, "Omicron² Eridani B", "DA4", "0", "0", 1, 0 );
    //this.stars[71] = new Star( 100.94, 204.68, -30.66, "Omicron² Eridani C", "M4.5", "0", "0", 1, 0 );
    //this.stars[72] = new Star( 156.38, -52.22, 161.14, "BD+43 4305  ", "M4.5", "1", "2", 0, 0 );
    //this.stars[73] = new Star( 5.18, -231.98, 10.08, "70 Ophiuchi A", "K0", "2", "8", 0, 0 );
    //this.stars[74] = new Star( 5.18, -231.98, 10.08, "70 Ophiuchi B", "K5", "0", "0", 0, 0 );
    //this.stars[75] = new Star( 107.24, -205.66, 36.12, "Altair  ", "A7", "1", "9", 0, 0 );
    //this.stars[76] = new Star( -157.5, 160.16, 80.78, "G9-38 A", "M5.5", "1", "7", 0, 0 );
    //this.stars[77] = new Star( -157.5, 160.16, 80.78, "G9-38 B", "M5.5", "0", "0", 0, 0 );
    //this.stars[78] = new Star( 232.12, 15.26, -67.34, "L 722-22 A", "M4", "1", "8", 0, 0 );
    //this.stars[79] = new Star( 232.12, 15.26, -67.34, "L 722-22 B", "M6", "0", "0", 0, 0 );
    //this.stars[80] = new Star( 0, 244.86, 11.48, "G99-49  ", "M4", "1", "3", 0, 0 );
    //this.stars[81] = new Star( -48.3, 2.66, 241.5, "G254-29  ", "M4", "1", "6", 0, 0 );
    //this.stars[82] = new Star( -214.9, -106.12, 63.7, "Lalande 25372  ", "M4", "1", "10", 0, 0 );
    //this.stars[83] = new Star( 62.16, 240.1, -30.24, "LP 656-38  ", "M3.5", "1", "4", 0, 0 );
    //this.stars[84] = new Star( 163.66, -175.28, -73.22, "LP 816-60  ", "M5", "1", "6", 0, 0 );
    //this.stars[85] = new Star( 49.14, 120.12, 215.74, "Stein 2051 A", "M4", "1", "8", 0, 0 );
    //this.stars[86] = new Star( 49.14, 120.12, 215.74, "Stein 2051 B", "DC5", "0", "0", 0, 0 );
    //this.stars[87] = new Star( -49.28, 204.68, 138.18, "Wolf 294  ", "M4", "1", "7", 0, 0 );
    //this.stars[88] = new Star( 33.04, -214.48, 140.84, "2MASS 1835+32  ", "M8.5", "1", "11", 0, 0 );
    //this.stars[89] = new Star( 32.62, 257.18, -16.66, "Wolf 1453  ", "M1.5", "1", "7", 0, 0 );
    //this.stars[90] = new Star( 114.24, 231.7, -43.54, "2MASS 0415-09  ", "T8.5", "1", "10", 0, 0 );
    //this.stars[91] = new Star( 35.84, -84.28, 246.96, "Sigma Draconis  ", "K0", "1", "11", 0, 0 );
    //this.stars[92] = new Star( -10.78, 244.44, -98.14, "L 668-21 A", "M1", "1", "8", 0, 0 );
    //this.stars[93] = new Star( -10.78, 244.44, -98.14, "L 668-21 B", "T6", "0", "0", 0, 0 );
    //this.stars[94] = new Star( 20.16, 257.32, 57.12, "Ross 47  ", "M4", "1", "11", 0, 0 );
    //this.stars[95] = new Star( -8.68, -142.94, -223.3, "L 205-128  ", "M3.5", "0", "4", 0, 0 );
    //this.stars[96] = new Star( 87.08, -252.56, 24.22, "Wolf 1055 A", "M3.5", "0", "5", 0, 0 );
    //this.stars[97] = new Star( 88.06, -252.28, 24.08, "Wolf 1055 B", "M8", "0", "0", 0, 0 );
    //this.stars[98] = new Star( -136.22, 209.58, -98.7, "L 674-15  ", "M4", "1", "8", 0, 0 );
    //this.stars[99] = new Star( -179.76, -175.28, -98.42, "Lalande 27173 A", "K5", "1", "7", 0, 0 );
    //this.stars[100] = new Star( -179.76, -175.28, -98.42, "Lalande 27173 B", "M1", "0", "0", 0, 0 );
    //this.stars[101] = new Star( -179.76, -175.28, -98.42, "Lalande 27173 C", "M3", "0", "0", 0, 0 );
    //this.stars[102] = new Star( -179.9, -175.28, -98.28, "Lalande 27173 D", "T8", "0", "0", 0, 0 );
    //this.stars[103] = new Star( 64.82, -177.8, -192.92, "L 347-14  ", "M4.5", "1", "9", 0, 0 );
    //this.stars[104] = new Star( -118.72, 242.9, 16.8, "Ross 882  ", "M4.5", "0", "9", 0, 0 );
    //this.stars[105] = new Star( -122.5, -162.54, -178.78, "CD-40 9712  ", "M3", "1", "10", 0, 0 );
    //this.stars[106] = new Star( 141.54, 30.8, 230.16, "Eta Cassiopeiae A", "G0", "0", "7", 1, 0 );
    //this.stars[107] = new Star( 141.54, 30.8, 230.16, "Eta Cassiopeiae B", "K7", "0", "0", 0, 0 );
    //this.stars[108] = new Star( 272.02, -13.02, 11.48, "Lalande 46650  ", "M2", "0", "9", 0, 0 );
    //this.stars[109] = new Star( -47.6, -239.68, -122.36, "36 Ophiuchi A", "K1", "1", "7", 0, 0 );
    //this.stars[110] = new Star( -47.6, -239.68, -122.36, "36 Ophiuchi B", "K1", "0", "0", 0, 0 );
    //this.stars[111] = new Star( -46.48, -239.4, -121.8, "36 Ophiuchi C", "K5", "0", "0", 0, 0 );
    //this.stars[112] = new Star( 120.82, -187.74, -162.82, "CD-36 13940 A", "K3", "0", "9", 0, 0 );
    //this.stars[113] = new Star( 120.82, -187.74, -162.82, "CD-36 13940 B", "M3.5", "0", "0", 0, 0 );
    //this.stars[114] = new Star( 130.48, 154.42, -189, "82 Eridani  ", "G5", "0", "6", 0, 0 );
    //this.stars[115] = new Star( 59.78, -95.48, -255.08, "Delta Pavonis  ", "G5", "0", "8", 1, 0 );
    //this.stars[116] = new Star( -213.36, -169.82, -60.48, "Wolf 1481  ", "M3", "0", "9", 0, 0 );

    // x, y, z, name, type, Gliese_Index, num_stations, reachable, current

  //  this.stars[118] = new Star( ly * 19.23, ly * 22.79, ly * 1.756, "Kappa Ceti", "G5", "137", "9", 1, 0 );
  //  this.stars[119] = new Star( ly * 1.832, ly * 26.98, ly * -11.17 , "Gamma Leporis", "G5", "137", "9", 1, 0 );
	//
	//
	//this.wormholes[12] = { from: 117, to: 119, color: "0,0,235" };
	//if (this.stars[0] && this.stars[0] && !this.stars[0].reachable) {
	//	this.wormholes[12].color = '0,255,255';
	//}
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//this.wormholes[0] = { from: 0, to: 1, color: "0,0,235" };
  //  if (this.stars[0] && this.stars[0] && !this.stars[0].reachable) {
  //      this.wormholes[0].color = '0,255,255';
  //  }
	//
  //  this.wormholes[1] = { from: 0, to: 2, color: "0,0,235" };
  //  if (this.stars[0] && this.stars[0] && !this.stars[0].reachable) {
  //      this.wormholes[1].color = '0,255,255';
  //  }
	//
  //  this.wormholes[2] = { from: 0, to: 3, color: "0,0,235" };
  //  if (this.stars[0] && this.stars[0] && !this.stars[0].reachable) {
  //      this.wormholes[2].color = '0,255,255';
  //  }
	//
  //  this.wormholes[3] = { from: 0, to: 13, color: "0,0,235" };
  //  if (this.stars[0] && this.stars[0] && !this.stars[0].reachable) {
  //      this.wormholes[3].color = '0,255,255';
  //  }
	//
  //  this.wormholes[4] = { from: 0, to: 115, color: "0,0,235" };
  //  if (this.stars[0] && this.stars[0] && !this.stars[0].reachable) {
  //      this.wormholes[4].color = '0,255,255';
  //  }
	//
  //  this.wormholes[5] = { from: 0, to: 69, color: "0,0,235" };
  //  if (this.stars[0] && this.stars[0] && !this.stars[0].reachable) {
  //      this.wormholes[5].color = '0,255,255';
  //  }
	//
  //  this.wormholes[6] = { from: 0, to: 70, color: "0,0,235" };
  //  if (this.stars[0] && this.stars[0] && !this.stars[0].reachable) {
  //      this.wormholes[6].color = '0,255,255';
  //  }
	//
  //  this.wormholes[7] = { from: 0, to: 71, color: "0,0,235" };
  //  if (this.stars[0] && this.stars[0] && !this.stars[0].reachable) {
  //      this.wormholes[7].color = '0,255,255';
  //  }
	//
  //  this.wormholes[8] = { from: 0, to: 31, color: "0,0,235" };
  //  if (this.stars[0] && this.stars[0] && !this.stars[0].reachable) {
  //      this.wormholes[8].color = '0,255,255';
  //  }
	//
	//this.wormholes[9] = { from: 0, to: 117, color: "0,0,235" };
	//if (this.stars[0] && this.stars[0] && !this.stars[0].reachable) {
	//	this.wormholes[9].color = '0,255,255';
	//}
	//
	//this.wormholes[10] = { from: 0, to: 106, color: "0,0,235" };
	//if (this.stars[0] && this.stars[0] && !this.stars[0].reachable) {
	//	this.wormholes[10].color = '0,255,255';
	//}
	//
	//this.wormholes[11] = { from: 2, to: 118, color: "0,0,235" };
	//if (this.stars[0] && this.stars[0] && !this.stars[0].reachable) {
	//	this.wormholes[11].color = '0,255,255';
	//}
	//
	//this.wormholes[12] = { from: 2, to: 119, color: "0,0,235" };
	//if (this.stars[0] && this.stars[0] && !this.stars[0].reachable) {
	//	this.wormholes[12].color = '0,255,255';
	//}


	this.draw();
};
