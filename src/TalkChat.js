import { useEffect } from "react";

export default function TalkChat() {
  useEffect(() => {
    const s1 = document.createElement("script");
    s1.async = true;
    s1.src = "https://embed.tawk.to/6940ee824f7afe19760b540e/1jciq7bjb";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    document.body.appendChild(s1);
  }, []);

  return null; // no renderiza nada, solo inyecta el script
}
