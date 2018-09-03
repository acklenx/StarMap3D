/*global $ */
/*

 Very, very loosely based on: http://www.soa-world.de/echelon/2008/07/fourth-prototype.html

 Copyright (c) 2008 Sebastian Schaetz

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the 'Software'), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 */

var PI2, renderer, map, Star;

PI2 = Math.PI * 2;
renderer = {
	canvas:           null,
	ctx:              {},
	canvasOffsetLeft: 0,
	canvasOffsetTop:  0,
	initialize:       function( mapname )
	                  {
		                  'use strict';
		                  this.canvas = $( '#' + mapname )[ 0 ];
		                  this.ctx = this.canvas.getContext( '2d' );
		                  this.canvasOffsetLeft = this.canvas.offsetLeft;
		                  this.canvasOffsetTop = this.canvas.offsetTop;
	                  },
	clearCanvas:      function()
	                  {
		                  'use strict';
		                  this.ctx.clearRect( 0, 0, this.canvas.width, this.canvas.height );
	                  },
	drawCircle:       function( x, y, radius, rgb )
	                  {
		                  'use strict';
		                  var ctx = this.ctx;
		                  ctx.fillStyle = 'rgb(' + rgb + ')';
		                  ctx.beginPath();
		                  ctx.arc( x, y, radius, 0, PI2, false );
		                  ctx.fill();
	                  },
	drawCurrent:      function( x, y )
	                  {
		                  'use strict';
		                  var ctx = this.ctx;
		                  ctx.strokeStyle = 'rgb(0,255,0)';
		                  ctx.beginPath();
		                  // XXX hardcoded radius. Yuck
		                  ctx.arc( x, y, 8, 0, PI2, true );
		                  ctx.stroke();
	                  },
	drawLine:         function( fromX, fromY, toX, toY, color )
	                  {
		                  'use strict';
		                  var ctx = this.ctx;
		                  ctx.strokeStyle = 'rgb(' + color + ')';
		                  ctx.beginPath();
		                  ctx.moveTo( fromX, fromY );
		                  ctx.lineTo( toX, toY );
		                  ctx.stroke();
	                  },
	drawText:         function( text, x, y, size )
	                  {
		                  'use strict';
		                  var ctx = this.ctx;
		                  ctx.font = size + 'px Arial';
		                  ctx.fillText( text, x, y );
	                  }
};
map = {
	starRadius:         2,
	stars:              [],
	wormholes:          [],
	showWormholes:      true,
	showNames:          true,
	showUnreachable:    true,
	rotateAngle:        0.0001,                // angle per rotation in radians
	zScale:             600,                 // value for projecting stars onto canvas
	zHelper:            255 / 600,           // value for depth fading
	loopTimeout:        25,
	degreeX:            0,                   // angle of rotation in radians
	degreeY:            0,                   // angle of rotation in radians
	degreeZ:            0,                   // angle of rotation in radians
	selected:           -1,                  // indicates which star is selected
	direction:          0,                   // direction of rotation (x is 1, y is 2, z is 3)
	isMoving:           false,               // but will be set to true on load
	renderer:           renderer,
	initialize:         function( canvasName )
	                    {
		                    'use strict';
		                    this.renderer.initialize( canvasName );
		                    this.loadStars();

		                    // start continous rotation around y axis
		                    this.rotateStars( 2 );
	                    },
	drag:               function( canvas, evt )
	                    {
		                    'use strict';
		                    var rect = canvas.getBoundingClientRect(),
		                        x    = evt.clientX - rect.left,
		                        y    = evt.clientY - rect.top;

		                    this.draw( y / map.renderer.canvas.height, x / map.renderer.canvas.width );
	                    },
	draw:               function( redraw, x, y )
	                    {
		                    'use strict';

		                    var that = this;
		                    window.requestAnimationFrame( function(){ that.doDraw( redraw, x, y ); } );
	                    },
	doDraw:             function( redraw, x, y )
	                    {

		                    if( this.isMoving || redraw )
		                    {
			                    this.renderer.clearCanvas();

			                    this.drawStars( x, y );

			                    // draw the selected star (if any)
			                    if( this.selected !== -1 )
			                    {
				                    this.drawStar( this.selected, this.starRadius + 1, '255,0,0' );
			                    }

			                    if( this.showWormholes )
			                    {
				                    this.drawWormholes();
			                    }

			                    if( this.isMoving )
			                    {
				                    // http://stackoverflow.com/questions/1101668/how-to-use-settimeout-to-invoke-object-itself
				                    // Also, need to clear the last timeout first. Probably a better
				                    // way of doing this.
				                    that = this;
				                    if( this.lastTimout )
				                    {
					                    clearTimeout( this.lastTimout );
				                    }

				                    this.lastTimout = setTimeout(
						                    function()
						                    {
							                    that.draw();
						                    },
						                    that.loopTimeout
				                    );
			                    }
		                    }
	                    },
	drawStars:          function( x, y )
	                    {
		                    'use strict';
		                    var i, star;

		                    for( i = 0; i < this.stars.length; i += 1 )
		                    {
			                    star = this.stars[ i ];

			                    if( x === undefined && y === undefined )
			                    {
				                    switch( this.direction )
				                    {
					                    case 0:
						                    // do nothing
					                    case 1:
						                    star.rotateX();
						                    break;
					                    case 2:
						                    star.rotateY();
						                    break;
					                    case 3:
						                    star.rotateZ();
						                    break;
					                    default:
						                    star.rotateX();
				                    }
			                    }
			                    else
			                    {
				                    star.rotateX( Math.sin( x ) );
				                    star.rotateY( Math.sin( y ) );
			                    }

			                    star.projectStar();  // calculate renderering coordinates
			                    this.drawStar(
					                    i,
					                    this.starRadius,
					                    star.projectedZ + ',' + star.projectedZ + ',' + star.projectedZ
			                    );
		                    }
	                    },
	drawWormholes:      function()
	                    {
		                    'use strict';
		                    var stars, wormhole, i;

		                    stars = this.stars;
		                    for( i = 0; i < this.wormholes.length; i += 1 )
		                    {
			                    wormhole = this.wormholes[ i ];
			                    this.drawWormhole( stars[ wormhole.from ], stars[ wormhole.to ], wormhole.color );
		                    }
	                    },
	lastTimout:         {},
	toggleWormholes:    function()
	                    {
		                    'use strict';
		                    this.showWormholes = !this.showWormholes;
		                    this.draw( true );
	                    },
	lastRotationStatus: true,
	stopRotation:       function()
	                    {
		                    'use strict';
		                    this.lastRotationStatus = this.isMoving;
		                    this.isMoving = false;
	                    },
	restartRotation:    function()
	                    {
		                    'use strict';
		                    // only restart if it was moving last time
		                    this.isMoving = this.lastRotationStatus;
		                    if( this.isMoving )
		                    {
			                    this.rotateStars( 3 );
		                    }
		                    this.draw();
	                    },
	toggleRotation:     function()
	                    {
		                    'use strict';
		                    if( this.isMoving )
		                    {
			                    this.isMoving = false;
		                    }
		                    else
		                    {
			                    this.rotateStars( 3 );
		                    }
		                    this.draw();
	                    },
	toggleNames:        function()
	                    {
		                    'use strict';
		                    this.showNames = !this.showNames;
		                    this.draw( true );
	                    },
	toggleUnreachable:  function()
	                    {
		                    'use strict';
		                    this.showUnreachable = !this.showUnreachable;
		                    this.draw( true );
	                    },
	drawStar:           function( index, radius, rgb )
	                    {
		                    'use strict';
		                    var star = this.stars[ index ],
		                        size;

		                    if( this.showUnreachable || star.reachable )
		                    {
			                    this.renderer.drawCircle( star.projectedX, star.projectedY, radius, rgb );
			                    if( star.current )
			                    {
				                    this.renderer.drawCurrent( star.projectedX, star.projectedY );
			                    }
			                    if( this.showNames )
			                    {

				                    // scale the text (larger when closer)
				                    size = parseInt( star.projectedZ / 35, 10 ) + 7;
				                    this.renderer.drawText( star.name, star.projectedX - 30, star.projectedY - 5, size );
			                    }
		                    }

	                    },
	drawWormhole:       function( from, to, color )
	                    {
		                    'use strict';
		                    if( !(!this.showUnreachable && !from.reachable) )
		                    {
			                    this.renderer.drawLine(
					                    from.projectedX,
					                    from.projectedY,
					                    to.projectedX,
					                    to.projectedY,
					                    color
			                    );
		                    }
	                    },
	rotateStars:        function( direction )
	                    {
		                    'use strict';
		                    this.direction = direction;
		                    if( !this.isMoving )
		                    {
			                    this.isMoving = true;
			                    this.draw();
		                    }
	                    },
	loadStars:          function()
	                    {
		                    'use strict';
		                    window.console.log( 'You must override this function' );
		                    return false;
		                    /* examples
												 this.stars[0] = new star( 0, 0, 0, 'Sol  ', 'G2', '8', '6', 1, 0 );
												 this.stars[1] = new star( -23.1, -19.18, -53.76, 'Alpha Centauri A', 'G2', '6', '9', 1, 1 );
												 this.stars[2] = new star( -23.1, -19.18, -53.76, 'Alpha Centauri B', 'K0', '0', '0', 0, 0 );

												 // and later
												 this.wormholes[0] = { from: 0, to: 1, color: '255,255,255' };
												 if (!this.stars[0].reachable) this.wormholes[0].color = '0,255,255';
												 this.wormholes[1] = { from: 0, to: 4, color: '0,0,235' };
												 if (!this.stars[0].reachable) this.wormholes[1].color = '0,255,255';

												 // and later
												 this.draw();
												 */
	                    },
	selectStar:         function( event )
	                    {
		                    'use strict';
		                    var renderer     = this.renderer,
		                        x            = event.pageX - renderer.canvasOffsetLeft,
		                        y            = event.pageY - renderer.canvasOffsetTop,
		                        dist         = this.starRadius + 4, // click distance from star center
		                        starSelector = $( '#star_id' ),
		                        i, star;

		                    this.selected = -1;

		                    starSelector.text( 'No star selected' );

		                    for( i = 0; i < this.stars.length; i += 1 )
		                    {
			                    star = this.stars[ i ];

			                    //noinspection OverlyComplexBooleanExpressionJS
			                    if( star.projectedX > x - dist &&
					                    star.projectedX < x + dist &&
					                    star.projectedY > y - dist &&
					                    star.projectedY < y + dist
			                    )
			                    {
				                    this.selected = i;
				                    if( 0 === star.wormholes )
				                    {
					                    starSelector.html( 'Name: ' + star.name + '<br \/>Type: ' + star.type );
				                    }
				                    else
				                    {
					                    starSelector.html(
							                    'Name: ' + star.name +
							                    '<br \/>Type: ' + star.type +
							                    '<br \/>Wormholes: ' + star.wormholes +
							                    '<br \/>Stations: ' + star.stations
					                    );
				                    }
			                    }
		                    }
		                    this.draw( true );
	                    }
};

