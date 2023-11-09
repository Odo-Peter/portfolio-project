// A simple render page for the homepage
const staticHTML = () => {
  return '<body style="background-color: #000; color: white;"><div style="min-height: 100vh; width: 100%; display: flex; justify-items: center; align-items: center; flex-direction: column; "><h1 >Hello Dear Scraper</h1><p>Click on the link below to read the Documentations</p><button style="border: none; outline: none; background-color: limegreen; padding: 10px 0; width: 50vw; border-radius: 14px; cursor: pointer; margin-bottom: 8px;" ><a style="text-decoration: none; color: white; height: 100%; width: 100%;" href="https://landing.odopeter.tech/" target="_blank" >Read the Docs<a/></button></div></body>';
};

module.exports = staticHTML;
