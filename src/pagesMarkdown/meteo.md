---
Sections:
  - type: titre
    titre: Données météorologiques
    sous-texte: Des capteurs météorologiques installés au site d'étude nous
      renseignent sur les conditions dans lesquelles les arbres évoluent. Grâce
      à ces capteurs, vous pouvez aussi connaître la météo à Rapide-Danseur en
      temps réel!
  - type: sous-titre
    sous-titre: Données météorologiques au cours de la dernière semaine
  - type: doubleGraphiqueTempsReel
    legende1: Un capteur [HygroVUE 10](https://www.campbellsci.ca/hygrovue10)
      installé à 7 mètres au-dessus du niveau du sol mesure la température de
      l'air.
    fichier1: /graphData/air_temperature.json
    legende2: Un pluviomètre [TE525MM](https://www.campbellsci.com/products/te525mm)
      mesure la quantité de pluie tombant au site d'étude. Cet instrument est
      muni d'un entonnoir qui recueille l'eau et la redirige vers un système
      d'auget basculant. À chaque fois qu'une hauteur de pluie de 0,1 mm a été
      accumulée, l'auget bascule et envoie un signal à l'enregistreur de
      données.
    fichier2: /graphData/precipitation.json
  - type: doubleGraphiqueTempsReel
    legende1: Un anémomètre à ultrasons à trois dimensions intégré à l'instrument
      [IRGASON](https://www.campbellsci.ca/irgason) mesure la vitesse et la
      direction du vent. Cet instrument fonctionne en produisant des ondes
      sonores à partir de trois émetteurs. La vitesse du vent est calculée selon
      le temps que prennent les ondes à atteindre les récepteurs associés à
      chacun des émetteurs.
    fichier1: /graphData/wind_speed.json
    legende2: La vitesse du vent calculée selon les trois dimensions permet aussi de
      connaître la direction d'où le vent provient. Une valeur de 0 degré
      correspond à un vent en provenance du nord. Une valeur de 90 degrés
      correspond à l'est, 180 degrés au sud, et 270 degrés à l'ouest.
    fichier2: /graphData/wind_direction.json
  - type: doubleGraphiqueTempsReel
    legende1: Un radiomètre [NR01](https://www.campbellsci.ca/nr01) installé à 15
      mètres au-dessus du sol mesure le rayonnement solaire entrant et sortant
      au site d'étude. Ce graphique montre le rayonnement solaire entrant dans
      le domaine des longueurs d'onde courtes, soit les rayons UV, la lumière
      visible et le proche infrarouge. Des valeurs autour de 1000 watts par
      mètre carré correspondent à des conditions ensoleillées.
    fichier1: /graphData/solar_radiation.json
    legende2: Un capteur [SnowVUE10](https://www.campbellsci.ca/snowvue10) mesure
      l'épaisseur du couvert de neige en émettant des ondes sonores et en
      calculant le temps que prend le signal à revenir au capteur après avoir
      été réfléchi par la neige. Ce capteur est installé à une hauteur de 2,15
      mètres et pointe directement vers le sol.
    fichier2: /graphData/snow_height.json
  - type: graphiqueTempsReel
    legende: Un baromètre intégré à l'instrument IRGASON mesure la pression
      atmosphérique. Cette pression correspond à la force exercée par la colonne
      d'air de l'atmosphère et varie entre autres en fonction de la température
      et de l'humidité de l'air.
    fichier: /graphData/atmospheric_pressure.json
  - type: sous-titre
    sous-titre: Description des capteurs
  - type: paragraphe
    paragraphe: "Plus d'une dizaine de capteurs ont été installés au site de la
      forêt connectée pour mesurer des données non seulement sur la température
      et les précipitations, mais aussi sur la vitesse du vent et les radiations
      solaires :"
  - type: htmlBlock
    htmlBlock: |-
      <table class="styled-table">
        <thead>
          <tr>
            <th>Équipement</th>
            <th>Nombre</th>
            <th>Variable mesurée</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Capteur HygroVue 10</td>
            <td>1</td>
            <td>Température et humidité de l'air</td>
          </tr>
          <tr>
            <td>Pluviomètre TE525MM</td>
            <td>1</td>
            <td>Précipitations</td>
          </tr>
          <tr>
            <td>Anémomètre à ultrasons (IRGASON)</td>
            <td>1</td>
            <td>Vitesse et direction du vent</td>
          </tr>
          <tr>
            <td>Baromètre (IRGASON)</td>
            <td>1</td>
            <td>Pression atmosphérique</td>
          </tr>
          <tr>
            <td>Radiomètre NR01</td>
            <td>1</td>
            <td>Rayonnement entrant et sortant</td>
          </tr>
          <tr>
            <td>Sonde 109</td>
            <td>8</td>
            <td>Profil de température de l'air</td>
          </tr>
          <tr>
            <td>Capteur SnowVue 10</td>
            <td>1</td>
            <td>Hauteur de la neige</td>
          </tr>
        </tbody>
      </table>
  - type: graphiqueTempsReel
    legende: J'aime les patates froides, merci.
    fichier: /graphData/particules.json
---
