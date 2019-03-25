
$(function(){
    InitRenderer();
    InitScene();
    render();
});

// 初始化渲染器 -------------------------------------------------------------------------
function InitRenderer(){
    
    renderer = new THREE.WebGLRenderer({
        antialias : true
    });
    
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize(width, height);

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    // renderer.shadowMap.renderSingleSided = false;
    // renderer.shadowMap.renderReverseSided = false;

    document.getElementById('play-window').appendChild(renderer.domElement);
    effect = new THREE.OutlineEffect( renderer );
}

// 初始化场景 ---------------------------------------------------------------------------
var stat;
var renderer, effect, scene, camera, cameraControl, mesh;
var helper;
var width = document.getElementById('play-window').clientWidth;
var height = document.getElementById('play-window').clientHeight;

function InitScene(){
    scene = new THREE.Scene();
    // scene.background = new THREE.Color( 0xffffff );
    scene.background = new THREE.CubeTextureLoader().setPath('textures/cube/Park2/')
            .load( [
                'px.jpg',
                'nx.jpg',
                'py.jpg',
                'ny.jpg',
                'pz.jpg',
                'nz.jpg'
            ] );
    
    //光线---------------------------------------------------------
    var ambient = new THREE.AmbientLight( 0x333333 );
	scene.add( ambient );

    var spotLight = new THREE.SpotLight(0x666666);
    spotLight.position.set(-100, 300, 10);
    spotLight.castShadow = true;
    //设置阴影分辨率
    spotLight.shadow.mapSize.width = 4096;
    spotLight.shadow.mapSize.height = 4096;

    scene.add( spotLight );

    // //天空效果
    // var sky = new THREE.Sky();
    // scene.add(sky.mesh);

    // //天空中太阳----------------------------------------------------
    // var sunSphere = new THREE.Mesh(
    //     new THREE.SphereBufferGeometry( 20000, 16, 8 ),
    //     new THREE.MeshBasicMaterial( { color: 0xffffff } )
    // );
    // sunSphere.position.y = 700000;
    // sunSphere.visible = false;
    // scene.add(sunSphere);

    // var distanceSky = 400000;
    // var effectControllerSky  = {
    //     turbidity: 10,
    //     rayleigh: 2,
    //     mieCoefficient: 0.005,
    //     mieDirectionalG: 0.8,
    //     luminance: 1,
    //     inclination: 0.0, // elevation / inclination
    //     azimuth: 0.25, // Facing front,
    //     sun: ! true
    // };
    // var uniforms = sky.uniforms;
    // var uniforms = sky.uniforms;
    // uniforms.turbidity.value = effectControllerSky.turbidity;
    // uniforms.rayleigh.value = effectControllerSky.rayleigh;
    // uniforms.luminance.value = effectControllerSky.luminance;
    // uniforms.mieCoefficient.value = effectControllerSky.mieCoefficient;
    // uniforms.mieDirectionalG.value = effectControllerSky.mieDirectionalG;

    // var theta = Math.PI * ( effectControllerSky.inclination - 0.5 );
    // var phi = 2 * Math.PI * ( effectControllerSky.azimuth - 0.5 );

    // sunSphere.position.x = distanceSky * Math.cos( phi );
    // sunSphere.position.y = distanceSky * Math.sin( phi ) * Math.sin( theta );
    // sunSphere.position.z = distanceSky * Math.sin( phi ) * Math.cos( theta );

    // sunSphere.visible = effectControllerSky.sun;

    // sky.uniforms.sunPosition.value.copy( sunSphere.position );
    
    

    //普通地面------------------------------------------------------
    var planeSize = 20;
    var planeGeometry = new THREE.PlaneGeometry(planeSize * 10, planeSize * 10);
    var planeMaterial = new THREE.MeshLambertMaterial({
        color: 0xeeeeee
    });

    var plane = new THREE.Mesh(planeGeometry, planeMaterial);
    
    plane.castShadow = true;
    plane.receiveShadow = true;
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.y = 0;
    plane.position.z = 0;
    scene.add(plane);

    
    //镜面地面------------------------------------------------------
    var mirrorPixelRatio = 2;
    var groundMirror = new THREE.Mirror( planeSize * 100, planeSize * 100, {
        clipBias: 0.003,
        //镜面分辨率
        textureWidth: width*mirrorPixelRatio * window.devicePixelRatio,
        textureHeight: height*mirrorPixelRatio * window.devicePixelRatio,
        color: 0x777777
    } );
    groundMirror.rotateX( - Math.PI / 2 );
    groundMirror.receiveShadow = true;
    // scene.add( groundMirror ); 
    
    //相机----------------------------------------------------------
    camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 2000 );
    camera.position.y = 20;
    camera.position.z = 50;
    cameraControl = new THREE.OrbitControls(camera, renderer.domElement);
    // cameraControl.target = new THREE.Vector3()

    var onProgress = function ( xhr ) {
        if ( xhr.lengthComputable ) {
            var percentComplete = xhr.loaded / xhr.total * 100;
            console.log( Math.round(percentComplete, 2) + '% downloaded' );
        }
    };

    var onError = function ( xhr ) {
    };

    //模型路径
    // var modelFile = 'models/mmd/miku/miku_v2.pmd';
    // var vmdFiles = [ 'models/mmd/vmds/wavefile_v2.vmd' ];
    // var cameraFiles = [ 'models/mmd/vmds/wavefile_camera.vmd' ];
    // var audioFile = 'models/mmd/audios/wavefile_short.mp3';

    // var modelFile = 'av0001/mmd/miku/miku_v2.pmd';
    // var vmdFiles = [ 'av0001/mmd/vmds/wavefile_v2.vmd' ];
    // var cameraFiles = [ 'av0001/mmd/vmds/wavefile_camera.vmd' ];
    // var audioFile = 'av0001/mmd/audios/wavefile_short.mp3';

    var modelFile = 'av0003/MIKU/Tda IYDD Miku.pmx';
    var vmdFiles = [ 'av0003/wave.vmd' ];
    var cameraFiles = [ 'av0003/camera.vmd' ];
    var audioFile = 'av0003/201902181554433529.mp3';

    var audioParams = { delayTime: 160 * 1 / 30 };

    helper = new THREE.MMDHelper();

    var loader = new THREE.MMDLoader();

    loader.load( modelFile, vmdFiles, function ( object ) {
        mesh = object;
        mesh.castShadow = true;
        // mesh.receiveShadow = true;
        scene.add(mesh);

        helper.add( mesh );
		helper.setAnimation( mesh );
        helper.setPhysics( mesh );
        
        loader.loadVmds( cameraFiles, function ( vmd ) {

            helper.setCamera( camera );

            loader.pourVmdIntoCamera( camera, vmd );
            helper.setCameraAnimation( camera );
            helper.doCameraAnimation = true;
            loader.loadAudio( audioFile, function ( audio, listener ) {

                listener.position.z = 1;

                helper.setAudio( audio, listener, audioParams );

                /*
                 * Note: call this method after you set all animations
                 *       including camera and audio.
                 */
                helper.unifyAnimationDuration();

                scene.add( audio );
                scene.add( listener );
                scene.add( mesh );

                ready = true;

            }, onProgress, onError );

        }, onProgress, onError );

    }, onProgress, onError );
    
    document.addEventListener( 'mousemove', onDocumentMouseMove, false );
}


