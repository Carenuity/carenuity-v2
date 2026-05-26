import EnviroSence680Client from "./EnviroSence680Client";

export const metadata = {
  title: "Envirosence 680 | Carenuity Products",
  description:
    "EnviroSence 680 monitors air quality, temperature, humidity, and pressure in real-time using the BME680 sensor with the ESP-C3 mini microcontroller.",
};

export default function EnviroSence680Page() {
  return <EnviroSence680Client />;
}
