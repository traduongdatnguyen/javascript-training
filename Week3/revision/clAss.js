class student {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

    getName(){
        return this.name;
    }
    getAddress(){
        return this.address;
    }


}
var prints = new student('nguyen', 'danang');
console.log(prints);