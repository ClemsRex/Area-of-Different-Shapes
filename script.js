const form = document.getElementById('triangle-form');
const resultElement = document.getElementById('result');

//AREA OF A PENTAGON

function CaculatePentagon() {
    const A = parseFloat(form.elements['a'].value);

    if(!A) {
        alert('please, fill the input field');
    }
    else {
        const sqrt1 = Math.sqrt(5);
        const sqrt2 = Math.sqrt(5 * (5 +  2 * sqrt1));

        const areaOfAPentagon = 1 / 4 * sqrt2 * A**2;

        resultElement.innerHTML = `The area of a pentagon is ${areaOfAPentagon.toFixed(2)}` ;
    }

}


// Area of a Triangle 


 function CaculateTriangle() {
     const base = parseFloat(form.elements['base'].value); 
     const height = parseFloat(form.elements['height'].value); 

     if (!base || !height) {
         alert('please, fill in both input field');
     }    
     else {
         const areaOfATriangle = 1/2 * base * height;
        
         resultElement.innerHTML = `The area of a triangle is ${areaOfATriangle.toFixed(2)}`;
     }

 }


// Area of a Circle


 function CaculateCircle() {
     const radius = parseFloat(form.elements['radius'].value);

     if(!radius) {
         alert('please, fill the input field');
     }
     else {

         const areaOfACircle = Math.PI * radius**2

         resultElement.innerHTML = `The area of a Circle is ${areaOfACircle.toFixed(2)}` ;
     }

 }




//  AREA OF A TRAPEZIUM


function CaculateTrapezium()  {
    const base1 = parseFloat(form.elements['base1'].value); 

    const base2 = parseFloat(form.elements['base2'].value); 

    const height = parseFloat(form.elements['height'].value); 

    if (!base1 || !base2 || !height) {
        alert('please, fill in both input field');
    }    
    else {

        const areaOfATrapezium = 1/2 * (base1 + base2) * height
        
        resultElement.innerHTML = `The area of a Trapezium is ${areaOfATrapezium.toFixed(2)}`;
    }


}


// AREA OF AN OCTAGON 


 function CaculateOctagon() {
     const A = parseFloat(form.elements['a'].value);

     if(!A) {
         alert('please, fill the input field');
     }
     else {
         const sqrt =1 + Math.sqrt(2)

         const areaOfAnOctagon = 2 * sqrt * A**2    

         resultElement.innerHTML = `The area of a pentagon is ${areaOfAnOctagon.toFixed(2)}` ;
     }

 }


// AREA OF A PYRAMID


function CaculatePyramid()  {
    const baseL = parseFloat(form.elements['baseL'].value); 

    const baseW = parseFloat(form.elements['baseW'].value); 

    const height = parseFloat(form.elements['height'].value); 

    if (!baseL || !baseW || !height) {
        alert('please, fill in both input field');
    }    
    else {
        
        const sqrt1 = Math.sqrt((baseW/2)**2 + height**2)

        const sqrt2 = Math.sqrt((baseL/2)**2 + height**2)
        const areaOfAPyramid = baseL * baseW + baseL * sqrt1 + baseW * sqrt2
        
        resultElement.innerHTML = `The area of a Pyramid is ${areaOfAPyramid.toFixed(2)}`;
    }

}
