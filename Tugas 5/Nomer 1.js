let newCallback = (nama, asal) => {
  console.log(`${nama} ${asal}`);
  pulang();
};

let pulang = () => {
  console.log("Pulang Kampung");
};

let nama = "adi";
let asal = "yusuf";

newCallback(nama, asal, pulang);
