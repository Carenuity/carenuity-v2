export const sensors = [
  {
    name: "C3-Mini Triple with Piggyback Sensor AHT20+BMP280",
    image: "/images/products/piggybacks/piggy2.jpeg",
    shopLink:
      "https://www.chipglobe.shop/en/p/c3-mini-sensor-module-with-aht20-and-bmp280-temperature-humidity-pressure",
    en: {
      explanation:
        "The C3-Mini Triple with Piggyback Sensor AHT20+BMP280 integrates two trusted environmental sensors onto a single piggyback board. The AHT20 delivers precise temperature and relative humidity over I²C, while the BMP280 adds high-accuracy barometric pressure measurement — giving a complete atmospheric picture with just one module. Both sensors share the same I²C bus, minimising wiring and keeping GPIOs free. The piggyback stacking design clips directly onto the C3-Mini without soldering, and factory calibration on both sensors ensures reliable out-of-the-box accuracy. With a 1.8V–3.6V supply and ultra-low standby current, it suits battery-powered IoT deployments.",
      features: [
        "AHT20 Sensor (from Aosong): Temperature range -40°C to +85°C, ±0.3°C accuracy; Humidity 0-100% RH, ±2% RH accuracy; I²C digital output",
        "BMP280 Sensor (from Bosch): ±1 hPa accuracy; Pressure range 300-1100 hPa; Temperature -40°C to +85°C; I²C interface",
        "Small PCB with piggyback stacking design; 1.8V-3.6V supply (typically 3.3V)",
      ],
      apps: [
        "Weather stations and environmental monitoring",
        "Smart home devices (HVAC, humidifiers, air quality monitoring)",
        "Portable weather trackers and wearables",
        "IoT nodes for agriculture, logistics, building automation",
        "Altimeter and vertical speed estimation for drones and robotics",
      ],
      summary:
        "The PickBang Piggyback AHT20-BMP280 combines temperature, humidity, and pressure sensing in a single board, offering accurate environmental measurements with minimal power and space requirements.",
    },
    de: {
      explanation:
        "Das C3-Mini Triple mit Piggyback Sensor AHT20+BMP280 vereint zwei bewährte Umgebungssensoren auf einer einzigen Piggyback-Platine. Der AHT20 liefert präzise Temperatur- und Feuchtigkeitsmessungen über I²C, während der BMP280 hochgenaue Luftdruckmessungen hinzufügt. Beide Sensoren teilen denselben I²C-Bus, was die Verkabelung minimal hält und GPIOs freihält. Das Piggyback-Stapeldesign ermöglicht das direkte Aufstecken auf den C3-Mini ohne Löten, und die Werkskalibrierung beider Sensoren sorgt für sofortige Genauigkeit. Mit 1,8V–3,6V und niedrigem Standbystrom eignet es sich gut für batteriebetriebene IoT-Anwendungen.",
      features: [
        "AHT20 Sensor (von Aosong): Temperaturbereich -40 °C bis +85 °C, ±0,3 °C Genauigkeit; Luftfeuchtigkeit 0–100 % RH, ±2 % RH; I²C-Digitalausgang",
        "BMP280 Sensor (von Bosch): ±1 hPa Genauigkeit; Druckbereich 300–1100 hPa; Temperatur -40 °C bis +85 °C; I²C-Schnittstelle",
        "Kleines PCB mit Piggyback-Stapeldesign; 1,8V–3,6V (typisch 3,3V)",
      ],
      apps: [
        "Wetterstationen und Umweltüberwachung",
        "Smart-Home-Geräte (HVAC, Luftbefeuchter, Luftqualitätsüberwachung)",
        "Tragbare Wetter-Tracker und Wearables",
        "IoT-Knoten für Landwirtschaft, Logistik, Gebäudeautomation",
        "Höhenmessung und Vertikalgeschwindigkeit für Drohnen und Robotik",
      ],
      summary:
        "Das Piggyback AHT20-BMP280 vereint Temperatur-, Feuchtigkeits- und Drucksensoren auf einer einzigen Platine und liefert genaue Umgebungsmessungen bei minimalem Energie- und Platzbedarf.",
    },
  },
  {
    name: "Piggyback AHT10",
    image: "/images/products/piggybacks/piggy2.png",
    shopLink: null,
    en: {
      explanation:
        "The Piggyback AHT10 is a compact digital temperature and humidity sensor built around the AHT10 chip from Aosong Electronics. It measures temperature from -40°C to +85°C with ±0.3°C accuracy and relative humidity from 0% to 100% RH with ±2% accuracy, delivered as calibrated values over I²C. Calibration coefficients are stored on-chip, so no external calibration is needed. Operating on 1.8V–3.6V, it is compatible with the ESP32-C3 at the heart of the C3-Mini and stacks directly onto its header without extra wiring. Fast measurement cycles and low standby current make it ideal for sensor nodes that wake periodically and return to deep sleep.",
      features: [
        "Temperature: -40°C to +85°C, ±0.3°C accuracy",
        "Humidity: 0-100% RH, ±2% RH accuracy",
        "I²C digital communication; 1.8V-3.6V supply (typically 3.3V)",
        "Fast measurement cycle, low latency",
        "Factory calibrated, no external calibration required",
      ],
      apps: [
        "Weather monitoring and forecasting",
        "Smart home devices (humidifiers, thermostats, HVAC systems)",
        "IoT environmental sensing nodes",
        "Agricultural monitoring (greenhouses, storage facilities)",
        "Consumer electronics (wearables, portable climate monitors)",
      ],
      summary:
        "The Piggyback AHT10 is a reliable and low-power temperature and humidity sensor module that outputs calibrated digital data via I²C.",
    },
    de: {
      explanation:
        "Das Piggyback AHT10 ist ein kompaktes digitales Temperatur- und Feuchtigkeitssensormodul auf Basis des AHT10-Chips von Aosong Electronics. Es misst Temperatur von -40°C bis +85°C mit ±0,3°C Genauigkeit und relative Luftfeuchtigkeit von 0% bis 100% RH mit ±2% Genauigkeit als kalibrierte Digitalwerte über I²C. Die Kalibrierungskoeffizienten sind on-chip gespeichert, sodass keine externe Kalibrierung erforderlich ist. Mit 1,8V–3,6V ist es vollständig mit 3,3V-MCUs kompatibel und steckt direkt auf den C3-Mini-Header auf. Schnelle Messzyklen und niedriger Standbystrom machen es ideal für Sensorknoten mit periodischem Aufwachen und Tiefschlaf.",
      features: [
        "Temperatur: -40 °C bis +85 °C, ±0,3 °C Genauigkeit",
        "Luftfeuchtigkeit: 0–100 % RH, ±2 % RH Genauigkeit",
        "I²C-Digitalkommunikation; 1,8V–3,6V (typisch 3,3V)",
        "Schneller Messzyklus, geringe Latenz",
        "Werkskalibiert, keine externe Kalibrierung erforderlich",
      ],
      apps: [
        "Wetterüberwachung und -vorhersage",
        "Smart-Home-Geräte (Luftbefeuchter, Thermostate, HVAC-Systeme)",
        "IoT-Umweltsensorknoten",
        "Landwirtschaftliche Überwachung (Gewächshäuser, Lagereinrichtungen)",
        "Unterhaltungselektronik (Wearables, tragbare Klimamonitore)",
      ],
      summary:
        "Das Piggyback AHT10 ist ein zuverlässiges und energiesparendes Temperatur- und Feuchtigkeitssensormodul, das kalibrierte Digitaldaten über I²C ausgibt.",
    },
  },
  {
    name: "Piggyback AHT20",
    image: "/images/products/piggybacks/piggy3.png",
    shopLink: null,
    en: {
      explanation:
        "The Piggyback AHT20 is the second-generation upgrade to the AHT10, designed by Aosong Electronics to address long-term drift and voltage compatibility limitations. It measures temperature from -40°C to +85°C with ±0.3°C accuracy and relative humidity from 0% to 100% RH with ±2% accuracy, transmitted as factory-calibrated values over I²C. The wider supply voltage range of 2.0V–5.5V makes it compatible with a broader set of microcontrollers without level-shifting. Enhanced internal filtering algorithms improve stability against long-term sensor drift. Like all Carenuity Piggyback modules, the AHT20 clips directly onto the C3-Mini header, making integration effortless for both prototype and production builds.",
      features: [
        "Temperature: -40°C to +85°C, ±0.3°C (better stability than AHT10)",
        "Humidity: 0-100% RH, ±2% RH (improved from AHT10)",
        "I²C digital output, simple 2-wire communication",
        "2.0V–5.5V supply (broader than AHT10)",
        "Factory calibrated; improved sensor stability against long-term drift",
      ],
      apps: [
        "Indoor climate control (HVAC, air purifiers, humidifiers)",
        "Smart agriculture and greenhouse monitoring",
        "IoT weather stations and smart home devices",
        "Consumer electronics (air quality monitors, wearables)",
        "Data loggers and portable sensing devices",
      ],
      summary:
        "The Piggyback AHT20 is the improved successor of the AHT10, delivering higher accuracy, wider voltage compatibility, and greater stability for temperature and humidity sensing.",
    },
    de: {
      explanation:
        "Das Piggyback AHT20 ist das Upgrade der zweiten Generation zum AHT10, entwickelt von Aosong Electronics, um Langzeitdrift und Spannungskompatibilitätsprobleme zu beheben. Es misst Temperatur von -40°C bis +85°C mit ±0,3°C Genauigkeit und relative Luftfeuchtigkeit von 0% bis 100% RH mit ±2% Genauigkeit als werkskalibrierte Digitalwerte über I²C. Der breitere Versorgungsbereich von 2,0V–5,5V gewährleistet Kompatibilität mit mehr Mikrocontrollern ohne Pegelwandler. Verbesserte Filteralgorithmen bieten bessere Stabilität gegen Langzeitdrift. Das AHT20 steckt direkt auf den C3-Mini-Header auf und eignet sich ideal für batteriebetriebene IoT-Knoten.",
      features: [
        "Temperatur: -40 °C bis +85 °C, ±0,3 °C (bessere Stabilität als AHT10)",
        "Luftfeuchtigkeit: 0–100 % RH, ±2 % RH (verbessert gegenüber AHT10)",
        "I²C-Digitalausgang, einfache 2-Draht-Kommunikation",
        "2,0V–5,5V (breiter als AHT10)",
        "Werkskalibiert; verbesserte Sensorstabilität gegen Langzeitdrift",
      ],
      apps: [
        "Innenraumklimasteuerung (HVAC, Luftreiniger, Luftbefeuchter)",
        "Smart Agriculture und Gewächshausüberwachung",
        "IoT-Wetterstationen und Smart-Home-Geräte",
        "Unterhaltungselektronik (Luftqualitätsmonitore, Wearables)",
        "Datenlogger und tragbare Sensorgeräte",
      ],
      summary:
        "Das Piggyback AHT20 ist der verbesserte Nachfolger des AHT10 und bietet höhere Genauigkeit, breiteren Spannungsbereich und größere Stabilität für die Temperatur- und Feuchtigkeitsmessung.",
    },
  },
  {
    name: "Piggyback AGS10",
    image: "/images/products/piggybacks/piggy4.png",
    shopLink: null,
    en: {
      explanation:
        "The Piggyback AGS10 is a compact gas sensor module for indoor air quality monitoring, using a metal-oxide element to detect a broad range of volatile organic compounds (VOCs) including alcohols, aldehydes, and ketones. Rather than raw resistance values, the AGS10 outputs a pre-calculated TVOC index and equivalent CO₂ (eCO₂) value directly over I²C, simplifying firmware integration. Built-in baseline compensation automatically adjusts for sensor aging and temperature fluctuations. The module runs on 3.3V or 5V with low active current, and clips onto the C3-Mini without any extra wiring or PCB area.",
      features: [
        "Detects VOCs (alcohol, formaldehyde, smoke, pollutants)",
        "Provides eCO₂ and TVOC index for air quality analysis",
        "I²C digital communication",
        "3.3V-5.0V supply; low power consumption",
        "Factory calibrated with built-in baseline compensation",
        "Compact piggyback form factor",
      ],
      apps: [
        "Indoor air quality monitoring (homes, offices, schools)",
        "Smart HVAC and ventilation systems",
        "Air purifiers and smart appliances",
        "IoT air quality sensing nodes",
        "Environmental monitoring stations",
        "Wearables or portable devices for personal health monitoring",
      ],
      summary:
        "The Piggyback AGS10 gas sensor module provides a simple and reliable way to measure VOC-based air quality. With digital I²C output, low power use, and a plug-and-play piggyback design, it is ideal for IoT developers, smart home applications, and portable air quality monitors.",
    },
    de: {
      explanation:
        "Das Piggyback AGS10 ist ein kompaktes Gassensormodul für die Innenraumluftqualitätsüberwachung, das ein Metalloxid-Sensorelement zur Erkennung flüchtiger organischer Verbindungen (VOCs) verwendet. Anstatt rohe Widerstandswerte auszugeben, liefert der AGS10 einen vorberechneten TVOC-Index und eCO₂-Äquivalentwert direkt über I²C. Die integrierte Basiskompensation passt sich automatisch an Sensoralterung und Temperaturschwankungen an. Das Modul läuft mit 3,3V oder 5V, hat niedrigen Aktivstrom und steckt ohne zusätzliche Verkabelung direkt auf den C3-Mini auf.",
      features: [
        "Erkennt VOCs (Alkohol, Formaldehyd, Rauch, Schadstoffe)",
        "Liefert eCO₂ und TVOC-Index zur Luftqualitätsanalyse",
        "I²C-Digitalkommunikation",
        "3,3V–5,0V; geringer Energieverbrauch",
        "Werkskalibiert mit integrierter Basiskompensation",
        "Kompaktes Piggyback-Format",
      ],
      apps: [
        "Innenraumluftqualitätsüberwachung (Häuser, Büros, Schulen)",
        "Intelligente HVAC- und Lüftungssysteme",
        "Luftreiniger und Smart Appliances",
        "IoT-Luftqualitätssensorknoten",
        "Umweltüberwachungsstationen",
        "Wearables oder tragbare Geräte zur persönlichen Gesundheitsüberwachung",
      ],
      summary:
        "Das Piggyback AGS10 Gassensormodul bietet eine einfache und zuverlässige Möglichkeit zur VOC-basierten Luftqualitätsmessung. Mit I²C-Digitalausgang, niedrigem Energieverbrauch und Plug-and-Play-Piggyback-Design ist es ideal für IoT-Entwickler, Smart-Home-Anwendungen und tragbare Luftqualitätsmonitore.",
    },
  },
  {
    name: "Piggyback BME280",
    image: "/images/products/piggybacks/piggy5.png",
    shopLink: null,
    en: {
      explanation:
        "The Piggyback BME280 is a three-in-one environmental sensor from Bosch that measures temperature, relative humidity, and barometric pressure on a single compact board. It achieves ±1.0°C temperature accuracy, ±3% RH humidity accuracy, and ±1 hPa pressure accuracy — equivalent to approximately ±8 metres of altitude. The sensor supports both I²C and SPI communication, and on-chip digital filters suppress short-term noise in vibration-prone environments. Factory calibration stored in on-chip OTP memory ensures accurate readings immediately upon power-up, and the piggyback form factor enables zero-wiring integration with the C3-Mini.",
      features: [
        "Humidity: 0-100% RH, ±3% RH accuracy",
        "Pressure: 300-1100 hPa, ±1 hPa accuracy (≈±8 m altitude)",
        "Temperature: -40°C to +85°C, ±1.0°C",
        "I²C and SPI interfaces (configurable)",
        "1.71V-3.6V supply (commonly 3.3V)",
        "Factory calibrated with built-in temperature/humidity/pressure compensation",
      ],
      apps: [
        "Weather stations and climate monitoring",
        "Indoor air quality and HVAC systems",
        "IoT devices for smart agriculture, logistics, building automation",
        "Drones and altimeter applications",
        "Wearables and portable devices",
        "Data loggers and environmental monitoring stations",
      ],
      summary:
        "The Piggyback BME280 provides a complete climate-sensing solution with temperature, humidity, and pressure measurements in one module. Its piggyback design ensures easy integration into compact IoT and embedded projects, making it ideal for weather tracking, smart home systems, and mobile applications.",
    },
    de: {
      explanation:
        "Das Piggyback BME280 ist ein Drei-in-Eins-Umgebungssensor von Bosch, der Temperatur, relative Luftfeuchtigkeit und Luftdruck auf einer einzigen kompakten Platine misst. Er erreicht ±1,0°C Temperaturgenauigkeit, ±3% RH Feuchtigkeitsgenauigkeit und ±1 hPa Druckgenauigkeit — entspricht ca. ±8 m Höhenauflösung. Der Sensor unterstützt I²C und SPI, und On-Chip-Digitalfilter unterdrücken kurzfristige Rauschimpulse. Die werksseitig gespeicherte Kalibrierung sorgt für sofortige Messbereitschaft nach dem Einschalten, und das Piggyback-Format ermöglicht kabellose Integration mit dem C3-Mini.",
      features: [
        "Luftfeuchtigkeit: 0–100 % RH, ±3 % RH Genauigkeit",
        "Druck: 300–1100 hPa, ±1 hPa (≈±8 m Höhe)",
        "Temperatur: -40 °C bis +85 °C, ±1,0 °C",
        "I²C und SPI (konfigurierbar)",
        "1,71V–3,6V (typisch 3,3V)",
        "Werkskalibiert mit integrierter Kompensation für Temperatur, Luftfeuchtigkeit und Druck",
      ],
      apps: [
        "Wetterstationen und Klimaüberwachung",
        "Innenraumluftqualität und HVAC-Systeme",
        "IoT-Geräte für Smart Agriculture, Logistik, Gebäudeautomation",
        "Drohnen und Höhenmessanwendungen",
        "Wearables und tragbare Geräte",
        "Datenlogger und Umweltüberwachungsstationen",
      ],
      summary:
        "Das Piggyback BME280 bietet eine vollständige Klimamesslösung mit Temperatur-, Feuchtigkeits- und Druckmessungen in einem Modul. Das Piggyback-Design ermöglicht die einfache Integration in kompakte IoT- und Embedded-Projekte und ist ideal für Wetterverfolgung, Smart-Home-Systeme und mobile Anwendungen.",
    },
  },
  {
    name: "Piggyback BMP280",
    image: "/images/products/piggybacks/piggy6.png",
    shopLink: null,
    en: {
      explanation:
        "The Piggyback BMP280 is Bosch's established pressure and temperature sensor, optimised for applications where barometric pressure and altitude data are the primary requirement. It delivers pressure readings across 300–1100 hPa with ±1 hPa absolute accuracy — approximately ±8 metres altitude resolution — along with a simultaneous temperature reading at ±1.0°C. Both I²C and SPI interfaces are supported, and multiple oversampling modes let you trade off power against resolution. The sensor runs on as little as 1.71V and stacks directly onto the C3-Mini for wiring-free deployment.",
      features: [
        "Pressure: 300-1100 hPa, ±1 hPa accuracy (≈±8 m altitude)",
        "Temperature: -40°C to +85°C, ±1.0°C",
        "I²C and SPI interfaces (flexible communication options)",
        "1.71V-3.6V supply (typically 3.3V)",
        "Low power consumption; factory calibrated with built-in compensation",
        "Compact piggyback form factor, space-saving and stackable",
      ],
      apps: [
        "Altimeters and barometers (drones, wearables, GPS enhancement)",
        "Weather stations and environmental monitoring",
        "IoT devices for smart agriculture, logistics, building automation",
        "Indoor navigation and elevation tracking",
        "HVAC systems and smart home appliances",
        "Portable climate monitoring devices",
      ],
      summary:
        "The Piggyback BMP280 is a reliable and efficient pressure + temperature sensor module, optimized for IoT and embedded applications. While similar to the BME280, it excludes humidity sensing, making it a cost-effective option when only temperature and pressure data are required.",
    },
    de: {
      explanation:
        "Das Piggyback BMP280 ist Boschs bewährtes Druck- und Temperatursensormodul, optimiert für Anwendungen, bei denen Luftdruck- und Höhendaten die primäre Anforderung sind. Es liefert Druckmessungen über 300–1100 hPa mit ±1 hPa absoluter Genauigkeit — ca. ±8 m Höhenauflösung — sowie gleichzeitige Temperaturmessung mit ±1,0°C. I²C und SPI werden unterstützt, und mehrere Oversampling-Modi ermöglichen einen Kompromiss zwischen Energieverbrauch und Auflösung. Der Sensor läuft mit nur 1,71V und steckt direkt auf den C3-Mini auf.",
      features: [
        "Druck: 300–1100 hPa, ±1 hPa (≈±8 m Höhe)",
        "Temperatur: -40 °C bis +85 °C, ±1,0 °C",
        "I²C und SPI (flexible Kommunikationsoptionen)",
        "1,71V–3,6V (typisch 3,3V)",
        "Geringer Energieverbrauch; werkskalibiert mit integrierter Kompensation",
        "Kompaktes, stapelbares Piggyback-Format",
      ],
      apps: [
        "Höhenmesser und Barometer (Drohnen, Wearables, GPS-Verbesserung)",
        "Wetterstationen und Umweltüberwachung",
        "IoT-Geräte für Smart Agriculture, Logistik, Gebäudeautomation",
        "Innenraumnavigation und Höhenverfolgung",
        "HVAC-Systeme und Smart-Home-Geräte",
        "Tragbare Klimaüberwachungsgeräte",
      ],
      summary:
        "Das Piggyback BMP280 ist ein zuverlässiges und effizientes Druck- und Temperatursensormodul für IoT und Embedded-Anwendungen. Im Gegensatz zum BME280 fehlt die Feuchtigkeitsmessung, was es zur kosteneffizienten Option macht, wenn nur Temperatur- und Druckdaten benötigt werden.",
    },
  },
  {
    name: "Piggyback BMP180",
    image: "/images/products/piggybacks/piggy7.png",
    shopLink: null,
    en: {
      explanation:
        "The Piggyback BMP180 is an older-generation barometric pressure and temperature sensor built around Bosch's BMP180 MEMS chip, widely used in educational projects and budget IoT builds. It measures atmospheric pressure across 300–1100 hPa with ±1 hPa accuracy and temperature from -40°C to +85°C, communicating over I²C. An internal EEPROM stores factory calibration coefficients that the MCU reads at startup to apply compensation formulas. Operating on 1.8V–3.6V with a well-documented driver ecosystem for Arduino and MicroPython, it stacks directly onto the C3-Mini for quick barometric altitude sensing.",
      features: [
        "Pressure: 300-1100 hPa, ±1 hPa accuracy (≈±8 m altitude)",
        "Temperature: -40°C to +85°C, ±2.0°C",
        "I²C (simple 2-wire communication)",
        "1.8V-3.6V supply (commonly 3.3V or 5V with level shifting)",
        "Low power consumption; factory calibrated with built-in compensation",
        "Compact piggyback module design",
      ],
      apps: [
        "Altimeters and barometers (early drone projects, GPS altitude correction)",
        "Weather stations and environmental monitoring",
        "IoT devices requiring basic temperature and pressure sensing",
        "Educational projects and prototyping",
        "Portable devices where low cost is preferred over cutting-edge accuracy",
      ],
      summary:
        "The Piggyback BMP180 is a proven pressure and temperature sensor module, offering dependable performance in a simple, low-cost design. While newer BMP280/BME280 sensors deliver higher precision and extra features (like humidity sensing), the BMP180 remains a solid choice for budget-friendly environmental monitoring projects.",
    },
    de: {
      explanation:
        "Das Piggyback BMP180 ist ein Luftdruck- und Temperatursensormodul der älteren Generation auf Basis des BMP180 MEMS-Chips von Bosch, häufig in Bildungsprojekten und Budget-IoT-Anwendungen eingesetzt. Es misst Atmosphärendruck von 300–1100 hPa mit ±1 hPa Genauigkeit und Temperatur von -40°C bis +85°C über I²C. Ein internes EEPROM enthält werksseitige Kalibrierungskoeffizienten, die der MCU beim Start liest. Mit 1,8V–3,6V und einem gut dokumentierten Treiber-Ökosystem für Arduino und MicroPython steckt es direkt auf den C3-Mini auf.",
      features: [
        "Druck: 300–1100 hPa, ±1 hPa (≈±8 m Höhe)",
        "Temperatur: -40 °C bis +85 °C, ±2,0 °C",
        "I²C (einfache 2-Draht-Kommunikation)",
        "1,8V–3,6V (typisch 3,3V oder 5V mit Pegelwandler)",
        "Geringer Energieverbrauch; werkskalibiert mit integrierter Kompensation",
        "Kompaktes Piggyback-Moduldesign",
      ],
      apps: [
        "Höhenmesser und Barometer (frühe Drohnenprojekte, GPS-Höhenkorrektur)",
        "Wetterstationen und Umweltüberwachung",
        "IoT-Geräte für einfache Temperatur- und Druckmessung",
        "Bildungsprojekte und Prototyping",
        "Tragbare Geräte, bei denen Kosteneffizienz Vorrang hat",
      ],
      summary:
        "Das Piggyback BMP180 ist ein bewährtes Druck- und Temperatursensormodul mit zuverlässiger Leistung in einem einfachen, kostengünstigen Design. Während neuere BMP280/BME280-Sensoren höhere Präzision bieten, bleibt das BMP180 eine solide Wahl für budgetfreundliche Umweltüberwachungsprojekte.",
    },
  },
  {
    name: "Piggyback SHT40",
    image: "/images/products/piggybacks/piggy8.png",
    shopLink: null,
    en: {
      explanation:
        "The Piggyback SHT40 represents the fourth generation of Sensirion's humidity sensor technology, delivering ±0.2°C temperature accuracy and ±1.8% RH humidity accuracy in a compact piggyback form factor. It supports an optional on-chip heater that evaporates condensation, extending reliable operation into highly humid environments. Its 1.08V–3.6V supply range makes it compatible with 1.2V battery systems for ultra-low-power designs. The I²C interface with fast-mode support allows burst measurements in milliseconds, and the SHT40 piggyback snaps onto the C3-Mini with zero wiring.",
      features: [
        "Temperature: -40°C to +125°C, ±0.2°C accuracy",
        "Humidity: 0-100% RH, ±1.8% RH accuracy",
        "I²C digital output, simple integration",
        "1.08V-3.6V supply (ideal for low-voltage MCUs)",
        "Ultra-low power consumption designed for battery-powered IoT",
        "Fast measurement with high repeatability; optional protective filter membrane; factory calibrated",
      ],
      apps: [
        "Smart home appliances (HVAC, air purifiers, humidifiers)",
        "IoT climate sensing nodes",
        "Portable and wearable environmental monitors",
        "Smart agriculture (greenhouses, crop storage monitoring)",
        "Data loggers and weather stations",
        "Consumer electronics requiring high-accuracy temperature and humidity data",
      ],
      summary:
        "The Piggyback SHT40 is a next-generation temperature and humidity sensor module, offering higher precision, ultra-low power operation, and long-term stability compared to earlier AHT10/AHT20 or SHT3x sensors. Its piggyback design makes it easy to embed in compact systems, making it ideal for IoT developers, environmental monitoring, and precision climate control.",
    },
    de: {
      explanation:
        "Das Piggyback SHT40 ist die vierte Generation von Sensirions Feuchtigkeitssensortechnologie mit ±0,2°C Temperaturgenauigkeit und ±1,8% RH Feuchtigkeitsgenauigkeit. Es unterstützt einen optionalen On-Chip-Heizer, der Kondensation verdampft und den zuverlässigen Betrieb in sehr feuchten Umgebungen ermöglicht. Der Versorgungsbereich von 1,08V–3,6V macht ihn kompatibel mit 1,2V-Batteriesystemen für Ultra-Low-Power-Designs. Die I²C-Schnittstelle ermöglicht schnelle Messungen in Millisekunden, und das SHT40-Piggyback schnappt ohne Verkabelung auf den C3-Mini auf.",
      features: [
        "Temperatur: -40 °C bis +125 °C, ±0,2 °C Genauigkeit",
        "Luftfeuchtigkeit: 0–100 % RH, ±1,8 % RH Genauigkeit",
        "I²C-Digitalausgang, einfache Integration",
        "1,08V–3,6V (ideal für Low-Voltage-MCUs)",
        "Ultra-Low-Power für batteriebetriebene IoT-Geräte",
        "Schnelle Messung mit hoher Wiederholbarkeit; optionale Schutzfiltermembran; werkskalibiert",
      ],
      apps: [
        "Smart-Home-Geräte (HVAC, Luftreiniger, Luftbefeuchter)",
        "IoT-Klimasensorknoten",
        "Tragbare Umweltmonitore und Wearables",
        "Smart Agriculture (Gewächshäuser, Erntlagerüberwachung)",
        "Datenlogger und Wetterstationen",
        "Unterhaltungselektronik mit hohen Genauigkeitsanforderungen",
      ],
      summary:
        "Das Piggyback SHT40 ist ein Temperatur- und Feuchtigkeitssensormodul der nächsten Generation mit höherer Präzision, Ultra-Low-Power-Betrieb und Langzeitstabilität. Ideal für IoT-Entwickler, Umweltüberwachung und Präzisionsklimasteuerung.",
    },
  },
  {
    name: "Piggyback SGP30",
    image: "/images/products/piggybacks/piggy9.png",
    shopLink: null,
    en: {
      explanation:
        "The Piggyback SGP30 is Sensirion's indoor air quality sensor module, using a metal-oxide (MOX) element to detect total volatile organic compounds (TVOCs) and output an equivalent CO₂ (eCO₂) level. An on-chip signal conditioning algorithm converts raw MOX readings into TVOC (ppb) and eCO₂ (ppm) values, greatly simplifying host firmware. A humidity compensation input lets you feed temperature and humidity data from a paired sensor for improved accuracy, and a built-in baseline calibration cycle adapts to long-term background VOC changes. With an I²C interface, 1.8V–3.6V supply, and low power consumption, the SGP30 stacks directly onto the C3-Mini for complete air quality monitoring with no extra hardware.",
      features: [
        "Detects total VOCs (TVOCs) in the air",
        "Provides equivalent CO₂ (eCO₂) levels based on VOC measurements",
        "I²C digital communication (easy MCU integration)",
        "1.8V–3.6V supply (commonly 3.3V)",
        "Low power consumption suitable for continuous monitoring",
        "On-chip humidity compensation; factory calibrated",
        "Compact piggyback design, stackable",
      ],
      apps: [
        "Indoor air quality monitoring (homes, offices, schools)",
        "Smart HVAC and ventilation systems",
        "Air purifiers and smart appliances",
        "IoT environmental nodes and smart building systems",
        "Portable and wearable air quality monitors",
        "Demand-controlled ventilation (DCV) systems",
      ],
      summary:
        "The Piggyback SGP30 is a reliable air quality sensor module that provides VOC and CO₂ equivalent measurements in a compact, low-power package. Its piggyback design makes it easy to integrate into IoT and embedded systems, making it ideal for smart home devices, HVAC optimization, and portable air quality monitors.",
    },
    de: {
      explanation:
        "Das Piggyback SGP30 ist Sensirions Innenraumluftqualitätssensormodul, das ein Metalloxid-Element verwendet, um Gesamt-VOCs und einen eCO₂-Äquivalentwert auszugeben. Ein On-Chip-Signalverarbeitungsalgorithmus wandelt rohe MOX-Messwerte in TVOC (ppb) und eCO₂ (ppm) um. Ein Feuchtigkeitskompensationseingang ermöglicht die Kopplung mit einem Temperatur-/Feuchtigkeitssensor zur Verbesserung der Genauigkeit, und ein automatischer Basiskalibrierungszyklus passt sich langfristigen VOC-Änderungen an. Mit I²C, 1,8V–3,6V und niedrigem Energieverbrauch steckt der SGP30 direkt auf den C3-Mini auf.",
      features: [
        "Erkennt Gesamt-VOCs (TVOCs) in der Luft",
        "Liefert äquivalente CO₂ (eCO₂)-Werte basierend auf VOC-Messungen",
        "I²C-Digitalkommunikation (einfache MCU-Integration)",
        "1,8V–3,6V (typisch 3,3V)",
        "Geringer Energieverbrauch für kontinuierliches Monitoring",
        "On-Chip-Feuchtigkeitskompensation; werkskalibiert",
        "Kompaktes, stapelbares Piggyback-Design",
      ],
      apps: [
        "Innenraumluftqualitätsüberwachung (Häuser, Büros, Schulen)",
        "Intelligente HVAC- und Lüftungssysteme",
        "Luftreiniger und Smart Appliances",
        "IoT-Umweltknoten und Smart-Building-Systeme",
        "Tragbare Luftqualitätsmonitore und Wearables",
        "Bedarfsgesteuerte Lüftungssysteme (DCV)",
      ],
      summary:
        "Das Piggyback SGP30 ist ein zuverlässiges Luftqualitätssensormodul für VOC- und CO₂-Äquivalentmessungen im kompakten, energiesparenden Format. Ideal für Smart-Home-Geräte, HVAC-Optimierung und tragbare Luftqualitätsmonitore.",
    },
  },
  {
    name: "Piggyback SGP40",
    image: "/images/products/piggybacks/piggy10.png",
    shopLink: null,
    en: {
      explanation:
        "The Piggyback SGP40 is Sensirion's next-generation VOC sensor and successor to the SGP30, engineered for improved contamination resistance and output consistency. Its key innovation is a standardised VOC Index on a 0–500 scale rather than raw ppb values, providing consistent and intuitive air quality readings comparable across different units and conditions. The SGP40 shows significantly improved resistance to siloxanes and contaminants from household sprays and cleaning products. With ultra-low power consumption, a 1.7V–3.6V supply, and support for external humidity/temperature compensation, it stacks directly onto the C3-Mini for long-term reliable air quality monitoring.",
      features: [
        "Detects VOC concentrations in the air",
        "Provides standardized VOC Index (0–500) instead of raw gas values",
        "Better resistance to contamination (e.g., siloxanes); enhanced long-term stability; more robust against environmental stress",
        "I²C digital communication",
        "1.7V–3.6V supply (commonly 3.3V)",
        "Ultra-low power consumption ideal for battery-operated IoT",
        "Requires external humidity/temperature compensation",
        "Compact piggyback design, stackable and space-saving",
      ],
      apps: [
        "Indoor air quality monitoring (smart homes, offices, schools)",
        "Smart HVAC and demand-controlled ventilation (DCV)",
        "Air purifiers, dehumidifiers, and smart appliances",
        "IoT air quality nodes and smart building systems",
        "Portable and wearable environmental trackers",
      ],
      summary:
        "The Piggyback SGP40 is an improved VOC sensor module, delivering higher reliability and stability than the SGP30. By outputting a VOC Index, it simplifies indoor air quality monitoring and is well-suited for IoT devices, smart home appliances, and portable monitors where consistent and long-term performance is crucial.",
    },
    de: {
      explanation:
        "Das Piggyback SGP40 ist Sensirions VOC-Sensormodul der nächsten Generation und Nachfolger des SGP30, entwickelt für verbesserte Kontaminationsresistenz und Ausgabekonsistenz. Seine wichtigste Innovation ist ein standardisierter VOC-Index auf einer 0–500-Skala statt roher ppb-Werte, was konsistente und intuitive Luftqualitätsmesswerte liefert. Der SGP40 zeigt deutlich verbesserte Widerstandsfähigkeit gegen Siloxane und andere Kontaminanten aus Haushaltsprodukten. Mit Ultra-Low-Power, 1,7V–3,6V und externer Feuchtigkeits-/Temperaturkompensation steckt er direkt auf den C3-Mini auf.",
      features: [
        "Erkennt VOC-Konzentrationen in der Luft",
        "Liefert standardisierten VOC-Index (0–500) statt roher Gaswerte",
        "Bessere Kontaminationsresistenz (z. B. Siloxane); verbesserte Langzeitstabilität; robuster gegen Umwelteinflüsse",
        "I²C-Digitalkommunikation",
        "1,7V–3,6V (typisch 3,3V)",
        "Ultra-Low-Power für batteriebetriebene IoT-Geräte",
        "Externe Feuchtigkeits-/Temperaturkompensation erforderlich",
        "Kompaktes, stapelbares Piggyback-Design",
      ],
      apps: [
        "Innenraumluftqualitätsüberwachung (Smart Homes, Büros, Schulen)",
        "Intelligente HVAC- und bedarfsgesteuerte Lüftung (DCV)",
        "Luftreiniger, Luftentfeuchter und Smart Appliances",
        "IoT-Luftqualitätsknoten und Smart-Building-Systeme",
        "Tragbare Umwelt-Tracker und Wearables",
      ],
      summary:
        "Das Piggyback SGP40 ist ein verbessertes VOC-Sensormodul mit höherer Zuverlässigkeit und Stabilität als das SGP30. Der VOC-Index vereinfacht die Innenraumluftqualitätsüberwachung und eignet sich hervorragend für IoT-Geräte und Smart-Home-Anwendungen.",
    },
  },
  {
    name: "Piggyback ENS160",
    image: "/images/products/piggybacks/piggy11.png",
    shopLink: null,
    en: {
      explanation:
        "The Piggyback ENS160 is ScioSense's advanced multi-gas digital air quality sensor, integrating multiple independent metal-oxide sensing elements to simultaneously detect VOCs, reducing gases (CO, H₂), and oxidising gases (ozone, NO₂). This multi-channel approach outputs three distinct metrics: TVOC concentration in mg/m³, equivalent CO₂ in ppm, and a standardised Air Quality Index (AQI). Built-in humidity and temperature compensation algorithms maintain accurate readings across varying conditions without complex host-side corrections. Supporting both I²C and SPI with a 1.71V–3.6V supply and low power modes, the ENS160 stacks directly onto the C3-Mini for comprehensive multi-gas monitoring.",
      features: [
        "Monitors volatile organic compounds (VOCs)",
        "Detects oxidizing gases (e.g., ozone, NO₂) and reducing gases (e.g., CO, H₂)",
        "Output data: TVOC concentration (mg/m³), eCO₂ (ppm), standardized Air Quality Index (AQI) values",
        "I²C and SPI (flexible communication options)",
        "1.71V-3.6V supply (commonly 3.3V)",
        "Integrated humidity and temperature compensation",
        "Low power operation; factory calibrated; compact piggyback design",
      ],
      apps: [
        "Indoor air quality monitoring (homes, offices, schools)",
        "HVAC control and demand-controlled ventilation (DCV)",
        "Smart appliances (air purifiers, dehumidifiers, HVAC systems)",
        "IoT air quality nodes and environmental monitoring stations",
        "Smart agriculture (crop storage, greenhouses)",
        "Portable and wearable air quality monitors",
      ],
      summary:
        "The Piggyback ENS160 is a next-generation multi-gas sensor module, offering a complete digital air quality solution with VOC, eCO₂, and AQI outputs. Its multi-gas detection capability, built-in compensation, and piggyback integration make it ideal for IoT developers, HVAC optimization, and smart home or building applications.",
    },
    de: {
      explanation:
        "Das Piggyback ENS160 ist ScioSenses fortschrittlicher digitaler Multigas-Luftqualitätssensor mit mehreren unabhängigen Metalloxid-Sensorelementen zur gleichzeitigen Erkennung von VOCs, reduzierenden Gasen (CO, H₂) und oxidierenden Gasen (Ozon, NO₂). Dieser Multi-Kanal-Ansatz liefert drei Metriken: TVOC-Konzentration in mg/m³, eCO₂ in ppm und einen standardisierten Luftqualitätsindex (AQI). Integrierte Feuchtigkeits- und Temperaturkompensationsalgorithmen gewährleisten genaue Messwerte über einen breiten Umgebungsbereich. Mit I²C und SPI, 1,71V–3,6V und Low-Power-Modi steckt er direkt auf den C3-Mini auf.",
      features: [
        "Überwacht flüchtige organische Verbindungen (VOCs)",
        "Erkennt oxidierende Gase (z. B. Ozon, NO₂) und reduzierende Gase (z. B. CO, H₂)",
        "Ausgabedaten: TVOC-Konzentration (mg/m³), eCO₂ (ppm), standardisierter Luftqualitätsindex (AQI)",
        "I²C und SPI (flexible Kommunikationsoptionen)",
        "1,71V–3,6V (typisch 3,3V)",
        "Integrierte Feuchtigkeits- und Temperaturkompensation",
        "Geringer Energieverbrauch; werkskalibiert; kompaktes Piggyback-Design",
      ],
      apps: [
        "Innenraumluftqualitätsüberwachung (Häuser, Büros, Schulen)",
        "HVAC-Steuerung und bedarfsgesteuerte Lüftung (DCV)",
        "Smart Appliances (Luftreiniger, Entfeuchter, HVAC)",
        "IoT-Luftqualitätsknoten und Umweltüberwachungsstationen",
        "Smart Agriculture (Erntlagerung, Gewächshäuser)",
        "Tragbare Luftqualitätsmonitore und Wearables",
      ],
      summary:
        "Das Piggyback ENS160 ist ein Multigas-Sensormodul der nächsten Generation mit vollständiger digitaler Luftqualitätslösung (VOC, eCO₂, AQI). Ideal für IoT-Entwickler, HVAC-Optimierung und Smart-Home- oder Gebäudeanwendungen.",
    },
  },
  {
    name: "Piggyback CCS811",
    image: "/images/products/piggybacks/piggy12.png",
    shopLink: null,
    en: {
      explanation:
        "The Piggyback CCS811 is ams OSRAM's digital indoor air quality sensor, measuring total volatile organic compounds and computing equivalent CO₂ using an on-chip microcontroller running ams's proprietary gas-sensing algorithm. This means the CCS811 delivers ready-to-use TVOC (ppb) and eCO₂ (ppm) readings directly over I²C without any floating-point math on the host MCU. It supports four programmable drive modes from 1-second to 60-second measurement intervals, and an on-chip baseline correction continuously adapts to long-term background VOC levels. Operating on 1.8V–3.6V with multiple low-power modes, it clips onto the C3-Mini without any additional wiring.",
      features: [
        "Measures total VOCs (TVOCs) in the air",
        "Provides equivalent CO₂ (eCO₂) readings (400-8192 ppm)",
        "I²C digital communication (easy to connect to MCUs)",
        "1.8V-3.6V supply (commonly 3.3V)",
        "Integrated MCU runs on-chip algorithms for gas-to-eCO₂ and TVOC conversion",
        "Low power consumption with multiple operating modes",
        "On-chip baseline compensation; factory calibrated; compact piggyback design",
      ],
      apps: [
        "Indoor air quality monitoring (homes, offices, schools)",
        "Smart HVAC and demand-controlled ventilation (DCV)",
        "Air purifiers, humidifiers, and smart appliances",
        "Wearable or portable air quality monitors",
        "IoT air quality sensor nodes",
        "Environmental data loggers",
      ],
      summary:
        "The Piggyback CCS811 is a digital indoor air quality sensor module, providing VOC and CO₂ equivalent measurements with low power use and simple I²C integration. While newer sensors like the ENS160 and SGP40 offer enhanced stability and extended gas detection, the CCS811 remains a cost-effective and widely used option for IoT and smart building applications.",
    },
    de: {
      explanation:
        "Das Piggyback CCS811 ist ams OSRAMs digitales Innenraumluftqualitätssensormodul, das VOCs misst und eCO₂ mithilfe eines On-Chip-Mikrocontrollers berechnet. Diese Integration liefert fertige TVOC (ppb) und eCO₂ (ppm) Messwerte direkt über I²C ohne Floating-Point-Berechnungen auf dem Host-MCU. Es unterstützt vier programmierbare Antriebsmodi von 1 bis 60 Sekunden Messintervall, und ein On-Chip-Basiskorrekturalgorithmus passt sich kontinuierlich an Hintergrund-VOC-Werte an. Mit 1,8V–3,6V und mehreren Low-Power-Modi steckt es direkt auf den C3-Mini auf.",
      features: [
        "Misst Gesamt-VOCs (TVOCs) in der Luft",
        "Liefert eCO₂-Messwerte (400–8192 ppm)",
        "I²C-Digitalkommunikation",
        "1,8V–3,6V (typisch 3,3V)",
        "Integrierter MCU für On-Chip-Gas-zu-eCO₂- und TVOC-Konvertierung",
        "Geringer Energieverbrauch mit mehreren Betriebsmodi",
        "On-Chip-Basiskompensation; werkskalibiert; kompaktes Piggyback-Design",
      ],
      apps: [
        "Innenraumluftqualitätsüberwachung (Häuser, Büros, Schulen)",
        "Intelligente HVAC- und bedarfsgesteuerte Lüftung (DCV)",
        "Luftreiniger, Luftbefeuchter und Smart Appliances",
        "Tragbare Luftqualitätsmonitore und Wearables",
        "IoT-Luftqualitätssensorknoten",
        "Umweltdatenlogger",
      ],
      summary:
        "Das Piggyback CCS811 ist ein digitales Innenraum-Luftqualitätssensormodul für VOC- und CO₂-Äquivalentmessungen mit geringem Energieverbrauch und einfacher I²C-Integration. Eine bewährte, kostengünstige Option für IoT- und Smart-Building-Anwendungen.",
    },
  },
  {
    name: "Piggyback MICS-6814",
    image: "/images/products/piggybacks/piggy14.png",
    shopLink: null,
    en: {
      explanation:
        "The Piggyback MICS-6814 is a multi-gas sensor from SGX Sensortech integrating three independent metal-oxide (MOX) elements on a single substrate, each optimised for a different gas class: reducing gases (CO, CH₄, LPG), ammonia-like compounds (NH₃), and oxidising gases (NO₂). Each element outputs an analog resistance change proportional to the target gas concentration, requiring ADC sampling and calibration curves on the host MCU. The sensor needs a brief pre-heating period after power-up before readings are valid. With a 3.3V–5V supply and broad gas coverage, the MICS-6814 stacks directly onto the C3-Mini for multi-gas air quality and industrial safety monitoring.",
      features: [
        "Detects CO, CH₄, LPG, reducing gases; NO₂, oxidizing gases; NH₃, ammonia-like gases",
        "Three independent MOX sensing elements: CO/CH₄/LPG sensor, NH₃ sensor, NO₂ sensor",
        "Analog resistance changes output (requires ADC for MCU integration)",
        "3.3V–5V supply (module dependent, heater required)",
        "Pre-heating required for stable operation",
        "Long lifetime with robust performance in environmental applications",
        "Compact piggyback format for easier integration",
      ],
      apps: [
        "Indoor and outdoor air quality monitoring",
        "Smart agriculture (detecting ammonia in livestock farming, soil conditions, fertilizer gases)",
        "Industrial safety (monitoring CO, CH₄, hazardous gases)",
        "Smart cities and IoT nodes for pollution tracking",
        "Portable gas detectors and handheld analyzers",
        "Environmental research",
      ],
      summary:
        "The Piggyback MICS-6814 is a powerful multi-gas sensor module, offering broad detection capability across toxic gases, pollutants, and combustible gases. While it requires analog signal processing and calibration, its wide gas coverage makes it a strong choice for environmental sensing, industrial safety, and IoT air quality monitoring.",
    },
    de: {
      explanation:
        "Das Piggyback MICS-6814 ist ein Multigas-Sensormodul von SGX Sensortech mit drei unabhängigen Metalloxid-Sensorelementen, jeweils optimiert für eine andere Gasklasse: reduzierende Gase (CO, CH₄, LPG), ammoniakartige Verbindungen (NH₃) und oxidierende Gase (NO₂). Jedes Sensorelement gibt eine analoge Widerstandsänderung proportional zur Zielgaskonzentration aus, die ADC-Abtastung und Kalibrierungskurven auf dem Host-MCU erfordert. Der Sensor benötigt eine kurze Vorheizzeit nach dem Einschalten. Mit 3,3V–5V und breiter Gasabdeckung steckt der MICS-6814 direkt auf den C3-Mini auf.",
      features: [
        "Erkennt CO, CH₄, LPG, reduzierende Gase; NO₂, oxidierende Gase; NH₃, Ammoniak-ähnliche Gase",
        "Drei unabhängige MOX-Sensorelemente: CO/CH₄/LPG-Sensor, NH₃-Sensor, NO₂-Sensor",
        "Analoger Widerstandsausgang (ADC für MCU-Integration erforderlich)",
        "3,3V–5V (modulabhängig, Heizung erforderlich)",
        "Vorheizzeit für stabilen Betrieb erforderlich",
        "Lange Lebensdauer mit robuster Leistung",
        "Kompaktes Piggyback-Format",
      ],
      apps: [
        "Innen- und Außenluftqualitätsüberwachung",
        "Smart Agriculture (Ammoniakdetektion in der Tierhaltung, Bodenbedingungen, Düngergase)",
        "Industriesicherheit (Überwachung von CO, CH₄, gefährlichen Gasen)",
        "Smart Cities und IoT-Knoten zur Schadstoffverfolgung",
        "Tragbare Gasdetektoren und Handanalysatoren",
        "Umweltforschung",
      ],
      summary:
        "Das Piggyback MICS-6814 ist ein leistungsstarkes Multigas-Sensormodul mit breiter Erkennungsfähigkeit für toxische Gase, Schadstoffe und brennbare Gase. Trotz erforderlicher analoger Signalverarbeitung ist es eine starke Wahl für Umweltsensing, Industriesicherheit und IoT-Luftqualitätsmonitoring.",
    },
  },
  {
    name: "Piggyback LD2410",
    image: "/images/products/piggybacks/piggy14.png",
    shopLink: null,
    en: {
      explanation:
        "The Piggyback LD2410 is a 24 GHz FMCW radar sensor module for human presence and motion detection, capable of detecting the tiny chest-wall movements caused by breathing — something PIR sensors fundamentally cannot achieve. It reliably reports that a stationary person is present even when sitting quietly, sleeping, or concentrating at a desk. The module supports UART for full configuration and data output, plus a GPIO pin for simple binary presence/absence triggers. With detection range up to 6 metres for presence and ~5 metres for micro-motion, a ~100° × 40° field of view, and 3.3V–5V supply, it stacks directly onto the C3-Mini with no extra wiring.",
      features: [
        "Detects human presence, even when stationary (e.g., sitting, sleeping)",
        "Detects motion with configurable sensitivity and distance",
        "Detection range: Up to 6 meters for presence detection; up to ~5 meters for micro-motion sensing",
        "Field of view: ~100° horizontal / 40° vertical",
        "3.3V-5V supply (typical 5V with onboard regulator)",
        "UART (serial) for configuration and data output; GPIO for simple presence/motion triggers",
        "Low power consumption compared to camera-based solutions",
        "Configurable parameters; compact piggyback module format",
      ],
      apps: [
        "Smart lighting (auto on/off when people enter or leave a room)",
        "Smart home presence detection (HVAC, appliances, automation)",
        "Office occupancy monitoring for energy saving",
        "Security and intrusion detection systems",
        "Elderly care and health monitoring (detecting stillness or inactivity)",
        "IoT devices requiring non-contact human detection",
      ],
      summary:
        "The Piggyback LD2410 is a radar-based human presence and motion detection module that outperforms traditional PIR sensors by detecting both movement and stationary presence. With UART/GPIO interfaces, configurable settings, and a piggyback design, it is well-suited for smart homes, IoT systems, and security applications requiring reliable, contactless detection.",
    },
    de: {
      explanation:
        "Das Piggyback LD2410 ist ein 24-GHz-FMCW-Radarsensormodul für die Erkennung menschlicher Präsenz und Bewegung, das auch die winzigen Atembrustkorbbewegungen erkennt — etwas, das PIR-Sensoren grundlegend nicht können. Es meldet zuverlässig, dass eine stationäre Person anwesend ist, auch wenn sie ruhig sitzt, schläft oder sich konzentriert. Das Modul unterstützt UART für vollständige Konfiguration und GPIO für einfache binäre Trigger. Mit Erkennungsreichweite bis zu 6 m, einem Sichtfeld von ~100° × 40° und 3,3V–5V steckt es direkt auf den C3-Mini auf.",
      features: [
        "Erkennt menschliche Präsenz, auch bei Stillstand (z. B. Sitzen, Schlafen)",
        "Erkennt Bewegung mit konfigurierbarer Empfindlichkeit und Distanz",
        "Erkennungsreichweite: bis zu 6 m Präsenz; bis zu ~5 m Mikrobewegung",
        "Sichtfeld: ~100° horizontal / 40° vertikal",
        "3,3V–5V (typisch 5V mit Onboard-Regler)",
        "UART für Konfiguration und Datenausgabe; GPIO für einfache Trigger",
        "Geringer Energieverbrauch im Vergleich zu kamerabasierten Lösungen",
        "Konfigurierbare Parameter; kompaktes Piggyback-Format",
      ],
      apps: [
        "Intelligente Beleuchtung (automatisches Ein-/Ausschalten bei Personenein-/-austritt)",
        "Smart-Home-Präsenzerkennung (HVAC, Geräte, Automatisierung)",
        "Bürobelegungsüberwachung zur Energieeinsparung",
        "Sicherheits- und Einbrucherkennungssysteme",
        "Altenpflege und Gesundheitsüberwachung (Erkennung von Stillstand oder Inaktivität)",
        "IoT-Geräte mit berührungsloser Menschenerkennung",
      ],
      summary:
        "Das Piggyback LD2410 ist ein radarbasiertes Präsenz- und Bewegungserkennungsmodul, das herkömmliche PIR-Sensoren übertrifft, indem es sowohl Bewegung als auch stationäre Präsenz erkennt. Ideal für Smart Homes, IoT-Systeme und Sicherheitsanwendungen.",
    },
  },
  {
    name: "Piggyback LD6002",
    image: "/images/products/piggybacks/piggy15.png",
    shopLink: null,
    en: {
      explanation:
        "The Piggyback LD6002 is a next-generation 24 GHz FMCW radar sensor that builds on the LD2410 with a more sophisticated DSP pipeline, delivering extended detection range and improved discrimination between different types of human micro-motion. Presence detection range extends to approximately 8 metres and motion detection to approximately 10 metres, with a wide 120° × 60° field of view. The UART interface provides rich data including per-gate energy values and target distance estimates for zone-based logic, occupancy counting, or fall detection. Like all Carenuity Piggyback modules, the LD6002 requires no additional wiring and stacks directly onto the C3-Mini.",
      features: [
        "Detects human presence (stationary and moving)",
        "Detects micro-motions such as breathing, sitting still, subtle gestures",
        "More advanced processing vs. LD2410 with better accuracy and stability",
        "Presence detection: up to ~8 meters; Motion detection: up to ~10 meters",
        "Wide field of view: ~120° horizontal / 60° vertical",
        "UART for configuration and detailed data output; GPIO for simple trigger outputs",
        "Configurable parameters; 3.3V-5V supply (with onboard regulator)",
        "Low power consumption; piggyback format",
      ],
      apps: [
        "Smart lighting and building automation",
        "Advanced security and intrusion detection systems",
        "Smart home HVAC and occupancy-based energy control",
        "Health and elderly care (breathing detection, inactivity alerts)",
        "IoT devices requiring reliable human presence detection",
        "Contactless user interfaces and gesture sensing",
      ],
      summary:
        "The Piggyback LD6002 is a next-generation radar motion sensor module, offering longer range, finer detection, and better stability than entry-level radar sensors like the LD2410. Its ability to detect stationary presence and micro-movements makes it ideal for smart homes, security, healthcare, and IoT applications where reliability and sensitivity are crucial.",
    },
    de: {
      explanation:
        "Das Piggyback LD6002 ist ein 24-GHz-FMCW-Radarsensor der nächsten Generation, der auf dem LD2410 aufbaut und eine ausgefeiltere DSP-Pipeline für erweiterte Erkennungsreichweite und verbesserte Unterscheidung von Mikrobewegungen bietet. Die Präsenzerkennung erstreckt sich auf ca. 8 Meter und die Bewegungserkennung auf ca. 10 Meter, mit einem Sichtfeld von 120° × 60°. Die UART-Schnittstelle liefert umfangreiche Daten einschließlich Energie-pro-Gate-Werte und Zieldistanzschätzungen für zonenbasierte Logik. Das LD6002 benötigt keine zusätzliche Verkabelung und steckt direkt auf den C3-Mini auf.",
      features: [
        "Erkennt menschliche Präsenz (stationär und bewegend)",
        "Erkennt Mikrobewegungen wie Atmung, ruhiges Sitzen, subtile Gesten",
        "Fortschrittlichere Verarbeitung als LD2410 mit besserer Genauigkeit und Stabilität",
        "Präsenzerkennung: bis zu ~8 m; Bewegungserkennung: bis zu ~10 m",
        "Breites Sichtfeld: ~120° horizontal / 60° vertikal",
        "UART für Konfiguration und detaillierte Datenausgabe; GPIO für einfache Trigger",
        "Konfigurierbare Parameter; 3,3V–5V (mit Onboard-Regler)",
        "Geringer Energieverbrauch; Piggyback-Format",
      ],
      apps: [
        "Intelligente Beleuchtung und Gebäudeautomation",
        "Erweiterte Sicherheits- und Einbrucherkennungssysteme",
        "Smart-Home-HVAC und belegungsbasierte Energiesteuerung",
        "Gesundheits- und Altenpflege (Atemungserkennung, Inaktivitätswarnungen)",
        "IoT-Geräte mit zuverlässiger Menschenpräsenzerkennung",
        "Berührungslose Benutzeroberflächen und Gestensteuerung",
      ],
      summary:
        "Das Piggyback LD6002 ist ein Radarbewegungssensormodul der nächsten Generation mit größerer Reichweite, feinerer Erkennung und besserer Stabilität als Einstiegsradarsensoren wie das LD2410. Ideal für Smart Homes, Sicherheit, Gesundheitsversorgung und IoT-Anwendungen.",
    },
  },
  {
    name: "Piggyback TSL2591",
    image: "/images/products/piggybacks/piggy16.png",
    shopLink: null,
    en: {
      explanation:
        "The Piggyback TSL2591 is ams OSRAM's premium ambient light sensor with an exceptional dynamic range of 188 µlux to 88,000 lux, allowing a single sensor to accurately measure everything from a moonlit night to direct sunlight. A dual-photodiode architecture — one for infrared and visible, one for infrared only — enables infrared compensation for perceptually accurate lux values matching human vision. Sixteen-bit ADC resolution with programmable gain (1×–9876×) and configurable integration times (100–600 ms) give precise control over sensitivity. An I²C interface with programmable interrupt thresholds eliminates constant polling, and the TSL2591 piggyback slots onto the C3-Mini operating on 2.7V–3.6V.",
      features: [
        "Measures light intensity in lux",
        "Extremely wide dynamic range: 188 µlux-88,000 lux",
        "Works well in both low-light and high-brightness environments",
        "Dual photodiodes (one for infrared + visible light; one for visible light only)",
        "Enables infrared compensation for accurate lux calculations",
        "High resolution: 16-bit ADC for precise light readings",
        "I²C interface; 2.7V-3.6V supply (typ. 3.3V)",
        "Low power operation with programmable gain and integration times",
        "Compact piggyback module design",
      ],
      apps: [
        "Automatic brightness adjustment (smartphones, tablets, laptops, displays)",
        "Smart lighting control (daylight harvesting, energy-saving systems)",
        "IoT environmental monitoring nodes",
        "Smart agriculture (controlling artificial lighting for crops)",
        "Wearables and portable devices",
        "Photography and camera exposure systems",
      ],
      summary:
        "The Piggyback TSL2591 is a high-performance ambient light sensor module, offering ultra-wide dynamic range, high accuracy, and infrared compensation. Its piggyback format makes it compact and easy to integrate, making it ideal for IoT, smart home, portable devices, and automated lighting applications.",
    },
    de: {
      explanation:
        "Das Piggyback TSL2591 ist ams OSRAMs Premium-Umgebungslichtsensor mit einem außergewöhnlichen Dynamikbereich von 188 µlux bis 88.000 lux, der einem Sensor ermöglicht, alles von einer mondbeleuchteten Nacht bis zu direktem Sonnenlicht zu messen. Eine Zweifotodioden-Architektur — eine für Infrarot und sichtbares Licht, eine nur für Infrarot — ermöglicht Infrarotkompensation für genaue Lux-Werte, die dem menschlichen Sehen entsprechen. Die 16-Bit-ADC-Auflösung mit programmierbarer Verstärkung und konfigurierbaren Integrationszeiten gibt präzise Kontrolle über die Empfindlichkeit. Eine I²C-Schnittstelle mit programmierbaren Interrupt-Schwellenwerten eliminiert ständige Abfragen, und das TSL2591-Piggyback steckt mit 2,7V–3,6V auf den C3-Mini auf.",
      features: [
        "Misst Lichtintensität in Lux",
        "Extrem breiter Dynamikbereich: 188 µlux–88.000 lux",
        "Funktioniert gut in Niedriglicht- und Hochhelligkeit-Umgebungen",
        "Doppelte Fotodioden (eine für IR + sichtbares Licht; eine nur für sichtbares Licht)",
        "Infrarotkompensation für genaue Lux-Berechnungen",
        "Hohe Auflösung: 16-Bit-ADC",
        "I²C-Schnittstelle; 2,7V–3,6V (typisch 3,3V)",
        "Geringer Energieverbrauch mit programmierbarer Verstärkung und Integrationszeiten",
        "Kompaktes Piggyback-Moduldesign",
      ],
      apps: [
        "Automatische Helligkeitsanpassung (Smartphones, Tablets, Laptops, Displays)",
        "Intelligente Lichtsteuerung (Tageslichtnutzung, energiesparende Systeme)",
        "IoT-Umweltüberwachungsknoten",
        "Smart Agriculture (Steuerung von Kunstlicht für Pflanzen)",
        "Wearables und tragbare Geräte",
        "Fotografie und Kameralichtsysteme",
      ],
      summary:
        "Das Piggyback TSL2591 ist ein leistungsstarkes Umgebungslichtsensormodul mit ultra-breitem Dynamikbereich, hoher Genauigkeit und Infrarotkompensation. Ideal für IoT, Smart Home, tragbare Geräte und automatisierte Beleuchtungsanwendungen.",
    },
  },
  {
    name: "Piggyback MAX30102",
    image: "/images/products/piggybacks/piggy17.png",
    shopLink: null,
    en: {
      explanation:
        "The Piggyback MAX30102 is Maxim Integrated's pulse oximeter and heart-rate sensor, combining red and infrared LEDs, a high-sensitivity photodetector, and a low-noise analog front end in a single compact package. It uses photoplethysmography (PPG) to detect the pulsatile flow of blood and derive heart rate, and by alternating between red and infrared LEDs also estimates blood oxygen saturation (SpO₂). An on-chip ambient light cancellation circuit suppresses interference from room lighting. Configurable LED current, sampling rate (up to 3200 Hz), and ADC resolution give full control over the accuracy-power trade-off, and the MAX30102 snaps onto the C3-Mini to create a compact wearable health monitoring node.",
      features: [
        "Measures pulse rate using photoplethysmography (PPG)",
        "Estimates blood oxygen saturation (SpO₂)",
        "Integrated components: Red & IR LEDs for sensing, photodiode + optical elements, low-noise analog front end",
        "Low power operation suitable for battery-powered wearables",
        "I²C digital interface for microcontroller communication",
        "Configurable sampling rate, LED current, and resolution",
        "1.8V (core) and 3.3V (I/O) supply with onboard regulation",
        "Compact piggyback module for stacking",
      ],
      apps: [
        "Wearable fitness trackers (heart rate, oxygen monitoring)",
        "Smartwatches and health bands",
        "Home healthcare devices (SpO₂ and pulse monitoring)",
        "IoT-based remote patient monitoring systems",
        "Sports and fitness equipment (real-time heart tracking)",
        "Sleep monitoring (resting HR and oxygen levels)",
      ],
      summary:
        "The Piggyback MAX30102 is a compact, low-power pulse oximeter and heart-rate sensor module that provides accurate biometric measurements. Its piggyback design makes it integration-friendly for wearables, smart health devices, and IoT medical monitoring solutions.",
    },
    de: {
      explanation:
        "Das Piggyback MAX30102 ist Maxim Integrateds Pulsoximeter- und Herzfrequenzsensor, der rote und Infrarot-LEDs, einen hochempfindlichen Fotodetektor und ein rauscharmes Analog-Frontend in einem einzigen kompakten Gehäuse kombiniert. Es verwendet Photoplethysmografie (PPG), um den pulsatilen Blutfluss zu erkennen und die Herzfrequenz abzuleiten, und schätzt durch Wechsel zwischen roter und IR-Beleuchtung auch SpO₂. Eine On-Chip-Umgebungslichtkompensationsschaltung unterdrückt Raumlichtstörungen. Konfigurierbare LED-Strom, Abtastrate (bis zu 3200 Hz) und ADC-Auflösung geben volle Kontrolle, und der MAX30102 schnappt für einen kompakten Gesundheitsmonitor auf den C3-Mini auf.",
      features: [
        "Misst Pulsfrequenz mittels Photoplethysmografie (PPG)",
        "Schätzt Blutsauerstoffsättigung (SpO₂)",
        "Integrierte Komponenten: Rot- und IR-LEDs, Fotodiode + optische Elemente, rauscharmes Analog-Frontend",
        "Geringer Energieverbrauch für batteriebetriebene Wearables",
        "I²C-Digitalschnittstelle für Mikrocontroller-Kommunikation",
        "Konfigurierbare Abtastrate, LED-Strom und Auflösung",
        "1,8V (Kern) und 3,3V (I/O) mit Onboard-Regelung",
        "Kompaktes, stapelbares Piggyback-Modul",
      ],
      apps: [
        "Tragbare Fitness-Tracker (Herzfrequenz, Sauerstoffüberwachung)",
        "Smartwatches und Gesundheitsbänder",
        "Häusliche Gesundheitsgeräte (SpO₂- und Pulsüberwachung)",
        "IoT-basierte Fernpatientenüberwachungssysteme",
        "Sport- und Fitnessgeräte (Echtzeit-Herztracking)",
        "Schlafüberwachung (Ruhe-Herzfrequenz und Sauerstoffwerte)",
      ],
      summary:
        "Das Piggyback MAX30102 ist ein kompaktes, energiesparendes Pulsoximeter- und Herzfrequenzsensormodul für genaue biometrische Messungen. Ideal für Wearables, Smart-Health-Geräte und IoT-Medizinmonitoring.",
    },
  },
  {
    name: "Piggyback TCS3472",
    image: "/images/products/piggybacks/piggy18.png",
    shopLink: null,
    en: {
      explanation:
        "The Piggyback TCS3472 is ams OSRAM's precision digital colour and light sensor, integrating a photodiode array with red, green, blue, and clear (broadband) channels, each backed by a 16-bit ADC for four simultaneous high-resolution measurements. An on-chip IR blocking filter minimises infrared contamination from incandescent or halogen sources, ensuring RGB measurements represent visible light as perceived by the human eye. From raw RGBC values, the host firmware can derive calibrated lux, correlated colour temperature (CCT), and CIE chromaticity coordinates. Programmable gain (1×–60×), configurable integration time, and an interrupt output with configurable thresholds make the TCS3472 piggyback versatile for smart display backlight adaptation and robotic colour sorting.",
      features: [
        "Detects red, green, blue, and clear light intensity",
        "Outputs raw data or calibrated RGB values",
        "Provides lux (illuminance) and color temperature estimates",
        "High-resolution measurements: 16-bit ADC for accurate sensing",
        "Wide dynamic range for use in bright or dim environments",
        "Integrated IR blocking filter improves accuracy under different light sources",
        "I²C interface (easy MCU/SoC integration)",
        "Interrupt function for threshold-based color/light detection",
        "2.7V-3.6V supply (typ. 3.3V); piggyback module format",
      ],
      apps: [
        "Display color calibration and backlight adjustment",
        "Ambient light sensing for smart lighting systems",
        "Color recognition in robotics (line-following, object sorting)",
        "IoT devices requiring environmental color/light awareness",
        "Consumer electronics (screen brightness, adaptive color tuning)",
        "Industrial automation (color-based sorting, quality control)",
      ],
      summary:
        "The Piggyback TCS3472 is a compact digital color sensor module that measures RGB values, ambient light, and color temperature. Its I²C interface and piggyback design make it easy to use in IoT devices, robotics, smart lighting, and display calibration systems.",
    },
    de: {
      explanation:
        "Das Piggyback TCS3472 ist ams OSRAMs präzises digitales Farb- und Lichtsensormodul mit einer Fotodiodenmatrix mit roten, grünen, blauen und klaren (Breitband) Kanälen, jeweils mit 16-Bit-ADC für vier simultane hochauflösende Messungen. Ein On-Chip-IR-Sperrfilter minimiert Infrarotkontamination von Glüh- oder Halogenlichquellen und stellt korrekte RGB-Messungen sicher. Aus den rohen RGBC-Werten kann die Firmware kalibrierte Lux-, Farbtemperatur- und CIE-Chromatizitätswerte ableiten. Programmierbare Verstärkung, Integrationszeit und Interrupt-Ausgabe machen das TCS3472-Piggyback vielseitig für Smart-Lighting und robotische Farberkennung.",
      features: [
        "Erkennt rotes, grünes, blaues und klares Licht",
        "Gibt Rohdaten oder kalibrierte RGB-Werte aus",
        "Liefert Lux- und Farbtemperaturschätzungen",
        "Hochauflösende Messungen: 16-Bit-ADC",
        "Breiter Dynamikbereich für helle und dunkle Umgebungen",
        "Integrierter IR-Sperrfilter für bessere Genauigkeit",
        "I²C-Schnittstelle (einfache MCU/SoC-Integration)",
        "Interrupt-Funktion für schwellenwertbasierte Erkennung",
        "2,7V–3,6V (typisch 3,3V); Piggyback-Format",
      ],
      apps: [
        "Display-Farbkalibrierung und Hintergrundbeleuchtungsanpassung",
        "Umgebungslichterkennung für Smart-Lighting-Systeme",
        "Farberkennung in der Robotik (Linienfolgen, Objektsortierung)",
        "IoT-Geräte mit Farb-/Lichtwahrnehmung",
        "Unterhaltungselektronik (Bildschirmhelligkeit, adaptive Farbabstimmung)",
        "Industrieautomation (farbbasierte Sortierung, Qualitätskontrolle)",
      ],
      summary:
        "Das Piggyback TCS3472 ist ein kompaktes digitales Farbsensormodul für RGB-Werte, Umgebungslicht und Farbtemperatur. Einfach zu verwenden in IoT-Geräten, Robotik, Smart Lighting und Display-Kalibrierungssystemen.",
    },
  },
  {
    name: "Piggyback CH20",
    image: "/images/products/piggybacks/piggy19.png",
    shopLink: null,
    en: {
      explanation:
        "The Piggyback CH20 is a dedicated formaldehyde (HCHO) gas sensor module designed to monitor one of the most prevalent indoor air pollutants, released by pressed-wood furniture, adhesives, paints, and insulation foam. The sensor uses a high-sensitivity electrochemical or MEMS element optimised for HCHO selectivity, delivering real-time concentration readings in ppm or mg/m³ via analog output or digital UART/I²C interface. Stable performance and good repeatability ensure consistent readings across months of continuous deployment without frequent recalibration. Operating on 3.3V–5V with low power consumption, the module stacks directly onto the C3-Mini for an immediately deployable formaldehyde monitoring solution.",
      features: [
        "Specifically designed for HCHO gas monitoring",
        "Provides real-time concentration output (ppm or mg/m³ depending on calibration)",
        "High sensitivity & selectivity optimized for detecting low-level formaldehyde",
        "Stable performance with good repeatability and long-term reliability",
        "3.3V-5V supply",
        "Interface options: Analog output or digital output via UART/I²C",
        "Low power consumption for continuous monitoring",
        "Compact piggyback form factor",
      ],
      apps: [
        "Indoor air quality monitoring (smart homes, offices, schools)",
        "Air purifiers and HVAC systems (formaldehyde detection & filtering)",
        "IoT-based environmental monitoring networks",
        "Industrial safety (factories, chemical storage, furniture production)",
        "Wearable or portable air quality detectors",
        "Health and safety devices (exposure prevention in sensitive environments)",
      ],
      summary:
        "The Piggyback CH20 is a formaldehyde gas sensor module that enables accurate detection of HCHO in indoor and industrial environments. Its high sensitivity, low power design, and piggyback module format make it ideal for air quality monitors, smart home devices, and IoT health and safety solutions.",
    },
    de: {
      explanation:
        "Das Piggyback CH20 ist ein dediziertes Formaldehyd-Gassensormodul zur Überwachung eines der häufigsten Innenraumluftschadstoffe, der von Pressholzmöbeln, Klebstoffen, Farben und Dämmstoffen freigesetzt wird. Der Sensor verwendet ein hochempfindliches elektrochemisches oder MEMS-Element mit HCHO-Selektivität und liefert Echtzeit-Konzentrationsmesswerte in ppm oder mg/m³ über Analog- oder digitale UART/I²C-Schnittstelle. Stabile Leistung und gute Wiederholbarkeit stellen sicher, dass Messwerte über Monate konsistent bleiben. Mit 3,3V–5V und niedrigem Energieverbrauch steckt das Modul direkt auf den C3-Mini auf.",
      features: [
        "Speziell für HCHO-Gasüberwachung entwickelt",
        "Liefert Echtzeit-Konzentrationsausgabe (ppm oder mg/m³)",
        "Hohe Empfindlichkeit und Selektivität für die Erkennung niedriger Formaldehydkonzentrationen",
        "Stabile Leistung mit guter Wiederholbarkeit und Langzeitbetrieb",
        "3,3V–5V",
        "Schnittstellenoptionen: Analogausgang oder Digitalausgang über UART/I²C",
        "Geringer Energieverbrauch für kontinuierliches Monitoring",
        "Kompaktes Piggyback-Format",
      ],
      apps: [
        "Innenraumluftqualitätsüberwachung (Smart Homes, Büros, Schulen)",
        "Luftreiniger und HVAC-Systeme (Formaldehyderkennung und -filterung)",
        "IoT-basierte Umweltüberwachungsnetzwerke",
        "Industriesicherheit (Fabriken, Chemikalienlagerung, Möbelproduktion)",
        "Tragbare Luftqualitätsdetektoren",
        "Gesundheits- und Sicherheitsgeräte (Expositionsschutz in sensiblen Umgebungen)",
      ],
      summary:
        "Das Piggyback CH20 ist ein Formaldehydgassensormodul für die genaue Erkennung von HCHO in Innenräumen und industriellen Umgebungen. Ideal für Luftqualitätsmonitore, Smart-Home-Geräte und IoT-Gesundheits- und Sicherheitslösungen.",
    },
  },
];
