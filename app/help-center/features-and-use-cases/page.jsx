"use client";
import Link from "next/link";
import HelpCenterShell, {
  HcCard,
  HcH2,
  HcUL,
} from "../../components/HelpCenterShell";
import { useLanguage } from "../../context/LanguageContext";

function SensorCard({ icon, title, children, wide = false }) {
  return (
    <div
      className={`rounded-2xl bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 shadow-sm p-6 ${wide ? "sm:col-span-2" : ""}`}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="w-10 h-10 rounded-xl bg-green-bg dark:bg-gray-800 flex items-center justify-center text-xl shrink-0">
          {icon}
        </span>
        <h3 className="text-base font-bold text-black dark:text-white">
          {title}
        </h3>
      </div>
      <ul className="list-disc pl-5 space-y-1.5 text-body-color dark:text-green text-sm leading-relaxed">
        {children}
      </ul>
    </div>
  );
}

export default function FeaturesUseCasesPage() {
  const { lang } = useLanguage();
  const de = lang === "de";

  return (
    <HelpCenterShell
      title={de ? "Funktionen & Anwendungsfälle" : "Features & Use Cases"}
      subtitle={
        de
          ? "Das SQ-Panel überwacht Ihre Innenraumumgebung in Echtzeit und kann Warnungen oder Smart-Home-Aktionen auslösen."
          : "The SQ-Panel continuously monitors your indoor environment and can trigger alerts or smart home actions."
      }
    >
      {/* Sensor suite */}
      <h2 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-5">
        {de ? "Sensorausstattung" : "Sensor Suite"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
        <SensorCard icon="🌡️" title={de ? "1. Temperatur" : "1. Temperature"}>
          <li>{de ? "Bereich: 0 – 50 °C" : "Range: 0 – 50 °C"}</li>
          <li>
            {de
              ? "Genauigkeit: ±0,3 °C (typisch)"
              : "Accuracy: ±0.3 °C (typical)"}
          </li>
          <li>
            {de
              ? "Komfortbereich: 20 – 24 °C"
              : "Default comfort range: 20 – 24 °C"}
          </li>
          <li>
            {de
              ? "Warnungen: ausgelöst, wenn die Temperatur den Komfortbereich verlässt (anpassbar)"
              : "Alerts: triggered if temperature leaves comfort range (customizable in app)"}
          </li>
        </SensorCard>

        <SensorCard
          icon="💧"
          title={
            de
              ? "2. Relative Luftfeuchtigkeit (RH)"
              : "2. Relative Humidity (RH)"
          }
        >
          <li>{de ? "Bereich: 10 – 90 %" : "Range: 10 – 90 %"}</li>
          <li>{de ? "Genauigkeit: ±2 % RH" : "Accuracy: ±2 % RH"}</li>
          <li>
            {de
              ? "Komfortbereich: 40 – 60 % RH"
              : "Comfort range: 40 – 60 % RH"}
          </li>
          <li>
            {de
              ? "Warnungen: unter 30 % (trockene Luft), über 70 % (Schimmelgefahr)"
              : "Alerts: below 30 % (dry air), above 70 % (risk of mold)"}
          </li>
        </SensorCard>

        <SensorCard icon="🌀" title={de ? "3. Luftdruck" : "3. Air Pressure"}>
          <li>{de ? "Bereich: 300 – 1100 hPa" : "Range: 300 – 1100 hPa"}</li>
          <li>{de ? "Genauigkeit: ±1 hPa" : "Accuracy: ±1 hPa"}</li>
          <li>
            {de
              ? "Anwendungsfälle: Wetteränderungen, Lüftungsstatus, Höhenkorrektur"
              : "Use case: weather changes, ventilation status, altitude correction"}
          </li>
        </SensorCard>

        <SensorCard
          icon="🧪"
          title={
            de
              ? "4. TVOC (Flüchtige organische Verbindungen)"
              : "4. TVOC (Total Volatile Organic Compounds)"
          }
        >
          <li>{de ? "Bereich: 0 – 60.000 ppb" : "Range: 0 – 60,000 ppb"}</li>
          <li>
            {de ? "Indikatorstufen:" : "Indicator levels:"}
            <ul className="list-[circle] pl-5 mt-1 space-y-1">
              <li>
                {de ? "0 – 220 ppb = Exzellent" : "0 – 220 ppb = Excellent"}
              </li>
              <li>{de ? "221 – 660 ppb = Gut" : "221 – 660 ppb = Good"}</li>
              <li>
                {de ? "661 – 2200 ppb = Mittel" : "661 – 2200 ppb = Moderate"}
              </li>
              <li>
                {de
                  ? "Über 2200 ppb = Schlecht, Lüften empfohlen"
                  : "Above 2200 ppb = Poor, consider airing out"}
              </li>
            </ul>
          </li>
        </SensorCard>

        <SensorCard
          icon="🟢"
          title={
            de ? "5. Luftqualitätsindex (AQI)" : "5. Air Quality Index (AQI)"
          }
        >
          <li>
            {de ? "Abgeleitet aus CO₂ + TVOC" : "Derived from CO₂ + TVOC"}
          </li>
          <li>
            {de
              ? "Skala: 1 (Exzellent) – 5 (Schlecht)"
              : "Scale: 1 (Excellent) – 5 (Poor)"}
          </li>
          <li>
            {de
              ? "AQI wird in der App farbcodiert angezeigt"
              : "AQI displayed in app with color codes"}
          </li>
        </SensorCard>

        <SensorCard
          icon="👋"
          title={de ? "6. Anwesenheitserkennung" : "6. Presence Detection"}
        >
          <li>
            {de
              ? "Basierend auf Infrarot- und Bewegungssensorik"
              : "Based on infrared and motion sensing"}
          </li>
          <li>
            {de
              ? "Erkennt Bewegungen im Bereich von ~5 m"
              : "Detects movement within ~5 m range"}
          </li>
          <li>
            {de
              ? "Für adaptive Überwachung und Automatisierung"
              : "Used for adaptive monitoring and automation"}
          </li>
        </SensorCard>

        <SensorCard
          icon="🟤"
          title={de ? "7. Kohlendioxid (CO₂)" : "7. Carbon Dioxide (CO₂)"}
          wide
        >
          <li>{de ? "Bereich: 400 – 5000 ppm" : "Range: 400 – 5000 ppm"}</li>
          <li>{de ? "Genauigkeit: ±50 ppm ±3%" : "Accuracy: ±50 ppm ±3%"}</li>
          <li>
            {de ? "Schwellenwerte:" : "Thresholds:"}
            <ul className="list-[circle] pl-5 mt-1 space-y-1">
              <li>{de ? "Unter 800 ppm = Gut" : "Less than 800 ppm = Good"}</li>
              <li>
                {de ? "800 – 1000 ppm = Mittel" : "800 – 1000 ppm = Moderate"}
              </li>
              <li>
                {de ? "Über 1000 ppm = Schlecht" : "Over 1000 ppm = Poor"}
              </li>
              <li>
                {de
                  ? "Über 1500 ppm = Sehr schlecht, Warnung"
                  : "Over 1500 ppm = Very poor, alert issued"}
              </li>
            </ul>
          </li>
        </SensorCard>
      </div>

      <HcCard>
        <HcH2>{de ? "Echtzeitwarnungen" : "Real-Time Alerts"}</HcH2>
        <HcUL>
          <li>
            {de
              ? "Schwellenwerte sind voreingestellt, aber anpassbar."
              : "Thresholds are pre-set but customizable."}
          </li>
          <li>
            {de
              ? "Warnmeldungen erscheinen in der App und können Smart-Home-Aktionen auslösen."
              : "Alerts appear in the app and can trigger smart home actions."}
          </li>
          <li>
            {de
              ? "Beispiel: „CO₂ übersteigt 1000 ppm – bitte lüften.“"
              : "Example: “CO₂ exceeded 1000 ppm – ventilate your room.”"}
          </li>
        </HcUL>

        <HcH2>{de ? "Verlauf & Trends" : "History & Trends"}</HcH2>
        <HcUL>
          <li>
            {de ? "Messintervall: alle 30 Sekunden" : "Sampling every 30s"}
          </li>
          <li>
            {de
              ? "App zeigt 24h / 7 Tage / 30 Tage"
              : "App shows 24h / 7d / 30d"}
          </li>
          <li>
            {de
              ? "Export als CSV (bald verfügbar)"
              : "Export via CSV (coming soon)"}
          </li>
          <li>
            {de
              ? "Erkennen Sie Muster wie hohe CO₂-Werte oder trockene Luft."
              : "Identify trends like high CO₂ or dry air."}
          </li>
        </HcUL>

        <HcH2>{de ? "Beispielanwendungen" : "Example Use Cases"}</HcH2>
        <HcUL>
          {[
            [
              "Healthy Living:",
              "Gesundes Leben:",
              " get CO₂ alerts at home or office.",
              " CO₂-Warnungen zu Hause oder im Büro.",
            ],
            [
              "Energy Savings:",
              "Energieeinsparung:",
              " optimize heating/cooling.",
              " Heizung/Kühlung optimieren.",
            ],
            [
              "Mold Prevention:",
              "Schimmelprävention:",
              " alerts when humidity stays above 70%.",
              " Warnungen bei Luftfeuchtigkeit über 70 %.",
            ],
            [
              "Workplace Safety:",
              "Arbeitsplatzsicherheit:",
              " monitor CO₂ in meeting rooms.",
              " CO₂ in Besprechungsräumen überwachen.",
            ],
            [
              "Children's Rooms:",
              "Kinderzimmer:",
              " TVOC alerts from paints or toys.",
              " TVOC-Warnungen durch Farben oder Spielzeug.",
            ],
            [
              "Elderly Care:",
              "Seniorenbetreuung:",
              " remote monitoring for air and presence.",
              " Fernüberwachung von Luftqualität und Anwesenheit.",
            ],
            [
              "Allergy Relief:",
              "Allergieerleichterung:",
              " track pressure + VOC spikes.",
              " Druck- und VOC-Anstiege verfolgen.",
            ],
            [
              "Smart Ventilation:",
              "Intelligente Lüftung:",
              " automate HVAC when CO₂ is high.",
              " HVAC automatisch steuern, wenn CO₂ hoch ist.",
            ],
            [
              "Sleep Quality:",
              "Schlafqualität:",
              " maintain optimal bedroom climate.",
              " optimales Schlafzimmerklima aufrechterhalten.",
            ],
            [
              "Remote Offices / Schools:",
              "Remote-Büros / Schulen:",
              " supervisors check multiple rooms.",
              " Aufsichtspersonen können mehrere Räume prüfen.",
            ],
            [
              "Presence-based Automation:",
              "Präsenzbasierte Automatisierung:",
              " lights or HVAC run only when occupied.",
              " Licht oder HVAC nur bei Anwesenheit aktiv.",
            ],
          ].map((row, i) => (
            <li key={i}>
              <strong className="text-black dark:text-white">
                {de ? row[1] : row[0]}
              </strong>
              {de ? row[3] : row[2]}
            </li>
          ))}
        </HcUL>

        <HcH2>{de ? "Fernüberwachung" : "Remote Monitoring"}</HcH2>
        <HcUL>
          <li>
            <strong className="text-black dark:text-white">
              {de
                ? "Über die Carenuity-App zugänglich:"
                : "Accessible via Carenuity App:"}
            </strong>
            {de ? " verfügbar auf iOS/Android." : " available on iOS/Android."}
          </li>
          <li>
            <strong className="text-black dark:text-white">
              {de ? "Mehrbenutzerunterstützung:" : "Multi-user support:"}
            </strong>
            {de
              ? " Zugriff mit Familie oder Pflegepersonen teilen."
              : " share access with family or caregivers."}
          </li>
          <li>
            <strong className="text-black dark:text-white">
              {de ? "Cloud-Synchronisierung:" : "Cloud sync:"}
            </strong>
            {de
              ? " Messwerte überall verfügbar."
              : " measurements available anywhere."}
          </li>
          <li>
            <strong className="text-black dark:text-white">
              {de ? "Datenschutz zuerst:" : "Privacy first:"}
            </strong>
            {de
              ? " auf europäischen Servern gespeichert."
              : " stored on European servers."}
          </li>
        </HcUL>

        <div className="mt-8">
          <Link
            href="/sq-system/sq-panel"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-white font-semibold text-sm shadow-btn transition-all duration-300 hover:opacity-90"
            style={{ backgroundColor: "#174f2e" }}
          >
            {de ? "Mehr über das SQ-Panel" : "Learn More on SQ-Panel"}
          </Link>
        </div>
      </HcCard>
    </HelpCenterShell>
  );
}
