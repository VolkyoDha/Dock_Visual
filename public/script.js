document.addEventListener('DOMContentLoaded', async () => {
    const clienteList = document.getElementById('clienteList');
    const productoList = document.getElementById('productoList');

    async function loadProductos() {
        const response = await fetch('/productos');
        if (response.ok) {
            const productos = await response.json();
            productos.forEach(producto => {
                const li = document.createElement('li');
                li.textContent = `${producto.nombre} - $${producto.precio}`;
                productoList.appendChild(li);
            });
        } else {
            console.error('Error al cargar los productos');
        }
    }

    loadProductos();
   
    async function loadClientes() {
        const response = await fetch('/clientes');
        if (response.ok) {
            const clientes = await response.json();
            clientes.forEach(cliente => {
                const li = document.createElement('li');
                li.textContent = `${cliente.nombre} - ${cliente.telefono}`;
                clienteList.appendChild(li);
            });
        } else {
            console.error('Error al cargar los clientes');
        }
    }

    loadClientes();

});