Star = function( x, y, z, name, type, numWormholes, numStations, reachable, current )
{
	'use strict';
	this.baseX = x;
	this.baseY = y;
	this.baseZ = z;
	this.name = name;
	this.type = type;
	this.wormholes = numWormholes;
	this.stations = numStations;
	this.reachable = reachable;
	this.current = current;

	this.x = 0;
	this.y = 0;
	this.z = 0;

	this.projectStar = function()
	{
		this.projectedX = (renderer.canvas.width / 2) + (this.x * map.zScale / (this.z + map.zScale));
		this.projectedY = (renderer.canvas.height / 2) + (this.y * map.zScale / (this.z + map.zScale));
		this.projectedZ = 255 - Math.round( (this.z + (map.zScale / 2)) * map.zHelper );
	};

	// rotate star around x axis
	this.rotateX = function( rotateAngle )
	{
		var currSin, currCos;

		currSin = Math.sin( map.degreeX );
		currCos = Math.cos( map.degreeX );
		this.y = (this.baseY * currCos) + (this.baseZ * (-currSin));
		this.z = (this.baseY * currSin) + (this.baseZ * currCos);
		this.x = this.baseX;

		if( rotateAngle === undefined )
		{
			map.degreeX += map.rotateAngle;
		}
		else
		{
			map.degreeX += rotateAngle;
		}
	};

	// rotate star around y axis
	this.rotateY = function( rotateAngle )
	{
		var currSin, currCos;

		currSin = Math.sin( map.degreeY );
		currCos = Math.cos( map.degreeY );
		this.x = (this.baseX * currCos) + (this.baseZ * currSin);
		this.z = (this.baseX * (-currSin)) + (this.baseZ * currCos);
		this.y = this.baseY;

		if( rotateAngle === undefined )
		{
			map.degreeY += map.rotateAngle;
		}
		else
		{
			map.degreeY += rotateAngle;
		}
	};

	// rotate star around z axis
	this.rotateZ = function( rotateAngle )
	{
		var currSin, currCos;

		currSin = Math.sin( map.degreeZ );
		currCos = Math.cos( map.degreeZ );
		this.x = (this.baseX * currCos) + (this.baseY * (-currSin));
		this.y = (this.baseX * currSin) + (this.baseY * currCos);
		this.z = this.baseZ;

		if( rotateAngle === undefined )
		{
			map.degreeZ += map.rotateAngle;
		}
		else
		{
			map.degreeZ += rotateAngle;
		}
	};
};

