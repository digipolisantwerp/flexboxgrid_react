import styles from "@-ui/flexboxgrid/dist/flexboxgrid.css";

export default function getClass(className) {
  return styles && styles[className] ? styles[className] : className;
}
