import DownloadArrow from "../elements/DownloadArrow";

export default function DownloadResume({ classes, children }) {
  return <a
    href="./assets/files/Salman_Resume.pdf"
    download="Salman_Raza_Resume.pdf"
    type=".pdf"
    title="Download My Resume"
    className={classes}>{children}</a>;
}
