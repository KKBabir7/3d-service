




import '@/styles/global.css';






export default function RootLayout({ children }) {
  return (
    <html lang="en" crosspilot=""  cz-shortcut-listen="true" data-arp="" data-new-gr-c-s-check-loaded="14.1238.0"
  data-gr-ext-installed="">
       <head>
        {/* ✅ Preload Roboto Condensed */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap"
        />

        {/* ✅ Preload Rubik Doodle Shadow */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Rubik+Doodle+Shadow&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Rubik+Doodle+Shadow&display=swap"
        />
      </head>
      <body   cz-shortcut-listen="true"
data-new-gr-c-s-check-loaded="14.1238.0" data-gr-ext-installed="">       
          
          {children}
          
   
      </body>
      
    </html>
  );
}


