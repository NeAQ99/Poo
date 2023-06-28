class cotizacion_detalle{
    private subfolioct: number | null ;
    private cantidad: number | null;
    private folio_ct : number | null ;
    private codigo_producto : string | null ;
    private codigo_precio: string | null ;

    constructor( subfolioct:number,cantidad:number,folio_ct:number,codigo_producto:string,codigo_precio:string){
        this.subfolioct = subfolioct;
        this.cantidad = cantidad;
        this.folio_ct = folio_ct;
        this.codigo_producto = codigo_producto;
        this.codigo_precio = codigo_precio;
    }
    public getsubfolioct(): number {
        return this.subfolioct!;
      }
    
      public setsubfolioct(subfolioct: number): void {
        this.subfolioct= subfolioct
      }
      public getcantidad(): number {
        return this.cantidad!;
      }
    
      public setcantidad(cantidad: number): void {
        this.cantidad= cantidad
      }
      public getfolio_ct(): number {
        return this.folio_ct!;
      }
    
      public setfolio_ct(folio_ct: number): void {
        this.folio_ct= folio_ct
      }
      public getcodigo_produto(): string {
        return this.codigo_producto!;
      }
    
      public setcodigo_producto(codigo_producto: string): void {
        this.codigo_producto= codigo_producto
      }
      public getcodigo_precio(): string {
        return this.codigo_precio!;
      }
    
      public setcodigo_precio(codigo_precio: string): void {
        this.codigo_precio= codigo_precio
      }
      public deletedata(dataTodelete: any): void {
        if (this.subfolioct === dataTodelete || this.cantidad === dataTodelete || this.folio_ct === dataTodelete || this.codigo_producto === dataTodelete|| this.codigo_precio === dataTodelete) {
          this.subfolioct = null;
          this.cantidad = null; 
          this.folio_ct = null;
          this.codigo_precio = null;
          this.codigo_producto = null;
        }
}}