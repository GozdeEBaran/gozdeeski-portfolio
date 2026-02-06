// ===================================
// Supabase Configuration - CLEAN & SAFE
// ===================================

const SUPABASE_URL = "https://eecedtxrjuvwnjmiwodc.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVlY2VkdHhyanV2d25qbWl3b2RjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAwNTgyMTEsImV4cCI6MjA4NTYzNDIxMX0.mXWPRoo3S2ZZYGgaix78ms0OXonbKId48mGTxhGiTpk";

let supabaseClient = null;

function initializeSupabase() {
  if (!supabaseClient) {
    if (!window.supabase) {
      console.error("❌ Supabase JS library not loaded");
      return null;
    }

    supabaseClient = window.supabase.createClient(
      SUPABASE_URL,
      SUPABASE_ANON_KEY,
    );

    console.log("✅ Supabase initialized successfully!");
  }

  return supabaseClient;
}

// ✅ Keep this because your script.js expects it
function isSupabaseConfigured() {
  // true only if URL/key are present AND supabase library loaded
  return Boolean(SUPABASE_URL && SUPABASE_ANON_KEY && window.supabase);
}

async function submitContactForm(formData) {
  const client = initializeSupabase();
  if (!client) {
    return { success: false, error: "Supabase not initialized" };
  }

  const payload = {
    name: formData.name,
    email: formData.email,
    message: formData.message,
    status: "new",
  };

  console.log("📨 Sending to Supabase:", payload);

  // ✅ Insert only (no select)
  const { error } = await client.from("contact_submissions").insert(payload);

  if (error) {
    console.error("❌ Supabase insert error:", error);
    return { success: false, error: error.message };
  }

  console.log("✅ Contact form submitted");
  return { success: true };
}

window.supabaseConfig = {
  initializeSupabase,
  isSupabaseConfigured, // ✅ now exists
  submitContactForm,
};

initializeSupabase();
