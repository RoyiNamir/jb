let o = {
    name: "meitar",
    age: 0,
    city: {
        name: "tlv",
        gps: {
            earth: {
                geoLocation: {
                    lat: "234324",
                    lon: "4353453"

                }
            }
        }

    }
}

let c = o?.city?.gps?.earth?.geoLocation ; 
console.log(c?.lat ?? "bye");
console.log(c?.lon ?? "bye");




/*
if (o !=null && o.city !=null && o.city.street!=null && o.city.street.length>0)
console.log(o.city.street[0]);
else console.log("bye");*/


//optional chaining

 