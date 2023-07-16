function makeTshirt(size: string = 'L', message:string= "I love Typescript"){
    if(size ==='L' || size === 'M'){
        console.log(`Making T shirt of size ${size} and message ${message}`)
    }
    else{
        console.log(`Making T shirt of size ${size} and message ${message}`)
    }
}
makeTshirt('M')
makeTshirt('L')
makeTshirt('S', 'This is PIAIC')

