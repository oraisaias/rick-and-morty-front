# Rick & Morty UI Challenge – Frontend Developer Test

Este proyecto fue desarrollado como parte de una prueba técnica para una vacante de Frontend Developer. La aplicación está construida con Next.js 13, TypeScript, CSS Modules y Redux Toolkit.
<p align="center">
  <img src="/public/images/image.png" alt="Preview del proyecto" width="500" />
</p>


🚀 **Demo online:**  
https://rick-and-morty-front-xi.vercel.app


## 📦 Instrucciones para levantar el proyecto

Clona el repositorio:

```bash
git clone https://github.com/oraisaias/rick-and-morty-front.git
cd rick-and-morty-front
```

Instala dependencias:

```bash
yarn install

```

Ejecuta el servidor de desarrollo:

```bash
yarn dev
```

Ejecutar pruebas unitarias:

```bash
yarn test
```

## 💡 ¿Qué es lo que más me gustó de mi desarrollo?
Disfruto profundamente el proceso de codificar y transformar un diseño en una interfaz funcional. Me gustó:

- Poder enfocarme en los detalles visuales y de interacción, como la transición del scroll o el posicionamiento exacto de los elementos.
- Reproducir el diseño lo más fiel posible, incluso en versión mobile, ajustando el comportamiento con media queries, position y z-index.
- Que fuera una excelente oportunidad para recordar y poner en práctica conceptos técnicos del día a día.
- Poder balancear la ayuda de la IA con mi experiencia para tomar decisiones técnicas informadas.

Por supuesto, me apasiona codificar, pero también valoro el equilibrio: sé que podría dedicarle aún más tiempo y dejar el proyecto “exquisito”, pero parte de la experiencia es saber cuándo es suficiente y cuándo priorizar la entrega y la calidad sobre la perfección absoluta.


## 🛠️ ¿Qué hubiera mejorado si hubiera tenido más tiempo?
Por supuesto, los assets no se envían típicamente junto con el proyecto, pero dado el enfoque visual y la naturaleza específica de esta prueba, me pareció más práctico incluirlos directamente en el repositorio para facilitar la evaluación. Subirlos por separado habría sido innecesariamente complejo para el objetivo de esta entrega.

Si hubiera contado con más tiempo:

Habría optimizado aún más las imágenes, recortando el fondo para que coincidiera exactamente con el diseño original.

Habría pulido el slider de favoritos en la versión mobile.

Mejorado la estructura de estilos para hacerla aún más escalable y desacoplada.

Incorporado mejores estados de carga y manejo de errores.

Ampliado la cobertura de pruebas unitarias, especialmente en los flujos que involucran Redux.

Agregado prácticas avanzadas de accesibilidad y refinado aún más la arquitectura del CSS.

No lo hice, no porque no sepa cómo hacerlo, sino porque en pruebas técnicas considero importante entregar una solución clara, funcional, bien estructurada y ajustada a los requerimientos. La experiencia también consiste en saber cuándo algo es suficiente y evitar “matar moscas a cañonazos”.

## 🐞 Pain point o bug encontrado y cómo lo solucioné
Uno de los principales retos fue el comportamiento del scroll lateral en mobile, que se desplazaba de forma inesperada. La solución fue entender cómo interactuaban los contenedores con overflow y ajustar el diseño con scroll-behavior, ref controlado y scrollBy.

Otros problemas incluyeron:
- Controlar correctamente eventos de propagación (stopPropagation).
- Detectar cuándo abstraer componentes visuales y cuándo centralizar la lógica en el layout.
- Lidiar con la compatibilidad de estilos y scroll en layouts complejos.

Gracias a mi experiencia y al apoyo puntual de herramientas como la IA, pude resolverlos con pragmatismo.

## ⚖️ Conclusión
Este proyecto no fue un reto nuevo para mí. Lo he enfrentado en proyectos mucho más complejos. Pero lo valoro porque demuestra que tener experiencia también es saber cuándo no sobrediseñar las cosas. Lo que está implementado responde a los requerimientos técnicos y también muestra dominio técnico, sin exceso de complejidad innecesaria.

    