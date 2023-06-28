class orden_compra{
    private folio_oc: string | null;
    private fecha: string | null;
    private folio_ct: string | null ;
    
    constructor(folio_oc:string,fecha:string,folio_ct:string){
        this.folio_oc = folio_oc;
        this.folio_ct = folio_ct;
        this.fecha = fecha;
     }
     public getfolio_oc(): string {
        return this.folio_oc!;
      }
    
      public setfolio_oc(folio_oc: string): void {
        this.folio_oc= folio_oc
    }
    public getfolio_ct(): string {
        return this.folio_ct!;
      }
    
      public setfolio_ct(folio_ct: string): void {
        this.folio_ct= folio_ct
    }
    public getfecha(): string {
        return this.fecha!;
      }
    
      public setfecha(fecha: string): void {
        this.fecha= fecha
    }
    public deletedata(dataTodelete: any): void {
        if (this.folio_oc === dataTodelete || this.folio_ct === dataTodelete || this.fecha === dataTodelete) {
          this.folio_oc = null;
          this.folio_ct = null; 
          this.fecha = null;
        
        }
}