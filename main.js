// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (specimenNum, dna) => {

  return {
    specimenNum,
    dna,

    mutate() {

      for (let i = 0; i < this.dna.length; i++) {
          let currentBase = this.dna[i];
          let differentBase = returnRandBase();

          while (currentBase == differentBase) {
            differentBase = returnRandBase();
          }
          this.dna[i] = differentBase;
      } 
      return this.dna; 
    },

    compareDNA(pAequorObj) {
      let dnaMatches = 0;
      
      //compare two arrays

      for(let i=0; i < pAequorObj.dna.length; i++){

          if(pAequorObj.dna[i] == this.dna[i]){
            dnaMatches++;
          }
      }

      let message = "specimen #" + this.specimenNum + " and specimen #" + pAequorObj.specimenNum + " have " + (100/(pAequorObj.dna.length/dnaMatches)) + "% DNA in common";
      
      console.log(message);

    },

  willLikelySurvive() {
      let willSurvive = this.dna.filter(item => 
        item === 'C' || item === 'G');
      let percent = (willSurvive.length / this.dna.length) * 100;
      if(percent >= 60){
        return true;
      }else {
        return false;
      };
    }
  }
}
//end factory script
const makeThirty = (instance) => {
  let pAequorStrong = [];
  iterations = 30;

  for(let i = 0; i < instance.length; i++)
    do{
      if(pAequorFactory.willLikelySurvive == true){
        pAequorStrong.push(instance[i]);
      }
  } while (i<= iterations);
}







// let pAequor1 = pAequorFactory(9, ['A', 'C', 'T', 'T']);
// let pAequor2 = pAequorFactory(11, ['C', 'C', 'C', 'T']);
// pAequor2.mutate();
// pAequor2.mutate();
// console.log(pAequor2.willLikelySurvive(pAequor2));
// console.log(pAequor.dna);




