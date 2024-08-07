// Spread Operator pada Array
const angka1 = [20, 21];
const angka2 = [...angka1, 22, 23, 24];
console.log(angka2); // Output: [20, 21, 22, 23, 24]

// Spread Operator pada Object
const user1 = { nama: "Yosu", umur: 48 };
const user2 = { ...user1, pekerjaan: "Manager Pertamina" };
console.log(user2); // Output: { nama: "Yosu", umur: 48, pekerjaan: "Manager Pertamina" }
