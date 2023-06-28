

class Cliente {
    private rut_cliente: number | null;
    private razon_social: string | null;
    private giro: number | null;
    private telefono: number | null;
  
    constructor(rut_cliente:number,razon_social:string,giro:number,telefono:number) {
      this.rut_cliente = rut_cliente;
      this.razon_social = razon_social; 
      this.giro = giro;
      this.telefono = telefono;
    }
  
    public getrut_cliente(): number {
      return this.rut_cliente!;
    }
  
    public setrut_cliente(rut_cliente: number): void {
      this.rut_cliente = rut_cliente
    }
  
    public getrazon_social(): string {
      return this.razon_social!;
    }
  
    public setrazon_social(razon_social: string): void {
      this.razon_social = razon_social;
    }
    public getgiro(): number {
      return this.giro!;
    }
  
    public setgiro(giro: number): void {
      this.giro = giro
    }
    public gettelefono(): number {
      return this.telefono!;
    }
  
    public settelefono(telefono: number): void {
      this.telefono= telefono
    }
    public deletedata(dataTodelete: any): void {
      if (this.rut_cliente === dataTodelete || this.razon_social === dataTodelete || this.giro === dataTodelete || this.telefono === dataTodelete) {
        this.rut_cliente = null;
        this.razon_social = null; 
        this.giro = null;
        this.telefono = null;
      }
    }
  }


 
  