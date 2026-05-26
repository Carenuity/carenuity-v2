import C3MiniBluetoothBeaconClient from "./C3MiniBluetoothBeaconClient";

export const metadata = {
  title: "C3-Mini: Bluetooth Beacon | Carenuity Products",
  description:
    "Transform the ESP32-C3 into a compact Bluetooth Low Energy beacon. Supports iBeacon, Eddystone, and custom BLE frames — ready for smart home, healthcare, retail, and industrial use.",
};

export default function C3MiniBluetoothBeaconPage() {
  return <C3MiniBluetoothBeaconClient />;
}
