      function getRandomColor() {
            var c = new THREE.Color();
            c.setRGB( Math.random(), Math.random(), Math.random() );
            return c;
        }

        function convertColor(r, g, b) {
            var c = new THREE.Color();
            c.setRGB(r/255, g/255, b/255);
            return c;
        }