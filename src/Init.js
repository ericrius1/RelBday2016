    $(document).ready(function() {
        var canvas = $('#bg');
        var tree = new TreeGenerator(canvas, {
            // indicateNewBranch: true,
            fitScreen: true,
            fadeOut: false,
            minSleep: 100,
            // fadeAmount: 0.005,
            spawnInterval: 100,
            speed: .4
        });
        var image = new Image();
        image.src = "assets/shelby.jpg";
        image.addEventListener("load", function() {
            tree.start(image);
        }, false)

        // Setup dat gui to control variables
        // var gui = new dat.GUI();
        // var f1 = gui.addFolder('Tree growth');
        // f1.add(tree.settings, 'loss', 0, 0.1);
        // f1.add(tree.settings, 'newBranch', 0, 1);
        // f1.add(tree.settings, 'branchLoss', 0, 1);
        // f1.add(tree.settings, 'mainLoss', 0, 1);
        // f1.add(tree.settings, 'initialWidth', 1, 50);
        // var autoMode = f1.add(tree.settings, 'autoSpawn');
        // var autoInterval = f1.add(tree.settings, 'spawnInterval', 0, 1000);
        // var f2 = gui.addFolder('Visuals');
        // f2.add(tree.settings, 'minSleep', 0, 50);
        // f2.add(tree.settings, 'colorful');
        // f2.add(tree.settings, 'speed', 0, 1);
        // f2.add(tree.settings, 'fastMode');
        // f2.add(tree.settings, 'indicateNewBranch');
        // var f3 = gui.addFolder('Fading');
        // var fadeOut = f3.add(tree.settings, 'fadeOut');
        // f3.add(tree.settings, 'fadeAmount', 0, 0.3);

        // autoMode.onChange(function(val) {
        //     tree.start();
        // });

        // fadeOut.onChange(function(val) {
        //     tree.start();
        // });

        // autoInterval.onFinishChange(function() {
        //     tree.start();
        // });

        // gui.remember(tree);
    });