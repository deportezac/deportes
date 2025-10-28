document.addEventListener('DOMContentLoaded', function() {
  const data = [
    { nombre: "Beatriz López Diosdado", cargo: "Regidor", area: "Regidor", ext: "110", telefono: "4924914432" },
    { nombre: "David Arturo García Lira", cargo: "Regidor", area: "Regidor", ext: "112", telefono: "492 923 94 21" },
    { nombre: "M. EN E Claudia Anaya Vázquez", cargo: "Regidor", area: "Regidor", ext: "789", telefono: "492 923 94 21" },
    { nombre: "Christian Martínez Rosales", cargo: "Regidor", area: "Regidor", ext: "118", telefono: "492 923 94 21" },
    { nombre: "Carmen Angélica Lira Sandoval", cargo: "Regidor", area: "Regidor", ext: "120", telefono: "492 923 94 21" },
    { nombre: "Lic. Jessica Astrid Jayme Magaña", cargo: "Regidor", area: "Regidor", ext: "303", telefono: "492 923 94 21" },
    { nombre: "Lic. Sandra Verónica Báez Almanza", cargo: "Regidor", area: "Regidor", ext: "404", telefono: "492 923 94 21" },
    { nombre: "L.A.E. Marcela Alatorre Zesat", cargo: "Regidor", area: "Regidor", ext: "505", telefono: "492 923 94 21" },
    { nombre: "L.C. y T.C Juan Carlos González Gándara", cargo: "Regidor", area: "Regidor", ext: "606", telefono: "492 923 94 21" },
    { nombre: "Reginaldo Ávila Arciniaga", cargo: "Regidor", area: "Regidor", ext: "707", telefono: "492 923 94 21" },
    { nombre: "Mtro. Oscar Contreras Vázquez", cargo: "Regidor", area: "Regidor", ext: "808", telefono: "492 923 94 21" },
    { nombre: "Bernardo Ibarra Juárez", cargo: "Regidor", area: "Regidor", ext: "909", telefono: "492 923 94 21" },
    { nombre: "Mtra. Mariana Anaya Mota", cargo: "Regidor", area: "Regidor", ext: "111", telefono: "492 923 94 21" },
    { nombre: "Lic. Juan Diego García Cruz", cargo: "Regidor", area: "Regidor", ext: "111", telefono: "492 923 94 21" },
 
    
    { nombre: "LIC. MIGUEL ÁNGEL VARELA PINEDO", cargo: "PRESIDENTE MUNICIPAL", area: "PRESIDENTE MUNICIPAL", ext: "202", telefono: "492 923 94 21" },
    { nombre: "LIC. FILIBERTO HERNANDEZ VENEGAS", cargo: "SECRETARIO DE TESORERIA Y FINANZAS MUNICIPALES", area: "FINANZAS MUNICIPALES", ext: "303", telefono: "492 923 94 21" },
    { nombre: "DR. MANUEL CASTILLO ROMERO", cargo: "DIRECTOR GENERAL DE INNOVACION Y DESARROLLO ECONOMICO SUSTENTABLE MUNICIPAL", area: "INNOVACION", ext: "505", telefono: "492 923 94 21" },
    { nombre: "LIC. NANCY ESPINOZA MEDINA", cargo: "DIRECTORA GENERAL DE SOLIDARIDAD Y DESARROLLO HUMANO MUNICIPAL", area: "DESARROLLO HUMANO MUNICIPAL", ext: "606", telefono: "492 923 94 21" },
    { nombre: "MTRA. GUADALUPE CELIA FLORES ESCOBEDO", cargo: "DIRECTORA GENERAL DE CALIDAD DE VIDA Y SERVICIOS PUBLICOS MUNICIPALES", area: "PUBLICOS MUNICIPALES", ext: "707", telefono: "492 923 94 21" },
    { nombre: "M EN C. LUIS FERNANDO MALDONADO MORENO ", cargo: "DIRECTOR GENERAL DE INFRAESTRUCTURA Y OBRA PUBLICA MUNICIPAL", area: "SOBRA PUBLICA MUNICIPAL", ext: "808", telefono: "492 923 94 21" },
    { nombre: "LIC. CARLOS EMILIO RAMIREZ BALTIERRA", cargo: "DIRECTOR GENERAL DE DESARROLLO URBANO Y PATRIMONIO MUNICIPAL", area: "DESARROLLO URBANO", ext: "909", telefono: "492 923 94 21" },
    { nombre: "LIC. MITZIA PELAEZ MEJÍA", cargo: "DIRECTORA DEL DIF MUNICIPAL", area: "DIRECTORA DEL DIF MUNICIPAL", ext: "505", telefono: "492 923 94 21" },
    { nombre: "MTRA, WENDY GUADALUPE VALDEZ ORGANISTA	", cargo: "SINDICO MUNICIPAL", area: "SINDICO MUNICIPAL", ext: "606", telefono: "492 923 94 21" },
    { nombre: "MTRO, GERARDO ZAMORA CASTILLO", cargo: "JEFE DE GABINETE MUNICIPAL", area: "JEFE DE GABINETE MUNICIPAL", ext: "707", telefono: "492 923 94 21" },
    { nombre: "DRA. ELBA LILIANA GARCIA ARREDONDO", cargo: "TITULAR DEL ORGANO INTERNO", area: "ORGANO INTERNOL", ext: "808", telefono: "492 923 94 21" },
    { nombre: "MTRO. GUSTAVO SERRANO OSORNIO", cargo: "SECRETARIO DE SEGURIDAD PUBLICA MUNICIPAL DE ZACATECAS", area: "SEGURIDAD PUBLICA", ext: "808", telefono: "492 923 94 21" },
    { nombre: "L.CYT-C ISRAEL GONZALEZ", cargo: "COMUNICACIÓN SOCIAL", area: "COMUNICACIÓN SOCIAL", ext: "909", telefono: "555-6790" },
    { nombre: "C. ALEJANDRO GOMEZ MARISCAL", cargo: "Director de análisis y riesgos del Ayuntamiento", area: "Director de Analsis del Ingreso", ext: "000", telefono: "000-0000" },

    
    { nombre: "M. en F. Erik Fabian Muñoz Román", cargo: "Secretario del ayuntamiento y Gobierno Municipal", area: "Gobierno Municipal", ext: "111", telefono: "492 923 94 21" },
    { nombre: "Mtro. Gerardo Zamora Castillo", cargo: "Jefe de gabinete municipal ", area: "Jefe de gabinete municipal ", ext: "606", telefono: "492 923 94 21" },
    { nombre: "Lic. Cesar Alejandro Herrera Ceniceros", cargo: "Secretario particular Municipal", area: "Secretario particular Municipal", ext: "707", telefono: "492 923 94 21" },
    { nombre: "Ing. Luis Fernando Maldonado Moreno", cargo: "Director General de Infraestructura y Obra Pública Municipal", area: "Obra Pública Municipal", ext: "808", telefono: "492 923 94 21" },
    { nombre: "Mtra. Guadalupe Celia Flores Escobedo", cargo: "Directora General de Calidad de Vida y Servicios Públicos Municipales", area: "Servicios Públicos Municipales", ext: "909", telefono: "492 923 94 21" },
    
    { nombre: "Mtro. Isaac Alejandro Rivera Ruvalcaba", cargo: "Director General de Medio Ambiente Municipal", area: "Medio Ambiente Municipal", ext: "111", telefono: "492 923 94 21" },
    { nombre: "Arq. Omar Alejandro Silva Luna", cargo: "Director General de Medio Desarrollo Ambiente Municipal", area: "Desarrollo Ambiente Municipal", ext: "606", telefono: "492 923 94 21" },
    { nombre: "Dr. Manuel Castillo Romero", cargo: "Director General de Innovación y Desarrollo Económico Sustentable Municipal", area: "Desarrollo Económico", ext: "707", telefono: "492 923 94 21" },
    { nombre: "Lic. En Psic. María del Mar de Ávila Ibargüengoitia", cargo: "Directora General de Cultura Municipal", area: "Cultura Municipal", ext: "808", telefono: "492 923 94 21" },
    { nombre: "Lic. Marco Antonio García Acuña", cargo: "Director General de Gestión de Personal y Relaciones Laborales Municipal", area: "Gestión de Personal", ext: "909", telefono: "492 923 94 21" },
    
    { nombre: "I.Q. Víctor Manuel Miranda Castro", cargo: "Titular de Instituto de Planeación Municipal", area: "Planeación Municipal", ext: "122", telefono: "492 923 94 21" },
    { nombre: "LIC. Ángel Gerardo Gaeta MORALES", cargo: "Jefe del Departamento del Deporte", area: "Solidaridad y Desarrollo Humano Municipal", ext: "909", telefono: "9278921" },
    { nombre: "Lic. Jaime Murillo Falcón", cargo: "Jefe de Departamento de Evaluación del Personal", area: "Evaluación del Personal", ext: "333", telefono: "492 923 94 21" },
    { nombre: "Lic. Sergio Delgado Carrillo", cargo: "Oficial Mayor", area: "Oficial Mayor", ext: "333", telefono: "492 923 94 21" },

    { nombre: "Lic. Raymundo Moreno Romero", cargo: "Jefe de Comunicaciòn y Voceria", area: "Jefe de Comunicaciòn y Voceria", ext: "000", telefono: "492 92 3 94 21" },
    { nombre: "Lic. Alejandra García Montoya", cargo: "UNIDAD DE ENLACE DE TRASPARENCIA Y ACCESO A LA INFORMACIÓN PÚBLICA", area: "Secretaría del Ayuntamiento y Gobierno", ext: "333", telefono: "4924914438" },
    { nombre: "Dir. Francisco Oswaldo Caldera Murillo ;", cargo: "Director de la Policial Vial", area: "Director de la Policial Vial", ext: "000", telefono: "492 924 5320, 492 924 5420" }


    
  ];

  const tableBody = document.getElementById('tableBody');
  const searchInput = document.getElementById('searchInput');
  const prevPageButton = document.getElementById('prevPage');
  const nextPageButton = document.getElementById('nextPage');
  const pageInfoSpan = document.getElementById('pageInfo');
  const exportButton = document.getElementById('exportButton');

  const itemsPerPage = 7;
  let currentPage = 1;
  let filteredData = [...data];

  function displayData() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageData = filteredData.slice(startIndex, endIndex);

    tableBody.innerHTML = '';
    pageData.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.nombre}</td>
        <td>${item.cargo}</td>
        <td>${item.area}</td>
        <td>${item.ext}</td>
        <td>${item.telefono}</td>
      `;
      tableBody.appendChild(row);
    });

    updatePaginationInfo();
  }

  function updatePaginationInfo() {
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    pageInfoSpan.textContent = `Página ${currentPage} de ${totalPages}`;

    prevPageButton.disabled = currentPage === 1;
    nextPageButton.disabled = currentPage === totalPages || totalPages === 0;
  }

  function filterData() {
    const searchTerm = searchInput.value.toLowerCase();
    filteredData = data.filter(item => {
      return (
        item.nombre.toLowerCase().includes(searchTerm) ||
        item.cargo.toLowerCase().includes(searchTerm) ||
        item.area.toLowerCase().includes(searchTerm) ||
        item.ext.toLowerCase().includes(searchTerm) ||
        item.telefono.toLowerCase().includes(searchTerm)
      );
    });
    currentPage = 1;
    displayData();
  }

  function exportToExcel() {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(filteredData);
    XLSX.utils.book_append_sheet(wb, ws, "Directorio");
    XLSX.writeFile(wb, "directoriopmz.xlsx");
  }

  searchInput.addEventListener('input', filterData);

  prevPageButton.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      displayData();
    }
  });

  nextPageButton.addEventListener('click', () => {
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      displayData();
    }
  });

  exportButton.addEventListener('click', exportToExcel);

  displayData();
});