function addEventHandlers( mapname )
{
	'use strict';
	var canvas = document.getElementById( mapname );

	$( '#toggle_wormholes' ).on( 'click', function()
	{
		map.toggleWormholes();
	} );
	$( '#toggle_rotation' ).on( 'click', function()
	{
		map.toggleRotation();
	} );
	$( '#toggle_names' ).on( 'click', function()
	{
		map.toggleNames();
	} );
	$( '#toggle_unreachable' ).on( 'click', function()
	{
		map.toggleUnreachable();
	} );
	$( map.renderer.canvas ).on( 'mouseup', function( event )
	{
		map.selectStar( event );
	} );
	$( map.renderer.canvas ).on( 'mouseover', function( event )
	{
		map.stopRotation( event );
		$( '#toggle_rotation' ).prop( 'checked', false );
	} );
	$( map.renderer.canvas ).on( 'mouseout', function( event )
	{
		map.restartRotation( event );
		$( '#toggle_rotation' ).prop( 'checked', map.isMoving );
	} );

	canvas.addEventListener( 'mousemove', function( evt )
	{
		this.drag( canvas, evt );
	}, false );
}

$( document ).ready( function()
                     {
	                     'use strict';
	                     var mapname = 'starmap';

	                     map.initialize( mapname );
	                     addEventHandlers( mapname );
	                     $( '#toggle_wormholes' ).prop( 'checked', true );
	                     $( '#toggle_rotation' ).prop( 'checked', true );
	                     $( '#toggle_names' ).prop( 'checked', true );
	                     $( '#toggle_unreachable' ).prop( 'checked', true );
                     } );