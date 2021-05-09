var images = ["Chehaq Agrawal.jpg", "Mumma.jpg" , "Taksh Agrawal.jpg", "Papa.jpg",]; 
            var names = [  "Chehaq Agrawal(Me!)", "Pooja Agrawal(Mom)", "Taksh Agrawal(Little Brother)", "Amit Agrawal(Father)"];
            var i = 0;
            function update()
            {
                i++;
                var numbers_of_family_member_in_array = 4
                if(i > numbers_of_family_member_in_array )
                {
                    i = 0;
                }
                var updatedImage = images[i];
                var updatedName  = names[i];
                document.getElementById("family_member_image").src = updatedImage;
                document.getElementById("family_member_name").innerHTML = updatedName;
            }