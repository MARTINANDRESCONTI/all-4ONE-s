# Ventas

## Listado de Entidades

### water **(ED)**

- mesero_id **(PK)**
- nombres
- telefono **(UQ)**
- email **(UQ)**

### customer **(ED)**

- cliente_id **(PK)**
- cantidad de comensales
- mesa_id **(FK)**

### beer **(ED|EC)**

- cerveza **(PK)**
- precio por pinta
- ml disponibles
<!-- pinta: 570 ml -->

### food **(ED|EC)**

- comida **(PK)**
- precio
- porciones disponibles

### product in the orders **(EP)**

- producto_id **(PK)**
- cliente_id **(FK)**
- mesero_id **(FK)**
- mesa_id **(FK)**
- comida **(FK)**
- porciones
- cerveza **(FK)**
- cantidad de pintas

### sales **(ED)**

- venta_id **(PK)**
- monto total

### table **(EC)**

- mesa_id **(PK)**
- empleado_id **(FK)**

## Relaciones

1. Una **table** es atendido por **water** (_1 - 1_).
1. Una **table** tiene **customers** (_1 - M_).
1. Una **table** tiene **producs in the orders** (_1 - M_).
1. Un **customer** genera **producs in the orders** (_1 - M_).
1. Un **producs in the orders** tiene **beers** (_1 - M_).
1. Un **producs in the orders** tiene **foods** (_1 - M_).

## Diagramas

### Modelo Relacional de la BD

![Diagrama del local](public/image/Diagrama%20del%20Local.png)

## Reglas de Negocio

### product in order

1. Asignar un producto a una orden.
1. Leer los productos de una orden.
1. Modificar un producto de una orden.
1. Eliminar un produnto de una orden.

### comida y bebidas

1. Leer disponibilidad.
1. Por cada venta, restar a la cantidad en stock disponibles.

### venta

1. Ver total de la cuenta.


