// ===================================
// Supabase Configuration - SIMPLIFIED!
// ===================================

const SUPABASE_URL = "https://eecedtxrjuvwnjmiwodc.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVlY2VkdHhyanV2d25qbWl3b2RjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAwNTgyMTEsImV4cCI6MjA4NTYzNDIxMX0.mXWPRoo3S2ZZYGgaix78ms0OXonbKId48mGTxhGiTpk";

// Initialize Supabase client immediately
let supabaseClient = null;

// Initialize function
function initializeSupabase() {
  if (!supabaseClient && window.supabase) {
    supabaseClient = window.supabase.createClient(
      SUPABASE_URL,
      SUPABASE_ANON_KEY,
    );
    console.log("✅ Supabase initialized successfully!");
  }
  return supabaseClient;
}

// Always return true since we have real credentials
function isSupabaseConfigured() {
  return true;
}

// Submit contact form
async function submitContactForm(formData) {
  const client = initializeSupabase();

  if (!client) {
    console.error("Supabase client not available");
    throw new Error("Database connection failed");
  }

  try {
    const payload = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      status: "new",
    };
    console.log("Sending to Supabase:", payload);

    const { data, error } = await client
      .from("contact_submissions")
      .insert([payload])
      .select();

    if (error) {
      console.error("Supabase error:", error);
      return { success: false, error: error.message };
    }

    console.log("✅ Form submitted successfully:", data);
    return { success: true, data };
  } catch (error) {
    console.error("Error submitting form:", error);
    return { success: false, error: error.message };
  }
}

// Export functions
window.supabaseConfig = {
  initializeSupabase,
  submitContactForm,
  isSupabaseConfigured,
};

// Auto-initialize when the script loads
if (window.supabase) {
  initializeSupabase();
} else {
  console.log("Waiting for Supabase library to load...");
}
