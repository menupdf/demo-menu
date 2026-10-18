// Configurazione del menu CLASSICO (parte alta nera, piatti su panna).
// Stesso progetto Supabase del menu moderno: i ristoranti e i piatti sono gli stessi.
// La chiave "publishable" e' pubblica per progetto: puo' stare nella pagina.
// NON inserire qui MAI la chiave "secret" / "service_role".
window.CONFIG = {
  SUPABASE_URL: "https://eunnsdogxsgfezfdwask.supabase.co",
  SUPABASE_KEY: "sb_publishable_-_JePjhLK1D6MWJNoZcz5g_J3DAUwqb",
  BUCKET: "menu-images",
  // Riga del secondo prezzo (quando un piatto ha il "prezzo menu"):
  // es.  Menu pranzo 14,00 € · con acqua e caffè
  LABEL_MENU: "Menu pranzo",
  MENU_NOTE: "con acqua e caffè",
  // Gli stessi testi in inglese
  LABEL_MENU_EN: "Lunch menu",
  MENU_NOTE_EN: "with water and coffee"
};
