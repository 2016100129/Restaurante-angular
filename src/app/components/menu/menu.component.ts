import { Component } from '@angular/core';
import { ProductosService } from 'src/app/services/productos/productos.service';
import { CategoryService } from '../../services/category/category.service';

@Component({
  selector: 'view-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  optionActive = true
  productos: any[] = []
  productosTotales: any[] = []
  productosFiltrados: any[] = []
  categoriasArray: any[] = []
  activeButton: number = 0;

  constructor(
    public productosService: ProductosService,
    public categoryService: CategoryService
  ) { }

  filterItem(param: any) {
    this.productos = this.productosTotales
    if (param === "CATEGORIA-00008") {
      this.productos = this.productosTotales
    } else {
      this.productosFiltrados = this.productos.filter(producto => producto.categoria_producto === param);
      this.productos = this.productosFiltrados
    }
  }

  ngOnInit(): void {
    this.traerProductos()
    this.traerCategorias()
  }

  traerProductos() {
    this.productosService.getProducts().subscribe(response => {
      this.productos = response.data;
      this.productosTotales = response.data;
    })
  }

  traerCategorias() {
    this.categoryService.getCategory().subscribe(response => {
      this.categoriasArray = response.data
    })

  }
}
