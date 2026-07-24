---
Sections:
  - type: titre
    titre: Données météorologiques
    sous-texte: Des capteurs météorologiques de haute précision installés au site
      d'étude permettront de connaître les conditions dans lesquelles les arbres
      évoluent. Grâce à ces capteurs, vous pouvez aussi savoir quel temps il
      fait à Rapide-Danseur en temps réel!
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
            <td>Anémomètre sonique (IRGASON)</td>
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
  - type: sous-titre
    sous-titre: Données météorologiques au cours de la dernière semaine
  - type: doubleGraphiqueTempsReel
    legende1: Un capteur HygroVUE 10 installé à mètres au-dessus du niveau du sol
      mesure la température de l'air.
    fichier1: /graphData/air_temperature.json
    legende2: Un pluviomètre TE525MM mesure la quantité de pluie tombant au site
      d'étude. Cet instrument est muni d'un entonnoir qui recueille l'eau et la
      redirige vers un système d'auget basculant. À chaque fois qu'une hauteur
      de pluie de 0,1 mm a été accumulée, l'auget bascule et envoie un signal à
      l'enregistreur de données.
    fichier2: /graphData/precipitation.json
  - type: doubleGraphiqueTempsReel
    legende1: La température, l’humidité, la vitesse et la direction du vent, ainsi
      que les précipitations. Ces données sont essentielles pour comprendre.
    fichier1: /graphData/wind_speed.json
    legende2: La température, l’humidité, la vitesse et la direction du vent, ainsi
      que les précipitations. Ces données sont essentielles pour comprendre.
    fichier2: /graphData/wind_direction.json
  - type: doubleGraphiqueTempsReel
    legende1: La température, l’humidité, la vitesse et la direction du vent, ainsi
      que les précipitations. Ces données sont essentielles pour comprendre.
    fichier1: /graphData/solar_radiation.json
    legende2: La température, l’humidité, la vitesse et la direction du vent, ainsi
      que les précipitations. Ces données sont essentielles pour comprendre.
    fichier2: /graphData/snow_height.json
  - type: graphiqueTempsReel
    legende: La température, l’humidité, la vitesse et la direction du vent, ainsi
      que les précipitations. Ces données sont essentielles pour comprendre.
    fichier: /graphData/atmospheric_pressure.json
---
