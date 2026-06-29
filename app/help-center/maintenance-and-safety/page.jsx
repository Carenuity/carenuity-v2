"use client";
import HelpCenterShell, {
  HcCard,
  HcH2,
  HcUL,
} from "../../components/HelpCenterShell";
import { useLanguage } from "../../context/LanguageContext";

export default function MaintenanceSafetyPage() {
  const { lang } = useLanguage();
  const de = lang === "de";

  return (
    <HelpCenterShell
      title={de ? "Wartung & Sicherheit" : "Maintenance & Safety"}
      subtitle={
        de
          ? "Richtige Wartung und sichere Installation sorgen für genaue Messungen, lange Lebensdauer und zuverlässige Warnungen."
          : "Proper maintenance and safe installation ensure accurate sensor readings, long device life, and reliable alerts."
      }
    >
      <HcCard>
        <HcH2>{de ? "1. Reinigung" : "1. Cleaning"}</HcH2>
        <HcUL>
          <li>
            {de ? (
              <>
                Verwenden Sie ein{" "}
                <strong className="text-black dark:text-white">weiches, trockenes Tuch</strong>, um
                die Oberfläche des SQ-Panels zu reinigen.
              </>
            ) : (
              <>
                Use a{" "}
                <strong className="text-black dark:text-white">soft, dry cloth</strong> to wipe the
                surface of the SQ-Panel.
              </>
            )}
          </li>
          <li>
            {de ? (
              <>
                Vermeiden Sie{" "}
                <strong className="text-black dark:text-white">
                  Flüssigkeiten, Sprays oder scheuernde Reiniger
                </strong>
                , da diese die Sensoren beschädigen können.
              </>
            ) : (
              <>
                Avoid{" "}
                <strong className="text-black dark:text-white">
                  liquids, sprays, or abrasive cleaners
                </strong>
                , which can damage the sensors.
              </>
            )}
          </li>
          <li>
            {de ? (
              <>
                Öffnen Sie das Gerät{" "}
                <strong className="text-black dark:text-white">nicht</strong>; interne Komponenten
                sind empfindlich.
              </>
            ) : (
              <>
                Do{" "}
                <strong className="text-black dark:text-white">not open the device</strong>; internal
                components are sensitive.
              </>
            )}
          </li>
          <li>
            {de ? (
              <>
                Empfohlene Reinigungsfrequenz:{" "}
                <strong className="text-black dark:text-white">einmal im Monat</strong> oder wenn
                sich Staub ansammelt.
              </>
            ) : (
              <>
                Recommended cleaning frequency:{" "}
                <strong className="text-black dark:text-white">once a month</strong> or when dust
                accumulates.
              </>
            )}
          </li>
        </HcUL>

        <HcH2>{de ? "2. Stromversorgung" : "2. Power Supply"}</HcH2>
        <HcUL>
          <li>
            {de ? (
              <>
                Verwenden Sie nur den mitgelieferten{" "}
                <strong className="text-black dark:text-white">USB-C-Netzadapter</strong>.
              </>
            ) : (
              <>
                Use only the{" "}
                <strong className="text-black dark:text-white">included USB-C power adapter</strong>.
              </>
            )}
          </li>
          <li>{de ? "Spannung: 5V DC, mindestens 1,5 A." : "Voltage: 5V DC, 1.5 A minimum."}</li>
          <li>
            {de
              ? "Vermeiden Sie den Anschluss an instabile oder Drittanbieter-Ladegeräte mit unbekannten Spezifikationen."
              : "Avoid connecting to unstable or third-party chargers with unknown specifications."}
          </li>
          <li>
            {de ? (
              <>
                Trennen Sie das Gerät während{" "}
                <strong className="text-black dark:text-white">Gewittern</strong> oder bei instabiler
                Stromversorgung.
              </>
            ) : (
              <>
                Disconnect the device during{" "}
                <strong className="text-black dark:text-white">lightning storms</strong> or if the
                power source is unstable.
              </>
            )}
          </li>
        </HcUL>

        <HcH2>{de ? "3. Sichere Installation" : "3. Safe Installation"}</HcH2>
        <HcUL>
          <li>
            {de ? (
              <>
                Montieren Sie das SQ-Panel auf einer{" "}
                <strong className="text-black dark:text-white">stabilen Wand- oder Tischfläche</strong>.
              </>
            ) : (
              <>
                Mount the SQ-Panel on a{" "}
                <strong className="text-black dark:text-white">stable wall or table surface</strong>.
              </>
            )}
          </li>
          <li>
            {de ? (
              <>
                Vermeiden Sie Standorte in der Nähe von{" "}
                <strong className="text-black dark:text-white">
                  Wärmequellen, Lüftungsschächten oder direktem Sonnenlicht
                </strong>
                .
              </>
            ) : (
              <>
                Avoid locations near{" "}
                <strong className="text-black dark:text-white">
                  heat sources, air vents, or direct sunlight
                </strong>
                .
              </>
            )}
          </li>
          <li>
            {de ? (
              <>
                Stellen Sie sicher, dass das Gerät{" "}
                <strong className="text-black dark:text-white">
                  außer Reichweite von Kindern oder Haustieren
                </strong>{" "}
                ist.
              </>
            ) : (
              <>
                Ensure the device is{" "}
                <strong className="text-black dark:text-white">
                  out of reach of children or pets
                </strong>
                .
              </>
            )}
          </li>
          <li>
            {de ? (
              <>
                Für die Wandmontage verwenden Sie ausschließlich die mitgelieferten{" "}
                <strong className="text-black dark:text-white">Schrauben und Dübel</strong>.
              </>
            ) : (
              <>
                For wall mounting, use the{" "}
                <strong className="text-black dark:text-white">supplied screws and anchors</strong>{" "}
                only.
              </>
            )}
          </li>
        </HcUL>

        <HcH2>
          {de
            ? "4. Platzierungstipps für zuverlässige Sensormessungen"
            : "4. Placement Tips for Reliable Sensor Readings"}
        </HcH2>
        <HcUL>
          <li>
            {de ? (
              <>
                Montieren Sie das Gerät in einer Höhe von ca.{" "}
                <strong className="text-black dark:text-white">1,2–1,5 m</strong> über dem Boden für
                genaue Temperatur-, Luftfeuchtigkeits- und CO₂-Messungen.
              </>
            ) : (
              <>
                Mount approximately{" "}
                <strong className="text-black dark:text-white">1.2–1.5 m</strong> above floor level
                for accurate temperature, humidity, and CO₂ measurements.
              </>
            )}
          </li>
          <li>
            {de ? (
              <>
                Lassen Sie mindestens{" "}
                <strong className="text-black dark:text-white">10 cm Freiraum</strong> um das Gerät
                herum.
              </>
            ) : (
              <>
                Leave at least{" "}
                <strong className="text-black dark:text-white">10 cm clearance</strong> around the
                device.
              </>
            )}
          </li>
          <li>
            {de
              ? "Nicht in der Nähe von Zugluft, offenen Fenstern, Ventilatoren oder Klimaanlagen platzieren."
              : "Do not place near drafts, open windows, fans, or air conditioning vents."}
          </li>
          <li>
            {de
              ? "Zentral im Raum platzieren, um repräsentative Messwerte zu erhalten."
              : "Place centrally in the room to get representative readings."}
          </li>
          <li>
            {de
              ? "Verwenden Sie zusätzliche SQ-Panels, wenn Sie mehrere Bereiche überwachen."
              : "Use additional SQ-Panels if monitoring multiple zones."}
          </li>
        </HcUL>

        <HcH2>{de ? "5. Allgemeine Sicherheitsrichtlinien" : "5. General Safety Guidelines"}</HcH2>
        <HcUL>
          <li>
            {de ? (
              <>
                Setzen Sie das Gerät nicht{" "}
                <strong className="text-black dark:text-white">
                  Wasser, hoher Luftfeuchtigkeit oder extremen Temperaturen
                </strong>{" "}
                aus.
              </>
            ) : (
              <>
                Do not expose the device to{" "}
                <strong className="text-black dark:text-white">
                  water, high humidity, or extreme temperatures
                </strong>
                .
              </>
            )}
          </li>
          <li>
            {de ? (
              <>
                Halten Sie das Gerät{" "}
                <strong className="text-black dark:text-white">von brennbaren Materialien fern</strong>.
              </>
            ) : (
              <>
                Keep the device{" "}
                <strong className="text-black dark:text-white">away from flammable materials</strong>.
              </>
            )}
          </li>
          <li>
            {de ? (
              <>
                Befolgen Sie stets die{" "}
                <strong className="text-black dark:text-white">App-Anweisungen und Firmware-Updates</strong>, um
                einen sicheren Betrieb zu gewährleisten.
              </>
            ) : (
              <>
                Always follow the{" "}
                <strong className="text-black dark:text-white">app prompts and firmware updates</strong> to
                maintain safe operation.
              </>
            )}
          </li>
        </HcUL>
      </HcCard>
    </HelpCenterShell>
  );
}
