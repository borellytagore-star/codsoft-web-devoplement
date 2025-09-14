var header= document.getElementById("header");
            var ms= document.getElementById("DUCATI PANIGALE V4");
            var ml= document.getElementById("KAWASAKI NINJA H2R");
            var ma= document.getElementById("YAMAHA YZF-R1");
            var mc= document.getElementById("TRIUMPH ");
            var m3= document.getElementById("SUZUKI");
            var mx= document.getElementById("BMW");
            var my= document.getElementById("KTM");
            var model= document.getElementById("model");
            var mph= document.getElementById("mph");
            var speed= document.getElementById("speed");
            var range= document.getElementById("range");

            ms.onclick=function(){
                header.style.backgroundImage="url(https://images.unsplash.com/photo-1698695067900-2bcfca3d2071?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
                model.innerHTML="DUCATI PANIGALE V4";
                mph.innerHTML="1.2s";
                speed.innerHTML="299 mph";
                range.innerHTML="300 mi";
            }
            ml.onclick=function(){
                header.style.backgroundImage="url(https://images.unsplash.com/photo-1590498886106-6f44f039f87f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
                model.innerHTML="KAWASAKI NINJA H2R";
                mph.innerHTML="1.8s" ;
                speed.innerHTML="300 mph";
                range.innerHTML="279 mi"
            }
            ma.onclick=function(){
                header.style.backgroundImage="url(https://images.unsplash.com/photo-1676740460020-6c6892a2a6bb?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
                model.innerHTML="YAMAHA YZF-R1";
                mph.innerHTML="1.3";
                speed.innerHTML="350 mph";
                range.innerHTML="307 mi";
                alert("Coming Soon!");
                }
            ma.onclick=function(){
                header.style.backgroundImage="url(https://images.unsplash.com/photo-1623837244511-6d60815e43aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9uZGElMjBjYnIxMDAwcnJ8ZW58MHx8MHx8fDA%3D)"
                model.innerHTML="Volante Black-Bronze Satin";
                mph.innerHTML="1.1s";
                speed.innerHTML="350 mph";
                range.innerHTML="307 mi";
                alert("Coming Soon!");
                }
            mc.onclick=function(){
                header.style.backgroundImage="url(https://images.unsplash.com/photo-1631612428126-75b988d3950e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHN1cGVyYmlrZXxlbnwwfHwwfHx8MA%3D%3D)"
                model.innerHTML="triumph";
                mph.innerHTML="1.4s";
                speed.innerHTML="390 mph";
                range.innerHTML="207 mi"
                    }


            m3.onclick=function(){
                header.style.backgroundImage="url(https://images.unsplash.com/photo-1698765319505-5782763c1f89?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SEFZQUJVU0F8ZW58MHx8MHx8fDA%3D)";
                model.innerHTML="SUZUKI";
                mph.innerHTML="1.7s";
                speed.innerHTML="350 mph";
                range.innerHTML="500 mi";
            }
            mx.onclick=function(){
                header.style.backgroundImage="url(https://images.unsplash.com/photo-1545623703-583dd2364bbd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
                model.innerHTML="BMW";
                mph.innerHTML="2.5s";
                speed.innerHTML="420 mph";
                range.innerHTML="450 mi";
            }
            my.onclick=function(){
                header.style.backgroundImage="url(https://images.unsplash.com/photo-1623785400450-b6c53dfc8416?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
                model.innerHTML="KTM";
                mph.innerHTML="3.5s";
                speed.innerHTML="450 mph";
                range.innerHTML="350 mi";
            }