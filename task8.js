// Membuat Class
class Person {
    constructor(nama, umur) {
      this.nama = nama;
      this.umur = umur;
    }
  
    perkenalan() {
      return `Halo, nama saya ${this.nama} dan saya berumur ${this.umur} tahun.`;
    }
  }
  
  const Dhiaraqi = new Person("Dhiaraqi", 26);
  console.log(Dhiaraqi.perkenalan()); // Output: Halo, nama saya Dhiaraqi dan saya berumur 26 tahun.
  
  // Inheritance
  class Guru extends Person {
    constructor(nama, umur, mataPelajaran) {
      super(nama, umur);
      this.mataPelajaran = mataPelajaran;
    }
  
    mengajar() {
      return `Saya mengajar ${this.mataPelajaran}.`;
    }
  }
  
  const bapakDhiaraqi = new Guru("Dhiaraqi", 26, "React JS");
  console.log(bapakDhiaraqi.perkenalan()); // Output: Halo, nama saya Dhiaraqi dan saya berumur 26 tahun.
  console.log(bapakDhiaraqi.mengajar());   // Output: Saya mengajar React JS.
  