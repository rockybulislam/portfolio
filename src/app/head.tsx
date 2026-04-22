export default function Head() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>ROCKY. | ABOUT &amp; TECH STACK</title>
      <link rel="icon" href="favicon.svg" sizes="any" />
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&amp;family=Inter:wght@300;400;600&amp;family=Fira+Code:wght@400;500&amp;display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
        rel="stylesheet"
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `
      .material-symbols-outlined {
        font-variation-settings:
          "FILL" 0,
          "wght" 400,
          "GRAD" 0,
          "opsz" 24;
      }
      body {
        background-color: #0a0a0a;
        color: #f0ede6;
      }
      /* Custom scrollbar for brutalist feel */
      ::-webkit-scrollbar {
        width: 4px;
      }
      ::-webkit-scrollbar-track {
        background: #0a0a0a;
      }
      ::-webkit-scrollbar-thumb {
        background: #c8441a;
      }
      `,
        }}
      />
    </>
  );
}
