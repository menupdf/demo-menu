// Configurazione del menu CLASSICO (parte alta nera, foto del locale, piatti su panna).
// Questo menu usa un progetto Supabase SUO, separato da quello del menu moderno.
//
// 1) Crea il nuovo progetto su Supabase
// 2) In "Project Settings > API" copia "Project URL" e la chiave "publishable"
// 3) Incollali qui sotto al posto dei testi tra virgolette
//
// La chiave "publishable" e' pubblica per progetto: puo' stare nella pagina.
// NON inserire qui MAI la chiave "secret" / "service_role".
window.CONFIG = {
  SUPABASE_URL: "https://mcjbncziybitirhsxqps.supabase.co",
  SUPABASE_KEY: "sb_publishable_PmtaM2_eS9Q3_KguPPx-zw_W1pZwTiN",
  BUCKET: "menu-images",
  // Riga del secondo prezzo (quando un piatto ha il "prezzo menu"):
  // es.  Menu pranzo 14,00 € · con acqua e caffè
  LABEL_MENU: "Menu pranzo",
  MENU_NOTE: "con acqua e caffè",
  // Gli stessi testi in inglese
  LABEL_MENU_EN: "Lunch menu",
  MENU_NOTE_EN: "with water and coffee"
};
