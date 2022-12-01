import Plyr from "plyr";
import { useEffect } from "react";

interface ArticleProps {
  html: string;
}

export const Article = ({ html }: ArticleProps) => {
  useEffect(() => {
    const players = Plyr.setup(".video-player");

    if (players) {
      players.forEach(async (p) => {
        p.on("play", (_e: any) => {
          console.log(`playing ${p.currentTime}`);
        });
      });
    }

    return () => {
      if (players && players.length > 0) {
        players.forEach((p) => p.destroy());
      }
    };
  }, []);

  const copyButtonLabel = "Copy Code";
  async function copyCode(block: any) {
    let code = block.querySelector("code");
    let text = code.innerText;

    await navigator.clipboard.writeText(text);
  }

  useEffect(() => {
    // use a class selector if available
    let blocks = document.querySelectorAll("pre[class*=language-]");
    const buttons: HTMLButtonElement[] = []

    blocks.forEach((block) => {
      // only add button if browser supports Clipboard API
      if (navigator.clipboard) {
        let button = document.createElement("button");
        buttons.push(button)

        button.innerText = copyButtonLabel;
        block.appendChild(button);

        button.addEventListener("click", async () => {
          await copyCode(block);
          button.innerText = 'Copied!'
          setTimeout(() => {
            button.innerText = copyButtonLabel
          }, 1000);
        });
      }
    });

    return () => {
        buttons.forEach(btn => btn.remove())
    }
  }, []);

  return (
    <article
      className="article"
      dangerouslySetInnerHTML={{ __html: html }}
    ></article>
  );
};
