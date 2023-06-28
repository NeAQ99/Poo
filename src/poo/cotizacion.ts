class cotizacion{
    private folio: number | null;
    private rut_cliente: number | null;
    private fecha: string | null;
  
    constructor(folio:number,rut_cliente:number,fecha:string){
    this.folio = folio;
    this.rut_cliente = rut_cliente;
    this.fecha = fecha;
    }
    public getfolio(): number {
      return this.folio!;
    }
  
    public setfolio(folio: number): void {
      this.folio= folio
    }
    public getrut_cliente(): number {
      return this.rut_cliente!;
    }
  
    public setrut_cliente(rut_cliente: number): void {
      this.rut_cliente = rut_cliente
    }
    public getfecha(): String {
      return this.fecha!;
    }
  
    public setfecha(fecha: string): void {
      this.fecha = fecha
    }
    public deletedata(dataTodelete: any): void {
      if (this.rut_cliente === dataTodelete || this.folio === dataTodelete || this.rut_cliente === dataTodelete || this.fecha === dataTodelete) {
        this.rut_cliente = null;
        this.folio = null; 
        this.fecha = null;
      
      }
  }
}