
Design = React.createClass({
  render() {
    return (
      <div>

      <div id="canvas"></div>
        <h1>Design</h1>
    <button onclick="draw()">Draw</button>

      </div>

    );
  }
});

 draw = function(){

        var container = document.getElementById( 'canvas' );
        document.body.appendChild( container );
        renderer = new THREE.WebGLRenderer();
        renderer.setSize( CANVAS_WIDTH, CANVAS_HEIGHT );
        container.appendChild( renderer.domElement );



var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );
//document.getElementById("Design").appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true} );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

var render = function () {
  requestAnimationFrame( render );

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
};

render();
};
