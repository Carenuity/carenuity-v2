"use client";
import Link from "next/link";
import HelpCenterShell, {
  HcCard,
  HcH2,
  HcP,
  HcUL,
  HcOL,
  HcLink,
} from "../../components/HelpCenterShell";
import { useLanguage } from "../../context/LanguageContext";

export default function MobileAppPage() {
  const { lang } = useLanguage();
  const de = lang === "de";

  return (
    <HelpCenterShell
      title={de ? "Konto & App" : "Account & App"}
      subtitle={
        de
          ? "Verwalten Sie Ihr SQ-Panel, überwachen Sie Sensordaten, konfigurieren Sie Alarme und teilen Sie den Zugriff."
          : "Manage your SQ-Panel, monitor sensor data, configure alerts, and share access with family or colleagues."
      }
    >
      <HcCard>
        <HcH2>{de ? "1. Konto einrichten" : "1. Account Setup"}</HcH2>
        <HcOL>
          <li>
            <strong className="text-black dark:text-white">
              {de
                ? "App herunterladen & installieren"
                : "Download & Install the App"}
            </strong>
            <HcUL nested>
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
            </HcUL>
          </li>
          <li>
            <strong className="text-black dark:text-white">
              {de ? "Konto erstellen" : "Create an Account"}
            </strong>
            <HcUL nested>
              <li>
                {de
                  ? "E-Mail, Passwort angeben und AGB akzeptieren."
                  : "Provide email, password, and accept Terms & Conditions."}
              </li>
              <li>
                {de
                  ? "E-Mail über Bestätigungslink verifizieren."
                  : "Verify email via confirmation link."}
              </li>
            </HcUL>
          </li>
          <li>
            <strong className="text-black dark:text-white">
              {de ? "Anmelden" : "Log In"}
            </strong>
            <HcUL nested>
              <li>
                {de
                  ? "Geben Sie Ihre Zugangsdaten ein, um Ihr Dashboard zu öffnen."
                  : "Enter credentials to access your dashboard."}
              </li>
            </HcUL>
          </li>
        </HcOL>

        <HcH2>
          {de ? "2. Berechtigungen & Rollen" : "2. Permissions & Roles"}
        </HcH2>
        <HcUL>
          <li>
            <strong className="text-black dark:text-white">
              {de ? "Eigentümer:" : "Owner:"}
            </strong>{" "}
            {de
              ? "Vollständige Kontrolle über Geräte, Alarme und Benutzerverwaltung."
              : "Full control of devices, alerts, and user management."}
          </li>
          <li>
            <strong className="text-black dark:text-white">
              {de ? "Mitglied (Vollzugriff):" : "Member (full access):"}
            </strong>{" "}
            {de
              ? "Kann Geräte und Einstellungen anzeigen und ändern."
              : "Can view and modify devices and settings."}
          </li>
          <li>
            <strong className="text-black dark:text-white">
              {de ? "Mitglied (nur Lesen):" : "Member (read-only):"}
            </strong>{" "}
            {de
              ? "Kann Sensordaten einsehen, aber keine Einstellungen ändern."
              : "Can view sensor data but cannot modify settings."}
          </li>
        </HcUL>
        <HcP>
          <strong className="text-black dark:text-white">
            {de ? "Berechtigungen verwalten:" : "Manage Permissions:"}
          </strong>
        </HcP>
        <HcUL>
          <li>
            {de
              ? "App öffnen → Einstellungen → Benutzer & Berechtigungen."
              : "Open app → Settings → Users & Permissions."}
          </li>
          <li>
            {de
              ? "Benutzer per E-Mail einladen; Rolle zuweisen."
              : "Invite users via email; assign role."}
          </li>
        </HcUL>

        <HcH2>
          {de ? "3. Mehrbenutzerunterstützung" : "3. Multi-User Support"}
        </HcH2>
        <HcUL>
          <li>
            {de
              ? "Mehrere Benutzer können dasselbe SQ-Panel gleichzeitig überwachen."
              : "Multiple users can monitor the same SQ-Panel simultaneously."}
          </li>
          <li>
            {de
              ? "Alarme und Benachrichtigungen werden an alle berechtigten Benutzer gesendet."
              : "Alerts and notifications are sent to all permitted users."}
          </li>
          <li>
            {de
              ? "Jeder Benutzer hat einen eigenen Login; Aktivitäten werden protokolliert."
              : "Each user has a personal login; activities are logged for audit."}
          </li>
        </HcUL>

        <HcH2>{de ? "4. Datenschutz" : "4. Data Privacy"}</HcH2>
        <HcUL>
          <li>
            {de ? (
              <>
                Alle Sensor- und Kontodaten werden sicher auf{" "}
                <strong className="text-black dark:text-white">
                  europäischen Servern
                </strong>{" "}
                gespeichert.
              </>
            ) : (
              <>
                All sensor and account data are stored securely on{" "}
                <strong className="text-black dark:text-white">
                  European servers
                </strong>
                .
              </>
            )}
          </li>
          <li>
            {de
              ? "Benutzer bestimmen, welche Geräte und Daten geteilt werden."
              : "Users control which devices and data are shared."}
          </li>
          <li>
            {de
              ? "DSGVO-Konformität gewährleistet den Schutz persönlicher Daten."
              : "Compliance with GDPR ensures personal information is protected."}
          </li>
          <li>
            {de
              ? "Das Teilen von Daten mit Drittanbieter-Apps erfordert eine ausdrückliche Zustimmung."
              : "Data sharing with third-party apps requires explicit consent."}
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
