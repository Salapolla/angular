import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConexionService } from '../conexion.service';

@Component({
  selector: 'app-lista-detalle',
  templateUrl: './lista-detalle.component.html',
  styleUrls: ['./lista-detalle.component.css']
})
export class ListaDetalleComponent implements OnInit {

  private numeroFac;
  private modifica: boolean = false;
  private textoBoton: string = "Añadir Detalle";
  private facturaId: number;
  private datosFac: Object;
  public detalles: Object = {
    id_factura: this.facturaId,
    cantidad: "",
    concepto: "",
    precio: "",
    tipo_iva: ""
  };
  private iva;
  private total;
  private valido: boolean = false;

  constructor(private conexion: ConexionService, private rute: ActivatedRoute) {
    this.numeroFac = this.rute.snapshot.params["numeroF"];
    this.facturaId = this.rute.snapshot.params["id"];

  }

  ngOnInit() {
    this.conexion.detalles(this.facturaId).subscribe(datacos => {
      this.datosFac = datacos;
      this.calcularIva(this.datosFac);

    });
  }
  calcularIva(datosFac) {
    for (let datos of datosFac) {
      this.iva = (datos.precio * datos.cantidad * datos.tipo_iva) / 100;
      this.total = (datos.precio * datos.cantidad) + this.iva;

    }
  }
  anadir(cantidad, concepto, precio, tipo_iva) {
    if (this.modifica == false) {
      this.detalles = {
        id_factura: this.facturaId,
        cantidad: cantidad,
        concepto: concepto,
        precio: precio,
        tipo_iva: tipo_iva
      }
      this.conexion.anadir(this.detalles).subscribe(datacos => {
        this.datosFac = datacos;
      });
    } else {
      this.conexion.modificar(this.detalles).subscribe(datacos => {
        this.datosFac = datacos;
      });
    }
    this.detalles = {
      id_factura: this.facturaId,
      cantidad: "",
      concepto: "",
      precio: "",
      tipo_iva: ""
    }
    this.validar();
    this.textoBoton = "Añadir Detalle";
    this.modifica = false;
  }

  modificar(cantidad, concepto, precio, tipo_iva, id) {
    this.textoBoton = "Modificar Detalle"
    this.validar();
    this.detalles = {
      id_factura: this.facturaId,
      cantidad: cantidad,
      concepto: concepto,
      precio: precio,
      tipo_iva: tipo_iva,
      id: id
    }

    this.modifica = true;
  }

  borrar(id) {

    var confirmar = confirm("¿Seguro que desea eliminar este detalle?")
    if (confirmar == true) {
      this.conexion.eliminar(id, this.facturaId).subscribe(datacos => {
        this.datosFac = datacos;
      });
    } else {
      return false;
    }

  }

  validar() {
    if (this.valido == false) {
      this.valido = true;
    } else {
      this.valido = false;
    }
    this.detalles = {
      id_factura: this.facturaId,
      cantidad: "",
      concepto: "",
      precio: "",
      tipo_iva: ""
    }
  }
}