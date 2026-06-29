"use client";
import HelpCenterShell, {
  HcCard,
  HcH2,
  HcP,
  HcUL,
  HcOL,
} from "../../components/HelpCenterShell";
import { useLanguage } from "../../context/LanguageContext";

export default function TroubleshootingPage() {
  const { lang } = useLanguage();
  const de = lang === "de";

  const Unresolved = ({ children }) => (
    <p className="text-body-color dark:text-green text-base leading-relaxed mb-4 border-l-4 border-yellow-400 bg-yellow-50 dark:bg-yellow-900/10 px-4 py-2 rounded-r">
      <strong className="text-black dark:text-white">
        {de ? "Wenn weiterhin ungelöst:" : "If unresolved:"}
      </strong>{" "}
      {children}
    </p>
  );

  return (
    <HelpCenterShell
      title={de ? "Fehlerbehebung" : "Troubleshooting"}
      subtitle={
        de
          ? "Erkennen und beheben Sie häufige Probleme mit Ihrem SQ-Panel und der Carenuity App – Schritt für Schritt."
          : "Quickly identify and resolve common issues with your SQ-Panel and Carenuity App — step by step."
      }
    >
      <HcCard>
        <HcH2>{de ? "1. Verbindungsprobleme" : "1. Connectivity Issues"}</HcH2>
        <HcOL>
          <li>
            {de ? "Ist Ihr SQ-Panel eingeschaltet?" : "Is your SQ-Panel powered on?"}
            <HcUL nested>
              <li>
                {de
                  ? "Nein → USB-Netzteil und Kabel prüfen. Andere Steckdose ausprobieren."
                  : "No → Check USB power adapter and cable. Try another socket."}
              </li>
              <li>{de ? "Ja → Weiter." : "Yes → Continue."}</li>
            </HcUL>
          </li>
          <li>
            {de
              ? "Wird der Border Router in Ihrer App als online angezeigt?"
              : "Does the Border Router show as online in your app?"}
            <HcUL nested>
              <li>
                {de
                  ? "Nein → Border Router neu starten. WLAN-Verbindung prüfen."
                  : "No → Restart the Border Router. Check your Wi-Fi connection."}
              </li>
              <li>{de ? "Ja → Weiter." : "Yes → Continue."}</li>
            </HcUL>
          </li>
          <li>
            {de
              ? "Blinkt die SQ-Panel-LED während des Pairings?"
              : "Does the SQ-Panel LED blink during pairing?"}
            <HcUL nested>
              <li>
                {de
                  ? "Nein → Reset-Taste 5 Sekunden gedrückt halten und erneut versuchen."
                  : "No → Hold the reset button for 5 seconds and retry."}
              </li>
              <li>{de ? "Ja → Weiter." : "Yes → Continue."}</li>
            </HcUL>
          </li>
          <li>
            {de ? "Immer noch keine Verbindung?" : "Still not connecting?"}
            <HcUL nested>
              <li>{de ? "Erneut über QR-Code koppeln." : "Try pairing via QR code again."}</li>
              <li>
                {de
                  ? "Gerät näher an den Border Router bringen (<5 m für Einrichtung)."
                  : "Move the device closer to the Border Router (<5 m for setup)."}
              </li>
            </HcUL>
          </li>
        </HcOL>
        <Unresolved>
          {de
            ? "Seriennummer, App-Version und Firmware-Version erfassen und ein Ticket eröffnen."
            : "Collect serial number, app version, and firmware version, then open a ticket."}
        </Unresolved>

        <HcH2>
          {de ? "2. Probleme mit der App-Synchronisierung" : "2. App Sync Problems"}
        </HcH2>
        <HcOL>
          <li>
            {de
              ? "Sind Messwerte auf dem SQ-Panel sichtbar, aber nicht in der App?"
              : "Are measurements visible on the SQ-Panel but not in the app?"}
            <HcUL nested>
              <li>
                {de
                  ? "Nein → Gerät könnte offline sein (siehe „Verbindungsprobleme“)."
                  : "No → Device might be offline (see “Connectivity”)."}
              </li>
              <li>{de ? "Ja → Weiter." : "Yes → Continue."}</li>
            </HcUL>
          </li>
          <li>
            {de ? "Ist Ihre App auf dem neuesten Stand?" : "Is your app up to date?"}
            <HcUL nested>
              <li>
                {de
                  ? "Nein → Über App Store / Google Play aktualisieren."
                  : "No → Update via App Store / Google Play."}
              </li>
              <li>{de ? "Ja → Weiter." : "Yes → Continue."}</li>
            </HcUL>
          </li>
          <li>
            {de ? "Ausloggen und erneut einloggen." : "Log out of the app and log in again."}
          </li>
          <li>
            {de
              ? "Wenn Daten weiterhin nicht synchronisieren → App neu installieren."
              : "If data still does not sync → reinstall the app."}
          </li>
        </HcOL>
        <Unresolved>
          {de
            ? "Screenshots, App-Version und Datum/Uhrzeit des fehlgeschlagenen Syncs bereitstellen."
            : "Provide screenshots, app version, and date/time of failed sync."}
        </Unresolved>

        <HcH2>
          {de ? "3. Sensorwerte scheinen falsch" : "3. Sensor Values Look Wrong"}
        </HcH2>
        <HcOL>
          <li>
            {de
              ? "Temperatur/Luftfeuchtigkeit außerhalb des erwarteten Bereichs?"
              : "Temperature/Humidity out of expected range?"}
            <HcUL nested>
              <li>
                {de
                  ? "Gerät könnte nahe Wärmequellen oder Zugluft stehen. Zentral platzieren."
                  : "Device may be near heat sources or drafts. Move to central location."}
              </li>
            </HcUL>
          </li>
          <li>
            {de ? "CO₂-Werte in Innenräumen zu hoch?" : "CO₂ readings too high indoors?"}
            <HcUL nested>
              <li>
                {de
                  ? "Mit einem anderen kalibrierten Messgerät gegenprüfen (falls verfügbar)."
                  : "Cross-check with another calibrated meter if available."}
              </li>
              <li>
                {de
                  ? "Sicherstellen, dass keine CO₂-Quellen in der Nähe sind."
                  : "Ensure no nearby CO₂ sources."}
              </li>
            </HcUL>
          </li>
          <li>
            {de ? "VOC-Werte hoch nach Reinigung/Streichen?" : "VOC values high after cleaning/painting?"}
            <HcUL nested>
              <li>
                {de
                  ? "Das ist normal; Werte normalisieren sich nach dem Lüften."
                  : "This is expected; values normalize after airing out."}
              </li>
            </HcUL>
          </li>
        </HcOL>
        <Unresolved>
          {de
            ? "Beispielwerte, Raumtyp und Bedingungen angeben."
            : "Provide sample values, room type, and conditions."}
        </Unresolved>

        <HcH2>{de ? "4. Alarme werden nicht ausgelöst" : "4. Alarms Not Triggering"}</HcH2>
        <HcOL>
          <li>
            {de
              ? "Prüfen, ob Benachrichtigungen in der App aktiviert sind."
              : "Check if alerts are enabled in the app."}
          </li>
          <li>
            {de ? "Wurde der Schwellenwert erreicht?" : "Has the threshold been reached?"}
            <HcUL nested>
              <li>
                {de ? "Beispiel: CO₂-Alarm löst >1000 ppm aus." : "Example: CO₂ alarm triggers >1000 ppm."}
              </li>
            </HcUL>
          </li>
          <li>
            {de
              ? "Ist der „Nicht stören“-Modus auf Ihrem Handy aktiv?"
              : "Is “Do Not Disturb” mode active on your phone?"}
          </li>
          <li>
            {de ? "App neu starten und Alarm erneut testen." : "Restart the app and re-test the alarm."}
          </li>
        </HcOL>
        <Unresolved>
          {de
            ? "Screenshots der Alarmeinstellungen bereitstellen."
            : "Provide screenshots of alarm settings."}
        </Unresolved>

        <HcH2>{de ? "5. Firmware-Updates" : "5. Firmware Updates"}</HcH2>
        <HcOL>
          <li>
            {de
              ? "Zeigt die App ein verfügbares Firmware-Update an?"
              : "Does the app show an available firmware update?"}
            <HcUL nested>
              <li>
                {de ? "Nein → Gerät ist auf dem neuesten Stand." : "No → Your device is up to date."}
              </li>
              <li>{de ? "Ja → Weiter." : "Yes → Continue."}</li>
            </HcUL>
          </li>
          <li>
            {de
              ? "SQ-Panel innerhalb von 3 m zum Border Router platzieren."
              : "Place SQ-Panel within 3 m of Border Router."}
          </li>
          <li>
            {de
              ? "App geöffnet lassen, bis das Update abgeschlossen ist."
              : "Keep app open until update completes."}
          </li>
          <li>
            {de
              ? "Wenn Update fehlschlägt: Gerät neu starten und erneut versuchen."
              : "If update fails: restart device and retry once."}
          </li>
        </HcOL>
        <Unresolved>
          {de
            ? "Seriennummer, Firmware-Version und App-Version senden."
            : "Send serial number, firmware version, and app version."}
        </Unresolved>

        <HcH2>{de ? "Eskalations-Checkliste" : "Escalation Checklist"}</HcH2>
        <HcP>
          {de
            ? "Vor Kontaktaufnahme mit dem Support bitte Folgendes sammeln:"
            : "Before contacting support, please collect:"}
        </HcP>
        <HcUL>
          <li>
            {de ? "Seriennummer des Geräts (Rückseite des Panels)" : "Device serial number (back of panel)"}
          </li>
          <li>{de ? "App-Version" : "App version"}</li>
          <li>{de ? "Firmware-Version" : "Firmware version"}</li>
          <li>{de ? "Modell/Firmware des Border Routers" : "Border Router model/firmware"}</li>
          <li>
            {de
              ? "Problembeschreibung und bereits durchgeführte Schritte"
              : "Issue description and steps tried"}
          </li>
        </HcUL>

        <HcH2>{de ? "Support kontaktieren" : "Contact Support"}</HcH2>
        <HcP>
          {de
            ? "Wenn keiner der oben genannten Schritte Ihr Problem gelöst hat:"
            : "If none of the above steps solved your issue:"}
        </HcP>
        <HcUL>
          <li>
            <strong className="text-black dark:text-white">
              {de ? "E-Mail:" : "Email:"}
            </strong>{" "}
            <a
              href="mailto:info@carenuity.com"
              className="text-primary dark:text-green-400 hover:underline"
            >
              info@carenuity.com
            </a>
          </li>
          <li>
            <strong className="text-black dark:text-white">
              {de ? "Telefon:" : "Phone:"}
            </strong>{" "}
            (+49) 89-1222469-40 (Mon–Fri, 9:00–17:00 CET)
          </li>
        </HcUL>
        <HcP>
          {de
            ? "Wir bemühen uns, innerhalb von 24 Stunden (Werktage) zu antworten."
            : "We aim to respond within 24 h (working days)."}
        </HcP>
      </HcCard>
    </HelpCenterShell>
  );
}
