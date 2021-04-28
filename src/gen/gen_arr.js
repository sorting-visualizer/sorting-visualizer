function generate(size){
    return Array.from({length: size}, () => Math.floor(Math.random() * 80));
}
export default generate