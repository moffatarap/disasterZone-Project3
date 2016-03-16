function changeIt(objName)
{
	//gets element ids
	var obj = document.getElementById(objName);
	
	//Array for assigning image container elements to divs 
	var imageContainer = new Array();
	
	//Assigning values to eh Object id array
	imageContainer [0] = "image1";
	imageContainer [1] = "image2";
	imageContainer [2] = "image3";
	imageContainer [3] = "image4";
	imageContainer [4] = "image5";
	imageContainer [5] = "image6";
	imageContainer [6] = "image7";
	imageContainer [7] = "image8";
	
	
	//i is assigned as the variable for the loop 
	var i;
	
	
	var tempObj;
	
	// for loop assigning image to divs
	for(i=0;i<imageContainer .length;i++)
	{
		if(objName == imageContainer [i])
		{
			obj.style.display = "block";
		}
		else
		{
			tempObj = document.getElementById(imageContainer [i]);
			tempObj.style.display = "none";	
		}
	}
	

    //varable to set url of hyperlinks
    var className = $('#image').attr('one');
    var className = $('#image').attr('two');
    //Image one

    //left button set pannel 8
    if (imageContainer = [0])
    {
    one = href="#" onclick="changeIt('image1');
    }

    //right button set to page 2
    if (imageContainer = [1])
    {
        one = panel1.swf;
        two = pannel3.swf;

    }
    return;
}
