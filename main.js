// Seleccionar todas las secciones
const sections = document.querySelectorAll('section');

// Ocultar todas las secciones, excepto la del menú
sections.forEach(section => {
    if (!section.classList.contains('menu') && !section.classList.contains('title')) {
        section.style.display = 'none';
  }
});

// Seleccionar todos los enlaces del menú
const menuLinks = document.querySelectorAll('.menu__list__item a');

// Agregar el evento de clic a cada enlace
menuLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    // Prevenir el comportamiento predeterminado del enlace
    event.preventDefault();

    // Obtener el ID de la sección a mostrar
    const targetId = event.target.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    // Ocultar todas las secciones, excepto la del menú
    sections.forEach(section => {
      if (section !== targetSection && !section.classList.contains('menu')
        && !section.classList.contains('title')) {
        section.style.display = 'none';
      } else {
        section.style.display = 'block';
      }
    });
  });
});

const presentacion = document.querySelector(".title__bio");
const subPresentacion = document.querySelector(".title__subsection");
const sobreMi = document.querySelector(".about__paragraph");
const sobreMimas = document.querySelector(".about__me");

presentacion.textContent=
"Hola mi nombre es Ramiro Andres Tejedor Gonzalez, saludos a todos";
subPresentacion.textContent=
"Soy Administrador de Empresas, Auxiliar Contable y con estudios en Analisis de Datos. ademas recientemente inmerso en la proramacion con el desarrollo de web.";
sobreMi.textContent = 
"Me considero alguien que trabaja primero que todo por satisfacción personal, apasionado del aprendizaje continuo y la capacidad para consolidar mi perfil profesional. Destaco por comunicar resultados de manera efectiva a líderes y equipos."
sobreMimas.textContent =
"Mi enfoque administrativo se basa en la gestión y delegación efectiva de funciones para alcanzar objetivos, respaldado por aptitudes interpersonales que facilitan la adaptación a diversos contextos y la construcción de relaciones sólidas."
