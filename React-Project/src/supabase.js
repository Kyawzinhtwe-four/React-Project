import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tmkwhewkqgsprwclcjia.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRta3doZXdrcWdzcHJ3Y2xjamlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY2NDMwNTMsImV4cCI6MjAwMjIxOTA1M30.M8psRcgt35_7U_M_sLFSl7hMwEXJHvOS7q3RTXqiJGQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
