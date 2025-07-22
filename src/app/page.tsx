// src/app/page.tsx
import SearchBar from './components/SearchBar'
import styles from './page.module.css'
import CharacterCard from './components/CharacterCard'
import CharacterDetail from './components/CharacterDetail'
import FavsBar from './components/FavsBar'
import FavsBarTab from './components/FavsBar/FavsBarTab'

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Fondo visual completo */}
      <div className={styles.background}>
        <div className={styles.greenGrass} />
      </div>
      {/* Contenedor central negro */}
      <div className={styles.content}>
        {/* Aquí insertaremos componentes luego */}
        <div className={styles.detailSection}>
          <CharacterDetail />
        </div>
        <div className={styles.listSection}>
          <div className={styles.searchWrapper}>
            <SearchBar />
          </div>

          <div className={styles.cardGrid}>
            {/* Por ahora 4 tarjetas estáticas, luego haremos mapping */}
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
          </div>

          <FavsBarTab />
        </div>
      </div>
    </div>
  )
}