//--------------------------------------------------------------------------------
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;
var mouseX = 0, mouseY = 0;
function onDocumentMouseMove( event ) {

    mouseX = ( event.clientX - windowHalfX ) / 2;
    mouseY = ( event.clientY - windowHalfY ) / 2;

}

//动画-----------------------------------------------------------------------------
var clock = new THREE.Clock();
function render() {
    if ( ready ) {
        //模型动作渲染  参数：时间差  效果：不同时间来产生不同帧 达到动画效果
        helper.animate( clock.getDelta() );
    }
    else if( pause ){
        // helper.animate( 0 );
        clock.getDelta();
    }

    // cameraControl.update();
    renderer.render( scene, camera );
    effect.render( scene, camera );
    requestAnimationFrame(render);
}

//进入全屏---------------------------------------------------------------------
function requestFullScreen() {
    var de = document.documentElement;
    if (de.requestFullscreen) {
        de.requestFullscreen();
    } else if (de.mozRequestFullScreen) {
        de.mozRequestFullScreen();
    } else if (de.webkitRequestFullScreen) {
        de.webkitRequestFullScreen();
   }
}
//退出全屏---------------------------------------------------------------------
function exitFullscreen() {
    var de = document;
    if (de.exitFullscreen) {
        de.exitFullscreen();
    } else if (de.mozCancelFullScreen) {
        de.mozCancelFullScreen();
    } else if (de.webkitCancelFullScreen) {
        de.webkitCancelFullScreen();
    }            
}

//判断全屏---------------------------------------------------------------------
function isFullscreen() {
    var de = document;
    var fullscreenElement =
        de.fullscreenEnabled
        || de.mozFullscreenElement
        || de.webkitFullscreenElement;
    var fullscreenEnabled =
        de.fullscreenEnabled
        || de.mozFullscreenEnabled
        || de.webkitFullscreenEnabled;
    if (fullscreenElement == null)
    {
        return false;
    } else {
        return true;
    }
}

//屏幕尺寸变化---------------------------------------------------------------------
function HandleResize() {
    // SLOG("屏幕发生变化");

    if(isFullscreen()){
        // SLOG("全屏");
        $("body").css({
          "overflow":"hidden"
        });
        $("canvas").css({
          "border-radius":"0px",
        });
        $(".play").css({
            "width":window.innerWidth+"px",
            "height":window.innerHeight+"px"
        })
        

       }else{
            // SLOG("退出全屏");

            $("body").css({
                "overflow":""
            });
            $("canvas").css({
                "border-radius":"5px",
            });
            $(".play").css({
                "width":"1140px",
                "height":""
            })
            
          
        } 
       width = document.getElementById('play-window').clientWidth;
       height = document.getElementById('play-window').clientHeight;
       camera.aspect = width / height;
       camera.updateProjectionMatrix();
       renderer.setSize( width, height );
}

window.addEventListener('resize', HandleResize, false);