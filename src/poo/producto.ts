class producto{
    private codigo_producto: string| null;
    private nombre: string| null;
    private categoria: string | null;
    
    constructor(codigo_producto:string,nombre:string,categoria:string){
    this.codigo_producto = codigo_producto;
    this.nombre = nombre;
    this.categoria = categoria;
    }   
    public getcodigo_producto(): string {
        return this.codigo_producto!;
      }
    
      public setcodigo_producto(codigo_producto: string): void {
        this.codigo_producto= codigo_producto
    }
    public getnombre(): string {
        return this.nombre!;
      }
    
      public setnombre(nombre: string): void {
        this.nombre= nombre
    }
    public getcategoria(): string {
        return this.categoria!;
      }
    
      public setcategoria(categoria: string): void {
        this.categoria= categoria
    }
    public deletedata(dataTodelete: any): void {
        if (this.codigo_producto === dataTodelete || this.nombre === dataTodelete || this.categoria === dataTodelete) {
          this.codigo_producto = null;
          this.nombre = null; 
          this.categoria = null;
        
        }
    }

}