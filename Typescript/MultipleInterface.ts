interface House {
    bedrooms: number;
    bathrooms: number;
}
interface Mansion {
    bedrooms: number;
    bathrooms: number;
    butlers: number;
}
var myVilla: House = {
    bedrooms: 3,
    bathrooms: 3,
 //   butlers: 1
};

 var mansion1: Mansion = <Mansion>myVilla;   //  convert House to Mansion
 console.log("mansion1: ",  mansion1);