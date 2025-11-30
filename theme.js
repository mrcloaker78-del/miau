(function miauTheme() {
  if (!(window.Spicetify && Spicetify.Player && Spicetify.Platform)) {
    setTimeout(miauTheme, 100);
    return;
  }

  console.log("Miau theme loaded: cat GIF background active.");
})();
