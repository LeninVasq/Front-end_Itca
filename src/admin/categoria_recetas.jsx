import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaBook } from 'react-icons/fa';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Categoria_recetas = () => {
  // Estado para almacenar las categorías obtenidas desde la API
  const [categorias, setCategorias] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); // Página actual
  const [categoriasPorPagina, setCategoriasPorPagina] = useState(9); // Número de categorías por página
  const [searchTerm, setSearchTerm] = useState(""); // Término de búsqueda

  // useEffect para hacer la petición a la API y obtener las categorías
  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/cate_recetas');
        const data = await response.json();
        // Asignamos el array de categorías al estado
        setCategorias(data.categoria_recetas);
      } catch (error) {
        console.error('Error al obtener las categorías:', error);
      }
    };

    fetchCategorias();
  }, []); // El array vacío asegura que solo se ejecute una vez, al montar el componente

  const indexOfLastCategory = (currentPage + 1) * categoriasPorPagina;
  const indexOfFirstCategory = indexOfLastCategory - categoriasPorPagina;
  
  const currentCategorias = categorias
    .filter(categoria => categoria.nombre.toLowerCase().includes(searchTerm.toLowerCase()))
    .slice(indexOfFirstCategory, indexOfLastCategory);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Listado de Categorías</h1>

      {/* Barra de búsqueda */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar categoría..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Actualiza el término de búsqueda
        />
      </div>

      <div className="row">
        {currentCategorias.length > 0 ? (
          currentCategorias.map((categoria) => (
            <div className="col-md-4 mb-4" key={categoria.id_categoria_recetas}>
              <Card>
                <Card.Body>
                  <div className="text-center mb-3">
                    {/* Icono para representar la categoría */}
                    <FaBook size={80} color="#007bff" />
                  </div>
                  {/* Mostramos el nombre y la descripción de la categoría */}
                  <Card.Title>{categoria.nombre}</Card.Title>
                  <Card.Text>{categoria.descripcion}</Card.Text>
                  <div className="d-flex justify-content-between">
                    {/* Botón "Ver más" */}
                    <Button variant="success">Ver más</Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          // Si no hay categorías disponibles o no coinciden con la búsqueda
          <div className="col-12 text-center">
            <p>No hay categorías disponibles</p>
          </div>
        )}
      </div>

      {/* Paginación */}
      <div className="d-flex justify-content-center mt-4">
        <ReactPaginate
          previousLabel={'Anterior'}
          nextLabel={'Siguiente'}
          breakLabel={'...'}
          pageCount={Math.ceil(categorias.filter(categoria => categoria.nombre.toLowerCase().includes(searchTerm.toLowerCase())).length / categoriasPorPagina)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={4}
          onPageChange={handlePageClick} // Cambiar página
          containerClassName={'pagination'}
          activeClassName={'active'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
          previousClassName={'page-item'}
          previousLinkClassName={'page-link'}
          nextClassName={'page-item'}
          nextLinkClassName={'page-link'}
        />
      </div>
    </div>
  );
};

export default Categoria_recetas;
