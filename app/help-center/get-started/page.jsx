"use client";
import Link from "next/link";
import HelpCenterShell, {
  HcCard,
  HcH2,
  HcH3,
  HcP,
  HcUL,
  HcOL,
  HcLink,
} from "../../components/HelpCenterShell";
import { useLanguage } from "../../context/LanguageContext";

export default function GetStartedPage() {
  const { lang } = useLanguage();
  const de = lang === "de";

  return (
    <HelpCenterShell
      title={de ? "Erste Schritte" : "Get Started"}
      subtitle={
        de
          ? "Das Carenuity SQ-Panel ist ein intelligenter Innenraumklima-Monitor zur Messung von Luftqualität und Komfort."
          : "The Carenuity SQ-Panel is a smart indoor climate monitor designed to measure air quality and comfort."
      }
    >
      <HcCard>
        <HcP>
          {de ? (
            <>
              Das <strong>Carenuity SQ-Panel</strong> verbindet sich über die
              Carenuity App und integriert sich über den Matter-Standard in Ihr
              Smart Home.
            </>
          ) : (
            <>
              The <strong>Carenuity SQ-Panel</strong> connects via the Carenuity
              App and integrates into your smart home through the Matter
              standard.
            </>
          )}
        </HcP>

        <HcH2>{de ? "Was ist das SQ-Panel?" : "What is the SQ-Panel?"}</HcH2>
        <HcUL>
          <li>
            {de
              ? "Ein an der Wand oder auf dem Tisch montierbares Gerät mit mehreren Sensoren (Temperatur, Luftfeuchtigkeit, Luftdruck, CO₂, VOCs, Luftqualitätsindex, Präsenz)."
              : "A wall- or table-mountable device with multiple sensors (temperature, humidity, air pressure, CO₂, VOCs, air quality index, presence)."}
          </li>
          <li>
            {de
              ? "Bietet Echtzeitwarnungen, Trendverläufe und Fernüberwachung über die Carenuity App."
              : "Provides real-time alerts, trend history, and remote monitoring through the Carenuity App."}
          </li>
          <li>
            {de
              ? "Unterstützt Matter over Thread für plattformübergreifende Smart-Home-Integration (Apple, Google, Amazon, SmartThings, Home Assistant)."
              : "Supports Matter over Thread for cross-platform smart home integration (Apple, Google, Amazon, SmartThings, Home Assistant)."}
          </li>
        </HcUL>

        <HcH2>{de ? "Lieferumfang" : "Package Contents"}</HcH2>
        <HcP>
          {de ? "Ihre SQ-Panel-Lieferung enthält:" : "Your SQ-Panel delivery includes:"}
        </HcP>
        <HcUL>
          <li>{de ? "1 × SQ-Panel Gerät" : "1 × SQ-Panel device"}</li>
          <li>{de ? "1 × USB-C Netzteil + Kabel" : "1 × USB-C power supply + cable"}</li>
          <li>
            {de
              ? "1 × Wandhalterungsplatte + Schrauben + Dübel"
              : "1 × Wall mounting plate + screws + anchors"}
          </li>
          <li>
            {de
              ? "1 × Schnellstartanleitung (QR-Link zum digitalen Handbuch)"
              : "1 × Quick Start Guide (QR link to digital manual)"}
          </li>
        </HcUL>

        <HcH2>{de ? "Installationsoptionen" : "Installation Options"}</HcH2>
        <HcH3>{de ? "a) Wandmontage" : "a) Wall Mounting"}</HcH3>
        <HcOL>
          <li>
            {de
              ? "Wählen Sie eine zentrale Innenwand, ca. 1,2–1,5 m über dem Boden."
              : "Select a central indoor wall, approx. 1.2–1.5 m above floor."}
          </li>
          <li>
            {de
              ? "Direkte Sonneneinstrahlung, Heizkörper oder Fenster vermeiden."
              : "Avoid direct sunlight, heaters, or windows."}
          </li>
          <li>
            {de
              ? "Verwenden Sie die beiliegende Platte, Schrauben und Dübel."
              : "Use included plate, screws, and anchors."}
          </li>
          <li>
            {de
              ? "Schieben Sie das SQ-Panel auf die Montageplatte."
              : "Slide SQ-Panel onto the mounting plate."}
          </li>
        </HcOL>
        <HcH3>{de ? "b) Tischmontage" : "b) Tabletop Mounting"}</HcH3>
        <HcOL>
          <li>
            {de
              ? "Stellen Sie das SQ-Panel auf eine stabile Oberfläche."
              : "Place SQ-Panel upright on a stable surface."}
          </li>
          <li>
            {de
              ? "Vermeiden Sie eine Blockierung der Luftzufuhr rund um das Gerät."
              : "Avoid obstructing airflow around the device."}
          </li>
        </HcOL>

        <HcH2>
          {de
            ? "Einrichtung mit Border Router + Carenuity App"
            : "Setup with Border Router + Carenuity App"}
        </HcH2>
        <HcH3>{de ? "Schritt 1: App installieren" : "Step 1: Install the App"}</HcH3>
        <HcUL>
          <li>
            <HcLink href="https://apps.apple.com/ie/app/carenuity/id6472718918">
              App Store (iOS)
            </HcLink>
          </li>
          <li>
            <HcLink href="https://play.google.com/store/apps/details?id=com.carenuity.home">
              Google Play (Android)
            </HcLink>
          </li>
          <li>
            {de
              ? "Stellen Sie sicher, dass die App auf dem neuesten Stand ist."
              : "Ensure app is updated to the latest version."}
          </li>
        </HcUL>
        <HcH3>{de ? "Schritt 2: Einschalten" : "Step 2: Power Up"}</HcH3>
        <HcUL>
          <li>
            {de
              ? "Verbinden Sie das SQ-Panel mit dem mitgelieferten USB-C-Netzteil."
              : "Connect SQ-Panel with the supplied USB-C adapter."}
          </li>
          <li>
            {de
              ? "LED blinkt → Gerät bereit zur Einrichtung."
              : "LED blinks → device ready for commissioning."}
          </li>
        </HcUL>
        <HcH3>
          {de ? "Schritt 3: Border Router hinzufügen" : "Step 3: Add Border Router"}
        </HcH3>
        <HcUL>
          <li>
            {de
              ? "Stellen Sie sicher, dass ein Matter-fähiger Border Router in Ihrem WLAN aktiv ist."
              : "Ensure a Matter-enabled Border Router is active on your Wi-Fi."}
          </li>
        </HcUL>
        <HcH3>
          {de ? "Schritt 4: Gerät per QR-Code hinzufügen" : "Step 4: Add Device via QR-Code"}
        </HcH3>
        <HcUL>
          <li>
            {de ? "Carenuity App öffnen → Gerät hinzufügen." : "Open Carenuity App → Add Device."}
          </li>
          <li>
            {de
              ? "QR-Code scannen (Rückseite des SQ-Panels oder Schnellstartanleitung)."
              : "Scan QR code (back of SQ-Panel or Quick Start Guide)."}
          </li>
          <li>
            {de
              ? "Befolgen Sie die Anweisungen in der App, bis der Status „Verbunden“ angezeigt wird."
              : "Follow in-app instructions until status shows “Connected”."}
          </li>
        </HcUL>

        <HcH2>{de ? "Matter-Einrichtung" : "Matter Commissioning"}</HcH2>
        <HcUL>
          <li>
            {de
              ? "Das SQ-Panel wird automatisch zu Ihrem Matter-Ökosystem hinzugefügt."
              : "SQ-Panel is automatically added to your Matter ecosystem."}
          </li>
          <li>
            {de
              ? "Unterstützte Ökosysteme: Apple, Google, Amazon, SmartThings, Home Assistant."
              : "Supported ecosystems: Apple, Google, Amazon, SmartThings, Home Assistant."}
          </li>
          <li>
            {de
              ? "Verwenden Sie die jeweilige native App der Plattform, um den letzten Schritt abzuschließen."
              : "Use each platform’s native app to complete the final step."}
          </li>
        </HcUL>

        <HcH2>
          {de ? "Erste Überprüfungen nach der Einrichtung" : "First Checks After Setup"}
        </HcH2>
        <HcOL>
          <li>
            {de ? (
              <>
                <strong>Echtzeitwerte</strong>: Prüfen Sie Temperatur,
                Luftfeuchtigkeit und CO₂-Werte in der App.
              </>
            ) : (
              <>
                <strong>Live readings</strong>: Verify temperature, humidity,
                and CO₂ update in the app.
              </>
            )}
          </li>
          <li>
            {de ? (
              <>
                <strong>Präsenz-Erkennung</strong>: Bewegen Sie sich vor dem
                SQ-Panel und prüfen Sie den Präsenzindikator.
              </>
            ) : (
              <>
                <strong>Presence detection</strong>: Move in front of the
                SQ-Panel and check presence indicator.
              </>
            )}
          </li>
          <li>
            {de ? (
              <>
                <strong>Benachrichtigungen</strong>: Aktivieren Sie
                Push-Mitteilungen in den App-Einstellungen.
              </>
            ) : (
              <>
                <strong>Notifications</strong>: Enable push alerts in app
                settings.
              </>
            )}
          </li>
          <li>
            {de ? (
              <>
                <strong>Firmware</strong>: Prüfen Sie Menü → Firmware-Update.
              </>
            ) : (
              <>
                <strong>Firmware</strong>: Check Menu → Firmware Update.
              </>
            )}
          </li>
        </HcOL>

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
